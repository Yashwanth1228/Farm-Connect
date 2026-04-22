import styled from "@emotion/styled";

import {
  FooterWrapper,
  Grid,
  BrandTitle,
  Description,
  SocialRow,
  SocialIcon,
  ColumnTitle,
  List,
  Link,
  NewsletterText,
  InputRow,
  Input,
  Button,
  BottomBar,
} from "@/components/style/footer";

export default function Footer() {
  return (
    <>
      <FooterWrapper>
        {" "}
        <Grid>
          <div>
            <BrandTitle>Farm Connect</BrandTitle>

            <Description>
              Cultivating the future of agriculture through accessible
              industrial power and community-driven solutions.
            </Description>

            <SocialRow>
              <SocialIcon>social_leaderboard</SocialIcon>
              <SocialIcon>share</SocialIcon>
            </SocialRow>
          </div>

          <div>
            <ColumnTitle>Quick Links</ColumnTitle>

            <List>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Rental Agreement</Link>
              </li>
              <li>
                <Link href="#">Sitemap</Link>
              </li>
            </List>
          </div>

          <div>
            <ColumnTitle>Equipment</ColumnTitle>

            <List>
              <li>
                <Link href="#">Tractors</Link>
              </li>
              <li>
                <Link href="#">Harvesters</Link>
              </li>
              <li>
                <Link href="#">Irrigation</Link>
              </li>
              <li>
                <Link href="#">Attachments</Link>
              </li>
            </List>
          </div>

          <div>
            <ColumnTitle>Newsletter</ColumnTitle>

            <NewsletterText>
              Get the latest seasonal tips and equipment alerts.
            </NewsletterText>

            <InputRow>
              <Input type="email" placeholder="Email address" />
              <Button>send</Button>
            </InputRow>
          </div>
        </Grid>
        <BottomBar>
          © 2026 Farm Connect. Cultivating the future of agriculture.
        </BottomBar>
      </FooterWrapper>
    </>
  );
}
