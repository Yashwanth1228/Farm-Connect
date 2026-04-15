import { css } from "@emotion/react";

// ─── Shared constant — import in AdminLayout too ──────────────────────────────
export const SIDEBAR_WIDTH = 260;

export const sidebarContainer = css`
  width: ${SIDEBAR_WIDTH}px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  overflow-y: auto;
`;

export const logoSection = css`
  margin-bottom: 48px;
  .logo-title {
    font-size: 24px;
    font-weight: 800;
    color: #1b5e20;
    margin: 0;
  }
  .logo-subtitle {
    font-size: 12px;
    color: #6b7280;
    margin: 4px 0 0;
  }
`;

export const navList = css`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

export const navItem = (isActive: boolean) => css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 12px;
  color: ${isActive ? "#1b5e20" : "#4b5563"};
  background: ${isActive ? "#f1f8e9" : "transparent"};
  font-weight: ${isActive ? "600" : "500"};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-right: ${isActive ? "4px solid #1b5e20" : "4px solid transparent"};
  text-decoration: none;

  &:hover {
    background: #f9fafb;
    color: #1b5e20;
  }

  svg {
    font-size: 20px;
    flex-shrink: 0;
  }
`;

export const userProfile = css`
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  align-items: center;
  gap: 12px;

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  .user-info {
    flex-grow: 1;
    min-width: 0;
    .user-name {
      font-size: 14px;
      font-weight: 600;
      color: #111827;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .logout-btn {
      font-size: 12px;
      color: #9ca3af;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-top: 2px;
      &:hover {
        color: #ef4444;
      }
    }
  }
`;
