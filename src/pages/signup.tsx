"use client";

/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useState } from "react";
import { Heading, Text } from "../components/Text";
import { useRouter } from "next/navigation";
import { Input, InputGroup } from "@/components/InputBox";
import { Button } from "@/components/Button";

/* MAIN LAYOUT */
const Main = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafaf5;
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
`;

/* LEFT SECTION */
const Left = styled.div`
  flex: 1;
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(13, 99, 27, 0.4);
`;

const LeftContent = styled.div`
  position: absolute;
  inset: 0;
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: 800;
`;

const QuoteBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
`;

/* RIGHT SECTION */
const Right = styled.div`
  flex: 1;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

const SubText = styled.p`
  color: Black;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

// const InputGroup = styled.div`
//   width: 100%;
//   margin-bottom: 25px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: none;
//   border-bottom: 2px solid #ccc;

//   &:hover {
//     border-bottom: 2px solid #0d631b;
//     transform: scale(1.01);
//     transition: all 0.5s;
//   }

//   &:focus {
//     outline: none;
//     border-color: #0d631b;
//     background: #f9f9f9;
//   }
// `;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;

// const Button = styled.button`
//   width: 100%;
//   padding: 14px;
//   background: linear-gradient(135deg, #0d631b, #2e7d32);
//   color: white;
//   border: none;
//   border-radius: 12px;
//   margin-top: 20px;
//   cursor: pointer;

//   &:hover {
//     background: #094d14;
//     transform: scale(1.02);
//   }
// `;

const Anc = styled.a`
  color: #0d631b;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;

  &:hover {
    text-decoration: underline;
    transform: scale(1.02);
    transition: all 0.2s;
  }
`;

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all the details");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully");
        // window.location.href = "/login";
        router.push("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    console.log(form);
    // router.push("/login");
  };

  return (
    <Main>
      <Wrapper>
        {/* LEFT SIDE */}
        <Left>
          <BgImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWSIju2hqzVbpkaQkAk5c0xVMxq27Yv3y7jCzd1SuJaNvev0ax7vKZn_Z8LpTB_r8-ko802XrDou5-8iL2PkALRhJbqogXOQYtzhbvEFlrkLdeaYVvUdyCK7Y6Qftllsz9weiF1CXdL3CtaD6fLOyG3xkX744ym26Sjl8NekVHFPa-TnHO4jBEdRS9sFs0cE0CCi_v81AYegzHkEGULiXQGZTEiS0lej-wMc4T8z3tmZy4tMAwB6eaFSpTu6f7tUsBqgoPfQHV3fc" />
          <Overlay />

          <LeftContent>
            <div>
              <Logo>Farm Connect</Logo>
              <p>Modern farming equipment rental platform</p>
            </div>

            <QuoteBox>
              <p>Join 500+ Local Farmers</p>
              <small>Access shared equipment today</small>
            </QuoteBox>
          </LeftContent>
        </Left>

        {/* RIGHT SIDE */}
        <Right>
          <Heading>Create an Account</Heading>
          <Text>Enter your details to start your agricultural journey.</Text>

          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup>
              <Input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                type="email"
              />
            </InputGroup>

            <Row>
              <InputGroup>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm"
                  onChange={handleChange}
                />
              </InputGroup>
            </Row>

            <Button type="submit">Create Account</Button>
          </form>

          <SubText style={{ marginTop: "20px" }}>
            Already have an account? <Anc href="/login">Login</Anc>
          </SubText>
        </Right>
      </Wrapper>
    </Main>
  );
}
