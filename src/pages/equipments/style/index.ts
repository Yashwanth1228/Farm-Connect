import styled from "@emotion/styled";

export const mq = {
  sm: "@media (max-width: 480px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 1024px)",
};

export const Container = styled.div`
  font-family: "Work Sans", sans-serif;
`;

export const Main = styled.main`
  padding-top: 112px;
  padding-bottom: 80px;
  padding-left: 24px;
  padding-right: 24px;

  ${mq.md} {
    padding: 90px 12px 60px;
  }
`;

export const Layout = styled.div`
  display: flex;
  gap: 48px;
  align-items: flex-start;

  ${mq.md} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Sidebar = styled.aside`
  width: 288px;

  position: sticky;
  top: 100px; /* adjust based on navbar height */
  height: fit-content;

  ${mq.md} {
    display: none; // 👈 hide on mobile
  }
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

export const Content = styled.div<{ scrolled: boolean }>`
  flex: 1;
  height: 120vh;
  overflow-y: auto;
  transition: all 0.3s ease;

  ${mq.md} {
    height: auto;
    overflow: visible;
    margin-left: 40px;
    margin-right: 40px;
  }

  ${({ scrolled }) =>
    scrolled &&
    `
    box-shadow: inset 0 10px 10px -10px rgba(0,0,0,0.2);
  `}
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  margin-top: 4px;
  color: #666;
  // margin-bottom: 24px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  ${mq.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mq.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  ${mq.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  position: relative; /* 👈 ADD THIS */
  background: white;
  border-radius: 24px;
  overflow: hidden;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;

  ${mq.md} {
    height: 180px;
  }

  ${mq.sm} {
    height: 160px;
  }

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

export const CardBody = styled.div`
  padding: 20px;

  ${mq.sm} {
    padding: 14px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;

  ${mq.sm} {
    font-size: 16px;
  }
`;

export const Desc = styled.p`
  font-size: 14px;
  color: #666;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #0d631b;
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

export const ActivePage = styled(PageBtn)`
  background: #0d631b;
  color: white;
  font-weight: bold;
`;

//Mobile filter styles

export const MobileTopBar = styled.div`
  display: none;

  ${mq.md} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`;

export const FilterBtn = styled.button`
  padding: 8px 14px;
  background: #0d631b;
  color: white;
  border: none;
  border-radius: 8px;
`;

export const MobileSidebarOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  width: 280px;
  background: white;
  padding: 20px;

  transform: translateX(0);
  transition: 0.3s ease;

  overflow-y: auto;
`;

export const DesktopSort = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;

  ${mq.md} {
    display: none;
  }
`;

export const Badge = styled.div<{ available: boolean }>`
  position: absolute;
  top: 12px;
  left: 12px;

  padding: 6px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;

  color: white;
  background: ${({ available }) => (available ? "#16a34a" : "#dc2626")};
`;

export const SkeletonCard = styled.div`
  border-radius: 24px;
  overflow: hidden;
  background: #f3f4f6;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: 220px;
  background: #e5e7eb;
`;

export const SkeletonBody = styled.div`
  padding: 16px;
`;

export const SkeletonLine = styled.div`
  height: 12px;
  background: #e5e7eb;
  margin-bottom: 10px;
  border-radius: 6px;

  &:last-child {
    width: 60%;
  }
`;