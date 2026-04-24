import { TopbarContainer, Search } from "../../styles/userStyles";
import { Button } from "../Button";

export default function Topbar() {
  return (
    <TopbarContainer>
      {/* LEFT */}
      <Search placeholder="Search Harvest Ledger..." />

      {/* RIGHT */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        
        {/* 🔔 Notification */}
        <span className="material-symbols-outlined" style={{ cursor: "pointer" }}>
          notifications
        </span>

        {/* ⚙️ Settings */}
        <span className="material-symbols-outlined" style={{ cursor: "pointer" }}>
          settings
        </span>

        {/* BUTTON */}
        <Button>Admin Panel</Button>
      </div>
    </TopbarContainer>
  );
}