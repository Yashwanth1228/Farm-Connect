/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useState } from "react";

/* MAIN BACKGROUND */
const Page = styled.div`
  min-height: 100vh;
  background: #fafaf5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

/* WRAPPER */
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 800px;
  display: flex;
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 20px 40px rgba(26, 28, 25, 0.06);
`;

/* LEFT SIDE */
const Left = styled.div`
  flex: 1;
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(13, 99, 27, 0.35);
  backdrop-filter: brightness(0.8);
`;

const LeftContent = styled.div`
  position: absolute;
  inset: 0;
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

const Logo = styled.h1`
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -1px;
`;

const Description = styled.p`
  font-size: 16px;
  max-width: 320px;
  opacity: 0.9;
`;

const CardInfo = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

const Badge = styled.span`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
`;

/* RIGHT SIDE */
const Right = styled.div`
  flex: 1;
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 8px;
`;

const SubText = styled.p`
  color: #666;
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InputGroup = styled.div``;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #ddd;
  padding: 10px 4px;
  background: #f4f4ef;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-bottom: 2px solid #0d631b;
    background: #fff;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;

const Terms = styled.div`
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: #666;
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #0d631b, #2e7d32);
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const Footer = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 14px;
`;

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(form);
  };

  return (
    <Page>
      <Wrapper>
        {/* LEFT */}
        <Left>
          <ImageBg src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWSIju2hqzVbpkaQkAk5c0xVMxq27Yv3y7jCzd1SuJaNvev0ax7vKZn_Z8LpTB_r8-ko802XrDou5-8iL2PkALRhJbqogXOQYtzhbvEFlrkLdeaYVvUdyCK7Y6Qftllsz9weiF1CXdL3CtaD6fLOyG3xkX744ym26Sjl8NekVHFPa-TnHO4jBEdRS9sFs0cE0CCi_v81AYegzHkEGULiXQGZTEiS0lej-wMc4T8z3tmZy4tMAwB6eaFSpTu6f7tUsBqgoPfQHV3fc" />
          <Overlay />

          <LeftContent>
            <div>
              <Logo>Farm Connect</Logo>
              <Description>
                Cultivating the future of agriculture through modern equipment.
              </Description>
            </div>

            <CardInfo>
              <p>Join 500+ Local Farmers</p>
              <small>Access shared equipment today.</small>

              <BadgeRow>
                <Badge>Trusted</Badge>
                <Badge>Eco</Badge>
              </BadgeRow>
            </CardInfo>
          </LeftContent>
        </Left>

        {/* RIGHT */}
        <Right>
          <Heading>Create an Account</Heading>
          <SubText>
            Enter your details to start your agricultural journey.
          </SubText>

          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Full Name</Label>
              <Input name="name" onChange={handleChange} />
            </InputGroup>

            <InputGroup>
              <Label>Email</Label>
              <Input name="email" onChange={handleChange} />
            </InputGroup>

            <Row>
              <InputGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup>
                <Label>Confirm</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                />
              </InputGroup>
            </Row>

            <Terms>
              <input type="checkbox" />
              <span>I agree to terms</span>
            </Terms>

            <Button>Create Account</Button>
          </Form>

          <Footer>
            Already have an account? <a href="/login">Login</a>
          </Footer>
        </Right>
      </Wrapper>
    </Page>
  );
}
