import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
// import { equipments, Equipment } from "@/data/equipmentData";
import axios from "axios";
import {
  useGetEquipmentsQuery,
  useLazyGetEquipmentsQuery,
} from "@/store/api/apiSlice";

import {
  Container,
  Main,
  Layout,
  Sidebar,
  FilterBox,
  FilterTitle,
  Section,
  SectionTitle,
  Range,
  RangeText,
  Label,
  Content,
  Title,
  Subtitle,
  Grid,
  Card,
  CardBody,
  CardFooter,
  CardImage,
  CardTitle,
  Price,
  Pagination,
  PageBtn,
  ActivePage,
  Desc,
} from "@/pages/equipments/style/index";

type Equipment = {
  id: number;
  _id: string;
  name: string;
  type: string;
  price: number;
  images: string;
  available: boolean;
  description: string;
  enginepower: string;
};

export default function EquipmentPage() {
  // const { data, error, isLoading } =  useGetEquipmentsQuery()
  const [GetEquipments, { isLoading }] = useLazyGetEquipmentsQuery();

  useEffect(() => {
    const fetchallequipment = async () => {
      // const res = await axios.get('/api/equipment/all')
      // console.log("the equipments are ", res.data.data)
      // setFetchedequipment(res.data.data)

      const response = await GetEquipments();
      console.log("response from lazy function", response);
      setFetchedequipment(response.data.data);
    };
    fetchallequipment();

    // console.log("data from redux",data)
    // setFetchedequipment(data.data);
  }, []);

  const [fetchedequipment, setFetchedequipment] = useState<Equipment[]>([]);

  const router = useRouter();

  //   const handleRoute = (item: Equipment) => {
  //     router.push(`/equipments/${Number(item.id)}`);
  //   };
  const [price, setPrice] = useState(20000);

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const [avalibility, setAvalibility] = useState<string>("all");

  const filteredEquipments: Equipment[] = fetchedequipment.filter(
    (item: Equipment) => {
      const priceMatch = Number(item.price) <= price;

      const typeMatch =
        selectedTypes.length === 0 || selectedTypes.includes(String(item.type));

      const availabilityMatch =
        avalibility === "all" || item.available === true;

      return priceMatch && typeMatch && availabilityMatch;
    },
  );

  console.log("the filtered equipments are ", filteredEquipments);

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const handleClear = () => {
    setPrice(20000);
    setSelectedTypes([]);
    setAvalibility("all");
    console.log(avalibility, selectedTypes, price);
  };
  return (
    <Container>
      {/* Main */}
      <Main>
        <Layout>
          {/* Sidebar */}
          <Sidebar>
            <FilterBox>
              <FilterTitle>Filters</FilterTitle>

              <Section>
                <SectionTitle>Price Range</SectionTitle>
                <Range
                  type="range"
                  min={1000}
                  max={20000}
                  value={price}
                  step={400}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
                <RangeText>
                  <span>₹1,000</span>
                  <span>₹{price.toLocaleString()}</span>
                </RangeText>
              </Section>

              <Section>
                <SectionTitle>Equipment Type</SectionTitle>
                <Label>
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes("Tractors")}
                    onChange={() => handleTypeChange("Tractors")}
                  />{" "}
                  Tractors
                </Label>
                <Label>
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes("Harvesters")}
                    onChange={() => handleTypeChange("Harvesters")}
                  />{" "}
                  Harvesters
                </Label>
                <Label>
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes("Ploughs")}
                    onChange={() => handleTypeChange("Ploughs")}
                  />{" "}
                  Ploughs
                </Label>
                <Label>
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes("Cultivators")}
                    onChange={() => handleTypeChange("Cultivators")}
                  />{" "}
                  Cultivators
                </Label>
              </Section>

              <Section>
                <SectionTitle>Availability</SectionTitle>
                <Label>
                  <input
                    type="radio"
                    name="a"
                    checked={avalibility === "available"}
                    onChange={() => setAvalibility("available")}
                  />{" "}
                  Available Now
                </Label>
                <Label>
                  <input
                    type="radio"
                    name="a"
                    checked={avalibility === "all"}
                    onChange={() => setAvalibility("all")}
                  />{" "}
                  All Equipment
                </Label>
              </Section>

              <Button onClick={handleClear}>Clear All Filters</Button>
            </FilterBox>
          </Sidebar>

          {/* Content */}
          <Content>
            <Title>Premium Equipment</Title>
            <Subtitle>
              Browse 42 machines available for rental in your region.
            </Subtitle>

            {/* <Grid>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Card key={item}>
                  <CardImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuB57hfn4Ahq_W_1LqXo-yOLp7d6oLiiMK-7CFsMcmVb0S7SXUwVCKe1xanxe3aEWKr1psDV4ATLB2NQtyPloF8YEYhx8weIgnwuRsj58eg9oLrY5QhpTAdmfKHa4LK-RSdIEupWqHdXgMQ-mFKGil0bC1b5EwSbj1smxA03VSZDk4s3LZjqWdLxPHAyvlmxbuqM6CUfetMzs9hvb7MCdr6glsV73txnBCpoisunY7dhmTmY-5sgYmtI-T0k9gNFYiBku3M-dcaIqcw" />

                  <CardBody>
                    <CardTitle>Equipment Name</CardTitle>
                    <Desc>Details here</Desc>

                    <CardFooter>
                      <Price>₹3,500/day</Price>
                      <Button>Rent Now</Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              ))}
            </Grid> */}

            <Grid>
              {filteredEquipments.map(
                (item: Equipment) => (
                  console.log("the item id is ", item._id),
                  (
                    <Card key={Number(item.id)}>
                      {/* <CardImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuB57hfn4Ahq_W_1LqXo-yOLp7d6oLiiMK-7CFsMcmVb0S7SXUwVCKe1xanxe3aEWKr1psDV4ATLB2NQtyPloF8YEYhx8weIgnwuRsj58eg9oLrY5QhpTAdmfKHa4LK-RSdIEupWqHdXgMQ-mFKGil0bC1b5EwSbj1smxA03VSZDk4s3LZjqWdLxPHAyvlmxbuqM6CUfetMzs9hvb7MCdr6glsV73txnBCpoisunY7dhmTmY-5sgYmtI-T0k9gNFYiBku3M-dcaIqcw" /> */}
                      <CardImage
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/equipments/detail?id=${item._id}`);
                        }}
                        src={String(item.images[0])}
                      />

                      <CardBody>
                        <CardTitle>{String(item.name)}</CardTitle>
                        <Desc>Type: {String(item.type)}</Desc>

                        <CardFooter>
                          <Price>₹{Number(item.price)}/day</Price>
                          {/* <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/equipments/detail?id=${item._id}`);
                        }}
                      >
                        View Details
                      </Button> */}
                        </CardFooter>
                      </CardBody>
                    </Card>
                  )
                ),
              )}
            </Grid>

            <Pagination>
              <PageBtn>‹</PageBtn>
              <ActivePage>1</ActivePage>
              <PageBtn>2</PageBtn>
              <PageBtn>3</PageBtn>
              <PageBtn>›</PageBtn>
            </Pagination>
          </Content>
        </Layout>
      </Main>
    </Container>
  );
}
