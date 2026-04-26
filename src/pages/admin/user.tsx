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
`;
const UserContainer = styled.div`
  margin-top: 20px;
`;

/* PAGINATION */
const Pageination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-right: 200px;
`;

const PText = styled.p`
  font-size: "13px";
  color: #777;
`;

/* BUTTON STYLE */
const BtnStyle = {
  width: "34px",
  height: "34px",
  borderRadius: "8px",
  border: "none",
  background: "#eee",
  cursor: "pointer",
};

/* ITEMS PER PAGE */
const ITEMS_PER_PAGE = 5;

const UserPage: NextPage = () => {
  const { data, isLoading, error } = useGetUsersQuery();

  console.log(" user data", data);

  const users = data?.data || [];

  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentUsers = users?.slice(start, start + ITEMS_PER_PAGE);

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
            <UserContainer>
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
                  {Math.min(start + ITEMS_PER_PAGE, users?.length)} of{" "}
                  {users.length} users
                </PText>

                <div style={{ display: "flex", gap: "8px" }}>
                  {/* PREVIOUS */}
                  <button
                    style={BtnStyle}
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    ‹
                  </button>

                  {/* PAGE NUMBERS */}
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      style={{
                        ...BtnStyle,
                        background: page === i + 1 ? "#0d631b" : "#eee",
                        color: page === i + 1 ? "#fff" : "#000",
                      }}
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}

                  {/* NEXT */}
                  <button
                    style={BtnStyle}
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                  >
                    ›
                  </button>
                </div>
              </Pageination>
            </UserContainer>

            {/* RIGHT SIDE */}
            <StatsPanel users={users} />
          </Grid>
        </Content>
      </Main>
    </Page>
  );
};

export default UserPage;
