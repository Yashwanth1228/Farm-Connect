// /pages/search.tsx
import {
  SearchProvider,
  Results,
  SearchBox
} from "@elastic/react-search-ui";
import { memo } from "react";
import styled from "@emotion/styled";

import { searchConfig } from "@/config/searchConfig";
import { useNextRouting } from "@/utils/useNextRouting";
import { Facet } from "@elastic/react-search-ui";
import { useRouter } from "next/router";


import {  useState } from "react";
import { Button } from "@/components/Button";
import { Paging, PagingInfo } from "@elastic/react-search-ui";


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

// const Pagination = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 12px;
//   margin-top: 64px;
// `;

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

const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 64px;

  .sui-paging {
    display: flex;
    gap: 10px;
  }

  .sui-paging button {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
  }

  .sui-paging button:hover {
    background: #f5f7f4;
  }

  .sui-paging button[aria-current="true"] {
    background: #0d631b;
    color: white;
    border: none;
  }

  .sui-paging-info {
    font-size: 14px;
    color: #666;
  }
`;

type Equipment = {
  id: number;
  _index: string;
  type: string;
  price: number;
  images: string;
  available: boolean;
  description: string;
  enginepower:string;
  _source : string;
}

type PriceRange = {
  from?: number;
  to?: number;
  name?: string;
};

export default function SearchPage() {


  const router = useRouter();
const searchTerm = router.query.q || "";


const config = useNextRouting(
  {
    ...searchConfig,

    alwaysSearchOnInitialLoad: true,

    initialState: {
      searchTerm,
      
    },

    searchQuery: {
      ...searchConfig.searchQuery,
      
    },
  },
  "/search"
);

  return <Search config={config} />;
}

const Search = memo(({ config }: any) => {

  const [totalResults, setTotalResults] = useState(0);

  
  
    // const handleRoute = (item: Equipment) => {
    //   router.push(`/equipments/${Number(item.id)}`);
    // };
   
  return (
    <>
    <SearchProvider config={config}>
    
     <Container>

      {/* Main */}
      <Main>
        <Layout>
          {/* Sidebar */}
          <Sidebar>
            <FilterBox>
              

{/* <Facet
  field="type"
  label="Type"
  view={({ options, onSelect, onRemove, values }) => (
    <FacetContainer>
      <FacetTitle>Equipment Type</FacetTitle>

      {options.map((option: any) => {
        const checked = values.includes(option.value);

        return (
          <FacetOption key={option.value}>
            <div>
              <Checkbox
                type="checkbox"
                checked={checked}
                onChange={() =>
                  checked
                    ? onRemove(option.value)
                    : onSelect(option.value)
                }
              />
              {option.value}
            </div>

            <Count>({option.count})</Count>
          </FacetOption>
        );
      })}
    </FacetContainer>
  )}
/> */}

<Facet
  field="price"
  label="Price"
  view={({ options, onSelect, onRemove, values }) => (
    <FacetContainer>
      <FacetTitle>Price Range</FacetTitle>

      <FacetList>
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
              <FacetOption key={label}>
                <Left>
                  <Checkbox
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      checked
                        ? onRemove(value)
                        : onSelect(value)
                    }
                  />
                  <LabelText>{label}</LabelText>
                </Left>

                <Count>{option.count}</Count>
              </FacetOption>
            );
          }

          return null;
        })}
      </FacetList>
    </FacetContainer>
  )}
/>
            </FilterBox>
          </Sidebar>

          {/* Content */}
          <Content>
            <Title>Premium Equipment</Title>
            <Subtitle>
              Browse 42 machines available for rental in your region.
            </Subtitle>

            
    {/* <SearchProvider config={config}> */}
     
     <Container>
     {/* <Facet field="type" label="type" /> */}
     {/* <Facet
  field="type"
  label="Type"
  view={({ options, onSelect, onRemove, values }) => (
    <FacetContainer>
      <FacetTitle>Equipment Type</FacetTitle>

      {options.map((option: any) => {
        const checked = values.includes(option.value);

        return (
          <FacetOption key={option.value}>
            <div>
              <Checkbox
                type="checkbox"
                checked={checked}
                onChange={() =>
                  checked
                    ? onRemove(option.value)
                    : onSelect(option.value)
                }
              />
              {option.value}
            </div>

            <Count>({option.count})</Count>
          </FacetOption>
        );
      })}
    </FacetContainer>
  )}
/>

<Facet
  field="price"
  label="Price"
  view={({ options, onSelect, onRemove, values }) => (
    <FacetContainer>
      <FacetTitle>Price Range</FacetTitle>

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
            <FacetOption key={label}>
              <div>
                <Checkbox
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    checked
                      ? onRemove(value)
                      : onSelect(value)
                  }
                />
                {label}
              </div>

              <Count>({option.count})</Count>
            </FacetOption>
          );
        }

        return null;
      })}
    </FacetContainer>
  )}
/> */}

       {/* 🔍 THIS IS THE INPUT BOX */}
       {/* <SearchBox
 searchAsYouType={true}
 debounceLength={300}
/> */}
    {/* <SearchBox
 searchAsYouType={false}
 view={({ value, onChange, onSubmit }) => (
   <form
     onSubmit={(e) => {
       e.preventDefault(); // ✅ prevent page reload
       onSubmit(e);        // ✅ pass event, NOT value
     }}
     style={{ display: "flex", gap: "8px" }}
   >
     <input
       type="search"
       value={value || ""}
       onChange={(e) => onChange(e.target.value)}
       placeholder="Search tractors..."
       style={{
         padding: "10px",
         border: "1px solid #ccc",
         borderRadius: "6px",
         width: "250px"
       }}
     />

     <button type="submit">
       Search
     </button>
   </form>
 )}
/> */}

<PagingInfo
  view={({ start, end, totalResults: total, searchTerm }) => {
    setTotalResults(total); // ✅ store it

    return (
      <p style={{ marginBottom: "16px", color: "#666" }}>
        Showing {start} - {end} of {total} results
        {searchTerm && <> for: <strong>{searchTerm}</strong></>}
      </p>
    );
  }}
/>

    
       {/* 📄 RESULTS */}

       <Results
  view={({ children }) => (
    <ResultsGrid>
      {children}
    </ResultsGrid>
  )}
  resultView={({ result }) => (
    <Card>
      <CardImage src={result.images?.raw?.[0]} />

      <CardBody>
        <CardTitle>{result.name?.raw}</CardTitle>

        <CardFooter>
          <Price>₹{result.price?.raw}</Price>
          <Desc>{result.type?.raw}</Desc>
        </CardFooter>
      </CardBody>
    </Card>
  )}
/>

    

     </Container>
   {/* </SearchProvider> */}


            {/* <Pagination>
              <PageBtn>‹</PageBtn>
              <ActivePage>1</ActivePage>
              <PageBtn>2</PageBtn>
              <PageBtn>3</PageBtn>
              <PageBtn>›</PageBtn>
            </Pagination> */}

<Pagination>
  <PagingInfo />
  <Paging />
</Pagination>

{/* <Paging
  view={({ current = 1, onChange }) => {
    const resultsPerPage = 3; // same as your config
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <Pagination>
       
        <PageBtn
          onClick={() => onChange(current - 1)}
          disabled={current === 1}
        >
          ‹
        </PageBtn>

       
        {pages.map((page) =>
          page === current ? (
            <ActivePage key={page}>{page}</ActivePage>
          ) : (
            <PageBtn key={page} onClick={() => onChange(page)}>
              {page}
            </PageBtn>
          )
        )}

        
        <PageBtn
          onClick={() => onChange(current + 1)}
          disabled={current === totalPages}
        >
          ›
        </PageBtn>
      </Pagination>
    );
  }}
/> */}

          </Content>
        </Layout>
      </Main>
    </Container>

    </SearchProvider>
    
    
    </>
    
  );
});