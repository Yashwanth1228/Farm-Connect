import React from "react";
import styled from "@emotion/styled";
import {
  MdDashboard,
  MdInventory,
  MdBookOnline,
  MdPeople,
} from "react-icons/md";
import AdminSidebar, { type SidebarMenuItem } from "./AdminSidebar";
import { SIDEBAR_WIDTH } from "../styles/AdminSidebarStyles";

// ─── Styled components ────────────────────────────────────────────────────────

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
`;

/** Left margin matches sidebar width — single source of truth via SIDEBAR_WIDTH */
const MainContent = styled.main`
  margin-left: ${SIDEBAR_WIDTH}px;
  flex-grow: 1;
  padding: 40px;
  overflow-y: auto;
  min-height: 100vh;
`;

// ─── Default menu for Farm-Connect ───────────────────────────────────────────
// To reuse AdminLayout in a different project:
//   • Replace FARM_CONNECT_MENU with your own items, OR
//   • Pass `menuItems` prop from _app.tsx / the page itself.

const FARM_CONNECT_MENU: SidebarMenuItem[] = [
  { label: "Dashboard", icon: <MdDashboard />, path: "/admin/dashboard" },
  { label: "Equipment",  icon: <MdInventory />,  path: "/admin/equipment" },
  { label: "Bookings",   icon: <MdBookOnline />, path: "/admin/bookings" },
  { label: "Users",      icon: <MdPeople />,     path: "/admin/users" },
];

// ─── Props ────────────────────────────────────────────────────────────────────

interface AdminLayoutProps {
  children: React.ReactNode;
  /** Override the sidebar menu (useful per-page or in tests). */
  menuItems?: SidebarMenuItem[];
  /** Override the sidebar app name. */
  appName?: string;
  /** Override the sidebar subtitle. */
  appSubtitle?: string;
  /** Currently logged-in user's display name. */
  userName?: string;
  /** Currently logged-in user's avatar URL. */
  avatarUrl?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * AdminLayout — shared shell for all admin pages.
 *
 * Registered in _app.tsx so every /admin/* page gets the sidebar
 * automatically — no need to wrap individual pages manually.
 *
 * Portable: swap FARM_CONNECT_MENU or pass `menuItems` to adapt to any project.
 */
const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  menuItems = FARM_CONNECT_MENU,
  appName = "The Agrarian",
  appSubtitle = "Admin Panel",
  userName,
  avatarUrl,
}) => {
  return (
    <LayoutContainer>
      <AdminSidebar
        appName={appName}
        appSubtitle={appSubtitle}
        menuItems={menuItems}
        userName={userName}
        avatarUrl={avatarUrl}
      />
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
};

export default AdminLayout;
