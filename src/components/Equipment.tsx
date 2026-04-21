import greentractor from "../assets/greentractor.jpg";
import harvester from "../assets/harvester.jpg";
import plough from "../assets/plough.jpg";
import {
  Section2,
  Container2,
  Header,
  Title2,
  Subtitle,
  ViewEquipment,
  Grid2,
  ImageWrapper,
  Card2,
  EquipmentImage,
  CardBody,
  EquipmentName,
  Badge2,
  Category,
  Footer,
  Price,
  AddButton,
} from "@/styles/home";

export default function FeaturedEquipment() {
  return (
    <Section2>
      <Container2>
        <Header>
          <div>
            <Title2>Featured Equipment</Title2>
            <Subtitle>
              The most reliable machines in our fleet, ready for your next
              harvest.
            </Subtitle>
          </div>

          <ViewEquipment href="/equipments">
            View All
            <span>arrow_forward</span>
          </ViewEquipment>
        </Header>

        <Grid2>
          <Card2>
            <ImageWrapper>
              <EquipmentImage src={greentractor.src} alt="John Deere Tractor" />
              <Badge2>IN STOCK</Badge2>
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
          </Card2>

          <Card2>
            <ImageWrapper>
              <EquipmentImage src={harvester.src} alt="Combine Harvester" />
              <Badge2>IN STOCK</Badge2>
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
          </Card2>

          <Card2>
            <ImageWrapper>
              <EquipmentImage src={plough.src} alt="Reversible Plough" />
              <Badge2>IN STOCK</Badge2>
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
          </Card2>
        </Grid2>
      </Container2>
    </Section2>
  );
}
