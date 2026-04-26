import greentractor from "../assets/greentractor.jpg";
import harvester from "../assets/harvester.jpg";
import plough from "../assets/plough.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
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

type Equipment = {
  name: string;
  type: string;
  price: number;
  images: string[];
};

export default function FeaturedEquipment() {
  const router = useRouter();
  const [equipments, setEquipments] = useState<Equipment[]>([]);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const res = await axios.get("/api/equipment/all");

        // 🔥 ADD THIS LINE HERE
        console.log("API DATA:", res.data);

        setEquipments(res.data.data); // we will fix this next
      } catch (err) {
        console.log("Error fetching equipments", err);
      }
    };

    fetchEquipments();
  }, []);
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

        {Array.isArray(equipments) && equipments.length > 0 ? (
          <Grid2>
            {equipments.slice(0, 3).map((item: any, index) => (
              <Card2
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/equipments/detail?id=${item._id}`);
                }}
              >
                <ImageWrapper>
                  <EquipmentImage
                    src={item.images?.[0] || "/images/fallback.png"}
                    alt={item.name}
                  />
                </ImageWrapper>

                <CardBody>
                  <EquipmentName>{item.name}</EquipmentName>
                  <Category>{item.type}</Category>

                  <Footer>
                    <Price>
                      <span>₹{item.price}</span> <small>/ day</small>
                    </Price>

                    {/* <AddButton>
                      <span>add</span>
                    </AddButton> */}
                  </Footer>
                </CardBody>
              </Card2>
            ))}
          </Grid2>
        ) : (
          <p>Loading equipment...</p>
        )}
      </Container2>
    </Section2>
  );
}
