import styled from "@emotion/styled";

/* SIDEBAR */
export const SidebarContainer = styled.aside`
  width: 260px;
  height: 100vh; /* ✅ FIXED */
  position: fixed;
  background: #fafaf5;
  padding: 20px;

  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px;
  border-radius: 10px;
  margin-top: 8px; /* ✅ improved spacing */
  cursor: pointer;

  font-weight: ${(p) => (p.active ? "bold" : "normal")};
  color: ${(p) => (p.active ? "#0d631b" : "#666")};

  &:hover {
    background: #eeeee9;
  }
`;

/* TOPBAR */
export const TopbarContainer = styled.div`
  position: fixed;
  left: 260px;
  right: 0;
  top: 0;
  height: 60px;
  background: #fafaf5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
`;

export const Search = styled.input`
  width: 400px;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  background: #f4f4ef;
`;

/* PAGE */
export const Page = styled.div`
  display: flex;
`;

export const Main = styled.div`
  margin-left: 260px;
  width: 100%;
`;

export const Content = styled.div`
  padding: 10px;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
`;

/* USER CARD */
export const Card = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05); /* ✅ ADDED */
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

/* ✅ AVATAR FIXED */
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%; /* ✅ CIRCLE */
  object-fit: cover;
`;

/* RIGHT PANEL */
export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* STATS CARD */
export const StatsCard = styled.div`
  background: #eeeee9;
  padding: 20px;
  border-radius: 16px;
`;

/* NUMBER */
export const StatNumber = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

/* GROWTH CARD */
export const GrowthCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
`;

export const ChartWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

/* BARS */
export const Bars = styled.div`
  display: flex;
  align-items: flex-end; /* 🔥 anchor bars at bottom */
  justify-content: space-between;
  height: 120px; /* 🔥 fixed chart height */
  padding: 10px 5px;
  border-bottom: 1px solid #eee;
  gap: 12px;
`;

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  flex: 1;
`;

export const Bar = styled.div<{ height: string }>`
  width: 18px;
  height: ${({ height }) => height};
  max-height: 100%;
  background: linear-gradient(180deg, #22c55e, #15803d);
  border-radius: 6px 6px 0 0;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-3px);
  }
`;

export const LabelsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  padding: 0 5px;
`;

export const Label = styled.span`
  flex: 1;
  text-align: center;
  font-size: 11px;
  color: #6b7280;
`;

/* QUOTE */
export const Quote = styled.div`
  border-left: 3px solid #0d631b;
  padding-left: 12px;
  font-style: italic;
`;
