import styled from "@emotion/styled";
import {
    Facet,
    Results,
    Paging,
    PagingInfo,
  } from "@elastic/react-search-ui";

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
  background: #ffffff;
  padding: 24px;
  border-radius: 24px;
  position: sticky;
  top: 112px;

  border: 1px solid #e5e5e5;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;
  gap: 16px;
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
  position: relative;   // ✅ THIS FIXES IT
  background: white;
  border-radius: 24px;
  overflow: hidden;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  transition: transform 0.2s;

  &:hover {
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

const Badge = styled.span<{ available: boolean }>`
  position: absolute;
  top: 12px;
  left: 12px;

  padding: 6px 12px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3px;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  color: ${({ available }) => (available ? "white" : "white")};
  background: ${({ available }) =>
    available ? "#16a34a" : "#dc2626"};

  border: 1px solid
    ${({ available }) =>
      available ? "rgba(16, 185, 129, 0.4)" : "rgba(239, 68, 68, 0.4)"};

  backdrop-filter: blur(6px);

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);

  transition: all 0.2s ease;

  & .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ available }) =>
      available ? "#10b981" : "#ef4444"};
  }
`;

// const Pagination = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 12px;
//   margin-top: 64px;
// `;

// const PageBtn = styled.button`
//   width: 48px;
//   height: 48px;
//   border-radius: 16px;
//   border: 1px solid #ccc;
//   background: white;
// `;

// const ActivePage = styled(PageBtn)`
//   background: #0d631b;
//   color: white;
//   font-weight: bold;
// `;


// /* Emotion styling */
// const Container = styled.div`
//   padding: 20px;
//   font-family: sans-serif;
// `;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;


const FacetContainer = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
`;

const FacetTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1a1c19;
`;

const FacetList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FacetOption = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f7f4;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input`
  accent-color: #0d631b; /* 🔥 matches your theme */
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const LabelText = styled.span`
  font-size: 14px;
  color: #333;
`;

const Count = styled.span`
  background: #f0f0f0;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  color: #666;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

export const PageBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #f5f7f4;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ActivePage = styled(PageBtn)`
  background: #0d631b;
  color: white;
  border: none;
`;

import { useSearch } from "@elastic/react-search-ui";

const Debug = () => {
  const { results, totalResults } = useSearch();
  console.log("RESULTS:", results);
  console.log("TOTAL:", totalResults);
  return null;
};

export const SearchLayout = () => {
    return (
      <Container>
        <Main>
          <Layout>
            
          {/* <Debug /> */}
  
            {/* ✅ SIDEBAR (Elastic Facets instead of manual filters) */}
            <Sidebar>
              <FilterBox>
                <FilterTitle>Filters</FilterTitle>
  
                {/* ✅ TYPE FACET */}
                <Facet
                  field="type"
                  label="Type"
                  view={({ options, onSelect, onRemove, values }: any)  => (
                    <Section>
                      <SectionTitle>Equipment Type</SectionTitle>
  
                      {options.map((option: any) => {
                        const checked = values.includes(option.value);
  
                        return (
                          <Label key={option.value}>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() =>
                                checked
                                  ? onRemove(option.value)
                                  : onSelect(option.value)
                              }
                            />
                            {option.value} ({option.count})
                          </Label>
                        );
                      })}
                    </Section>
                  )}
                />
  
                {/* ✅ PRICE FACET */}
                <Facet
                  field="price"
                  label="Price"
                  view={({
                    options,
                    onSelect,
                    onRemove,
                    values,
                  }: {
                    options: any[];
                    onSelect: (value: any) => void;
                    onRemove: (value: any) => void;
                    values: any[];
                  }) => (
                    <Section>
                      <SectionTitle>Price Range</SectionTitle>
  
                      {options.map((option: any) => {
                        if (typeof option.value === "object") {
                          const value = option.value;
  
                          const checked = values.some(
                            (v: any) =>
                              v?.from === value.from && v?.to === value.to
                          );
  
                          const label = value.to
                            ? `₹${value.from} - ₹${value.to}`
                            : `₹${value.from}+`;
  
                          return (
                            <Label key={label}>
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() =>
                                  checked
                                    ? onRemove(value)
                                    : onSelect(value)
                                }
                              />
                              {label} ({option.count})
                            </Label>
                          );
                        }
                        return null;
                      })}
                    </Section>
                  )}
                />
              </FilterBox>
            </Sidebar>
  
            {/* ✅ CONTENT (Index UI style + Elastic Results) */}
            <Content>
              <Title>Premium Equipment</Title>
  
              {/* ✅ REAL RESULT COUNT */}
              <PagingInfo
                view={({ start, end, totalResults } : any) => (
                  <Subtitle>
                    Showing {start} - {end} of {totalResults} machines
                  </Subtitle>
                )}
              />
  
              {/* ✅ RESULTS GRID (same UI as index cards) */}
              <Results
                view={({ children } : any) => <Grid>{children}</Grid>}
                resultView={({ result }: any) => (
                  <Card>
                    <Badge available={result.available?.raw}>
  <span className="dot" />
  {result.available?.raw ? "Available" : "Not Available"}
</Badge>
  
                    <CardImage
  src={
    Array.isArray(result.images?.raw)
      ? result.images.raw[0]
      : "/images/placeholder.png"
  }
/>
  
                    <CardBody>
                      <CardTitle>{result.name?.raw}</CardTitle>
                      <Desc>Type: {result.type?.raw}</Desc>
  
                      <CardFooter>
                        <Price>₹{result.price?.raw}/day</Price>
                      </CardFooter>
                    </CardBody>
                  </Card>
                )}
              />
  
              {/* ✅ ELASTIC PAGINATION */}
              {/* <Paging
  view={({ current, totalPages }: any) => {
    console.log("CURRENT:", current);
    console.log("TOTAL PAGES:", totalPages);

    return (
      <div>
        Page {current} of {totalPages}
      </div>
    );
  }}
/> */}

<Paging
  view={({ current, totalPages, onChange }: any) => {
    if (!totalPages || totalPages <= 1) return null;

    return (
      <Pagination>
        {/* 🔙 PREV */}
        <PageBtn
          onClick={() => onChange(current - 1)}
          disabled={current === 1}
        >
          ‹
        </PageBtn>

        {/* 🔢 PAGE NUMBERS */}
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;

          if (page === current) {
            return (
              <ActivePage key={page}>
                {page}
              </ActivePage>
            );
          }

          return (
            <PageBtn key={page} onClick={() => onChange(page)}>
              {page}
            </PageBtn>
          );
        })}

        {/* 🔜 NEXT */}
        <PageBtn
          onClick={() => onChange(current + 1)}
          disabled={current === totalPages}
        >
          ›
        </PageBtn>
      </Pagination>
    );
  }}
/>
              {/* <PagingInfo /> */}
            </Content>
  
          </Layout>
        </Main>
      </Container>
    );
  };