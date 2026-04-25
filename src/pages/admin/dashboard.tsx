import styled from "@emotion/styled";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import SummaryCard from "@/components/admin/SummaryCard";
import ActivityList from "@/components/admin/ActivityList";
import FieldStatus from "@/components/admin/FieldStatus";
import { useGetBookingsQuery, useGetEquipmentsQuery, useGetUsersQuery } from "@/store/api/apiSlice";
import { CenterBox, Spinner, StatusCard, StatusText, StatusTitle } from "@/styles/admin/equipment";
import EquipmentUtilization from "@/components/admin/EquipmentUtilization";

const Layout = styled.div`
  display: flex;
  height: auto;
  background: #f8f9f7;
`;

const Main = styled.main`
  margin-left: 260px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Content = styled.section`
  padding: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 20px;
`;

const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  margin-top: 32px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TitleBlock = styled.div`
  h2 {
    font-size: 28px;
    font-weight: 800;
    color: #111827;
    margin: 0;
    line-height: 1.1;
    font-family: "Manrope", sans-serif;
  }

  p {
    margin-top: 8px;
    font-size: 14px;
    color: #6b7280;
    max-width: 500px;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: #0d631b;
  color: white;

  padding: 10px 20px;
  border-radius: 8px;
  border: none;

  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: #2e7d32;
    color: #cbffc2;
  }
`;

const Icon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 18px;

  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
`;

export default function Dashboard() {
  
  const { data : equipmentData, error: equipmentError , isLoading: equipmentLoading } = useGetEquipmentsQuery();

  const { data : userData , error: userError , isLoading: userLoading } = useGetUsersQuery();

  const { data : bookingData , error : bookingError , isLoading : bookingLoading } = useGetBookingsQuery();


  console.log("bookings data " , bookingData);
  console.log("equipment data " , equipmentData);
  console.log("usersdata " , userData);

  if (equipmentLoading || userLoading || bookingLoading) {
    return (
      <CenterBox>
        <StatusCard>
          <Spinner />
          <StatusTitle>Loading Dashboard...</StatusTitle>
          <StatusText>Please wait while we fetch your data</StatusText>
        </StatusCard>
      </CenterBox>
    );
  }

  const usageMap: any = {};

  bookingData.data.forEach((b: any) => {
    usageMap[b.name] = (usageMap[b.name] || 0) + 1;
  });

  const sorted = Object.entries(usageMap)
  .sort((a: any, b: any) => b[1] - a[1])
  .slice(0, 5);


  return (
    <Layout>
      {/* <Sidebar /> */}

      <Main>
        {/* <Topbar /> */}

        <Content>
        <Header>
  <TitleBlock>
    <h2>Dashboard Overview</h2>
    <p>
      Monitor your ecosystem metrics, equipment inventory, and seasonal activity.
    </p>
  </TitleBlock>

  {/* <ActionButton>
    <Icon>add</Icon>
    New Listing
  </ActionButton> */}
</Header>

          <Grid>
          <SummaryCard
        title="Total Users"
        value={userData.data.length || 0}
        icon="group"
        iconBg="#eff6ff"
        iconColor="#2563eb"
        extras={[
          { label: "+12%", color: "#16a34a", bg: "#ecfdf5" }
        ]}
      />
           <SummaryCard
        title="Total Equipment"
        value={equipmentData.data.length || 0}
        icon="agriculture"
        iconBg="#e6f4ea"
        iconColor="#0d631b"
        extras={[
          { label: "12 Hubs", color: "#6b7280", bg: "#f3f4f6" }
        ]}
      />
           <SummaryCard
        title="Total Bookings"
        value={bookingData.data.length || 0}
        icon="calendar_today"
        iconBg="#fff7ed"
        iconColor="#ea580c"
        extras={[
          { label: "128 Act.", color: "#0d631b" },
          { label: "42 Pen.", color: "#ea580c" }
        ]}
      />
          </Grid>

          <BottomGrid>
            {/* <ActivityList /> */}
            <EquipmentUtilization bookings={bookingData.data} />
            <FieldStatus />
          </BottomGrid>
        </Content>
      </Main>
    </Layout>
  );
}