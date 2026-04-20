/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import axios from "axios";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";


export default function CartPage() {

  

  useEffect(() => {
    const fetchcart = async () => {
      try{
      const res = await axios.get("/api/cart/all")
      console.log("respnse from the cart api ", res.data.data)
      setCart(res.data.data);
      }
      catch(error) {
        alert("world not fetch the data")
        console.log("error in the cart api ",error)
      }
      

    }
    fetchcart();
    

  },[])



  const [ cart, setCart ] = useState<any>([]);
  console.log("cart.totalprice" , cart.totalprice);
  console.log("cart data" , cart)

  const subtotal = cart.reduce(
    (acc: number, item: any) => acc + item.totalprice,0,
    
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
      <Img src={img} onClick={()=> { Router.push(`/equipments/detail?id=${pid}`)}} />

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
          <div style={{display: "flex" , gap: "30px"}}>
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

const Page = styled.div`
  background: #fafaf5;
  font-family: "Work Sans", sans-serif;
`;

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  background: #fafaf5;
  z-index: 50;
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 22px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavRight = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ListBtn = styled.button`
  background: #0d631b;
  color: white;
  padding: 10px 16px;
  border-radius: 20px;
`;

const Icon = styled.div`
  font-size: 20px;
`;

const Main = styled.main`
  padding-top: 120px;
  max-width: 1200px;
  margin: auto;
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
`;

const Subtitle = styled.p`
  color: #666;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Right = styled.div``;

const Card = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 20px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
`;

const Content = styled.div`
  flex: 1;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Qty = styled.div`
  display: flex;
  gap: 10px;
`;

const TotalPrice = styled.div`
  font-weight: bold;
  color: #0d631b;
`;

const Continue = styled.button`
  margin-top: 20px;
  color: #0d631b;
  cursor: pointer;
`;

const SummaryBox = styled.div`
  background: #eeeee9;
  padding: 20px;
  border-radius: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Divider = styled.hr`
  margin: 20px 0;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
`;

const CheckoutBtn = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 14px;
  background: linear-gradient(to right, #0d631b, #2e7d32);
  color: white;
  border-radius: 12px;
`;

const Footer = styled.footer`
  margin-top: 80px;
  padding: 40px;
  background: #eee;
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
`;