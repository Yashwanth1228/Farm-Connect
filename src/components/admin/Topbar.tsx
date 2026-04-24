import styled from "@emotion/styled";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  height: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 32px;

  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);

  border-bottom: 1px solid #e5e7eb;
`;

/* LEFT SECTION */
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

/* SEARCH */
const SearchWrapper = styled.div`
  position: relative;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);

  font-family: "Material Symbols Outlined";
  font-size: 18px;
  color: #9ca3af;

  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
`;

const Input = styled.input`
  padding: 6px 12px 6px 32px;
  width: 260px;

  background: #f3f4f6;
  border: none;
  border-radius: 6px;

  font-size: 14px;
  font-family: "Work Sans", sans-serif;

  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px rgba(13, 99, 27, 0.2);
  }
`;

/* RIGHT SECTION */
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #9ca3af;

  &:hover {
    color: #4b5563;
  }
`;

const Icon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 22px;

  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
`;

const Divider = styled.div`
  height: 32px;
  width: 1px;
  background: #e5e7eb;
  margin: 0 8px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileText = styled.div`
  text-align: right;

  p:first-of-type {
    font-size: 12px;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  p:last-of-type {
    font-size: 10px;
    color: #9ca3af;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.5px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid #f3f4f6;
  background: #e5e7eb;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Topbar() {
  return (
    <Header>
      <Left>
        <SearchWrapper>
          <SearchIcon>search</SearchIcon>
          <Input placeholder="Search..." />
        </SearchWrapper>
      </Left>

      <Right>
        <IconButton>
          <Icon>notifications</Icon>
        </IconButton>

        <Divider />

        <Profile>
          <ProfileText>
            <p>Admin Panel</p>
            <p>Active Now</p>
          </ProfileText>

          <Avatar>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcwXB8zeIGyCJ4FNdBBP_rAvO_eS3Sz8mOh3Fnqq192WRD19X2Cy5Y6yEXTJO01xhb1_oHljqP-lF3rVbIokYue6yAld3zWJIQHpVGtv91wlAi8E08Jn3m3i4qLArgnkYl2FUrwc0uBOrTBayTYT5SMzUhx0kqvsAiGOlZ3zyxUWplKv6LfvS6h61mYoGNY3EXTx1K3yzUjV3bwKa1gCCcsZMyOk_xY1qMn_voRL0W8lYdiS05VVg9r-j-a3BlBkHtmGG38PW2Smc"
              alt="Admin"
            />
          </Avatar>
        </Profile>
      </Right>
    </Header>
  );
}