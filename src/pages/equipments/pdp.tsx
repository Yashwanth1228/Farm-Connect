import styled from "@emotion/styled";
import { useRouter } from "next/router";
import {
  Container,
  Hero,
  MainImage,
  Gallery,
  Thumb,
  RightWrapper,
  Title,
  SubInfo,
  Card,
  Price,
  PriceRow,
  InputGroup,
  Input,
  ButtonGroup,
  PrimaryBtn,
  OutlineBtn,
  Details,
  Section,
  SectionTitle,
  SpecItem,
  SpecWrapper,
  Text,
  FeatureGrid,
  FeatureCard,
} from "@/pages/equipments/style/pdp";

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
  };
};

/* ================= NAV ================= */

/* ================= PAGE ================= */
export default function PDP({ product }: Props) {
  const router = useRouter();
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
                <Input type="date" />
              </InputGroup>

              <InputGroup>
                <label>End Date</label>
                <Input type="date" />
              </InputGroup>

              <InputGroup>
                <label>Quantity</label>
                <Input type="number" defaultValue={1} />
              </InputGroup>

              <ButtonGroup>
                <PrimaryBtn>Rent Now</PrimaryBtn>
                <OutlineBtn onClick={() => router.push("/equipments/carts")}>
                  Add to Cart
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
