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
import { SearchLayout } from "./SearchLayout";




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
  
    const searchTerm =
      typeof router.query.q === "string" ? router.query.q : "";
  
    const config = {
      ...searchConfig,
      alwaysSearchOnInitialLoad: true,
      initialState: {
        searchTerm,
        resultsPerPage: 3,
      },
    };
  
    return (
      <SearchProvider config={config as any}>
        <SearchLayout />
      </SearchProvider>
    );
  }