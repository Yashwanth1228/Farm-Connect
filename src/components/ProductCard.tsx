/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { Button } from "../components/Button";

type ProductProps = {
  name: string;
  price: number;
  image: string;
};

const Card = styled.div`
  width: 250px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  background: white;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px) scale(1.03);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  padding: 16px;
  border-radius: 16px;

  &:hover {
    transform: scale(1.01);
  }
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Price = styled.p`
  color: #0d631b;
  font-weight: bold;
  margin-bottom: 12px;
`;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background: #0d631b;
//   color: white;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;

//   &:hover {
//     background: #094d14;
//   }
// `;

export default function ProductCard({ name, price, image }: ProductProps) {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Content>
        <Title>{name}</Title>
        <Price>₹{price}/day</Price>
        <Button>Rent Now</Button>
      </Content>
    </Card>
  );
}
