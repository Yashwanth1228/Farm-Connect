import { css } from "@emotion/react";
export const container = css`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafaf5;
  padding: 40px;
  position: relative;
  overflow: hidden;
`;

export const card = css`
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

export const imageBox = css`
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const heading = css`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;

  span {
    color: #0d631b;
  }
`;

export const text = css`
  color: #555;
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

export const button = css`
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