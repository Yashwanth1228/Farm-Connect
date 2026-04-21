import styled from "@emotion/styled";
import farmer1 from "../assets/farmer1.jpg";
import farmer2 from "../assets/farmer2.jpg";
import greenland from "../assets/greenland.jpg";
import {
  Section3,
  Container3,
  HeadingWrapper,
  Heading,
  SubText,
  Grid3,
  TestimonialsColumn,
  Card3,
  UserRow,
  Avatar,
  Name,
  Role,
  Stars,
  Quote,
  ImageWrapper3,
  BackgroundShape,
  Image,
  Card,
} from "@/styles/home";

export default function Testimonials() {
  return (
    <>
      <Section3>
        {" "}
        <Container3>
          <HeadingWrapper>
            <Heading>Farmer Stories</Heading>
            <SubText>
              Hear from the community members who have scaled their production
              using Farm Connect.
            </SubText>
          </HeadingWrapper>

          <Grid3>
            <TestimonialsColumn>
              <Card3>
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
              </Card3>

              <Card3 offset>
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
              </Card3>
            </TestimonialsColumn>

            <ImageWrapper3>
              <BackgroundShape />
              <Image src={greenland.src} />
            </ImageWrapper3>
          </Grid3>
        </Container3>
      </Section3>
    </>
  );
}
