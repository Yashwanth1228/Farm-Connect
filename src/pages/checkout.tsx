import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function CheckoutPage() {
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();

  const subtotal = cart.reduce(
    (acc: number, item: any) => acc + (item.totalPrice || 0),
    0,
  );

  const tax = subtotal * 0.08;
  const grandTotal = subtotal + tax;

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });

  const handleConfirmBooking = async () => {
    console.log("BUTTON CLICKED");
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: user.email,
          items: cart,
          subtotal,
          tax,
          grandTotal,
        }),
      });

      console.log("Fetching done", res);

      const data = await res.json();

      if (res.ok) {
        alert("Booking Confirmed ✅");
        setCart([]);

        router.push("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };
  return (
    <div style={{ padding: "30px", marginTop: "90px" }}>
      <h1>checkout</h1>
      <div>
        {cart.map((item: any) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>
              {formatDate(item.startDate)} - {formatDate(item.endDate)} •{" "}
              {item.days} days
            </p>
            <p>₹{item.totalPrice}</p>
          </div>
        ))}
      </div>
      <hr />

      <div>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Tax: ₹{tax.toFixed(2)}</p>
        <h3>Total: ₹{grandTotal.toFixed(2)}</h3>
      </div>

      <button onClick={handleConfirmBooking}>Confirm Booking</button>
    </div>
  );
}
