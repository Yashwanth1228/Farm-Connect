import styled from "@emotion/styled";

/* ================= PAGE ================= */

export const Page = styled.div`
  padding: 20px;

  /* ✅ align with sidebar */
  width: 100%;

  /* desktop spacing */
  padding-left: 280px;

  @media (max-width: 1024px) {
    padding-left: 20px; /* remove sidebar gap */
  }

  @media (max-width: 640px) {
    padding: 12px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    font-size: 22px;
  }
`;

/* ================= GRID ================= */

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

/* ================= CARD ================= */

export const Card = styled.div<{ isRead?: boolean }>`
  background: ${({ isRead }) => (isRead ? "#f9fafb" : "#ffffff")};
  border-radius: 18px;
  padding: 18px;

  border-left: 4px solid ${({ isRead }) => (isRead ? "transparent" : "#0d631b")};

  border: 1px solid #e5e7eb;

  box-shadow: 0 6px 20px rgba(0,0,0,0.05);

  transition: all 0.2s ease;

  opacity: ${({ isRead }) => (isRead ? 0.7 : 1)};

  &:hover {
    transform: translateY(-2px);
  }
`;

/* ================= HEADER ================= */

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

export const Name = styled.h3`
  font-size: 15px;
  font-weight: 700;
`;

export const Email = styled.p`
  font-size: 12px;
  color: #6b7280;
`;

export const DateText = styled.span`
  font-size: 11px;
  color: #9ca3af;
  white-space: nowrap;
`;

/* ================= CONTENT ================= */

export const Subject = styled.p<{ isRead?: boolean }>`
  font-size: 15px;
  font-weight: ${({ isRead }) => (isRead ? 500 : 700)};
  color: ${({ isRead }) => (isRead ? "#6b7280" : "#111827")};
  margin-top: 6px;
`;

export const Message = styled.p<{ expanded?: boolean }>`
  font-size: 13px;
  color: #6b7280;
  line-height: 1.6;

  display: -webkit-box;
  -webkit-line-clamp: ${({ expanded }) => (expanded ? "unset" : 2)};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/* ================= FOOTER ================= */

export const Footer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReadMore = styled.span`
  font-size: 12px;
  color: #0d631b;
  font-weight: 600;
  cursor: pointer;
`;

/* ================= FILTER BAR ================= */

export const FilterBar = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  outline: none;
  flex: 1;

  &:focus {
    border-color: #0d631b;
  }
`;

export const Select = styled.select`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #fff;
  cursor: pointer;
`;

/* ================= EMPTY ================= */

export const Empty = styled.div`
  text-align: center;
  padding: 40px;
  color: #9ca3af;
`;

/* ================= PAGINATION ================= */

export const PaginationBar = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PageInfo = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

export const Controls = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const PageBtn = styled.button<{ active?: boolean }>`
  padding: 8px 12px;
  min-width: 36px;

  border-radius: 8px;
  border: 1px solid #e5e7eb;

  background: ${({ active }) => (active ? "#0d631b" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#374151")};

  font-size: 12px;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    background: #0d631b;
    color: #fff;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    flex: 1;
  }
`;

export const ActionButtons = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 10px;
`;

export const ActionBtn = styled.button<{ danger?: boolean }>`
  padding: 6px 14px;
  border-radius: 999px;
  cursor: pointer;

  background: ${({ danger }) => (danger ? "#fee2e2" : "#dcfce7")};
  color: ${({ danger }) => (danger ? "#b91c1c" : "#166534")};

  border: none;
  font-weight: 600;
  font-size: 12px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Badge = styled.span`
  background: #0d631b;
  color: white;
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 999px;
  margin-left: 8px;
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;