// /components/SummaryCard.tsx
import styled from "@emotion/styled";

type ExtraItem = {
  label: string;
  color?: string;
  bg?: string;
};

type Props = {
  title: string;
  value: string;
  icon: string;
  iconBg?: string;
  iconColor?: string;
  extras?: ExtraItem[];
};

const Card = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const IconBox = styled.div<{ bg?: string; color?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ bg }) => bg || "#f3f4f6"};
  color: ${({ color }) => color || "#111827"};
`;

const Icon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 22px;

  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
`;

const Extras = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const Extra = styled.span<{ color?: string; bg?: string }>`
  font-size: 10px;
  font-weight: 700;
  padding: 3px 6px;
  border-radius: 4px;

  color: ${({ color }) => color || "#16a34a"};
  background: ${({ bg }) => bg || "#ecfdf5"};
`;

const Title = styled.p`
  font-size: 11px;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Value = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #111827;
  margin-top: 4px;
`;

export default function SummaryCard({
  title,
  value,
  icon,
  iconBg,
  iconColor,
  extras,
}: Props) {
  return (
    <Card>
      <Top>
        <IconBox bg={iconBg} color={iconColor}>
          <Icon>{icon}</Icon>
        </IconBox>

        <Extras>
          {extras?.map((item, i) => (
            <Extra key={i} color={item.color} bg={item.bg}>
              {item.label}
            </Extra>
          ))}
        </Extras>
      </Top>

      <Title>{title}</Title>
      <Value>{value}</Value>
    </Card>
  );
}