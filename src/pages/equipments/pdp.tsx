import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";

type Props = {
  product: {
    id: number;
    name: string;
    img: string;
    type: string;
    price: number;
    available: boolean;
    description: string;
    enginepower: string;

    // startDate: string;
    // endDate: string;
    // days: number;
    // totalPrice: number;
  };
};

/* ================= NAV ================= */
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: #fafaf5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
`;

const Logo = styled.h1`
  font-weight: 800;
  font-size: 22px;
  color: #0d631b;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const Btn = styled.button`
  padding: 10px 18px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const PrimaryBtn = styled(Btn)`
  background: #0d631b;
  color: white;
`;

/* ================= LAYOUT ================= */
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 120px 20px 40px;
`;

/* ================= HERO ================= */
const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 1024px) {
    grid-template-columns: 7fr 5fr;
    align-items: start;
  }
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const Thumb = styled.img`
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
`;

/* ================= RIGHT SIDE ================= */
const RightWrapper = styled.div`
  position: sticky;
  top: 100px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const SubInfo = styled.div`
  color: #666;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background: #f4f4ef;
  padding: 24px;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Price = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: #0d631b;
`;

const Location = styled.div`
  font-size: 14px;
  color: #555;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    font-size: 12px;
    font-weight: 600;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 8px;
  border: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const OutlineBtn = styled.button`
  padding: 12px;
  border-radius: 10px;
  border: 2px solid #0d631b;
  background: transparent;
  color: #0d631b;
  font-weight: 600;
  cursor: pointer;
`;

/* ================= FEATURES ================= */
const Section = styled.div`
  display: grid;
  gap: 40px;
  margin-top: 80px;

  @media (min-width: 1024px) {
    grid-template-columns: 7fr 5fr;
  }
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #555;
  line-height: 1.7;
`;

const FeatureGrid = styled.div`
  display: grid;
  gap: 15px;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeatureCard = styled.div`
  background: #f4f4ef;
  padding: 15px;
  border-radius: 10px;
`;

/* ================= SPEC ================= */
const SpecWrapper = styled.div`
  align-self: start;
`;

const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 12px 0;
`;

const Details = styled.div`
  margin-top: 20px;
  background: #f4f4ef;
  padding: 20px;
