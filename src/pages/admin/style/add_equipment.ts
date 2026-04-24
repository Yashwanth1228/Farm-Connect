import styled from "@emotion/styled";

export const Page = styled.div`
  min-height: 100vh;
  background: #fafaf5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const RightPanel = styled.div`
  width: 65%;
  background: white;
  padding: 40px;
`;

/* ================= HEADER ================= */

export  const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
`;

/* ================= FORM ================= */

export const Form = styled.div`
  display: grid;
  gap: 20px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FullRow = styled.div`
  grid-column: span 2;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #666;
  margin-bottom: 5px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: #f4f4ef;
  font-size: 14px;

  &:focus {
    outline: 2px solid #0d631b;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: #f4f4ef;
`;

export const UploadBox = styled.div`
  border: 2px dashed #ccc;
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  background: #f4f4ef;

  &:hover {
    border-color: #0d631b;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 16px;
  border-radius: 14px;
  border: none;
  background: linear-gradient(to right, #0d631b, #2e7d32);
  color: white;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;


export const Wrapper = styled.div`
  min-height: 100vh;
  background: #fafaf5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
`;

export const LeftPanel = styled.div`
  width: 35%;
  background: #2e7d32;
  color: #cbffc2;
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PanelTitle = styled.h3`
  font-size: 28px;
  font-weight: 800;
  line-height: 1.2;
`;

export const PanelText = styled.p`
  margin-top: 15px;
  font-size: 14px;
  line-height: 1.6;
`;

export const FooterText = styled.div`
  font-size: 12px;
  opacity: 0.7;
`;

export const BlurCircle = styled.div`
  position: absolute;
  bottom: -80px;
  right: -80px;
  width: 200px;
  height: 200px;
  background: #0d631b;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
`;