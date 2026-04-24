import styled from "@emotion/styled";

/* ================= LAYOUT ================= */

export const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f6f7f3;
`;

export const Content = styled.div`
  margin-left: 260px; /* 👈 FIX: align with sidebar */
  width: 100%;
  padding: 10px; 
`;

/* ================= HEADER ================= */

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
`;

export const Left = styled.div``;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 900;
  color: #1a1c19;
  letter-spacing: -1px;
`;

export const Subtitle = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin-top: 8px;
`;

/* ================= ACTION BUTTONS ================= */

export const Actions = styled.div`
  display: flex;
  gap: 14px;
`;

export const Button = styled.button<{
  small?: boolean;
  danger?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: ${({ small }) => (small ? "6px 14px" : "12px 20px")};
  border-radius: ${({ small }) => (small ? "12px" : "30px")};

  background: ${({ danger }) =>
    danger ? "#fee2e2" : "#ffffff"};

  border: 1px solid #e5e7eb;

  font-size: ${({ small }) => (small ? "12px" : "14px")};
  font-weight: 600;

  color: ${({ danger }) =>
    danger ? "#dc2626" : "#374151"};

  cursor: pointer;
  transition: all 0.25s ease;

  box-shadow: ${({ small }) =>
    small ? "none" : "0 4px 14px rgba(0,0,0,0.05)"};

  &:hover {
    transform: translateY(-1px);

    background: ${({ danger }) =>
      danger ? "#fecaca" : "#f4f4ef"};
  }

  .material-symbols-outlined {
    font-size: 18px;
  }
`;

/* ================= TABLE ================= */

export const TableBox = styled.div`
  margin-top: 10px;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
`;

// export const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

/* HEADER */
// export const Th = styled.th`
//   padding: 18px 20px;
//   text-align: left;
//   font-size: 13px;
//   color: #6b7280;
//   font-weight: 700;

//   background: #fafaf5;
// `;

/* ROW */
// export const Td = styled.td`
//   padding: 18px 20px;
//   border-top: 1px solid #f3f4f6;
//   font-size: 14px;
//   color: #1f2937;
// `;

/* ROW HOVER EFFECT */
export const TableRow = styled.tr`
  transition: all 0.2s ease;

  &:hover {
    background: #fafaf5;
  }
`;

/* STATUS */
// export const Status = styled.span<{ type: string }>`
//   font-weight: 700;
//   font-size: 13px;

//   color: ${({ type }) =>
//     type === "approved"
//       ? "#0d631b"
//       : type === "rejected"
//       ? "#dc2626"
//       : "#d97706"};
// `;


/* ================= STATS GRID ================= */

/* ================= GRID ================= */

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* ================= SMALL CARDS ================= */

export const StatCard = styled.div`
  padding: 24px;
  border-radius: 24px;

  background: #ffffff;
  border: 1px solid #eef0ea;

  box-shadow: 0 20px 40px rgba(26, 28, 25, 0.04);

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StatLabel = styled.p`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: #0d631b;
`;

export const StatRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StatValue = styled.span`
  font-size: 28px;
  font-weight: 900;
  color: #1a1c19;
`;

export const StatSub = styled.span`
  font-size: 12px;
  color: #9ca3af;
`;

/* ================= PROGRESS BAR ================= */

export const ProgressBar = styled.div`
  height: 6px;
  width: 100%;
  background: #e8e8e3;
  border-radius: 999px;
  overflow: hidden;
  margin-top: 6px;
`;

export const ProgressFill = styled.div<{ value: number }>`
  height: 100%;
  width: ${({ value }) => value}%;
  background: #0d631b;
  border-radius: 999px;
`;

/* ================= HIGHLIGHT CARD ================= */

export const HighlightCard = styled.div`
  grid-column: span 2;

  position: relative;
  overflow: hidden;

  padding: 26px;
  border-radius: 24px;

  background: linear-gradient(135deg, #2e7d32, #0d631b);
  color: #e8f5e9;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
`;

export const HighlightContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const HighlightLabel = styled.p`
  font-size: 13px;
  font-weight: 700;
  opacity: 0.85;
  margin-bottom: 6px;
`;

export const HighlightTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
`;

export const HighlightSub = styled.p`
  font-size: 12px;
  opacity: 0.75;
  margin-top: 6px;
`;

/* ================= ICON ================= */

export const HighlightIcon = styled.span`
  position: absolute;
  right: 20px;
  bottom: 10px;

  font-size: 80px;
  color: rgba(255, 255, 255, 0.12);

  z-index: 1;
`;

/* ================= OVERLAY ================= */

export const HighlightOverlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.08),
    transparent
  );

  z-index: 0;
`;


/* ================= TABLE CONTAINER ================= */

export const TableContainer = styled.div`
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

/* ================= TABLE ================= */

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

/* ================= HEADER ================= */

export const Thead = styled.thead`
  background: #f4f4ef;
`;

export const Th = styled.th`
  padding: 18px 24px;
  text-align: left;
  font-size: 13px;
  font-weight: 700;
  color: #374151;
`;

export const ThRight = styled(Th)`
  text-align: right;
`;

/* ================= BODY ================= */

export const Tr = styled.tr`
  transition: background 0.2s ease;

  &:hover {
    background: #fafaf5;
  }
`;

export const Td = styled.td`
  padding: 16px 24px;
  border-top: 1px solid #f0f0f0;
  font-size: 14px;
  color: #1a1c19;
`;

export const TdRight = styled(Td)`
  text-align: right;
`;

/* ================= USER CELL ================= */

export const UserCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.div<{ bg: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 700;

  background: ${({ bg }) => bg};
  color: #000;
`;

export const UserName = styled.span`
  font-weight: 600;
`;

/* ================= TEXT ================= */

export const SubText = styled.span`
  font-size: 13px;
  color: #6b7280;
`;

/* ================= STATUS ================= */

export const Status = styled.span<{ type: "pending" | "approved" }>`
  font-size: 13px;
  font-weight: 700;

  color: ${({ type }) =>
    type === "approved" ? "#0d631b" : "#d97706"};
`;

/* ================= ACTION BUTTONS ================= */

export const ActionGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const ActionButton = styled.button<{
  variant?: "primary" | "danger" | "outline";
}>`
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: none;

  ${({ variant }) =>
    variant === "primary" &&
    `
    background: #2e7d32;
    color: #ffffff;
  `}

  ${({ variant }) =>
    variant === "danger" &&
    `
    background: #fee2e2;
    color: #b91c1c;
  `}

  ${({ variant }) =>
    variant === "outline" &&
    `
    background: transparent;
    border: 1px solid #d1d5db;
    color: #6b7280;
  `}

  &:hover {
    opacity: 0.9;
  }
`;



/* ================= PAGINATION ================= */

export const PaginationBar = styled.div`
  padding: 16px 24px;
  background: #f9fafb;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #e5e7eb;

  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  color: #6b7280;
`;

export const PaginationInfo = styled.span``;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PageBtn = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;

  font-size: 13px;
  font-weight: ${({ active }) => (active ? 800 : 600)};
  color: ${({ active }) => (active ? "#0d631b" : "#6b7280")};

  transition: color 0.2s ease;

  &:hover {
    color: #0d631b;
  }
`;