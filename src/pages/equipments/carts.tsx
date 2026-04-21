/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import axios from "axios";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";
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
} from "@/pages/equipments/style/carts";

export default function CartPage() {
  useEffect(() => {
    const fetchcart = async () => {
      try {
        const res = await axios.get("/api/cart/all");
        console.log("respnse from the cart api ", res.data.data);
        setCart(res.data.data);
      } catch (error) {
        alert("world not fetch the data");
        console.log("error in the cart api ", error);
      }
    };
    fetchcart();
  }, []);

  const [cart, setCart] = useState<any>([]);
  console.log("cart.totalprice", cart.totalprice);
  console.log("cart data", cart);

  const subtotal = cart.reduce(
    (acc: number, item: any) => acc + item.totalprice,
    0,
  );

  console.log("sub total", subtotal);

  const totalDays = cart.reduce((acc: number, item: any) => acc + item.days, 0);

  const tax = subtotal * 0.08;
  const grandTotal = subtotal + tax;

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
                key={item.id}
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
              />
            ))}

            <Continue onClick={() => Router.push("/equipments")}>
              ← Continue Browsing Equipment
            </Continue>
          </Left>

          {/* RIGHT SIDE */}
          <Right>
            <SummaryBox>
              <h2>Order Summary</h2>

              <Row>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </Row>

              <Row>
                <span>Total Duration</span>
                <span>{totalDays} Days</span>
              </Row>

              <Row>
                <span>Taxes</span>
                <span>₹{tax.toFixed(2)}</span>
              </Row>

              <Divider />

              <Total>
                <span>Grand Total</span>
                <strong>₹{grandTotal.toFixed(2)}</strong>
              </Total>

              <CheckoutBtn>Proceed to Checkout</CheckoutBtn>
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
          {/* <button
            onClick={() => {
              const updated = cart.filter((c: any) => c.id !== item.id);
              setCart(updated);
            }}
          >
            Remove
          </button> */}
        </Bottom>
      </Content>
    </Card>
  );
}

/* ================= STYLES ================= */
