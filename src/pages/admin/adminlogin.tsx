import styled from "@emotion/styled";
import { Heading, Text } from "@/components/Text";
import { useRouter } from "next/navigation";
import { Input, InputGroup } from "@/components/InputBox";
import { Button } from "@/components/Button";
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
  Anc,
  SubText,
} from "@/pages/admin/style/adminlogin";

/* MAIN LAYOUT */

/* COMPONENT */
export default function Login() {
  const router = useRouter();

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
          <Heading>Welcome Back</Heading>
          <Text>Login to continue your journey.</Text>

          <form>
            <InputGroup>
              <Input type="email" name="email" placeholder="Email" />
            </InputGroup>

            <InputGroup>
              <Input type="password" name="password" placeholder="Password" />
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
