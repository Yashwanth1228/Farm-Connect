import styled from "@emotion/styled";

const Container = styled.div`
  grid-column: span 12;

  @media (min-width: 1024px) {
    grid-column: span 8;
  }

  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 14px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SubText = styled.p`
  font-size: 12px;
  color: #6b7280;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #374151;

  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 480px) {
    max-width: 100%;
    white-space: normal; /* allow wrap on small screens */
  }
`;

const Count = styled.span`
  font-size: 12px;
  color: #6b7280;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const BarWrapper = styled.div`
  height: 10px;
  background: #f3f4f6;
  border-radius: 999px;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 12px; /* bigger for touch */
  }
`;

const Bar = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background: linear-gradient(90deg, #22c55e, #0d631b);
  border-radius: 999px;
  transition: width 0.4s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

const RankBadge = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: #0d631b;
  background: #ecfdf5;
  padding: 3px 8px;
  border-radius: 999px;

  @media (max-width: 480px) {
    font-size: 9px;
    padding: 2px 6px;
  }
`;
type Props = {
  bookings: any[];
};

export default function EquipmentUtilization({ bookings }: Props) {

    const usageMap: any = {};
  
    bookings.forEach((b: any) => {
      usageMap[b.name] = (usageMap[b.name] || 0) + 1;
    });
  
    const sorted = Object.entries(usageMap)
      .sort((a: any, b: any) => b[1] - a[1])
      .slice(0, 5);
  
    const max = Math.max(...sorted.map((item: any) => item[1]), 1);
  
    return (
      <Container>
        <Header>
          <Title>Equipment Utilization</Title>
          <SubText>Top performing assets</SubText>
        </Header>
  
        {sorted.map(([name, count]: any, i) => {
          const percentage = (count / max) * 100;
  
          return (
            <Row key={i}>
              <LabelRow>
                <Name>{name}</Name>
  
                <div
  style={{
    display: "flex",
    gap: "8px",
    alignItems: "center",
    flexWrap: "wrap",
  }}
>
                  {i === 0 && <RankBadge>Top</RankBadge>}
                  <Count>{count} bookings</Count>
                </div>
              </LabelRow>
  
              <BarWrapper>
                <Bar width={percentage} />
              </BarWrapper>
            </Row>
          );
        })}
      </Container>
    );
  }