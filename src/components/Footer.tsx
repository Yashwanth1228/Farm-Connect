import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 3rem 1.5rem;
  margin-top: auto;
  background: #f5f5f4;
  border-top: 1px solid #e7e5e4;
`;

const Grid = styled.div`
  max-width: 1120px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const BrandTitle = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: #14532d;
  margin-bottom: 1rem;
  display: block;
`;

const Description = styled.p`
  color: #78716c;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.span`
  color: #a8a29e;
  cursor: pointer;
  font-family: "Material Symbols Outlined";

  &:hover {
    color: #16a34a;
  }
`;

const ColumnTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a8a29e;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Link = styled.a`
  font-size: 0.875rem;
  color: #78716c;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: rgba(34, 197, 94, 0.3);

  &:hover {
    color: #16a34a;
  }
`;

const NewsletterText = styled.p`
  color: #78716c;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const InputRow = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 0.875rem;
  border: none;
  background: #e7e5e4;
  border-radius: 0.75rem 0 0 0.75rem;
  outline: none;
`;

const Button = styled.button`
  padding: 0 1rem;
  background: #15803d;
  color: white;
  border: none;
  border-radius: 0 0.75rem 0.75rem 0;
  font-family: "Material Symbols Outlined";
  cursor: pointer;
`;

const BottomBar = styled.div`
  max-width: 1120px;
  margin: auto;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e7e5e4;
  text-align: center;
  font-size: 0.875rem;
  color: #a8a29e;
`;

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
