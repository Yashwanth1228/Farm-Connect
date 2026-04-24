import styled from "@emotion/styled";

export const FormHeading = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #0d631b;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

// ---------------- PAGE ----------------
export const Page = styled.div`
  padding-top: 120px;
  padding-bottom: 80px;
  max-width: 1200px;
  margin: auto;
  padding-left: 24px;
  padding-right: 24px;
`;

// ---------------- HERO ----------------
export const Hero = styled.div`
  max-width: 600px;
  margin-bottom: 60px;

  h1 {
    font-size: 56px;
    font-weight: 800;
    color: #0d631b;
    margin-bottom: 20px;
  }

  span {
    color: #1a1c19;
  }

  p {
    color: #555;
    font-size: 18px;
  }
`;

// ---------------- GRID ----------------
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

// ---------------- FORM ----------------
export const FormCard = styled.div`
  background: #eeeee9;
  padding: 40px;
  border-radius: 24px;
`;

// export const Input = styled.input`
//   width: 100%;
//   padding: 16px;
//   margin-top: 8px;
//   border: none;
//   border-bottom: 2px solid #ccc;
//   background: #e8e8e3;
// `;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 16px;
  margin-top: 8px;
  border: none;
  border-bottom: 2px solid #ccc;
  background: #e8e8e3;
`;

export const SubmitBtn = styled.button`
  margin-top: 20px;
  padding: 14px 30px;
  border-radius: 9999px;
  border: none;
  background: linear-gradient(135deg, #0d631b, #2e7d32);
  color: white;
  font-weight: bold;
`;

// ---------------- INFO ----------------
export const InfoCard = styled.div`
  background: #f4f4ef;
  padding: 24px;
  border-radius: 20px;
  display: flex;
  gap: 16px;
  margin-bottom: 30px;
`;

export const MapBox = styled.div`
  border-radius: 24px;
  overflow: hidden;
`;

export const MapImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

// ---------------- CTA ----------------
export const CTA = styled.div`
  margin-top: 80px;
  background: #fed7ca;
  padding: 60px;
  border-radius: 40px;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }
`;

// ---------------- FOOTER ----------------
// export const Footer = styled.footer`
//   margin-top: 80px;
//   padding: 40px;
//   background: #f5f5f5;
// `;

// export const FooterGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 30px;
// `;

// export const FooterDetails = styled.p`
//   color: #555;
//   margin-top: 8px;
// `;