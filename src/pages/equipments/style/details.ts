import styled from "@emotion/styled";

export const Btn = styled.button`
  padding: 10px 18px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

export const PrimaryBtn = styled(Btn)`
  background: #0d631b;
  color: white;
`;

/* ================= LAYOUT ================= */
export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 120px 20px 40px;
`;

/* ================= HERO ================= */
export const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 1024px) {
    grid-template-columns: 7fr 5fr;
    align-items: start;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

// const Gallery = styled.div`
//     display : flex;
//     width : 200px;

// `

export const InfoRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap; /* helps on small screens */
`;

export const Highlight = styled.span`
  font-weight: 600;
  color: #0d631b;
`;

export const Thumb = styled.img`
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
`;

/* ================= RIGHT SIDE ================= */
export const RightWrapper = styled.div`
  position: sticky;
  top: 100px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const SubInfo = styled.div`
  color: #666;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  background: #f4f4ef;
  padding: 24px;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Price = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: #0d631b;
`;

export const Location = styled.div`
  font-size: 14px;
  color: #555;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    font-size: 12px;
    font-weight: 600;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 8px;
  border: none;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const OutlineBtn = styled.button`
  padding: 12px;
  border-radius: 10px;
  border: 2px solid #0d631b;
  background: transparent;
  color: #0d631b;
  font-weight: 600;
  cursor: pointer;
`;

/* ================= FEATURES ================= */
export const Section = styled.div`
  display: grid;
  gap: 40px;
  margin-top: 80px;

  @media (min-width: 1024px) {
    grid-template-columns: 7fr 5fr;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: #555;
  line-height: 1.7;
`;

export const FeatureGrid = styled.div`
  display: grid;
  gap: 15px;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: #f4f4ef;
  padding: 15px;
  border-radius: 10px;
`;

/* ================= SPEC ================= */
export const SpecWrapper = styled.div`
  align-self: start;
`;

export const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 12px 0;
`;

export const Details = styled.div`
  margin-top: 20px;
  background: #f4f4ef;
  padding: 20px;
`;