import styled from "@emotion/styled";

export const mq = {
  sm: "@media (max-width: 480px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 1024px)",
};

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #0d631b;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  padding: 15px 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;

  ${mq.md} {
    width: 100%;
    text-align: center;
    white-space: normal; /* 👈 allows text to wrap */
    word-break: break-word;
  }

  &:hover {
    background: #094d14;
  }
`;
