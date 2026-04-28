import Avatar from "@/components/Avatar";
import {
  useGetBookingsQuery,
  useUpdatestatusMutation,
} from "@/store/api/apiSlice";
import { Icon } from "@/styles/about";
import {
  PageWrapper,
  Content,
  HeaderWrapper,
  Left,
  Title,
  Subtitle,
  Actions,
  Button,
  TableBox,
  Table,
  Th,
  Td,
  Status,
  TableRow,
  StatsGrid,
  StatCard,
  StatLabel,
  StatRow,
  StatValue,
  StatSub,
  ProgressBar,
  ProgressFill,
  HighlightCard,
  HighlightContent,
  HighlightLabel,
  HighlightTitle,
  HighlightSub,
  TableContainer,
  TableWrapper,
  Thead,
  ThRight,
  Tr,
  UserCell,
  UserName,
  TdRight,
  ActionGroup,
  ActionButton,
  PaginationBar,
  PaginationInfo,
  PaginationControls,
  PageBtn,
  HighlightIcon,
  HighlightOverlay,
  MobileList,
  BookingCard,
  CardRow,
  CardValue,
  CardLabel,
  CardActions,
} from "@/styles/admin/bookings";
import {
  CenterBox,
  Spinner,
  StatusCard,
  StatusText,
  StatusTitle,
} from "@/styles/admin/equipment";
import { GradientOverlay, SubText } from "@/styles/home";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

/* ================= PAGE ================= */

