import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 999; // ✅ ADD THIS
`;

const Drawer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  width: 260px;
  height: 100%;
  background: white;
  padding: 20px;
  transition: left 0.3s ease;
  z-index: 1000; // ✅ ADD THIS
`;

const MenuItem = styled.div`
  padding: 14px 0;
  font-size: 18px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #0d631b;
  }
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
  margin-top: 20px;
  padding: 12px;
  width: 100%;
  border: none;
  background: #9ca3af;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 15rem;

  &:hover {
    background: #0d631b;
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

        <MenuItem onClick={() => handleNav("/")}>Home</MenuItem>
        <MenuItem onClick={() => handleNav("/equipments")}>Equipment</MenuItem>
        <MenuItem onClick={() => handleNav("/about")}>About</MenuItem>
        <MenuItem onClick={() => handleNav("/contact")}>Contact</MenuItem>

        {user && <LogoutButton onClick={handlelogout}>Logout</LogoutButton>}
      </Drawer>
    </Overlay>
  );
}
