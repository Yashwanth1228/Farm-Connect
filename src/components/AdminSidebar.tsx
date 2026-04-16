import React from "react";
import { MdLogout } from "react-icons/md";
import {
  SidebarContainer,
  LogoSection,
  NavList,
  NavItemLink,
  UserProfile,
} from "../styles/AdminSidebarStyles";
import { useRouter } from "next/router";
import Link from "next/link";

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
 * Usage (paste into any Next.js + Emotion project):
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
 * Dependencies: @emotion/styled, react-icons, next/link, next/router
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
    <SidebarContainer>
      {/* Brand */}
      <LogoSection>
        <h1 className="logo-title">{appName}</h1>
        <p className="logo-subtitle">{appSubtitle}</p>
      </LogoSection>

      {/* Navigation */}
      <NavList>
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavItemLink
              href={item.path}
              $isActive={router.pathname === item.path}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavItemLink>
          </li>
        ))}
      </NavList>

      {/* User profile */}
      <UserProfile>
        <img src={avatarUrl} alt={userName} className="user-avatar" />
        <div className="user-info">
          <span className="user-name">{userName}</span>
          <Link href={logoutPath} className="logout-btn">
            <MdLogout size={14} />
            <span>Logout</span>
          </Link>
        </div>
      </UserProfile>
    </SidebarContainer>
  );
};

export default AdminSidebar;
