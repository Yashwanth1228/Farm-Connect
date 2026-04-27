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
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 14px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 14px;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`;

const Icon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 22px;

  @media (max-width: 480px) {
    font-size: 20px;
  }

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

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Extra = styled.span<{ color?: string; bg?: string }>`
  font-size: 10px;
  font-weight: 700;
  padding: 3px 6px;
  border-radius: 4px;

  color: ${({ color }) => color || "#16a34a"};
  background: ${({ bg }) => bg || "#ecfdf5"};

  @media (max-width: 480px) {
    font-size: 9px;
    padding: 2px 5px;
  }
`;

const Title = styled.p`
  font-size: 11px;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const Value = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #111827;
  margin-top: 4px;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
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