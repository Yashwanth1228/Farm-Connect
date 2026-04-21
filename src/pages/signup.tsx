import styled from "@emotion/styled";
import { useState } from "react";
import { Heading, Text } from "@/components/Text";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Main,
  Wrapper,
  Left,
  BgImage,
  Overlay,
  LeftContent,
  Logo,
  QuoteBox,
  Right,
  InputGroup,
  Input,
  Button,
  Anc,
  SubText,
  Row,
} from "@/styles/signup";

/* MAIN LAYOUT */

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
      // const res = await fetch("/api/signup", {
      // method: "POST",
      // headers: {
      //     "Content-Type": "application/json",
      // },
      // body: JSON.stringify(form),
      // });

      const res = await axios.post("/api/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      console.log("Response.data", res.data);
      console.log("response", res);

      if (res.data.success) {
        alert("Account created successfully");
        router.push("/login");
      } else {
        alert("Failed to create account");
      }

      // const data = await res.json();

      // if (res.ok) {
      // alert("Account created successfully");
      // // window.location.href = "/login";
      // router.push("/login");
      // } else {
      // alert("Failed to create account");
      // }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    // console.log(form);
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
