// /components/FieldStatus.tsx
import styled from "@emotion/styled";

type StatItem = {
  label: string;
  value: string;
};

const Container = styled.div`
  grid-column: span 12;

  @media (min-width: 1024px) {
    grid-column: span 4;
  }

  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
`;

const Header = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #f3f4f6;

  display: flex;
  align-items: center;
  gap: 8px;
`;

const Icon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 20px;
  color: #0d631b;

  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
`;

const Title = styled.h3`
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

const Body = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

const Label = styled.span`
  color: #6b7280;
  font-weight: 500;
`;

const Value = styled.span`
  font-weight: 700;
  color: #111827;
`;

const RecommendationWrapper = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #f3f4f6;
`;

const RecommendationBox = styled.div`
  background: rgba(13, 99, 27, 0.05);
  border: 1px solid rgba(13, 99, 27, 0.1);
  padding: 12px;
  border-radius: 8px;
`;

const RecommendationText = styled.p`
  font-size: 11px;
  line-height: 1.5;
  color: #0d631b;
  font-weight: 600;
  font-style: italic;
  margin: 0;
`;

export default function FieldStatus() {
  const stats: StatItem[] = [
    { label: "Soil Moisture", value: "24%" },
    { label: "Temp Range", value: "18° - 24°C" },
    { label: "Wind Speed", value: "12 km/h" },
  ];

  return (
    <Container>
      <Header>
        <Icon>wb_sunny</Icon>
        <Title>Field Status</Title>
      </Header>

      <Body>
        {stats.map((item, index) => (
          <Row key={index}>
            <Label>{item.label}</Label>
            <Value>{item.value}</Value>
          </Row>
        ))}

        <RecommendationWrapper>
          <RecommendationBox>
            <RecommendationText>
              Recommendation: Open equipment rentals for heavy-duty plowing as weather stabilizes.
            </RecommendationText>
          </RecommendationBox>
        </RecommendationWrapper>
      </Body>
    </Container>
  );
}