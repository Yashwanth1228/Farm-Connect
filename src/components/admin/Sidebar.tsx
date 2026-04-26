import { AdminContent } from "@/context/Admincontext";
import { AppContent } from "@/context/Appcontext";
import styled from "@emotion/styled";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

type NavItemProps = {
  href: string;
  label: string;
  icon: string;
};

const Aside = styled.aside`
  height: 100vh;
  width: 260px;
  position: fixed;
  left: 0;
  top: 0;

  background: #ffffff;
  border-right: 1px solid #e5e7eb;

  display: flex;
  flex-direction: column;

  padding: 24px 0; /* reduced from 32px for balance */

  z-index: 50;
  font-family: "Work Sans", sans-serif;
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

function SidebarItem({ href, label, icon }: NavItemProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <NavItem active={isActive}>
        <Icon active={isActive}>{icon}</Icon>
        <span className="label">{label}</span>
      </NavItem>
    </Link>
  );
}

export default function Sidebar() {
  // const {admin , setAdmin } : any = useContext(AdminContent)
  const { admin, setAdmin }: any = useContext(AppContent);
  const router = useRouter();

  console.log("admin data from side bar", admin);

  const handlelogout = async () => {
    try {
      let res = await axios.post(
        "/api/admin/logout",
        {},
        { withCredentials: true },
      );

      if (res.data.success) {
        alert("Logged out successfully");
        setAdmin(false);
        router.push("/admin/adminlogin");
      } else {
        alert("Logout failed");
      }
    } catch (error) {
      console.log("Logout error ", error);
      alert("An error occurred during logout");
    }
  };

  return (
    <Aside>
      {/* <Profile>
          <ProfileText>
            <p>Admin Panel</p>
            <p>Active Now</p>
          </ProfileText>

          <Avatar>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcwXB8zeIGyCJ4FNdBBP_rAvO_eS3Sz8mOh3Fnqq192WRD19X2Cy5Y6yEXTJO01xhb1_oHljqP-lF3rVbIokYue6yAld3zWJIQHpVGtv91wlAi8E08Jn3m3i4qLArgnkYl2FUrwc0uBOrTBayTYT5SMzUhx0kqvsAiGOlZ3zyxUWplKv6LfvS6h61mYoGNY3EXTx1K3yzUjV3bwKa1gCCcsZMyOk_xY1qMn_voRL0W8lYdiS05VVg9r-j-a3BlBkHtmGG38PW2Smc"
              alt="Admin"
            />
          </Avatar>
        </Profile> */}

      <Profile>
        <Logo>
          <Avatar>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcwXB8zeIGyCJ4FNdBBP_rAvO_eS3Sz8mOh3Fnqq192WRD19X2Cy5Y6yEXTJO01xhb1_oHljqP-lF3rVbIokYue6yAld3zWJIQHpVGtv91wlAi8E08Jn3m3i4qLArgnkYl2FUrwc0uBOrTBayTYT5SMzUhx0kqvsAiGOlZ3zyxUWplKv6LfvS6h61mYoGNY3EXTx1K3yzUjV3bwKa1gCCcsZMyOk_xY1qMn_voRL0W8lYdiS05VVg9r-j-a3BlBkHtmGG38PW2Smc"
              alt="Admin"
            />
          </Avatar>
          <h1>The Agrarian</h1>
          <p>Editorial Admin</p>
        </Logo>
      </Profile>

      <Nav>
        <SidebarItem
          href="/admin/dashboard"
          label="Dashboard"
          icon="dashboard"
        />
        <SidebarItem
          href="/admin/equipment"
          label="Equipment"
          icon="agriculture"
        />
        <SidebarItem
          href="/admin/bookings"
          label="Bookings"
          icon="calendar_today"
        />
        <SidebarItem href="/admin/user" label="Users" icon="group" />
      </Nav>

      <Footer>
        <Logout onClick={handlelogout}>
          <Icon>logout</Icon>
          <span className="label">Logout</span>
        </Logout>
      </Footer>
    </Aside>
  );
}
