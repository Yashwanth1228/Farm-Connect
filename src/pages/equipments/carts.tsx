/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Router from "next/router";

export default function CartPage() {
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
            <CartItem
              title="John Deere 8R 370"
              price="$450"
              total="$1,350"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuArKernXUCpsW2jcShlelE-sGSdvL3dIBnTpdc1QSd2NXo-hItzbX_eivGV6HsNaLLZWDT8sGwjCcdejk6abJOO-9p8959hwkIxAvvJt3fduSGtCAAxbabWc6L0HStxeBFKmtZd0VKI4_g_GDb3gDr8UF4C4IAzfhg4X5NWbfgHMJc4x__mqvXjarMxdglnXnDlgYegKD4RxaDugoJ-h_8CIXWFPy8ki27F9oJ5kdG15euSbFgWqADulB7vhZaIPhLhAsnnJstseVM"
            />

            <CartItem
              title="Heavy Duty Soil Cultivator"
              price="$120"
              total="$360"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuD0FYMcajAWeMGKUhuKQXXJ0k-J_rCsRKVd52bv1_QSqDRs7BQFx3NJxTZSFM-Ncm1Z3rryHQ-ZRjKOcwTTjp3z92eW77IHIWUw7ASqBnPhzflvvsBAVaWITbof7Ptg82uiPpDrRXiRpx1vZsXbrh4QCBI1U2JjNksof89ZPw2VC4t8gNdDLnjAwawnDkgE3zPdHw2bwxG7zwKZtpv5bAHFMKgxPXPvBBf-TjwBal5bnm7EhOWY-nT4cQhAF_90t71yoiW5-DB2jvI"
            />

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
                <span>$1,710</span>
              </Row>

              <Row>
                <span>Total Duration</span>
                <span>3 Days</span>
              </Row>

              <Row>
                <span>Taxes</span>
                <span>$136.80</span>
              </Row>

              <Divider />

              <Total>
                <span>Grand Total</span>
                <strong>$1,846.80</strong>
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

function CartItem({ title, price, total, img }: any) {
  return (
    <Card>
      <Img src={img} />

      <Content>
        <Top>
          <div>
            <h3>{title}</h3>
            <p>Oct 12 - Oct 15 • 3 days</p>
          </div>
        </Top>

        <Bottom>
          <div>
            <small>Daily Rate</small>
            <strong>{price}/day</strong>
          </div>

          <Qty>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </Qty>

          <TotalPrice>{total}</TotalPrice>
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
