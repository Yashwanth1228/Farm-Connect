import styled from "@emotion/styled";
import tractor from "../assets/tractor.jpg";

const Section = styled.section`
  position: relative;
  min-height: 870px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(75%);
`;

const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255),
    rgba(0, 0, 0, 0.3),
    transparent
  );
`;

const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1120px;
  margin: auto;
  padding: 5rem 1.5rem;
  width: 100%;
`;

const Content = styled.div`
  max-width: 32rem;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 1.5rem;
  background: #d1fae5;
  background-color: #f6be00;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const Highlight = styled.span`
  color: #2e7d32;
`;

const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 32rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.button`
  padding: 16px 32px;
  background: linear-gradient(135deg, #2e7d32, #66bb6a);
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SecondaryButton = styled.button`
  padding: 16px 32px;
  background: #e5e7eb;
  border: none;
  border-radius: 999px;
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function Hero() {
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
            <PrimaryButton>Explore Equipment</PrimaryButton>
            <SecondaryButton>Get Started</SecondaryButton>
          </ButtonGroup>
        </Content>
      </Container>
    </Section>
  );
}
