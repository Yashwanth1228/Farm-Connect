import styled from "@emotion/styled";

const Section = styled.section`
  padding: 6rem 0;
  background: #fafaf5;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 0 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 24px;
  background: #f4f4ef;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  }
`;

const IconBox = styled.div<{ color: string }>`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const Icon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 32px;
  color: white;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  color: #40493d;
  line-height: 1.6;
`;

export default function Features() {
  return (
    <Section>
      <Container>
        <Grid>
          <Card>
            <IconBox color="#2e7d32">
              <Icon>event_available</Icon>
            </IconBox>

            <Title>Easy Booking</Title>

            <Description>
              Seamless scheduling through our digital platform. Secure your
              machinery in seconds with just a few clicks.
            </Description>
          </Card>

          <Card>
            <IconBox color="#9c27b0">
              <Icon>payments</Icon>
            </IconBox>

            <Title>Affordable Pricing</Title>

            <Description>
              Competitive rates designed for farms of all sizes. No hidden fees,
              just honest transparent pricing.
            </Description>
          </Card>

          <Card>
            <IconBox color="#1976d2">
              <Icon>verified_user</Icon>
            </IconBox>

            <Title>Trusted by Farmers</Title>

            <Description>
              Join thousands of local producers who rely on our curated fleet of
              top-tier agricultural instruments.
            </Description>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}
