import styled from "@emotion/styled";
import farmer1 from "../assets/farmer1.jpg";
import farmer2 from "../assets/farmer2.jpg";
import greenland from "../assets/greenland.jpg";

const Section = styled.section`
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background: #fafaf5;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
`;

const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Heading = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  color: #40493d;
  max-width: 32rem;
  margin: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TestimonialsColumn = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const Card = styled.div<{ $offset?: boolean }>`
  padding: 2rem;
  background: #f4f4ef;
  border-radius: 1.5rem;
  position: relative;

  ${(props) =>
    props.$offset &&
    `     @media (min-width:1024px){
      margin-left:3rem;
    }
  `}
`;

const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  object-fit: cover;
`;

const Name = styled.h4`
  font-weight: 700;
`;

const Role = styled.p`
  font-size: 0.875rem;
  color: #40493d;
`;

const Stars = styled.div`
  display: flex;
  margin-bottom: 1rem;
  color: #686000;
  font-family: "Material Symbols Outlined";
`;

const Quote = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.7;
`;

const ImageWrapper = styled.div`
  display: none;
  position: relative;
  min-height: 400px;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  inset: 0;
  background: #2e7d32;
  border-radius: 40px;
  transform: rotate(3deg);
  opacity: 0.2;
`;

const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
  transform: rotate(-2deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

export default function Testimonials() {
  return (
    <>
      <Section>
        {" "}
        <Container>
          <HeadingWrapper>
            <Heading>Farmer Stories</Heading>
            <SubText>
              Hear from the community members who have scaled their production
              using Farm Connect.
            </SubText>
          </HeadingWrapper>

          <Grid>
            <TestimonialsColumn>
              <Card>
                <UserRow>
                  <Avatar src={farmer1.src} />
                  <div>
                    <Name>Robert Miller</Name>
                    <Role>Grain Producer, Iowa</Role>
                  </div>
                </UserRow>

                <Stars>
                  <span>star</span>
                  <span>star</span>
                  <span>star</span>
                  <span>star</span>
                  <span>star</span>
                </Stars>

                <Quote>
                  "Farm Connect saved our harvest this year. Our main harvester
                  broke down mid-season, and we had a replacement on the field
                  within 24 hours."
                </Quote>
              </Card>

              <Card $offset>
                <UserRow>
                  <Avatar src={farmer2.src} />
                  <div>
                    <Name>Sarah Jenkins</Name>
                    <Role>Organic Farm Owner</Role>
                  </div>
                </UserRow>

                <Stars>
                  <span>star</span>
                  <span>star</span>
                  <span>star</span>
                  <span>star</span>
                  <span>star</span>
                </Stars>

                <Quote>
                  "The pricing is so much better than owning equipment
                  year-round. It's allowed us to grow our operations without the
                  massive capital debt."
                </Quote>
              </Card>
            </TestimonialsColumn>

            <ImageWrapper>
              <BackgroundShape />
              <Image src={greenland.src} />
            </ImageWrapper>
          </Grid>
        </Container>
      </Section>
    </>
  );
}
