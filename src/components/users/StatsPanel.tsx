import {
  RightPanel,
  StatsCard,
  StatNumber,
  GrowthCard,
  Bars,
  Bar,
  Quote,
} from "../../styles/userStyles";

export default function StatsPanel() {
  return (
    <RightPanel>

      {/* 🔥 ACTION BUTTONS */}
      <div style={{ display: "flex", gap: "40px", marginBottom: "0px" }}>
        
        {/* FILTER BUTTON */}
        <button
          style={{
            background: "#fff",
            border: "10px solid #ddd",
            padding: "8px 20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
        
            cursor: "pointer"
          }}
        >
          <span className="material-symbols-outlined">filter_list</span>
          Filter
        </button>

        {/* INVITE BUTTON */}
        <button
          style={{
            background: "#0d631b",
            color: "#fff",
            padding: "8px 20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "none",
            cursor: "pointer"
          }}
        >
          <span className="material-symbols-outlined">person_add</span>
          Invite Member
        </button>

      </div>

      {/* USER STATS */}
      <StatsCard>
        <p style={{ fontSize: "12px", color: "#777" }}>
          USER ECOSYSTEM
        </p>

        <div style={{ marginTop: "10px" }}>
          <StatNumber>1,240</StatNumber>
          <p style={{ fontSize: "12px" }}>Active Cultivators</p>
          <p style={{ color: "green", fontSize: "12px" }}>+12%</p>
        </div>

        <div style={{ marginTop: "15px" }}>
          <StatNumber>84</StatNumber>
          <p style={{ fontSize: "12px" }}>Awaiting Verification</p>
        </div>
      </StatsCard>

      {/* GROWTH */}
      <GrowthCard>
        <h3>Network Expansion</h3>
        <p style={{ fontSize: "12px" }}>
          User registration increased by 15%
        </p>

        <Bars>
          <Bar height="40%" />
          <Bar height="30%" />
          <Bar height="60%" />
          <Bar height="50%" />
          <Bar height="80%" />
          <Bar height="100%" />
        </Bars>
      </GrowthCard>

      {/* QUOTE */}
      <Quote>
        “The strength of the harvest lies not just in the machinery,
        but in the community that wields it.”
      </Quote>

    </RightPanel>
  );
}