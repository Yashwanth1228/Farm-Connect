import styled from "@emotion/styled";
import { useState } from "react";
import { Heading, Text } from "@/components/Text";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useLoginMutation } from "@/store/api/apiSlice";

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
  max-width: 1100px; /* ✅ SAME AS SIGNUP */
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
  margin-top: 50px;
`;

const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 25px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;

  &:focus {
    outline: none;
    border-color: #0d631b;
    background: #f9f9f9;
  }

  &:hover {
    border-bottom: 2px solid #0d631b;
    transform: scale(1.01);
    transition: all 0.5s;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #0d631b, #2e7d32);
  color: white;
  border: none;
  border-radius: 12px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background: #094d14;
    transform: scale(1.02);
  }
`;

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

const SubText = styled.p`
  color: Black;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

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
      alert("Please fill all the details");
      return;
    }
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
        alert("login successfull");
        router.push("/");
        setTimeout(() => {
          router.refresh();
        }, 1000);
      } else {
        alert("would not login ");
      }

      //   const response = await Login({
      //     email: form.email,
      //     password: form.password,
      //   });
      //   console.log("response from Login function", response);
    } catch (error) {
      alert("Something went wrong");
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
