/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import axios from "axios";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/Button";
import { AppContent } from "@/context/Appcontext";
import {
  Page,
  Main,
  Header,
  Title,
  Subtitle,
  Grid,
  Left,
  Continue,
  Right,
  SummaryBox,
  Row,
  Divider,
  Total,
  CheckoutBtn,
  Card,
  Img,
  Content,
  Top,
  Bottom,
  TotalPrice,
  CloseIcon,
} from "@/pages/equipments/style/carts";

export default function CartPage() {
  const { user, setCartCount }: any = useContext(AppContent);
  useEffect(() => {
    const fetchcart = async () => {
      try {
        const res = await axios.get("/api/cart/all");
        console.log("respnse from the cart api ", res.data.data);
        setCart(res.data.data);
      } catch (error) {
        toast.error("Failed to fetch cart data.");
        console.log("error in the cart api ", error);
      }
    };
    fetchcart();
  }, []);

  const [cart, setCart] = useState<any>([]);
  console.log("cart.totalprice", cart.totalprice);
  console.log("cart data", cart);

  // ✅ Base price (price × days)
  const baseTotal = cart.reduce(
    (acc: number, item: any) => acc + item.totalprice,
    0,
  );

  // ✅ Total days
  const totalDays = cart.reduce((acc: number, item: any) => acc + item.days, 0);

  // ✅ GST
  const gst = baseTotal * 0.08;

  // ✅ BEFORE discount total
  const beforeDiscountTotal = baseTotal + gst;

  // ✅ APPLY DISCOUNT (only if > 10,000)
  const discount = beforeDiscountTotal > 10000 ? beforeDiscountTotal * 0.1 : 0;

  // ✅ FINAL AMOUNT
  const grandTotal = beforeDiscountTotal - discount;

  const handleRemove = async (cartId: string) => {
    const confirmRemove = confirm("Remove this item from cart?");
    if (!confirmRemove) return;

    try {
      const res = await axios.delete(`/api/cart/${cartId}`);

      if (res.data.success) {
        toast.success("Removed from cart");

        // ✅ Update UI instantly
        setCartCount((prev: number) => prev - 1);
        setCart((prev: any) => prev.filter((item: any) => item._id !== cartId));
      }
    } catch (error) {
      toast.error("Failed to remove item");
      console.log(error);
    }
  };

  const handleCheckout = async () => {
    if (!user?._id) {
      toast.error("Please login first");
      return;
    }

    if (cart.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    const toastId = toast.loading("Processing payment...");

    try {
      // =========================
      // 1️⃣ CREATE ORDER
      // =========================
      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: grandTotal }),
      });

      const order = await res.json();

      if (!res.ok) throw new Error("Order creation failed");

      // =========================
      // 2️⃣ RAZORPAY OPTIONS
      // =========================
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Farm Connect",
        description: "Cart Checkout",
        order_id: order.id,

        handler: async function (response: any) {
          try {
            // =========================
            // 3️⃣ VERIFY PAYMENT
            // =========================
            const verifyRes = await fetch("/api/payment/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(response),
            });

            const verifyData = await verifyRes.json();

            if (!verifyData.success) {
              toast.error("Payment verification failed ❌", { id: toastId });
              return;
            }

            toast.success("Payment successful ✅", { id: toastId });

            // =========================
            // 4️⃣ SAVE BOOKINGS (MULTIPLE ITEMS)
            // =========================
            for (const item of cart) {
              // ✅ ALWAYS calculate fresh (DON’T trust totalprice from cart)
              const itemSubtotal = item.price * item.days;

              const itemTax = itemSubtotal * 0.08;

              const itemBeforeDiscount = itemSubtotal + itemTax;

              const itemDiscount =
                itemBeforeDiscount > 10000 ? itemBeforeDiscount * 0.1 : 0;

              const itemFinal = itemBeforeDiscount - itemDiscount;

              await fetch("/api/bookings/create", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-user-id": user._id,
                },
                body: JSON.stringify({
                  name: item.name,
                  images: item.image,
                  start_date: item.start_date,
                  end_date: item.end_date,
                  price: item.price,
                  days: item.days,

                  // ✅ CLEAN VALUES
                  subtotal: Number(itemSubtotal.toFixed(2)),
                  tax: Number(itemTax.toFixed(2)),
                  totalprice: Number(itemFinal.toFixed(2)),
                }),
              });
            }

            // =========================
            // 5️⃣ CLEAR CART
            // =========================
            await fetch("/api/cart/clear", {
              method: "DELETE",
            });

            // =========================
            // 6️⃣ REDIRECT
            // =========================
            window.location.href = "/profile";
          } catch (err) {
            console.error(err);
            toast.error("Error saving booking ⚠️", { id: toastId });
          }
        },

        modal: {
          ondismiss: function () {
            toast.error("Payment cancelled ❌", { id: toastId });
          },
        },

        theme: {
          color: "#0d631b",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      toast.error("Payment failed ❌", { id: toastId });
    }
  };
  return (
    <Page>
      {/* MAIN */}
      <Main>
        {/* HEADER */}
        <Header>
          <Title>Your Cart</Title>
          <Subtitle>Review your selected equipment before checkout</Subtitle>
        </Header>

        <Grid>
          {/* LEFT SIDE */}
          <Left>
            {cart.map((item: any) => (
              <CartItem
                pid={item.productid}
                key={item._id}
                title={item.name}
                price={`₹${item.price}`}
                total={`₹${item.totalprice}`}
                startDate={item.start_date}
                endDate={item.end_date}
                days={item.days}
                img={item.image}
                item={item}
                cart={cart}
                setCart={setCart}
                onRemove={handleRemove}
              />
            ))}

            <Button onClick={() => Router.push("/equipments")}>
              ← Continue Browsing Equipment
            </Button>
          </Left>

          {/* RIGHT SIDE */}
          <Right>
            <SummaryBox>
              <h2>Order Summary</h2>

              <Row>
                <span>Base Price</span>
                <span>₹{baseTotal}</span>
              </Row>

              <Row>
                <span>Total Duration</span>
                <span>{totalDays} Days</span>
              </Row>

              <Row>
                <span>GST (8%)</span>
                <span>₹{gst.toFixed(2)}</span>
              </Row>

              {/* ✅ SHOW DISCOUNT ONLY IF APPLIED */}
              {discount > 0 && (
                <Row style={{ color: "#1b5e20", fontWeight: 600 }}>
                  <span>Discount (10%)</span>
                  <span>- ₹{discount.toFixed(2)}</span>
                </Row>
              )}

              <Divider />

              <Total>
                <span>Grand Total</span>
                <strong>₹{grandTotal.toFixed(2)}</strong>
              </Total>
              {discount > 0 && (
                <p style={{ color: "#1b5e20", fontWeight: 600 }}>
                  🎉 You saved ₹{discount.toFixed(0)} on this order!
                </p>
              )}
              <Button onClick={handleCheckout}>Proceed to Checkout</Button>
            </SummaryBox>
          </Right>
        </Grid>
      </Main>
    </Page>
  );
}

/* ================= COMPONENT ================= */

function CartItem({
  pid,
  title,
  price,
  total,
  img,
  startDate,
  endDate,
  days,
  item,
  cart,
  setCart,
  onRemove,
}: any) {
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  return (
    // `/equipments/detail?id=${item._id}
    <Card>
      <Img
        src={img}
        onClick={() => {
          Router.push(`/equipments/detail?id=${pid}`);
        }}
      />

      <Content>
        <Top>
          <div>
            <h3>{title}</h3>
            <p>
              {formatDate(startDate)} - {formatDate(endDate)} • {days} days
            </p>
          </div>
        </Top>

        <Bottom>
          <div style={{ display: "flex", gap: "30px" }}>
            <small>Daily Rate</small>
            <strong>{price}/day</strong>
          </div>

          <TotalPrice>{total}</TotalPrice>
          {/* <button onClick={() => onRemove(item._id)}>Remove</button> */}
          <CloseIcon onClick={() => alert("this is delete button")} className="material-symbols-outlined">close</CloseIcon>
        </Bottom>
      </Content>
    </Card>
  );
}
