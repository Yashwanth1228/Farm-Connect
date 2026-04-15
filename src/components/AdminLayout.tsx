/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import {
  MdDashboard,
  MdInventory,
  MdBookOnline,
  MdPeople,
} from "react-icons/md";
import AdminSidebar, { type SidebarMenuItem } from "./AdminSidebar";
import { SIDEBAR_WIDTH } from "../styles/AdminSidebarStyles";

// ─── Layout styles — derived from shared SIDEBAR_WIDTH constant ───────────────

const layoutContainer = css`
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
`;

const mainContent = css`
  margin-left: ${SIDEBAR_WIDTH}px;
  flex-grow: 1;
  padding: 40px;
  overflow-y: auto;
  min-height: 100vh;
`;

// ─── Default menu for Farm-Connect admin ─────────────────────────────────────
// To reuse AdminLayout in another project, either:
//   (a) pass `menuItems` as a prop, or
//   (b) replace FARM_CONNECT_MENU with your own items here.

const FARM_CONNECT_MENU: SidebarMenuItem[] = [
  { label: "Dashboard", icon: <MdDashboard />, path: "/admin/dashboard" },
  { label: "Equipment",  icon: <MdInventory />, path: "/admin/equipment" },
  { label: "Bookings",   icon: <MdBookOnline />, path: "/admin/bookings" },
  { label: "Users",      icon: <MdPeople />,     path: "/admin/users" },
];

// ─── Props ────────────────────────────────────────────────────────────────────

interface AdminLayoutProps {
  children: React.ReactNode;
  /** Override the sidebar menu (useful in storybook / tests / other projects). */
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
 * AdminLayout — wraps every admin page with the shared sidebar.
 *
 * Portable: all Farm-Connect-specific values live in FARM_CONNECT_MENU constant
 * above. When copying to a new project, replace that one constant (or pass
 * `menuItems` as a prop) and you're done.
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
    <div css={layoutContainer}>
      <AdminSidebar
        appName={appName}
        appSubtitle={appSubtitle}
        menuItems={menuItems}
        userName={userName}
        avatarUrl={avatarUrl}
      />
      <main css={mainContent}>{children}</main>
    </div>
  );
};

export default AdminLayout;
