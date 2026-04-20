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


/* Emotion styling */
const Container = styled.div`
  padding: 20px;
  font-family: sans-serif;
`;

export default function SearchPage() {
  const config = useNextRouting(searchConfig, "/search");

  return <Search config={config} />;
}

const Search = memo(({ config }: any) => {
  return (
    <SearchProvider config={config}>
     
      <Container>
      <Facet field="type" label="type" />
<Facet field="price" label="Price" />

        {/* 🔍 THIS IS THE INPUT BOX */}
        <SearchBox
  searchAsYouType={true}
  debounceLength={300}
  
/>

        {/* 📄 RESULTS */}
        <Results
  resultView={({ result }) => (
    <div style={{
      border: "1px solid #ddd",
      padding: "12px",
      marginBottom: "10px",
      borderRadius: "8px"
    }}>
      <h3>{result.name?.raw}</h3>

      {result.images?.raw?.[0] && (
        <img
          src={result.images.raw[0]}
          width="200"
          style={{ borderRadius: "6px" }}
        />
      )}

      <p>{result.description?.raw}</p>

      <p><strong>₹{result.price?.raw}</strong></p>

      <p>{result.category?.raw || result.type?.raw}</p>
    </div>
  )}
/>

      </Container>
    </SearchProvider>
  );
});