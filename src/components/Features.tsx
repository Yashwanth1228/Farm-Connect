import {
  Section1,
  Container1,
  Grid,
  Card,
  IconBox,
  Icon,
  Title1,
  Description1,
} from "@/styles/home";

export default function Features() {
  return (
    <Section1>
      <Container1>
        <Grid>
          <Card>
            <IconBox color="#2e7d32">
              <Icon>event_available</Icon>
            </IconBox>

            <Title1>Easy Booking</Title1>

            <Description1>
              Seamless scheduling through our digital platform. Secure your
              machinery in seconds with just a few clicks.
            </Description1>
          </Card>

          <Card>
            <IconBox color="#9c27b0">
              <Icon>payments</Icon>
            </IconBox>

            <Title1>Affordable Pricing</Title1>

            <Description1>
              Competitive rates designed for farms of all sizes. No hidden fees,
              just honest transparent pricing.
            </Description1>
          </Card>

          <Card>
            <IconBox color="#1976d2">
              <Icon>verified_user</Icon>
            </IconBox>

            <Title1>Trusted by Farmers</Title1>

            <Description1>
              Join thousands of local producers who rely on our curated fleet of
              top-tier agricultural instruments.
            </Description1>
          </Card>
        </Grid>
      </Container1>
    </Section1>
  );
}
