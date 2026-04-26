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
                {/* ROW 1 */}
                {currentBookings.map((item: any) => {
                  return (
                    <Tr>
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
                          {new Date(item.start_date).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            },
                          )}{" "}
                          -{" "}
                          {new Date(item.end_date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                          })}
                        </SubText>
                      </Td>
                      <Td>
                        <Status type={item.status}>{item.status}</Status>
                      </Td>

                      <TdRight>
                        <ActionGroup>
                          <ActionButton
                            variant="primary"
                            onClick={() =>
                              handleStatusChange(item._id, "active")
                            }
                          >
                            Approve
                          </ActionButton>

                          <ActionButton
                            variant="danger"
                            onClick={() =>
                              handleStatusChange(item._id, "completed")
                            }
                          >
                            Reject
                          </ActionButton>
                        </ActionGroup>
                      </TdRight>
                    </Tr>
                  );
                })}
                {/* <Tr>
          <Td>
            <UserCell>
              <Avatar bg="#fed7aa">SM</Avatar>
              <UserName>Samuel Miller</UserName>
            </UserCell>
          </Td>

          <Td>
            <SubText>Case IH Magnum 340</SubText>
          </Td>

          <Td>
            <SubText>Oct 12 - Oct 15</SubText>
          </Td>

          <Td>
            <Status type="pending">Pending</Status>
          </Td>

          <TdRight>
            <ActionGroup>
              <ActionButton variant="primary">Approve</ActionButton>
              <ActionButton variant="danger">Reject</ActionButton>
            </ActionGroup>
          </TdRight>
        </Tr> */}

                {/* ROW 2 */}
                {/* <Tr>
          <Td>
            <UserCell>
              <Avatar bg="#bbf7d0">EK</Avatar>
              <UserName>Elena Kovach</UserName>
            </UserCell>
          </Td>

          <Td>
            <SubText>Claas Lexion 8900</SubText>
          </Td>

          <Td>
            <SubText>Oct 10 - Oct 20</SubText>
          </Td>

          <Td>
            <Status type="approved">Approved</Status>
          </Td>

          <TdRight>
            <ActionGroup>
              <ActionButton variant="outline">
                View Details
              </ActionButton>
            </ActionGroup>
          </TdRight>
        </Tr> */}

                {/* ROW 3 */}
                {/* <Tr>
          <Td>
            <UserCell>
              <Avatar bg="#fde68a">RJ</Avatar>
              <UserName>Robert Jenkins</UserName>
            </UserCell>
          </Td>

          <Td>
            <SubText>New Holland T8.435</SubText>
          </Td>

          <Td>
            <SubText>Oct 14 - Oct 14</SubText>
          </Td>

          <Td>
            <Status type="pending">Pending</Status>
          </Td>

          <TdRight>
            <ActionGroup>
              <ActionButton variant="primary">Approve</ActionButton>
              <ActionButton variant="danger">Reject</ActionButton>
            </ActionGroup>
          </TdRight>
        </Tr> */}
              </tbody>
            </Table>
          </TableWrapper>
        </TableContainer>

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
