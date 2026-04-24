import styled from "@emotion/styled";

export const Main = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafaf5;
  padding: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px; /* ✅ SAME AS SIGNUP */
  height: 500px;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
`;

/* LEFT SECTION */
export const Left = styled.div`
  flex: 1;
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(13, 99, 27, 0.4);
`;

export const LeftContent = styled.div`
  position: absolute;
  inset: 0;
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: 32px;
  font-weight: 800;
`;

export const QuoteBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
`;

/* RIGHT SECTION */
export const Right = styled.div`
  flex: 1;
  padding: 40px;
  margin-top: 50px;
`;

// export const InputGroup = styled.div`
//   width: 100%;
//   margin-bottom: 25px;
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: none;
//   border-bottom: 2px solid #ccc;

//   &:focus {
//     outline: none;
//     border-color: #0d631b;
//     background: #f9f9f9;
//   }

//   &:hover {
//     border-bottom: 2px solid #0d631b;
//     transform: scale(1.01);
//     transition: all 0.5s;
//   }
// `;

// export const Button = styled.button`
//   width: 100%;
//   padding: 14px;
//   background: linear-gradient(135deg, #0d631b, #2e7d32);
//   color: white;
//   border: none;
//   border-radius: 12px;
//   margin-top: 20px;
//   cursor: pointer;

//   &:hover {
//     background: #094d14;
//     transform: scale(1.02);
//   }
// `;

export const Anc = styled.a`
  color: #0d631b;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;

  &:hover {
    text-decoration: underline;
    transform: scale(1.02);
    transition: all 0.2s;
  }
`;

export const SubText = styled.p`
  color: Black;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 5px;
`;