/** @jsxImportSource @emotion/react */

import Link from "next/link";
import { css } from "@emotion/react";
import Navbar from "@/components/Navbar";
import { Heading, Subheading, text } from "../components/Text";

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
    </>
  );
}

export default Homepage;
