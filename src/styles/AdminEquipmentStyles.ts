import styled from "@emotion/styled";

// ─── Types (exported so equipment.tsx can import from one place) ─────────────
export type AvailabilityStatus = "Available" | "Rented" | "Maintenance";

// ─── Header ──────────────────────────────────────────────────────────────────

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  .search-bar {
    display: flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 99px;
    padding: 8px 20px;
    width: 380px;
    gap: 12px;

    input {
      border: none;
      outline: none;
      width: 100%;
      font-size: 14px;
      color: #374151;
    }

    svg {
      color: #9ca3af;
    }
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 20px;

    .icon-btn {
      color: #4b5563;
      cursor: pointer;
      &:hover { color: #1b5e20; }
    }

    .admin-panel-btn {
      background: #1b5e20;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
      border: none;
      cursor: pointer;
    }
  }
`;

// ─── Page Title ───────────────────────────────────────────────────────────────

export const PageTitle = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .title-info {
    h2 { font-size: 32px; font-weight: 800; color: #111827; margin: 0; }
    p  { font-size: 14px; color: #6b7280; font-weight: 700; text-transform: uppercase; margin-bottom: 4px; }
  }

  .add-btn {
    background: #1b5e20;
    color: white;
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;
    &:hover { background: #144316; }
  }
`;

// ─── Stats ────────────────────────────────────────────────────────────────────

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
`;

export const StatCard = styled.div<{ $borderColor: string }>`
  background: white;
  padding: 24px;
  border-radius: 16px;
  border-left: 4px solid ${({ $borderColor }) => $borderColor};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

  .label { font-size: 14px; font-weight: 600; color: #4b5563; margin-bottom: 8px; display: block; }
  .value { font-size: 32px; font-weight: 800; color: #111827; }
`;

// ─── Inventory Table ──────────────────────────────────────────────────────────

export const InventoryTable = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  margin-bottom: 40px;

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      text-align: left;
      padding: 20px 24px;
      font-size: 12px;
      font-weight: 700;
      color: #9ca3af;
      text-transform: uppercase;
      border-bottom: 1px solid #f3f4f6;
    }

    td {
      padding: 24px;
      border-bottom: 1px solid #f9fafb;
      vertical-align: middle;
    }
  }

  .asset-cell {
    display: flex;
    align-items: center;
    gap: 16px;

    img { width: 80px; height: 50px; border-radius: 8px; object-fit: cover; }
    .asset-name { font-size: 16px; font-weight: 700; color: #111827; display: block; }
    .asset-meta { font-size: 12px; color: #9ca3af; }
  }

  .price-cell { font-size: 18px; font-weight: 800; color: #1b5e20; }
`;

// ─── Status Pill ──────────────────────────────────────────────────────────────

const STATUS_MAP: Record<AvailabilityStatus, { bg: string; color: string }> = {
  Available:   { bg: "#e8f5e9", color: "#2e7d32" },
  Rented:      { bg: "#fff3e0", color: "#ef6c00" },
  Maintenance: { bg: "#f3f4f6", color: "#757575" },
};

export const StatusPill = styled.div<{ $status: AvailabilityStatus }>`
  padding: 6px 14px;
  border-radius: 99px;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
  white-space: nowrap;
  background: ${({ $status }) => STATUS_MAP[$status]?.bg ?? "#f3f4f6"};
  color: ${({ $status }) => STATUS_MAP[$status]?.color ?? "#6b7280"};
`;

// ─── Pagination ───────────────────────────────────────────────────────────────

export const PaginationSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 24px;

  .count-info { font-size: 14px; color: #6b7280; }

  .nav-btns {
    display: flex;
    gap: 8px;

    button {
      padding: 8px 20px;
      border-radius: 8px;
      border: 1.5px solid #e5e7eb;
      background: white;
      font-weight: 700;
      cursor: pointer;
      &:hover { border-color: #1b5e20; color: #1b5e20; }
      &.active { background: #1b5e20; color: white; border-color: #1b5e20; }
    }
  }
`;

// ─── Insights Card ────────────────────────────────────────────────────────────

export const InsightsCard = styled.div`
  background: white;
  padding: 32px;
  border-radius: 24px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 24px;

  .insight-icon {
    padding: 12px;
    background: #e8f5e9;
    border-radius: 12px;
    color: #2e7d32;
    flex-shrink: 0;
  }

  .insight-content {
    h4 { font-size: 18px; font-weight: 700; color: #111827; margin-bottom: 12px; }
    p  { font-size: 14px; color: #4b5563; line-height: 1.6; }
    .highlight { font-weight: 700; color: #1b5e20; }
    .view-link {
      color: #1b5e20;
      font-weight: 700;
      font-size: 14px;
      text-decoration: none;
      margin-top: 16px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

// ─── Sale Banner ──────────────────────────────────────────────────────────────

export const SaleBanner = styled.div`
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
    url('https://images.unsplash.com/photo-1594398044299-591b3b21817e?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
  color: white;

  h3 { font-size: 36px; font-weight: 800; margin-bottom: 8px; }
  p  { font-size: 16px; color: rgba(255,255,255,0.9); max-width: 400px; }
`;

// ─── Modal ────────────────────────────────────────────────────────────────────

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`;

const modalAnimation = `
  @keyframes slideUp {
    from { transform: translateY(24px); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

/** Full-width two-panel container (Add / Edit) */
export const ModalContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 800px;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
  display: flex;
  overflow: hidden;
  ${modalAnimation}
`;

/** Narrower single-panel container (Delete confirmation) */
export const ModalContainerSm = styled.div`
  background: white;
  width: 100%;
  max-width: 460px;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  ${modalAnimation}
`;

/** Green decorative left panel */
export const ModalLeftPanel = styled.div`
  width: 220px;
  min-width: 220px;
  background: linear-gradient(160deg, #1b5e20 0%, #2e7d32 60%, #388e3c 100%);
  padding: 40px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  .panel-icon {
    width: 44px;
    height: 44px;
    background: rgba(255,255,255,0.15);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 26px;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 16px;
    color: white;
  }

  p {
    font-size: 13px;
    color: rgba(255,255,255,0.75);
    line-height: 1.6;
    margin: 0;
  }

  .panel-footer {
    font-size: 11px;
    color: rgba(255,255,255,0.5);
    margin-top: auto;
    padding-top: 32px;
  }
`;

/** White scrollable right panel — shared by Add, Edit, and Delete modals */
export const ModalRightPanel = styled.div`
  flex: 1;
  padding: 36px 36px 32px;
  overflow-y: auto;
  max-height: 90vh;
  position: relative;

  .modal-header {
    margin-bottom: 28px;
    padding-right: 32px;

    h3 { font-size: 22px; font-weight: 800; color: #111827; margin: 0 0 6px; }
    p  { font-size: 13px; color: #6b7280; margin: 0; }
  }

  .close-btn {
    position: absolute;
    top: 28px;
    right: 28px;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: #f3f4f6;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    font-size: 18px;
    line-height: 1;
    &:hover { background: #e5e7eb; color: #111827; }
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .form-group {
    margin-bottom: 20px;

    label {
      font-size: 11px;
      font-weight: 700;
      color: #6b7280;
      display: block;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    input, select, textarea {
      width: 100%;
      padding: 11px 14px;
      border-radius: 10px;
      border: 1.5px solid #e5e7eb;
      font-size: 14px;
      color: #111827;
      background: #fafafa;
      box-sizing: border-box;
      transition: border-color 0.2s, background 0.2s;
      font-family: inherit;

      &:focus {
        outline: none;
        border-color: #2e7d32;
        background: white;
      }
    }

    textarea { resize: vertical; min-height: 80px; }
    select   { cursor: pointer; }
  }

  .availability-group {
    margin-bottom: 20px;

    label {
      font-size: 11px;
      font-weight: 700;
      color: #6b7280;
      display: block;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .status-buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
  }

  .modal-actions {
    display: flex;
    gap: 12px;
    margin-top: 28px;
    padding-top: 24px;
    border-top: 1px solid #f3f4f6;

    button {
      flex: 1;
      padding: 12px 20px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      border: none;
      transition: all 0.2s;
    }

    .cancel-btn  { background: #f3f4f6; color: #4b5563; &:hover { background: #e5e7eb; } }
    .confirm-btn { background: #1b5e20; color: white;   &:hover { background: #144316; } }
    .delete-btn  { background: #ef4444; color: white;   &:hover { background: #dc2626; } }
  }
`;

// ─── Availability Toggle Buttons ──────────────────────────────────────────────

export const StatusToggleBtn = styled.button<{ $active: boolean; $color: string }>`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 16px;
  border-radius: 99px;
  border: 2px solid ${({ $active, $color }) => ($active ? $color : "#e5e7eb")};
  background: ${({ $active, $color }) => ($active ? $color + "18" : "white")};
  color: ${({ $active, $color }) => ($active ? $color : "#9ca3af")};
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: inherit;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $active, $color }) => ($active ? $color : "#d1d5db")};
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${({ $color }) => $color};
    color: ${({ $color }) => $color};
    background: ${({ $color }) => $color + "18"};
  }
`;

// ─── Image Upload Box ─────────────────────────────────────────────────────────

export const ImageUploadBox = styled.div<{ $hasImage: boolean }>`
  border: 2px dashed ${({ $hasImage }) => ($hasImage ? "#2e7d32" : "#e5e7eb")};
  border-radius: 14px;
  background: ${({ $hasImage }) => ($hasImage ? "#f0fdf4" : "#fafafa")};
  padding: 28px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
  min-height: 120px;

  &:hover {
    border-color: #2e7d32;
    background: #f0fdf4;
  }

  .upload-icon {
    color: #2e7d32;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }

  .upload-text {
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 4px;
  }

  .upload-hint {
    font-size: 11px;
    color: #9ca3af;
  }

  img.preview {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .change-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 13px;
    font-weight: 700;
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover .change-overlay {
    opacity: 1;
  }
`;

// ─── Chat FAB ─────────────────────────────────────────────────────────────────

export const ChatFab = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: #1b5e20;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.2s;

  &:hover { background: #155217; }

  img {
    width: 24px;
    filter: invert(1);
  }
`;
