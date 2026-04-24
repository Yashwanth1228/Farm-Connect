import styled from "@emotion/styled";

export const Page = styled.div`
  background: #e8fff0;
  min-height: 100vh;
  font-family: "Work Sans", sans-serif;
  margin-top: 100px;
`;

export const Hero = styled.div`
  position: relative;
  height: 420px;
  overflow: hidden;
  margin-bottom: 60px;
  padding-top: 20px;

  img {
    width: 90%;
    margin-left: 5%;
    height: calc(100% - 20px);
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const StatusBadge = styled.div`
  position: absolute;
  bottom: 30px;
  left: 6%;
  background: rgba(232, 255, 240, 0.4);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: -60px auto 0;
  padding: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
`;

export const SubText = styled.p`
  color: #666;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 10px;

  &:active {
    transform: scale(0.96);
  }
`;

export const PrimaryBtn = styled(Button)`
  background: #23422a;
  color: white;
`;

export const SecondaryBtn = styled(Button)`
  background: #d7e5bb;
`;

export const DisabledBtn = styled(Button)`
  background: #ccc;
  cursor: not-allowed;
`;