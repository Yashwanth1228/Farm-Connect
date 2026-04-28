import type { NextPage } from "next";
import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import UserCard from "@/components/users/UserCard";
import StatsPanel from "@/components/users/StatsPanel";

import styled from "@emotion/styled";

import { Page, Main, Content, Title } from "@/styles/userStyles";
import { useGetUsersQuery } from "@/store/api/apiSlice";
import {
  CenterBox,
  Spinner,
  StatusCard,
  StatusText,
  StatusTitle,
} from "@/styles/admin/equipment";
import User from "../api/user";

/* GRID */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* ✅ stack */
  }
`;

const UserContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 640px) {
    margin-top: 10px;
  }
`;

/* PAGINATION */
const Pageination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  gap: 10px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const PText = styled.p`
  font-size: 13px;
  color: #777;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

/* BUTTON STYLE */
const PageBtn = styled.button<{ active?: boolean }>`
  min-width: 34px;
  height: 34px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  background: ${({ active }) => (active ? "#0d631b" : "#eee")};
  color: ${({ active }) => (active ? "#fff" : "#000")};

  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover {
    background: #0d631b;
    color: #fff;
  }

  @media (max-width: 640px) {
    flex: 1; /* ✅ equal width buttons */
    height: 36px;
  }
`;

const PaginationControls = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 640px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* neat grid */
  }
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* ITEMS PER PAGE */
const ITEMS_PER_PAGE = 5;

const UserPage: NextPage = () => {
  const { data, isLoading, error } = useGetUsersQuery();
  const [open, setOpen] = useState(false);

  console.log(" user data", data);

  const users = data?.data || [];

  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentUsers = users?.slice(start, start + ITEMS_PER_PAGE);

  const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1)
  .slice(Math.max(0, page - 2), page + 1);

  if (isLoading) {
    return (
      <CenterBox>
        <StatusCard>
          <Spinner />
          <StatusTitle>Loading userdata...</StatusTitle>
          <StatusText>Please wait while we fetch your data</StatusText>
        </StatusCard>
      </CenterBox>
    );
  }

  return (
    <Page>
      {/* <Sidebar /> */}

      <Main>
        {/* <Topbar /> */}

        <Content>
          <Title>User Directory</Title>

          <Grid>
            {/* LEFT SIDE */}
            <UserList>
              {/* USERS LIST */}
              {currentUsers?.map((user: any, index: any) => (
                <UserCard
                  key={index}
                  name={user.name}
                  email={user.email}
                  img={user.profilePic} // ✅ PASS IMAGE
                />
              ))}

              {/* PAGINATION */}
              <Pageination>
  <PText>
    Showing {start + 1} to{" "}
    {Math.min(start + ITEMS_PER_PAGE, users.length)} of{" "}
    {users.length} users
  </PText>

  <PaginationControls>
    <PageBtn
      disabled={page === 1}
      onClick={() => setPage(page - 1)}
    >
      ‹
    </PageBtn>

    

    {visiblePages.map((p) => (
  <PageBtn
    key={p}
    active={page === p}
    onClick={() => setPage(p)}
  >
    {p}
  </PageBtn>
))}

    <PageBtn
      disabled={page === totalPages}
      onClick={() => setPage(page + 1)}
    >
      ›
    </PageBtn>
  </PaginationControls>
</Pageination>
            </UserList>

            {/* RIGHT SIDE */}
            <StatsPanel users={users} />
          </Grid>
        </Content>
      </Main>
    </Page>
  );
};

export default UserPage;
