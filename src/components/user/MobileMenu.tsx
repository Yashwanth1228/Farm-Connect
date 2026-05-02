import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);

  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};

  transition: opacity 0.3s ease;

  z-index: 999;
`;

const Drawer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0; /* keep fixed */

  width: 260px;
  height: 100%;
  background: white;
  padding: 20px;

  display: flex;
  flex-direction: column;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform; /* 🔥 performance boost */

  z-index: 1000;
`;

const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 6px;

  font-weight: 600;
  cursor: pointer;

  transition: all 0.2s ease;

  background: ${({ active }) => (active ? "#e6f4ea" : "transparent")};
  color: ${({ active }) => (active ? "#0d631b" : "#6b7280")};

  &:hover {
    background: #f3f4f6;
    color: #111827;
    transform: translateX(3px);
  }
`;

const Icon = styled.span<{ active?: boolean }>`
  font-family: "Material Symbols Outlined";
  font-size: 22px;

  font-variation-settings:
    "FILL" ${({ active }) => (active ? 1 : 0)},
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  margin-bottom: 15px;
`;

const Avatar = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #0d631b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  overflow: hidden;
`;

const UserName = styled.p`
  font-size: 17px;
  font-weight: bold;
`;

const UserEmail = styled.p`
  font-size: 15px;
  color: #777;
  margin-top: -7px;

  /* Optional: Add some styling for better readability */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LogoutButton = styled.button`
  margin-top: auto; /* ✅ MAGIC FIX */
  padding: 12px;
  width: 100%;
  border: none;
  background: #fef2f2;
  color: #dc2626;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #fee2e2;
  }
`;

export default function MobileMenu({ open, setOpen, user, handlelogout }: any) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setOpen(false);

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const handleNav = (path: string) => {
    router.push(path);
    setOpen(false); // ✅ close menu after click
  };

  return (
    <Overlay open={open} onClick={() => setOpen(false)}>
      <Drawer open={open} onClick={(e) => e.stopPropagation()}>
        {user && (
          <ProfileSection onClick={() => router.push("/profile")}>
            <Avatar>
              {user?.profilePic ? (
                <img
                  src={user.profilePic}
                  alt="profile"
                  width="55"
                  height="55"
                />
              ) : (
                user?.name?.charAt(0)?.toUpperCase()
              )}
            </Avatar>
            <UserName>{user?.name}</UserName>
            <UserEmail>{user?.email}</UserEmail>
          </ProfileSection>
        )}

        <MenuItem
          active={router.pathname === "/"}
          onClick={() => handleNav("/")}
        >
          <Icon active={router.pathname === "/"}>home</Icon>
          Home
        </MenuItem>

        <MenuItem
          active={router.pathname === "/equipments"}
          onClick={() => handleNav("/equipments")}
        >
          <Icon active={router.pathname === "/equipments"}>agriculture</Icon>
          Equipment
        </MenuItem>

        <MenuItem
          active={router.pathname === "/about"}
          onClick={() => handleNav("/about")}
        >
          <Icon active={router.pathname === "/about"}>info</Icon>
          About
        </MenuItem>

        <MenuItem
          active={router.pathname === "/contact"}
          onClick={() => handleNav("/contact")}
        >
          <Icon active={router.pathname === "/contact"}>phone</Icon>
          Contact
        </MenuItem>

        {user && <LogoutButton onClick={handlelogout}>Logout</LogoutButton>}
      </Drawer>
    </Overlay>
  );
}
