import styled from "@emotion/styled";
import greentractor from "../assets/greentractor.jpg";
import harvester from "../assets/harvester.jpg";
import plough from "../assets/plough.jpg";

const Section = styled.section`
  padding: 6rem 0;
  background: #f3f3ee;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 0 1.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #40493d;
  max-width: 400px;
`;

const ViewEquipment = styled.a`
  display: none;
  align-items: center;
  font-weight: bold;
  color: #2e7d32;
  background: none;
  border: none;
  cursor: pointer;

  span {
    margin-left: 6px;
    transition: transform 0.2s;
    font-family: "Material Symbols Outlined";
  }

  &:hover span {
    transform: translateX(4px);
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.15);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ImageWrapper = styled.div`
  height: 260px;
  overflow: hidden;
  position: relative;
`;

const EquipmentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s;
`;

const Badge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(210, 255, 210, 0.9);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: bold;
`;

const CardBody = styled.div`
  padding: 2rem;
`;

const EquipmentName = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Category = styled.p`
  font-size: 0.8rem;
  color: #40493d;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  span {
    font-size: 1.6rem;
    font-weight: 800;
    color: #2e7d32;
  }

  small {
    color: #40493d;
  }
`;

const AddButton = styled.button`
  padding: 10px;
  border-radius: 50%;
  border: none;
  background: #f1f1f1;
  cursor: pointer;
  transition: 0.3s;

  span {
    font-family: "Material Symbols Outlined";
  }

  &:hover {
    background: #2e7d32;
    color: white;
  }
`;

export default function FeaturedEquipment() {
  return (
    <Section>
      <Container>
        <Header>
          <div>
            <Title>Featured Equipment</Title>
            <Subtitle>
              The most reliable machines in our fleet, ready for your next
              harvest.
            </Subtitle>
          </div>

          <ViewEquipment href="/equipment">
            View All
            <span>arrow_forward</span>
          </ViewEquipment>
        </Header>

        <Grid>
          <Card>
            <ImageWrapper>
              <EquipmentImage src={greentractor.src} alt="John Deere Tractor" />
              <Badge>IN STOCK</Badge>
            </ImageWrapper>

            <CardBody>
              <EquipmentName>John Deere 7R 350</EquipmentName>
              <Category>Heavy Duty Tractor</Category>

              <Footer>
                <Price>
                  <span>$450</span> <small>/ day</small>
                </Price>

                <AddButton>
                  <span>add</span>
                </AddButton>
              </Footer>
            </CardBody>
          </Card>

          <Card>
            <ImageWrapper>
              <EquipmentImage src={harvester.src} alt="Combine Harvester" />
              <Badge>IN STOCK</Badge>
            </ImageWrapper>

            <CardBody>
              <EquipmentName>Claas Lexion 8900</EquipmentName>
              <Category>Combine Harvester</Category>

              <Footer>
                <Price>
                  <span>$1,200</span> <small>/ day</small>
                </Price>

                <AddButton>
                  <span>add</span>
                </AddButton>
              </Footer>
            </CardBody>
          </Card>

          <Card>
            <ImageWrapper>
              <EquipmentImage src={plough.src} alt="Reversible Plough" />
              <Badge>IN STOCK</Badge>
            </ImageWrapper>

            <CardBody>
              <EquipmentName>Maschio Gaspardo</EquipmentName>
              <Category>Reversible Plough</Category>

              <Footer>
                <Price>
                  <span>$180</span> <small>/ day</small>
                </Price>

                <AddButton>
                  <span>add</span>
                </AddButton>
              </Footer>
            </CardBody>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}
