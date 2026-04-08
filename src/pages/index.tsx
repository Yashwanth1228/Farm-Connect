/** @jsxImportSource @emotion/react */

import Link from "next/link";
import { css } from "@emotion/react";
import Navbar from "@/components/Navbar";
import { Heading, Subheading, Text } from "../components/Text";
import ProductCard from "../components/ProductCard";
import { Button } from "../components/Button";

function Homepage() {
  return (
    <>
      <Heading>Heading </Heading>
      <Link href="/login">
        <button
          css={css`
            color: hotpink;
          `}
        >
          Login
        </button>
      </Link>

      <Subheading>Subheading</Subheading>

      <text>Text</text>

      <Link href="/signup">
        <button
          css={css`
            color: hotpink;
          `}
        >
          signup
        </button>
      </Link>
      <Navbar />

      <ProductCard
        name="Tractor"
        price={500}
        image="https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-d-series-tractor.jpg"
      />
    </>
  );
}

export default Homepage;
