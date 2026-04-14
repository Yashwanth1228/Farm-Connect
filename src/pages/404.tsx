/**@jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import Head from "next/head";
import Link from "next/link";

const container = css`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafaf5;
  padding: 40px;
  position: relative;
  overflow: hidden;
`;

const card = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1100px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const imageBox = css`
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const heading = css`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;

  span {
    color: #0d631b;
  }
`;

const text = css`
  color: #555;
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const button = css`
  background: linear-gradient(90deg, #0d631b, #2e7d32);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    opacity: 0.9;
  }
`;

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
