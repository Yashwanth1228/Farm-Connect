import { AdminContent } from "@/context/Admincontext";
import { AppContent } from "@/context/Appcontext";
import styled from "@emotion/styled";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";

type NavItemProps = {
  href: string;
  label: string;
  icon: string;
};

const Aside = styled.aside<{ open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 260px;

  background: #ffffff;
  border-right: 1px solid #e5e7eb;

  display: flex;
  flex-direction: column;
  padding: 24px 0;

  z-index: 100;
  font-family: "Work Sans", sans-serif;

  transition: transform 0.3s ease;

  /* ✅ Desktop always visible */
  transform: translateX(0);

  /* ✅ Mobile behavior */
  @media (max-width: 1024px) {
    transform: ${({ open }) =>
      open ? "translateX(0)" : "translateX(-100%)"};

    box-shadow: ${({ open }) =>
      open ? "0 10px 30px rgba(0,0,0,0.2)" : "none"};
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 6px;

  h1 {
    font-size: 16px;
    font-weight: 700;
    color: #111827;
    margin: 8px 0 0;
    font-family: "Manrope", sans-serif;
  }

  p {
    font-size: 11px;
    font-weight: 600;
    color: #9ca3af;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0;
  }
`;

const Nav = styled.nav`
  flex: 1;
  padding: 0 12px;
`;

const NavItem = styled.div<{ active?: boolean }>`
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

  @media (max-width: 400px) {
    padding: 10px;
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

const Footer = styled.div`
  margin-top: auto;
  padding: 0 12px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 24px 24px;
  margin-bottom: 24px;

  border-bottom: 1px solid #f3f4f6;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;

  p:first-of-type {
    font-size: 12px;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  p:last-of-type {
    font-size: 10px;
    color: #9ca3af;
    text-transform: uppercase;
    font-weight: 700;
    margin: 2px 0 0;
    letter-spacing: 0.5px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;

  border: 2px solid #e5e7eb;
  background: #f3f4f6;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Logout = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 12px 16px;
  border-radius: 8px;
  border: none;

  background: transparent;
  color: #6b7280;

  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fef2f2;
    color: #dc2626;
  }
`;

const Overlay = styled.div<{ open?: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);

  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};

  transition: all 0.3s ease;
  z-index: 90;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const ToggleButton = styled.button<{ open?: boolean }>`
  position: fixed;
  top: 16px;
  left: 16px;

  z-index: 200;

  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  padding: 8px;
  cursor: pointer;

  display: none;

  @media (max-width: 1024px) {
    display: ${({ open }) => (open ? "none" : "flex")};
    align-items: center;
    justify-content: center;
  }
`;



function SidebarItem({ href, label, icon }: NavItemProps) {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <NavItem active={isActive}>
        <Icon active={isActive}>{icon}</Icon>
        <span>{label}</span>
      </NavItem>
    </Link>
  );
}

export default function Sidebar() {
  const { admin, setAdmin }: any = useContext(AppContent);
  const router = useRouter();

  console.log("admin data from side bar", admin);

  const [open, setOpen] = useState(false);

  const handlelogout = async () => {
    try {
      let res = await axios.post(
        "/api/admin/logout",
        {},
        { withCredentials: true }
      );

      if (res.data.success) {
        alert("Logged out successfully");
        setAdmin(false);
        router.push("/admin/adminlogin");
      }
    } catch (error) {
      alert("Logout failed");
    }
  };

  return (
    <>
      {/* ✅ Hamburger */}
      <ToggleButton open={open} onClick={() => setOpen(!open)}>
  <Icon>{open ? "close" : "menu"}</Icon>
</ToggleButton>

      {/* ✅ Overlay */}
      <Overlay open={open} onClick={() => setOpen(false)} />

      {/* ✅ Sidebar */}
      <Aside open={open}>

        <Profile>
          <Logo>
            <Avatar>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcwXB8zeIGyCJ4FNdBBP_rAvO_eS3Sz8mOh3Fnqq192WRD19X2Cy5Y6yEXTJO01xhb1_oHljqP-lF3rVbIokYue6yAld3zWJIQHpVGtv91wlAi8E08Jn3m3i4qLArgnkYl2FUrwc0uBOrTBayTYT5SMzUhx0kqvsAiGOlZ3zyxUWplKv6LfvS6h61mYoGNY3EXTx1K3yzUjV3bwKa1gCCcsZMyOk_xY1qMn_voRL0W8lYdiS05VVg9r-j-a3BlBkHtmGG38PW2Smc" alt="Admin" />
            </Avatar>
            <h1>The Agrarian</h1>
            <p>Editorial Admin</p>
          </Logo>
        </Profile>

        <Nav>
  {[
    { href: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
    { href: "/admin/equipment", label: "Equipment", icon: "agriculture" },
    { href: "/admin/bookings", label: "Bookings", icon: "calendar_today" },
    { href: "/admin/user", label: "Users", icon: "group" },
  ].map((item) => (
    <div key={item.href} onClick={() => setOpen(false)}>
      <SidebarItem {...item} />
    </div>
  ))}
</Nav>

        <Footer>
          <Logout onClick={handlelogout}>
            <Icon>logout</Icon>
            <span>Logout</span>
          </Logout>
        </Footer>
      </Aside>
    </>
  );
}