import styled from "@emotion/styled";

export const Page = styled.div`
  background: #fafaf5;
  font-family: "Work Sans", sans-serif;
`;



export const Main = styled.main`
  padding-top: 120px;
  max-width: 1200px;
  margin: auto;
`;

export const Header = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
`;

export const Subtitle = styled.p`
  color: #666;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

export const Right = styled.div``;

export const Card = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 20px;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Qty = styled.div`
  display: flex;
  gap: 10px;
`;

export const TotalPrice = styled.div`
  font-weight: bold;
  color: #0d631b;
`;

export const Continue = styled.button`
  margin-top: 20px;
  color: #0d631b;
  cursor: pointer;
`;

export const SummaryBox = styled.div`
  background: #eeeee9;
  padding: 20px;
  border-radius: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Divider = styled.hr`
  margin: 20px 0;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 14px;
  background: linear-gradient(to right, #0d631b, #2e7d32);
  color: white;
  border-radius: 12px;
`;