`;

/* ================= PAGE ================= */
export default function PDP({ product }: Props) {
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const diff = end.getTime() - start.getTime();

    return diff > 0 ? diff / (1000 * 60 * 60 * 24) : 0;
  };

  const days = calculateDays();

  const isInvalid = !startDate || !endDate || days <= 0;
  const today = new Date().toISOString().split("T")[0];

  const totalPrice = days * product.price;

  const handleAddToCart = () => {
    if (!startDate || !endDate || days <= 0) {
      alert("Please select valid dates");
      return;
    }

    const exists = cart.find((item: any) => item.id === product.id);

    if (exists) {
      alert("Already added to cart ");
      return;
    }

    setCart([
      ...cart,
      {
        ...product,
        startDate,
        endDate,
        days,
        totalPrice,
      },
    ]);
  };
  return (
    <>
      {/* <Nav>
        <Logo>Farm Connect</Logo>
        <NavButtons>
          <Btn>Sign In</Btn>
          <PrimaryBtn>Rent Now</PrimaryBtn>
        </NavButtons>
      </Nav> */}

      <Container>
        <Hero>
          {/* LEFT */}
          <div>
            {/* <MainImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Qh_nTp8s1ktmhft8jayHfopMKRmI0Byagywq89q-391nkoSqvNu9IZlPukRN7MHg4zVtHPozPooFURROD3ulzfKaePMkVcj2O9YW3pl7Vja-X3figZcz_a2QZfBpb_lRFrF-9uH4K3qlaHbCfE1v0MI6RvQ2kB6zw1y35tu_KNc3q2qSeJ3pDdiXEh07ScxmTKNDbwEeMXDQQqZIA7XVRM29n4xOEBRDX328NVXeuVqKVbR5GfhozGMV6aeVNQosPPnIjazDXYY" /> */}

            <MainImage src={String(product.img)} alt={String(product.name)} />

            <Gallery>
              <Thumb src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeLq2VQVkEf0MxCQto2MGwzqSg4c_kH_ZtjIorVg_PPlGa6L1stfqoeZcTvb6posDBaosUgEkkJJYsB1FbogbzlCa0zh_pPuRQCOr6A9x-9CJ5RumPHtXAz6-OcrlW_igTASqfYuxdkekBki1geV5V7KNiDO9rgQtV7SevtrWmbaWCObXYRg7J-7ZOCiW9KHKaHEDLpyZF6WM9V-v3f6WjBRJeM7t_XV-9pXMZ_f3Bqbs5wnQV_jBeJ3OprbzhTvQT4rzl__SnO-s" />
              <Thumb src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQJYbgNlGdTuDwLBu_lznbb3icX4Ob4GRAWcEQnkDwn1fJVak6WmuUHSY916PFO55DkFQdmxX6Od2HUSZ1WEQW4hz9qNcsYu-oNg3iXfYh_aIZUymVFGpluRd0E3c2filabwUbiGGKSE_W-zvXJlO1yQlG0vo42BoUSmwvzAPzkiGjl7QIdvy55I1y20SMoQiARpn8qaArS8m__J9KtUJcs-rgm7tRgiCmiaKCzDHhuOt7sL8pcc6Lw0TouNzidqIH6zYysb4emo8" />
              <Thumb src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE-iQPbRAiyEnqbApr4mi1ASZJE2x6GPKy1zg-TT2--jAviHir1QjhZ1sLxqUWWllSpUeQ37fH7tEsge_JbJ_5AxJ0yy3h4kHvd3dJ1XGDcscOkucmkzvnM3dhHJg6f0mOPLTN28i7HHftTJAY-mGRPOUXdKm68JZPLGrmufG2xCM9XO-GHjcuavichKbbyLzjbWJTauvtU1bd0AqedCA08MvqsI8uywNZiLfadRvsViKN6vvq0hE7FGBTzVC5YehiltTjlKPhluc" />
              <Thumb src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwce1k6l1IQdQhFE3Ok-LtRBcMT3xpAKPy0pYhLhvlbSScKgucREeAphwQlY50-ih5Qe8j9ciz-NHzjo2p6aP_eRs6FdPp4Vlu5dogoMiIeFxIu8R95QnPYanfRUHMHOC22d4e3ZLlf0aQQlssbzIx0kEisbkrC-bcWOtkOOtqFDrThU97BZfTydlcNri_-lEXpGYx5d4UcsPau8kw0GAAfLcepTSKFKpZNGycWskufnw1yvV5om1a1wz9S9vv_Hvm8Yff_RzEjCA" />
            </Gallery>
          </div>

          {/* RIGHT */}
          <RightWrapper>
            <Title>{product.name}</Title>
            <SubInfo>350 HP • 4WD • Diesel</SubInfo>
            <Card>
              <PriceRow>
                <Price>${Number(product.price)}/day</Price>
                {/* <Location>📍 Location</Location> */}
              </PriceRow>

              <InputGroup>
                <label>Start Date</label>
                <Input
                  type="date"
                  value={startDate}
                  min={today}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </InputGroup>

              <InputGroup>
                <label>End Date</label>
                <Input
                  type="date"
                  value={endDate}
                  min={startDate || today}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </InputGroup>

              <p>Days: {days}</p>
              <p>Total Price: ₹{totalPrice}</p>

              {days === 0 && (
                <p style={{ color: "red" }}>
                  Please select valid start and end dates
                </p>
              )}

              <ButtonGroup>
                <PrimaryBtn>Rent Now</PrimaryBtn>
                <OutlineBtn
                  // onClick={() => router.push("/equipments/carts")}
                  onClick={() => {
                    handleAddToCart();
                    router.push("/equipments/carts");
                  }}
                  disabled={isInvalid}
                >
                  {isInvalid ? "Select Dates" : "Add to Cart"}
                </OutlineBtn>
              </ButtonGroup>
            </Card>
            <Details>
              <SectionTitle>About</SectionTitle>
              <p>{product.description}</p>
            </Details>
          </RightWrapper>
        </Hero>

        {/* FEATURES + SPEC */}
        <Section>
          <div>
            <SectionTitle>Engineered for the Field</SectionTitle>

            <Text>
              The 7R 350 is a powerhouse built for farmers who demand efficiency
              and precision. Designed for large-scale operations.
            </Text>

            <FeatureGrid>
              <FeatureCard>Integrated GPS</FeatureCard>
              <FeatureCard>Climate Control</FeatureCard>
              <FeatureCard>Auto-Steer</FeatureCard>
              <FeatureCard>Efficiency Mode</FeatureCard>
            </FeatureGrid>
          </div>

          <SpecWrapper>
            <SectionTitle>Specifications</SectionTitle>

            <SpecItem>
              <span>Engine Power</span>
              <span>{product.enginepower}</span>
            </SpecItem>

            <SpecItem>
              <span>Transmission</span>
              <span>e23™</span>
            </SpecItem>

            <SpecItem>
              <span>Hydraulic Flow</span>
              <span>59 gpm</span>
            </SpecItem>

            <SpecItem>
              <span>Weight</span>
              <span>24,700 lbs</span>
            </SpecItem>
          </SpecWrapper>
        </Section>
      </Container>
    </>
  );
}
