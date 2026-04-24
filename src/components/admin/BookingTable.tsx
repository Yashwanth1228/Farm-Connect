import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
`;

const TableBox = styled.div`
  margin-top: 30px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 16px;
  text-align: left;
  font-size: 14px;
  color: #666;
`;

const Td = styled.td`
  padding: 16px;
  border-top: 1px solid #eee;
`;

const Status = styled.span<{ type: string }>`
  font-weight: bold;

  color: ${({ type }) =>
    type === "approved" ? "#0d631b" : "#d97706"};
`;

export default function BookingTable() {
  return (
    <Wrapper>
      {/* <Title>Booking Requests</Title> */}

      <TableBox>
        <Table>
          <thead>
            <tr>
              <Th>User</Th>
              <Th>Equipment</Th>
              <Th>Date</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <Td>Samuel Miller</Td>
              <Td>Case IH Magnum</Td>
              <Td>Oct 12 - Oct 15</Td>
              <Td>
                <Status type="pending">Pending</Status>
              </Td>
              <Td>
                <button>Approve</button>
                <button>Reject</button>
              </Td>
            </tr>
          </tbody>
        </Table>
      </TableBox>
    </Wrapper>
  );
}