import React, { useState } from "react";

import {
  CenterBox,
  Spinner,
  StatusCard,
  StatusText,
  StatusTitle,
} from "@/styles/admin/equipment";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
  useUpdateReadMutation,
} from "@/store/api/apiSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  ActionBtn,
  ActionButtons,
  Badge,
  Card,
  Controls,
  DateText,
  Email,
  Empty,
  FilterBar,
  Footer,
  Grid,
  Header,
  Input,
  Message,
  Name,
  NameRow,
  Page,
  PageBtn,
  PageInfo,
  PaginationBar,
  ReadMore,
  Select,
  Subject,
  Title,
} from "./style/contact";

/* ================= COMPONENT ================= */

function ContactPage() {
  const { data, isLoading } = useGetContactsQuery();
  const [updateRead, { isLoading: updating }] = useUpdateReadMutation();
  const [deleteContact] = useDeleteContactMutation();
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchEmail, setSearchEmail] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  const contacts = data?.data || [];

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredContacts = contacts
    .filter((item: any) =>
      item.email.toLowerCase().includes(searchEmail.toLowerCase())
    )
    .sort((a: any, b: any) => {
      if (sortOrder === "latest") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }
    });

  const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedContacts = filteredContacts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    setPage(1);
  }, [searchEmail, sortOrder]);

  const handleMarkAsRead = async (id: string, currentStatus: boolean) => {
    try {
      let res = await updateRead({ id, isRead: !currentStatus }).unwrap();
      console.log("response from update read ", res);
      if (res) {
        toast.success(res.message);
      }
    } catch (err: any) {
      const message = err?.data?.message || err?.error || "Failed to update";

      toast.error(message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      //   await fetch(`/api/contact/${id}`, {
      //     method: "DELETE",
      //   });

      let res = await deleteContact({ id }).unwrap();

      if (res) {
        toast.success(`${res.message}`);
      }
    } catch (err: any) {
      const message = err?.data?.message || err?.error || "Delete failed";

      toast.error(message);
    }
  };

  if (isLoading) {
    return (
      <CenterBox>
        <StatusCard>
          <Spinner />
          <StatusTitle>Loading Messages...</StatusTitle>
          <StatusText>Please wait while we fetch contact data</StatusText>
        </StatusCard>
      </CenterBox>
    );
  }

  return (
    <Page>
      <Title>Messages</Title>

      <FilterBar>
        <Input
          type="text"
          placeholder="Search by email..."
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />

        <Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
        </Select>
      </FilterBar>

      {contacts.length === 0 ? (
        <Empty>No messages found</Empty>
      ) : (
        <Grid>
          {paginatedContacts.map((item: any) => {
            const expanded = openId === item._id;

            return (
              <Card
                key={item._id}
                onClick={() => toggle(item._id)}
                isRead={item.isRead}
              >
                <Header>
                  <NameRow>
                    <Name>{item.name}</Name>
                    {!item.isRead && <Badge>NEW</Badge>}
                  </NameRow>
                  <Email>{item.email}</Email>

                  <DateText>
                    {new Date(item.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </DateText>
                </Header>

                <Subject isRead={item.isRead}>
                  {item.subject.replace(/"/g, "")}
                </Subject>

                <Message expanded={expanded}>{item.message}</Message>

                <Footer>
                  <ReadMore>
                    {expanded ? "Show less ↑" : "Read more →"}
                  </ReadMore>
                </Footer>

                {/* ✅ SHOW ONLY WHEN EXPANDED */}
                {expanded && (
                  <ActionButtons>
                    <ActionBtn
                      disabled={updating}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMarkAsRead(item._id, item.isRead);
                      }}
                    >
                      {updating
                        ? "Updating..."
                        : item.isRead
                        ? "Mark as Unread"
                        : "Mark as Read"}
                    </ActionBtn>

                    <ActionBtn
                      danger
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(item._id);
                      }}
                    >
                      Delete
                    </ActionBtn>
                  </ActionButtons>
                )}
              </Card>
            );
          })}
        </Grid>
      )}

      <PaginationBar>
        <PageInfo>
          Showing {filteredContacts.length === 0 ? 0 : startIndex + 1} to{" "}
          {Math.min(startIndex + ITEMS_PER_PAGE, filteredContacts.length)} of{" "}
          {filteredContacts.length}
        </PageInfo>

        <Controls>
          {/* PREV */}
          <PageBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
            ‹
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
            ›
          </PageBtn>
        </Controls>
      </PaginationBar>
    </Page>
  );
}

export default ContactPage;
