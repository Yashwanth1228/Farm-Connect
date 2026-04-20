

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
// import { equipments, Equipment } from "@/data/equipmentData";
import axios from "axios";
import { useGetEquipmentsQuery , useLazyGetEquipmentsQuery } from "@/store/api/apiSlice";


const Container = styled.div`
  font-family: "Work Sans", sans-serif;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #fafaf5;
  backdrop-filter: blur(10px);
  z-index: 50;
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
  height: 80px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 800;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
`;

const ActiveLink = styled.a`
  color: #0d631b;
  font-weight: 600;
  border-bottom: 2px solid #0d631b;
  padding-bottom: 4px;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 16px;
`;

const LoginBtn = styled.button`
  color: #0d631b;
`;

const SignupBtn = styled.button`
  background: linear-gradient(to right, #0d631b, #2e7d32);
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
`;

const Main = styled.main`
  padding-top: 112px;
  padding-bottom: 80px;
  padding-left: 24px;
  padding-right: 24px;
`;

const Layout = styled.div`
  display: flex;
  gap: 48px;
`;

const Sidebar = styled.aside`
  width: 288px;
`;

const FilterBox = styled.div`
  background: #eeeee9;
  padding: 32px;
  border-radius: 24px;
  position: sticky;
  top: 112px;
`;

const FilterTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h3`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Range = styled.input`
  width: 100%;
`;

const RangeText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const Label = styled.label`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

const ClearBtn = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background: black;
  color: white;
  border-radius: 16px;
`;

const Content = styled.section`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

const Card = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  transition: transform 0.2s;

  &:hover {
    // transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 256px;
  object-fit: cover;

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const CardBody = styled.div`
  padding: 24px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const Desc = styled.p`
  font-size: 14px;
  color: #666;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const RentBtn = styled.button`
  background: linear-gradient(to right, #0d631b, #2e7d32);
  color: white;
  padding: 10px 16px;
  border-radius: 16px;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 256px;
  overflow: hidden;
`;

const Badge = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  background: #b9ad3a;
  color: #464000;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: bold;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 64px;
`;

const PageBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  border: 1px solid #ccc;
  background: white;
`;

const ActivePage = styled(PageBtn)`
  background: #0d631b;
  color: white;
  font-weight: bold;
`;

type Equipment = {
    id: number;
    _id: string;
    name: string;
    type: string;
    price: number;
    images: string;
    available: boolean;
    description: string;
    enginepower:string;
  }


export default function EquipmentPage() {
  const { data, error, isLoading } =  useGetEquipmentsQuery()
  const [GetEquipments] = useLazyGetEquipmentsQuery();

    useEffect(() => {
        const fetchallequipment = async () => {
            // const res = await axios.get('/api/equipment/all')
            // console.log("the equipments are ", res.data.data)
            // setFetchedequipment(res.data.data)

            const response = await GetEquipments()
            console.log("response from lazy function" , response)
            setFetchedequipment(response.data.data)

        }
        fetchallequipment()

        // console.log("data from redux",data)
        // setFetchedequipment(data.data);


        
    },[data])

  const [fetchedequipment , setFetchedequipment] = useState<Equipment[]>([]) ;

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

  console.log("the filtered equipments are ", filteredEquipments) ;

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
      {/* Navbar */}
      {/* <Navbar>
        <NavInner>
          <Logo>Farm Connect</Logo>

          <NavLinks>
            <a>Home</a>
            <ActiveLink>Equipment</ActiveLink>
            <a>About Us</a>
            <a>Contact Us</a>
          </NavLinks>

          <NavButtons>
            <LoginBtn>Login</LoginBtn>
            <SignupBtn>Signup</SignupBtn>
          </NavButtons>
        </NavInner>
      </Navbar> */}

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
              {filteredEquipments.map((item: Equipment) => (
                console.log("the item id is ", item._id) ,
                <Card key={Number(item.id)}>
                  {/* <CardImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuB57hfn4Ahq_W_1LqXo-yOLp7d6oLiiMK-7CFsMcmVb0S7SXUwVCKe1xanxe3aEWKr1psDV4ATLB2NQtyPloF8YEYhx8weIgnwuRsj58eg9oLrY5QhpTAdmfKHa4LK-RSdIEupWqHdXgMQ-mFKGil0bC1b5EwSbj1smxA03VSZDk4s3LZjqWdLxPHAyvlmxbuqM6CUfetMzs9hvb7MCdr6glsV73txnBCpoisunY7dhmTmY-5sgYmtI-T0k9gNFYiBku3M-dcaIqcw" /> */}
                  <CardImage src={String(item.images[0])} />

                  <CardBody>
                    <CardTitle>{String(item.name)}</CardTitle>
                    <Desc>Type: {String(item.type)}</Desc>

                    <CardFooter>
                      <Price>₹{Number(item.price)}/day</Price>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/equipments/detail?id=${item._id}`);
                        }}
                      >
                        View Details
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              ))}
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