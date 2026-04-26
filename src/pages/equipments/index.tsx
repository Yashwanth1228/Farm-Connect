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
  images: string[];
  available: boolean;
  description: string;
  enginepower: string;
};

export default function EquipmentPage() {
  // const { data, error, isLoading } =  useGetEquipmentsQuery()
  const [GetEquipments, { isLoading }] = useLazyGetEquipmentsQuery();
  const [sortOption, setSortOption] = useState<string>("default");

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
  const [priceRange, setPriceRange] = useState<string>("all");
  const [isScrolled, setIsScrolled] = useState(false);

  const [avalibility, setAvalibility] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const filteredEquipments: Equipment[] = fetchedequipment.filter(
    (item: Equipment) => {
      const priceMatch = Number(item.price) <= price;

      const typeMatch =
        selectedTypes.length === 0 || selectedTypes.includes(String(item.type));

      const availabilityMatch =
        avalibility === "all" ||
        (avalibility === "available" && item.available === true);

      const priceRangeMatch = (() => {
        if (priceRange === "0-5000") return item.price <= 5000;
        if (priceRange === "6000-10000")
          return item.price > 5000 && item.price <= 10000;
        if (priceRange === "10000-20000")
          return item.price > 10000 && item.price <= 20000;
        return true;
      })();

      return priceMatch && typeMatch && availabilityMatch && priceRangeMatch;
    },
  );

  // ✅ APPLY SORTING HERE
  const sortedEquipments = [...filteredEquipments].sort((a, b) => {
    if (sortOption === "priceLow") return a.price - b.price;
    if (sortOption === "priceHigh") return b.price - a.price;
    if (sortOption === "nameAZ") return a.name.localeCompare(b.name);
    return 0;
  });

  console.log("the filtered equipments are ", filteredEquipments);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = sortedEquipments.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPages = Math.ceil(filteredEquipments.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [price, selectedTypes, avalibility, priceRange]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const handleClear = () => {
    setPrice(20000);
    setSelectedTypes([]);
    setAvalibility("all");
    setPriceRange("all");
    console.log(avalibility, selectedTypes, price, priceRange);
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

              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  marginBottom: "20px",
                }}
              >
                <Label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={priceRange === "all"}
                    onChange={() => setPriceRange("all")}
                  />
                  All Prices
                </Label>

                <Label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={priceRange === "0-5000"}
                    onChange={() => setPriceRange("0-5000")}
                  />
                  ₹0 - ₹5,000
                </Label>

                <Label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={priceRange === "6000-10000"}
                    onChange={() => setPriceRange("6000-10000")}
                  />
                  ₹6,000 - ₹10,000
                </Label>

                <Label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={priceRange === "10000-20000"}
                    onChange={() => setPriceRange("10000-20000")}
                  />
                  ₹10,000 - ₹20,000
                </Label>
              </div>

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
          <Content
            scrolled={isScrolled}
            onScroll={(e) => {
              const scrollTop = (e.target as HTMLDivElement).scrollTop;
              setIsScrolled(scrollTop > 10);
            }}
          >
            <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
              <label>Sort By:</label>

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="nameAZ">Name: A to Z</option>
              </select>
            </div>
            <Title>Premium Equipment</Title>
            <Subtitle>
              Showing {filteredEquipments.length} of {fetchedequipment.length}{" "}
              machines available for rental in your region.
            </Subtitle>

            <Grid>
              {currentItems.map(
                (item: Equipment) => (
                  console.log("the item id is ", item._id),
                  (
                    <Card
                      key={item._id}
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/equipments/detail?id=${item._id}`);
                      }}
                    >
                      <CardImage src={String(item.images[0])} />

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
          </Content>
        </Layout>
        <Pagination>
          {/* PREVIOUS BUTTON */}
          <PageBtn
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </PageBtn>

          {/* PAGE NUMBERS */}
          {Array.from({ length: totalPages }, (_, i) =>
            currentPage === i + 1 ? (
              <ActivePage key={i}>{i + 1}</ActivePage>
            ) : (
              <PageBtn key={i} onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </PageBtn>
            ),
          )}

          {/* NEXT BUTTON */}
          <PageBtn
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            ›
          </PageBtn>
        </Pagination>
      </Main>
    </Container>
  );
}
