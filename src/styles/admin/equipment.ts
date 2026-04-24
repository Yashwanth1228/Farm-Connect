import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  margin-left: 260px;
  padding: 10px;
  width: 100%;
  background: #fafaf5;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 28px;
    font-weight: 800;
  }

  p {
    color: #6b7280;
    margin-top: 4px;
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
    box-shadow: 0 8px 20px rgba(13, 99, 27, 0.25);
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 30px 0;
  padding: 28px 32px;

  background: #ffffff;
  border-radius: 20px;

  border: 1px solid #eef0ea;
  box-shadow: 0 10px 30px rgba(26, 28, 25, 0.05);

  gap: 20px;

  
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

  background: linear-gradient(
    to bottom,
    transparent,
    #e5e7eb,
    transparent
  );
  
`;

export const TableWrapper = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    text-align: left;
    padding-bottom: 12px;
    color: #9ca3af;
    font-size: 13px;
    font-weight: 700;
  }

  td {
    padding: 18px 0;
    border-top: 1px solid #f3f4f6;
    vertical-align: middle;
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
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f3f4f6;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  color: #6b7280;
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  button {
    background: none;
    border: none;
    font-weight: 600;
    color: #374151;
    cursor: pointer;

    &:hover {
      color: #0d631b;
    }
  }
`;

export const PageNumbers = styled.div`
  display: flex;
  gap: 8px;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  width: 32px;
  height: 32px;

  border-radius: 6px;
  border: none;

  font-weight: 600;
  cursor: pointer;

  background: ${({ active }) => (active ? "#0d631b" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#374151")};

  &:hover {
    background: ${({ active }) => (active ? "#0d631b" : "#f3f4f6")};
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
