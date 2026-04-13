/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;
  // border-radius: 10px;

  &:hover {
    border-bottom: 2px solid #0d631b;
    transform: scale(1.01);
    transition: all 0.5s;
  }

  &:focus {
    outline: none;
    border-color: #0d631b;
    background: #f9f9f9;
  }
`;

export const InputMessage = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 20px;
  resize: vertical;

  &:hover {
    border-bottom: 2px solid #0d631b;
    transform: scale(1.01);
    transition: all 0.5s;
  }

  &:focus {
    outline: none;
    border-color: #0d631b;
    background: #f9f9f9;
  }
`;
