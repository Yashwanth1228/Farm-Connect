// /components/ActivityList.tsx
import styled from "@emotion/styled";

type ActivityItem = {
  icon: string;
  title: string;
  subtitle: string;
  rightPrimary: string;
  rightSecondary: string;
};

const Container = styled.div`
  grid-column: span 12;

  @media (min-width: 1024px) {
    grid-column: span 8;
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
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

const ViewAll = styled.a`
  font-size: 12px;
  font-weight: 700;
  color: #0d631b;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #f3f4f6;

  transition: background 0.2s;

  &:hover {
    background: #f9fafb;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconBox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f3f4f6;
  color: #6b7280;
`;

const Icon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 18px;

  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
`;

const Text = styled.div``;

const MainText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

const SubText = styled.p`
  font-size: 11px;
  color: #6b7280;
  margin: 2px 0 0;
`;

const Right = styled.div`
  text-align: right;
`;

const RightMain = styled.p<{ highlight?: boolean }>`
  font-size: 14px;
  font-weight: 800;
  margin: 0;
  color: ${({ highlight }) => (highlight ? "#0d631b" : "#374151")};
`;

const RightSub = styled.p`
  font-size: 10px;
  color: #9ca3af;
  margin-top: 2px;
  text-transform: uppercase;
  font-weight: 700;
`;

export default function ActivityList() {
  const data: ActivityItem[] = [
    {
      icon: "payments",
      title: "Johnathan Miller",
      subtitle: "Booked John Deere 8R • 2 days",
      rightPrimary: "$1,450.00",
      rightSecondary: "14m ago",
    },
    {
      icon: "inventory_2",
      title: "New Inventory Added",
      subtitle: "Case IH Magnum 340 • Region: North",
      rightPrimary: "#9204",
      rightSecondary: "2h ago",
    },
    {
      icon: "person_add",
      title: "New User Verified",
      subtitle: "Sarah Jenkins • Premium Tier",
      rightPrimary: "ID #772",
      rightSecondary: "5h ago",
    },
  ];

  return (
    <Container>
      <Header>
        <Title>Recent Activity</Title>
        <ViewAll>View All</ViewAll>
      </Header>

      <List>
        {data.map((item, index) => (
          <Row key={index}>
            <Left>
              <IconBox>
                <Icon>{item.icon}</Icon>
              </IconBox>

              <Text>
                <MainText>{item.title}</MainText>
                <SubText>{item.subtitle}</SubText>
              </Text>
            </Left>

            <Right>
              <RightMain highlight={index === 0}>
                {item.rightPrimary}
              </RightMain>
              <RightSub>{item.rightSecondary}</RightSub>
            </Right>
          </Row>
        ))}
      </List>
    </Container>
  );
}