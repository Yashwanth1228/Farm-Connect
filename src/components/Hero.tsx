import styled from "@emotion/styled";
import tractor from "../assets/tractor.jpg";
import { Router, useRouter } from "next/router";
import {
  Section,
  BackgroundWrapper,
  BackgroundImage,
  GradientOverlay,
  Container,
  Content,
  Badge,
  Title,
  Highlight,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "../styles/home";

export default function Hero() {
  const router = useRouter();
  return (
    <Section>
      <BackgroundWrapper>
        <BackgroundImage
          src={tractor.src}
          alt="Farm field with tractor at sunrise"
        />
        <GradientOverlay />
      </BackgroundWrapper>

      <Container>
        <Content>
          <Badge>ESTABLISHED 2026</Badge>

          <Title>
            Rent Farm <br />
            <Highlight>Equipment</Highlight> Easily
          </Title>

          <Description>
            Affordable and reliable machines for modern farming. Cultivating the
            future through accessible industrial power.
          </Description>

          <ButtonGroup>
            <PrimaryButton
              onClick={() => {
                router.push("/equipments");
              }}
            >
              Explore Equipment
            </PrimaryButton>
            <SecondaryButton>Get Started</SecondaryButton>
          </ButtonGroup>
        </Content>
      </Container>
    </Section>
  );
}
