/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function ProfileEmpty() {
  const router = useRouter();

  return (
    <Page>
      <Main>
        {/* PROFILE CARD */}
        <ProfileCard>
          <ProfileRow>
            <Avatar>
              <img src="https://i.pravatar.cc/300?img=12" />
            </Avatar>

            <ProfileContent>
              <NameRow>
                <h1>Arthur Miller</h1>
                <Tag>Elite Cultivator</Tag>
              </NameRow>

              <Desc>
                Managing Miller Family Estates since 2012. Specializing in
                organic soy and corn rotation across 400 acres.
              </Desc>

              <InfoRow>
                <InfoBox>📍 Cedar Rapids</InfoBox>
                <InfoBox>✔ Verified Partner</InfoBox>
              </InfoRow>
            </ProfileContent>
          </ProfileRow>
        </ProfileCard>

        {/* HEADER */}
        <Header>
          <h2>My Bookings</h2>
          <Tabs>
            <span>Past</span>
            <ActiveTab>Active</ActiveTab>
          </Tabs>
        </Header>

        {/* EMPTY STATE */}
        <Grid>
          {/* LEFT */}
          <EmptyBox>
            <IconCircle>
              🌾
              <MiniIcon>🔍</MiniIcon>
              <MiniIcon2>📅</MiniIcon2>
            </IconCircle>

            <h3>No bookings yet</h3>

            <p>
              Your fleet is currently quiet. Explore our curated selection of
              high-performance machinery ready for your next harvest.
            </p>

            <PrimaryBtn onClick={() => router.push("/equipments")}>
              Browse Equipment →
            </PrimaryBtn>
          </EmptyBox>

          {/* RIGHT */}
          <Side>
            <Card>
              <h4>💡 Seasonal Tip</h4>
              <p>
                Harvest season starts soon. Book early to ensure availability.
              </p>
            </Card>

            <CardHighlight>
              <h4>New Arrivals</h4>
              <p>Latest 2024 equipment just added.</p>
              <a>View Fleet →</a>
            </CardHighlight>

            <SupportCard>
              <div>
                <strong>Need Help?</strong>
                <p>Talk to a specialist</p>
              </div>
              <span>→</span>
            </SupportCard>
          </Side>
        </Grid>
      </Main>
    </Page>
  );
}

const Page = styled.div`
  background: #fafaf5;
  min-height: 100vh;
`;

const Main = styled.div`
  padding: 120px 20px 60px;
  max-width: 1000px;
  margin: auto;
`;

const ProfileCard = styled.div`
  background: #f4f4ef;
  padding: 30px;
  border-radius: 24px;
  margin-bottom: 40px;
`;

const ProfileRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileContent = styled.div`
  flex: 1;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 24px;
    font-weight: 800;
  }
`;

const Tag = styled.span`
  background: #d6c953;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
`;

const Desc = styled.p`
  margin-top: 10px;
  color: #555;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const InfoBox = styled.div`
  background: #e3e3de;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  h2 {
    font-size: 20px;
    font-weight: bold;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 10px;
`;

const ActiveTab = styled.span`
  border-bottom: 2px solid #0d631b;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
`;

const EmptyBox = styled.div`
  background: #eeeee9;
  padding: 40px;
  border-radius: 24px;
  text-align: center;

  h3 {
    margin-top: 20px;
    font-size: 22px;
  }

  p {
    margin-top: 10px;
    color: #666;
  }
`;

const IconCircle = styled.div`
  width: 120px;
  height: 120px;
  background: #e3e3de;
  border-radius: 50%;
  margin: auto;
  position: relative;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MiniIcon = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
`;

const MiniIcon2 = styled.div`
  position: absolute;
  bottom: -5px;
  left: -5px;
`;

const PrimaryBtn = styled.button`
  margin-top: 20px;
  background: #0d631b;
  color: white;
  padding: 12px 20px;
  border-radius: 20px;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Card = styled.div`
  background: #e3e3de;
  padding: 20px;
  border-radius: 20px;
`;

const CardHighlight = styled.div`
  background: #fed7ca;
  padding: 20px;
  border-radius: 20px;
`;

const SupportCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
`;
