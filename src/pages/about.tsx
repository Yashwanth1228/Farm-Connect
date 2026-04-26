import React from "react";
import Navbar from "@/components/Navbar";
// import {
//   ActiveLink,
//   Badge,
//   BlurCircle,
//   BrandName,
//   BrandSection,
//   BrandText,
//   ButtonGroup,
//   CTAContainer,
//   CTAContent,
//   CTADescription,
//   CTASection,
//   CTATitle,
//   Card,
//   CardTitle,
//   Column,
//   ColumnTitle,
//   Container,
//   Content,
//   Description,
//   Divider,
//   FooterContainer,
//   FooterWrapper,
//   Glow,
//   Grid,
//   Header,
//   HeroContainer,
//   HeroSection,
//   HeroTitle,
//   Highlight,
//   Icon,
//   IconBox,
//   IconWrapper,
//   ImageCard,
//   ImageGrid,
//   ImageWrapper,
//   ImgWrapper,
//   List,
//   ListItem,
//   ParagraphGroup,
//   PrimaryButton,
//   SecondaryButton,
//   Section,
//   StoryContainer,
//   StoryGrid,
//   StorySection,
//   StoryTitle,
//   StyledLink,
//   Text,
//   TextContent,
//   Title,
//   ValueCard,
//   ValueContainer,
//   ValueDescription,
//   ValueGrid,
//   ValueSection,
//   ValueTitle,
//   footerLinks,
//   values,
// } from "@/styles/about";

import {
  ActiveLink,
  Badge,
  BlurCircle,
  BrandName,
  BrandSection,
  BrandText,
  ButtonGroup,
  CTAContainer,
  CTAContent,
  CTADescription,
  CTASection,
  CTATitle,
  Card,
  CardTitle,
  Column,
  ColumnTitle,
  Container,
  Content,
  Description,
  Divider,
  FooterContainer,
  FooterWrapper,
  Glow,
  Grid,
  Header,
  HeroContainer,
  HeroSection,
  HeroTitle,
  Highlight,
  Icon,
  IconBox,
  IconWrapper,
  ImageCard,
  ImageGrid,
  ImageWrapper,
  ImgWrapper,
  List,
  ListItem,
  ParagraphGroup,
  PrimaryButton,
  SecondaryButton,
  Section,
  StoryContainer,
  StoryGrid,
  StorySection,
  StoryTitle,
  StyledLink,
  Text,
  TextContent,
  Title,
  ValueCard,
  ValueContainer,
  ValueDescription,
  ValueGrid,
  ValueSection,
  ValueTitle,
  footerLinks,
  values,
} from "@/styles/about";
import Image from "next/image";
import farmer from "@/assets/farmer.jpg";
import farmerlabel from "@/assets/farmerlabtel.jpg";
import farmertractor from "@/assets/farmertractor.jpg";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

function about() {
  const router = useRouter();
  return (
    <>
      {/* <Navbar /> */}

      {/* hero section */}

      <HeroSection>
        <HeroContainer>
          <Content>
            <Badge>Our Purpose</Badge>

            <HeroTitle>
              Empowering the <span>hands</span> that feed the world.
            </HeroTitle>

            <Description>
              At Farm Connect, we merge heritage with high-tech. We believe
              every farmer deserves access to tools that cultivate progress and
              sustainability.
            </Description>
          </Content>

          <ImageWrapper>
            <Glow />

            <ImageCard>
              <Image
                src={farmer}
                alt="Farmer portrait"
                width={500}
                height={500}
                style={{ width: "100%", height: "500px", objectFit: "cover" }}
              />
            </ImageCard>
          </ImageWrapper>
        </HeroContainer>
      </HeroSection>

      {/* Mission Vision */}

      <Section>
        <Container>
          <Grid>
            <Card>
              <IconBox>🚀</IconBox>

              <Title>Our Mission</Title>

              <Text>
                To democratize agricultural productivity by bridging the gap
                between small-scale farmers and modern technology.
              </Text>
            </Card>

            <Card style={{ borderBottom: "4px solid #b9ad3a" }}>
              <IconBox style={{ background: "#b9ad3a", color: "#1f1c00" }}>
                👁
              </IconBox>

              <Title>Our Vision</Title>

              <Text>
                To create a global agrarian ecosystem where resource sharing is
                the standard and every acre reaches its highest potential.
              </Text>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* story section */}

      <StorySection>
        <StoryContainer>
          <StoryGrid>
            <ImageGrid>
              <ImgWrapper>
                <Image
                  src={farmerlabel}
                  alt="Farmer using tablet in greenhouse"
                  width={400}
                  height={320}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </ImgWrapper>

              <ImgWrapper offset>
                <Image
                  src={farmertractor}
                  alt="Modern tractor in green field"
                  width={400}
                  height={320}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </ImgWrapper>
            </ImageGrid>

            <TextContent>
              <StoryTitle>The Seeds of an Idea</StoryTitle>

              <ParagraphGroup>
                <p>
                  Farm Connect didn't start in a boardroom; it started in a
                  field. In the summer of 2021, our founders witnessed a
                  neighboring farmer struggling to harvest his crop while a
                  multi-million dollar combine sat idle just two miles away.
                </p>

                <p>
                  The problem wasn't a lack of machinery; it was a lack of
                  connection. We realized that the prohibitive cost of modern
                  agricultural technology was stifling the growth of the family
                  farm.
                </p>

                <Highlight>
                  We asked: Why can't we share the strength?
                </Highlight>

                <p>
                  Since then, we've evolved into a platform that allows farmers
                  to rent, share, and collaborate, ensuring that no machine sits
                  idle while there is earth to be tilled.
                </p>
              </ParagraphGroup>
            </TextContent>
          </StoryGrid>
        </StoryContainer>
      </StorySection>

      {/* values section */}

      <ValueSection>
        <ValueContainer>
          <Header>
            <ValueTitle>Values that Root Us</ValueTitle>
            <Divider />
          </Header>

          <ValueGrid>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <IconWrapper>
                  <Icon className="material-symbols-outlined">
                    {value.icon}
                  </Icon>
                </IconWrapper>

                <CardTitle>{value.title}</CardTitle>

                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValueGrid>
        </ValueContainer>
      </ValueSection>

      {/* CTA section */}

      <CTASection>
        <CTAContainer>
          <BlurCircle />

          <CTAContent>
            <CTATitle>Ready to grow with us?</CTATitle>

            <CTADescription>
              Join thousands of farmers already optimizing their harvest through
              the Farm Connect network.
            </CTADescription>

            <ButtonGroup>
              <PrimaryButton onClick={() => router.push("/equipments")}>
                Explore Equipment
              </PrimaryButton>

              <SecondaryButton onClick={() => router.push("/contact")}>
                Learn More
              </SecondaryButton>
            </ButtonGroup>
          </CTAContent>
        </CTAContainer>
      </CTASection>

      {/* footer is included in app.tsx */}
    </>
  );
}

export default about;
