/**@jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Head from "next/head";
import Link from "next/link";
import { container, card, imageBox, heading, text, button } from "@/styles/404";

export default function Errorpage() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Farm Connect</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Work+Sans:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Image */}

      <main css={container}>
        <div css={card}>
          <div css={imageBox}>
            <img
              src="https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-d-series-tractor.jpg"
              alt="Tractor"
              style={{ borderRadius: "12px", maxWidth: "400px" }}
            />
          </div>

          {/* Text */}

          <div>
            <h1 css={heading}>
              404 - <span>Page Not Found</span>
            </h1>

            <p css={text}>
              The page you're looking for isn't here. Let's get you back to the
              main field 🚜
            </p>

            <Link href="/">
              <button css={button}>🏠 Back to Home</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