export default function BookingsPage() {

  const { data, isLoading } = useGetBookingsQuery();
  console.log("bookings data ", data);
  const [updatestatus] = useUpdatestatusMutation();

  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  const bookings = data?.data || [];

  // ✅ ALWAYS BEFORE RETURN
  useEffect(() => {
    setPage(1);
  }, [bookings]);

  const isActiveBooking = (start: string, end: string) => {
    const today = new Date();
    return new Date(start) <= today && new Date(end) >= today;
  };

  const totalBookings = bookings.length;
  const totalPages = Math.ceil(totalBookings / ITEMS_PER_PAGE);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const currentBookings = bookings.slice(start, end);

  const activeBookings = bookings.filter((b: any) =>
    isActiveBooking(b.start_date, b.end_date),
  ).length;

  const totalRevenue = bookings.reduce(
    (sum: number, b: any) => sum + b.totalprice,
    0,
  );

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const response = await updatestatus({ id, status }).unwrap();
      if (response) {
        toast.success(`Booking ${status}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ MOVE THIS HERE (AFTER ALL HOOKS)
  if (isLoading) {
    return (
      <CenterBox>
        <StatusCard>
          <Spinner />
          <StatusTitle>Loading Bookings Data...</StatusTitle>
          <StatusText>Please wait while we fetch your data</StatusText>
        </StatusCard>
      </CenterBox>
    );
  }

  return (
    <PageWrapper>
      <Content>
        {/* ===== HEADER ===== */}
        <HeaderWrapper>
          <Left>
            <Title>Booking Requests</Title>
            <Subtitle>
              Manage pending schedules and maintain equipment utilization flow.
            </Subtitle>
          </Left>

          <Actions>
            <Button>
              <span className="material-symbols-outlined">filter_list</span>
              Filter Status
            </Button>

            <Button>
              <span className="material-symbols-outlined">download</span>
              Export Ledger
            </Button>
          </Actions>
        </HeaderWrapper>

        <StatsGrid>
          {/* TOTAL BOOKINGS */}
          <StatCard>
            <StatLabel>Total Bookings</StatLabel>
            <StatRow>
              {/* <StatValue>{totalBookings}</StatValue> */}
              <StatValue>{totalBookings}</StatValue>
            </StatRow>
          </StatCard>

          {/* ACTIVE BOOKINGS */}
          <StatCard>
            <StatLabel>Active Bookings</StatLabel>
            <StatRow>
              {/* <StatValue>{activeBookings}</StatValue> */}
              <StatValue>{activeBookings}</StatValue>
            </StatRow>
          </StatCard>

          {/* TOTAL REVENUE */}
          <StatCard>
            <StatLabel>Total Revenue</StatLabel>
            <StatRow>
              {/* <StatValue>₹{totalRevenue.toLocaleString()}</StatValue> */}
              <StatValue>{totalRevenue}</StatValue>
            </StatRow>
          </StatCard>
        </StatsGrid>

        {/* ===== TABLE ===== */}
       {/* ===== TABLE (DESKTOP ONLY) ===== */}
<TableContainer>
  <TableWrapper>
    <Table>
      <Thead>
        <tr>
          <Th>User</Th>
          <Th>Equipment</Th>
          <Th>Date</Th>
          <Th>Status</Th>
          <ThRight>Actions</ThRight>
        </tr>
      </Thead>

      <tbody>
        {currentBookings.map((item: any) => (
          <Tr key={item._id}>
            <Td>
              <UserCell>
                <Avatar bg="#fed7aa">{item.username?.[0]}</Avatar>
                <UserName>{item.username}</UserName>
              </UserCell>
            </Td>

            <Td>
              <SubText>{item.name}</SubText>
            </Td>

            <Td>
              <SubText>
                {new Date(item.start_date).toLocaleDateString("en-IN")} -{" "}
                {new Date(item.end_date).toLocaleDateString("en-IN")}
              </SubText>
            </Td>

            <Td>
              <Status type={item.status}>{item.status}</Status>
            </Td>

            <TdRight>
              <ActionGroup>
                <ActionButton
                  variant="primary"
                  onClick={() => handleStatusChange(item._id, "active")}
                >
                  Approve
                </ActionButton>

                <ActionButton
                  variant="danger"
                  onClick={() => handleStatusChange(item._id, "Rejected")}
                >
                  Reject
                </ActionButton>
              </ActionGroup>
            </TdRight>
          </Tr>
        ))}
      </tbody>
    </Table>
  </TableWrapper>
</TableContainer>

{/* ===== MOBILE CARDS (ONLY MOBILE) ===== */}
<MobileList>
  {currentBookings.map((item: any) => (
    <BookingCard key={item._id}>
      <UserCell style={{ marginBottom: "10px" }}>
        <Avatar bg="#fed7aa">{item.username?.[0]}</Avatar>
        <UserName>{item.username}</UserName>
      </UserCell>

      <CardRow>
        <CardLabel>Equipment</CardLabel>
        <CardValue>{item.name}</CardValue>
      </CardRow>

      <CardRow>
        <CardLabel>Date</CardLabel>
        <CardValue>
          {new Date(item.start_date).toLocaleDateString("en-IN")} -{" "}
          {new Date(item.end_date).toLocaleDateString("en-IN")}
        </CardValue>
      </CardRow>

      <CardRow>
        <CardLabel>Status</CardLabel>
        <Status type={item.status}>{item.status}</Status>
      </CardRow>

      <CardActions>
        <ActionButton
          variant="primary"
          onClick={() => handleStatusChange(item._id, "active")}
        >
          Approve
        </ActionButton>

        <ActionButton
          variant="danger"
          onClick={() => handleStatusChange(item._id, "Rejected")}
        >
          Reject
        </ActionButton>
      </CardActions>
    </BookingCard>
  ))}
</MobileList>

        <PaginationBar>
          <PaginationInfo>
            Showing {totalBookings === 0 ? 0 : start + 1} to{" "}
            {Math.min(end, totalBookings)} of {totalBookings} bookings
          </PaginationInfo>

          <PaginationControls>
            {/* PREVIOUS */}
            <PageBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
              Previous
            </PageBtn>

            {/* PAGE NUMBERS */}
            {[...Array(totalPages)].map((_, i) => (
              <PageBtn
                key={i}
                active={page === i + 1}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </PageBtn>
            ))}

            {/* NEXT */}
            <PageBtn
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </PageBtn>
          </PaginationControls>
        </PaginationBar>
      </Content>
    </PageWrapper>
  );
}
