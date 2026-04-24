import {
    RightPanel,
    StatsCard,
    StatNumber,
    GrowthCard,
    Bars,
    Bar,
    Quote,
    ChartWrapper,
    BarContainer,
    LabelsRow,
    Label,
  } from "../../styles/userStyles";
  
  type Props = {
    users: any[];
  };
  
  export default function StatsPanel({ users }: Props) {
  
    const totalUsers = users.length;
  
    const normalUsers = users.filter(u => u.role === "user").length;
  
    const admins = users.filter(u => u.role === "admin").length;

    const getMonthlyData = (users: any[]) => {
      const months = Array(6).fill(0); // last 6 months
    
      const now = new Date();
    
      users.forEach((user) => {
        if (!user.createdAt) return;
    
        const date = new Date(user.createdAt);
        const diffMonths =
          (now.getFullYear() - date.getFullYear()) * 12 +
          (now.getMonth() - date.getMonth());
    
        if (diffMonths >= 0 && diffMonths < 6) {
          months[5 - diffMonths] += 1;
        }
      });
    
      return months;
    };

    const monthlyData = getMonthlyData(users);

    

const max = Math.max(...monthlyData, 1);

const percentages = monthlyData.map(
  (val) => `${(val / max) * 100}%`
);

const getLast6Months = () => {
  const months = [];
  const now = new Date();

  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push(
      d.toLocaleString("en-IN", { month: "short" }) // Jan, Feb...
    );
  }

  return months;
};

const monthLabels = getLast6Months();

const maxIndex = monthlyData.indexOf(Math.max(...monthlyData));
  
    return (
      <RightPanel>
  
        {/* <div style={{ display: "flex", gap: "40px" }}>
          <button style={{
            background: "#fff",
            border: "1px solid #ddd",
            padding: "8px 20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            cursor: "pointer"
          }}>
            <span className="material-symbols-outlined">filter_list</span>
            Filter
          </button>
  
          <button style={{
            background: "#0d631b",
            color: "#fff",
            padding: "8px 20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "none",
            cursor: "pointer"
          }}>
            <span className="material-symbols-outlined">person_add</span>
            Invite Member
          </button>
        </div> */}
  
        {/* STATS */}
        <StatsCard>
          <p style={{ fontSize: "12px", color: "#777" }}>
            USER ECOSYSTEM
          </p>
  
          <div style={{ marginTop: "10px" }}>
            <StatNumber>{totalUsers}</StatNumber>
            <p style={{ fontSize: "12px" }}>Total Users</p>
          </div>
  
          <div style={{ marginTop: "15px" }}>
            <StatNumber>{normalUsers}</StatNumber>
            <p style={{ fontSize: "12px" }}>Active Users</p>
          </div>
  
          <div style={{ marginTop: "15px" }}>
            <StatNumber>{admins}</StatNumber>
            <p style={{ fontSize: "12px" }}>Admins</p>
          </div>
        </StatsCard>
  
        {/* GROWTH (still static unless you have dates) */}
        <GrowthCard>
  <h3>Network Expansion</h3>
  <p style={{ fontSize: "12px" }}>
    Last 6 months user growth
  </p>

  <ChartWrapper>
    {/* Bars */}
    <Bars>
      {percentages.map((height, i) => (
        <BarContainer key={i}>
          <Bar
            height={height}
            title={`${monthlyData[i]} users`}
            style={{
              background:
                i === maxIndex
                  ? "linear-gradient(180deg, #facc15, #ca8a04)"
                  : undefined,
            }}
          />
        </BarContainer>
      ))}
    </Bars>

    {/* Labels */}
    <LabelsRow>
      {monthLabels.map((month, i) => (
        <Label key={i}>{month}</Label>
      ))}
    </LabelsRow>
  </ChartWrapper>
</GrowthCard>
  
        <Quote>
          “The strength of the harvest lies not just in the machinery,
          but in the community that wields it.”
        </Quote>
  
      </RightPanel>
    );
  }