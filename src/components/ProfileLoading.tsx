import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

/* 🔥 Shimmer Animation */
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

/* 🔥 Reusable Skeleton */
const Skeleton = styled.div`
  background: linear-gradient(90deg, #eeeee9 25%, #e3e3de 50%, #eeeee9 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 2s infinite linear;
`;

/* Layout */
const Container = styled.div`
  background: #fafaf5;
  min-height: 100vh;
  padding: 110px 20px 60px;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

/* Profile Header */
const HeaderSection = styled.section`
  margin-bottom: 50px;
`;

const HeaderFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const ProfileImage = styled(Skeleton)`
  width: 140px;
  height: 140px;
  border-radius: 24px;

  @media (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled(Skeleton)`
  height: 45px;
  width: 260px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const SubText = styled(Skeleton)`
  height: 20px;
  width: 150px;
  border-radius: 10px;
  opacity: 0.6;
  margin-bottom: 20px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
`;

const ButtonSkeleton = styled(Skeleton)`
  height: 40px;
  width: 130px;
  border-radius: 30px;
`;

/* Stats */
const StatsGrid = styled.section`
  display: grid;
  gap: 20px;
  margin-bottom: 60px;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled(Skeleton)`
  height: 120px;
  border-radius: 24px;
`;

/* Booking Header */
const BookingHeader = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const BookingTitle = styled(Skeleton)`
  height: 25px;
  width: 200px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const BookingSubtitle = styled(Skeleton)`
  height: 14px;
  width: 260px;
  border-radius: 8px;
  opacity: 0.4;
`;

const HeaderRight = styled(Skeleton)`
  height: 20px;
  width: 100px;
  border-radius: 8px;
`;

/* Cards */
const CardsSection = styled.section``;

const Card = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 20px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CardImage = styled(Skeleton)`
  width: 100%;
  height: 160px;
  border-radius: 16px;

  @media (min-width: 768px) {
    width: 250px;
  }
`;

const CardContent = styled.div`
  flex: 1;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CardTitle = styled(Skeleton)`
  height: 20px;
  width: 200px;
  border-radius: 8px;
`;

const Status = styled(Skeleton)`
  height: 20px;
  width: 80px;
  border-radius: 20px;
`;

const Line = styled(Skeleton)`
  height: 14px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const LineShort = styled(Line)`
  width: 50%;
`;

const LineLong = styled(Line)`
  width: 70%;
`;

const CardButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const SmallBtn = styled(Skeleton)`
  height: 35px;
  width: 100px;
  border-radius: 10px;
`;

/* ✅ Component */
export default function ProfileLoading() {
  return (
    <Container>
      <Wrapper>
        {/* HEADER */}
        <HeaderSection>
          <HeaderFlex>
            <ProfileImage />

            <Info>
              <Name />
              <SubText />

              <ButtonRow>
                <ButtonSkeleton />
                <ButtonSkeleton />
              </ButtonRow>
            </Info>
          </HeaderFlex>
        </HeaderSection>

        {/* STATS */}
        <StatsGrid>
          {[1, 2, 3, 4].map((i) => (
            <StatCard key={i} />
          ))}
        </StatsGrid>

        {/* BOOKING HEADER */}
        <BookingHeader>
          <div>
            <BookingTitle />
            <BookingSubtitle />
          </div>
          <HeaderRight />
        </BookingHeader>

        {/* CARDS */}
        <CardsSection>
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardImage />

              <CardContent>
                <CardTop>
                  <CardTitle />
                  <Status />
                </CardTop>

                <LineLong />
                <LineShort />

                <CardButtons>
                  <SmallBtn />
                  <SmallBtn />
                </CardButtons>
              </CardContent>
            </Card>
          ))}
        </CardsSection>
      </Wrapper>
    </Container>
  );
}
