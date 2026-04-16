import { SidebarContainer, MenuItem } from "../../styles/userStyles";

export default function Sidebar() {
  return (
    <SidebarContainer>
      {/* TOP */}
      <div>
        <img
          src="/images/logos.png"
          alt="Logo"
          style={{
            width: "140px",
            height: "auto",   // ✅ FIX
            marginBottom: "20px"
          }}
        />
        <MenuItem>
          <span className="material-symbols-outlined">dashboard</span>
          Dashboard
        </MenuItem>

        <MenuItem>
          <span className="material-symbols-outlined">agriculture</span>
          Equipment
        </MenuItem>

        <MenuItem>
          <span className="material-symbols-outlined">calendar_today</span>
          Bookings
        </MenuItem>

        <MenuItem active>
          <span className="material-symbols-outlined">group</span>
          Users
        </MenuItem>
      </div>

      {/* 🔥 BOTTOM SECTION */}
      <div style={{ marginTop: "150px" }}>

        {/* 👤 PROFILE */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Admin"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />

          <div>
            <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px" }}>
              Alex Rivera
            </p>
            <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>
              Super Admin
            </p>
          </div>
        </div>



      </div>




      {/* 🔥 BOTTOM LOGOUT */}
      <div style={{ marginTop: "auto" }}>
        <MenuItem>
          <span className="material-symbols-outlined">logout</span>
          Logout
        </MenuItem>
      </div>
    </SidebarContainer>
  );
}