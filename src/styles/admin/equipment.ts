import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  margin-left: 260px;
  padding: 20px;
  width: 100%;
  background: #fafaf5;
  min-height: 100vh;

  transition: all 0.3s ease;

  /* ✅ Tablet & Mobile */
  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 16px;
  }

  @media (max-width: 640px) {
    padding: 12px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  h2 {
    font-size: 28px;
    font-weight: 800;
  }

  p {
    color: #6b7280;
    margin-top: 4px;
    font-size: 14px;
  }

  /* ✅ Mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-size: 22px;
    }
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: #0d631b;
  color: white;

  padding: 12px 20px;
  border-radius: 10px;

  font-weight: 600;
  border: none;
  cursor: pointer;

  box-shadow: 0 6px 16px rgba(13, 99, 27, 0.2);

  &:hover {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;


export const Stats = styled.div`
  display: flex;
  gap: 20px;

  margin: 30px 0;
  padding: 24px;

  background: #ffffff;
  border-radius: 20px;

  border: 1px solid #eef0ea;
  box-shadow: 0 10px 30px rgba(26, 28, 25, 0.05);

  /* ✅ Tablet */
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  /* ✅ Mobile */
  @media (max-width: 640px) {
    flex-direction: column;
    padding: 16px;
  }
`;

export const StatBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 6px;

  p {
    font-size: 11px;
    font-weight: 700;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 28px;
    font-weight: 900;
    color: #1a1c19;
  }

  

  
`;

export const Divider = styled.div`
  width: 1px;
  height: 40px;
  background: #e5e7eb;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const TableWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  overflow-x: auto; /* ✅ SCROLL FIX */

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px; /* ✅ prevents breaking */
  }

  th {
    text-align: left;
    padding-bottom: 12px;
    color: #9ca3af;
    font-size: 13px;
    font-weight: 700;
  }

  td {
    padding: 16px 0;
    border-top: 1px solid #f3f4f6;
  }

  tr:hover {
    background: #fafafa;
  }

  img {
    width: 80px;
    height: 55px;
    object-fit: cover;
    border-radius: 6px;
  }

  /* ✅ Hide table on mobile */
  @media (max-width: 640px) {
    display: none;
  }
`;

export const MobileCard = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    gap: 12px;
    padding: 14px;
    background: white;
    border-radius: 12px;
    margin-bottom: 12px;

    align-items: flex-start; /* ✅ FIX */
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  }

  img {
    width: 70px;
    height: 50px;
    min-width: 70px; /* ✅ FIX */
    object-fit: cover;
    border-radius: 6px;
  }
`;

export const MobileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;

  h4 {
    font-size: 14px;
    font-weight: 700;
    margin: 0;
  }

  p {
    font-size: 12px;
    color: #6b7280;
    margin: 0;
  }
`;

export const MobileActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;

  button {
    border: none;
    background: none;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  .edit {
    color: #0d631b;
  }

  .delete {
    color: #dc2626;
  }
`;

export const Badge = styled.span<{ green?: boolean }>`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;

  background: ${({ green }) => (green ? "#dcfce7" : "#e5e7eb")};
  color: ${({ green }) => (green ? "#166534" : "#374151")};
`;

export const Action = styled.button`
  margin-right: 12px;
  color: #0d631b;
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Delete = styled.button`
  color: #dc2626;
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 20px;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  color: #6b7280;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  flex-wrap: nowrap; /* ✅ FIX */

  button {
    background: none;
    border: none;
    font-weight: 600;
    color: #374151;
    cursor: pointer;

    padding: 6px 10px;
    border-radius: 6px;

    &:hover {
      color: #0d631b;
      background: #f3f4f6;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;



export const PageNumbers = styled.div`
  display: flex;
  gap: 8px;

  flex-wrap: nowrap; /* ✅ FIX */

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const PageButton = styled.button<{ active?: boolean }>`
  min-width: 32px;
  height: 32px;

  padding: 0 8px;

  border-radius: 6px;
  border: none;

  font-weight: 600;
  cursor: pointer;

  background: ${({ active }) => (active ? "#0d631b" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#374151")};

  &:hover {
    background: ${({ active }) => (active ? "#0d631b" : "#f3f4f6")};
  }

  @media (max-width: 480px) {
    min-width: 28px;
    height: 28px;
    font-size: 12px;
  }
`;


//loading styling styles 

export const CenterBox = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatusCard = styled.div`
  padding: 30px 40px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  min-width: 280px;
`;

export const StatusTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const StatusText = styled.p`
  color: #6b7280;
  font-size: 14px;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 15px;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #2563eb;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
