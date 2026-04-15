/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdLogout } from "react-icons/md";
import {
  sidebarContainer,
  logoSection,
  navList,
  navItem,
  userProfile,
} from "../styles/AdminSidebarStyles";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SidebarMenuItem {
  /** Text shown in the nav */
  label: string;
  /** React icon element, e.g. <MdDashboard /> */
  icon: React.ReactNode;
  /** Route path, e.g. "/admin/dashboard" */
  path: string;
}

export interface AdminSidebarProps {
  /**
   * Application/brand name shown at the top.
   * Change this per-project without touching anything else.
   * @default "Admin Panel"
   */
  appName?: string;
  /**
   * Subtitle shown below the app name (e.g. "Administrator").
   * @default "Administrator"
   */
  appSubtitle?: string;
  /**
   * Navigation items. Pass one array and the sidebar renders them all.
   * Active state is detected automatically via Next.js router.
   */
  menuItems: SidebarMenuItem[];
  /**
   * Display name of the currently logged-in user.
   * @default "Admin User"
   */
  userName?: string;
  /**
   * URL to the user's avatar image.
   * @default generic avatar icon
   */
  avatarUrl?: string;
  /**
   * Where to navigate on logout click.
   * @default "/logout"
   */
  logoutPath?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * AdminSidebar — portable, project-agnostic sidebar.
 *
 * Usage example (paste this in any project):
 * ```tsx
 * import { MdDashboard, MdInventory } from "react-icons/md";
 * import AdminSidebar from "@/components/AdminSidebar";
 *
 * <AdminSidebar
 *   appName="My Project"
 *   appSubtitle="Admin"
 *   menuItems={[
 *     { label: "Dashboard", icon: <MdDashboard />, path: "/admin/dashboard" },
 *     { label: "Inventory", icon: <MdInventory />, path: "/admin/inventory" },
 *   ]}
 *   userName="Jane Doe"
 * />
 * ```
 *
 * Dependencies: @emotion/react, react-icons, next/link, next/router
 */
const AdminSidebar: React.FC<AdminSidebarProps> = ({
  appName = "Admin Panel",
  appSubtitle = "Administrator",
  menuItems,
  userName = "Admin User",
  avatarUrl = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  logoutPath = "/logout",
}) => {
  const router = useRouter();

  return (
    <div css={sidebarContainer}>
      {/* Brand */}
      <div css={logoSection}>
        <h1 className="logo-title">{appName}</h1>
        <p className="logo-subtitle">{appSubtitle}</p>
      </div>

      {/* Navigation */}
      <ul css={navList}>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path} css={navItem(router.pathname === item.path)}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* User profile */}
      <div css={userProfile}>
        <img src={avatarUrl} alt={userName} className="user-avatar" />
        <div className="user-info">
          <span className="user-name">{userName}</span>
          <Link href={logoutPath} className="logout-btn">
            <MdLogout size={14} />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
