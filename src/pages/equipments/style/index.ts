import styled from "@emotion/styled";

export const Container = styled.div`
  font-family: "Work Sans", sans-serif;
`;

export const Main = styled.main`
  padding-top: 112px;
  padding-bottom: 80px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Layout = styled.div`
  display: flex;
  gap: 48px;
`;

export const Sidebar = styled.aside`
  width: 288px;
`;

export const FilterBox = styled.div`
  background: #eeeee9;
  padding: 32px;
  border-radius: 24px;
  position: sticky;
  top: 112px;
`;

export const FilterTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const Section = styled.div`
  margin-bottom: 32px;
`;

export const SectionTitle = styled.h3`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Range = styled.input`
  width: 100%;
`;

export const RangeText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const Label = styled.label`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

export const Content = styled.section`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 24px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  transition: transform 0.2s;

  &:hover {
    // transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 256px;
  object-fit: cover;

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

export const CardBody = styled.div`
  padding: 24px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const Desc = styled.p`
  font-size: 14px;
  color: #666;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 64px;
`;

export const PageBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  border: 1px solid #ccc;
  background: white;
`;

export  const ActivePage = styled(PageBtn)`
  background: #0d631b;
  color: white;
  font-weight: bold;
`;