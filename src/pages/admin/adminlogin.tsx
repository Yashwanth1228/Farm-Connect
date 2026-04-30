import styled from "@emotion/styled";
import { Heading, Text } from "@/components/Text";
import { useRouter } from "next/navigation";
import { Input, InputGroup } from "@/components/InputBox";
import { Button } from "@/components/Button";
import { useState } from "react";
import axios from "axios";
import { Anc, BgImage, Left, LeftContent, Logo, Main, Overlay, QuoteBox, Right, SubText, Wrapper } from "./style/adminlogin";
import { toast } from "react-toastify";
import { useAdminLoginMutation } from "@/store/api/apiSlice";

/* MAIN LAYOUT */

/* COMPONENT */
export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [ adminLogin ] = useAdminLoginMutation();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("Please fill all the details");
      return;
    }
    try {
    //   const res = await axios.post("/api/admin/login", form, {
    //     withCredentials: true,
    //   });
    //   console.log("the response in login ", res);

    //   if (res.data.success) {
    //     alert("login successfull");

    //     router.push("/admin/dashboard");

    //     setTimeout(() => {
    //       router.refresh();
    //     }, 1000);
    //   } else {
    //     toast.error(
    //       res.data.message || "Login failed check Username or Password ❌",
    //     );
    //   }
    // } catch (error) {
    //   alert("Something went wrong");
    // }

    const response = await adminLogin({
      email: form.email,
      password: form.password,
    }).unwrap();

    console.log("response from adminLogin function", response);

    if(response.success) {
      toast.success("login successfull")
      router.push("/admin/dashboard");
      // setTimeout(() => {
      //       router.refresh();
      //     }, 1000);
    }
    else {
      toast.error(
        response.message || "Login failed check Username or Password ❌",
      );
      }

} catch (error) {
  toast.error("Something went wrong");
}

  };

  return (
    <Main>
      <Wrapper>
        {/* LEFT SIDE */}
        <Left>
          <BgImage
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
            alt="img"
          />
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
          <Heading>Welcome Back Admin</Heading>
          <Text>Login to continue your journey.</Text>

          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />
            </InputGroup>

            <InputGroup>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
              />
            </InputGroup>

            <Button type="submit">Login</Button>
          </form>
        </Right>
      </Wrapper>
    </Main>
  );
}
