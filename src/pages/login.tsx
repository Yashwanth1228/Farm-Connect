import styled from "@emotion/styled";
import { useState } from "react";
import { Heading, Text } from "@/components/Text";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useLoginMutation } from "@/store/api/apiSlice";
import toast from "react-hot-toast";
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
} from "@/styles/login";

/* MAIN LAYOUT */

/* COMPONENT */
export default function Login() {
  const router = useRouter();
  const [Login] = useLoginMutation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast("Please fill all the details");
      return;
    }

    const toastId = toast.loading("Logging in...");
    try {
      // const res = await fetch("/api/login", {
      // method: "POST",
      // headers: {
      //     "Content-Type": "application/json",
      // },
      // body: JSON.stringify({
      //     email: form.email,
      //     password: form.password,
      // }),
      // });

      // const data = await res.json();

      const res = await axios.post("/api/login", form, {
        withCredentials: true,
      });
      console.log("the response in login ", res);

      if (res.data.success) {
        toast.success("Login successful ✅", { id: toastId });
        router.push("/");
        setTimeout(() => {
          router.refresh();
        }, 1000);
      } else {
        toast.error(
          res.data.message || "Login failed check Username or Password ❌",
          { id: toastId },
        );
      }

      //   const response = await Login({
      //     email: form.email,
      //     password: form.password,
      //   });
      //   console.log("response from Login function", response);
    } catch (error) {
      toast.error("Login failed ❌", { id: toastId });
    }

    console.log(form);
  };

  return (
    <Main>
      <Wrapper>
        {/* LEFT SIDE */}
        <Left>
          <BgImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuANv63kFRCgRylBKFRdB4xrMEToUfwVSjMpZfrvbXmQf0WKgyH_Z34YVTKPPlAowNMovQumITym8nRSFnCMkhdy3F2izESHCO91sRpsuZ-uSWK752CYMhH7ilz0yfmstOABtnYXeUUg3cSBFVPQQvo7WK3cMNNNt71I3cKh2ieiknZNNY-erZSCKNT2ijNBLAUlPqbVlaL51FCWY8Ld8w5j5L10bbPgUsSynAUeFxCthyfUAvcCxqN_U0E_-U6yVgr1k92eXjKiVB0" />
          <Overlay />

          <LeftContent>
            <div>
              <Logo>Farm Connect</Logo>
              <p>Modern farming equipment rental platform</p>
            </div>

            <QuoteBox>
              <p>Welcome back!</p>
              <small>Access your rented equipment easily</small>
            </QuoteBox>
          </LeftContent>
        </Left>

        {/* RIGHT SIDE */}
        <Right>
          <Heading>Welcome Back</Heading>
          <Text>Login to continue your journey.</Text>

          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </InputGroup>

            <Button type="submit">Login</Button>
          </form>

          <SubText style={{ marginTop: "20px" }}>
            Don't have an account? <Anc href="/signup">Signup</Anc>
          </SubText>
        </Right>
      </Wrapper>
    </Main>
  );
}
