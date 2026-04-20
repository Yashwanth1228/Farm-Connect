import ProfileEmpty from "@/components/ProfileEmpty";
import ProfileLoading from "@/components/ProfileLoading";

import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { AppContent } from "@/context/Appcontext";

export default function ProfilePage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  //   const { user, setUser, loading: userLoading } = useContext(AppContent);

  const { user, setUser }: any = useContext(AppContent);

  // =========================
  // IMAGE UPLOAD
  // =========================
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user?.email) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "farm-connect"); // your preset
    formData.append("cloud_name", "duj7ttpjf");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/duj7ttpjf/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();

    const imageUrl = data.secure_url;

    // save to backend (MongoDB)
    await fetch("/api/users/update", {
      method: "POST", // MUST BE POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        profilePic: imageUrl,
      }),
    });

    setUser((prev: any) => ({
      ...prev,
      profilePic: imageUrl,
    }));
  };
  // =========================
  // FETCH BOOKINGS
  // =========================
  useEffect(() => {
    if (!user?.email) return;

    const fetchBookings = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/bookings/my`);
        const data = await res.json();
        console.log("booking data", data);

        setBookings(data.data || []);
      } catch (err) {
        console.log("Error:", err);
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user?.email]);

  // =========================
  // LOADING STATE FIX
  // =========================
  if (!user) {
    return <ProfileLoading />;
  }

  console.log("bookings from the booking state", bookings);
  console.log("usser afer booking", user);

  // =========================
  // EMPTY STATE
  // =========================
  // if (!loading && bookings.length === 0) {
  //   return <ProfileEmpty />;
  // }

  return (
    <Page>
      <Main>
        {/* PROFILE SECTION */}
        <ProfileCard>
          <Left>
            <Avatar>
              {user?.profilePic ? (
                <img src={user.profilePic} alt="profile" />
              ) : (
                <div>{user?.name?.charAt(0)?.toUpperCase() || "U"}</div>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
                id="profileUpload"
              />

              <label htmlFor="profileUpload">
                <CameraButton>📷</CameraButton>
              </label>
            </Avatar>
          </Left>

          <Center>
            <Name>{user?.name || "User"}</Name>
            <Email>{user?.email}</Email>
            <SubText>Member since March 2022 • Premium Cultivator</SubText>

            {/* <ButtonRow>
              <PrimaryBtn>Edit Profile</PrimaryBtn>
              <SecondaryBtn>Settings</SecondaryBtn>
            </ButtonRow> */}
          </Center>

          <Right>
            <Stat>
              <h2>{bookings.length}</h2>
              <span>Rentals</span>
            </Stat>

            <Stat>
              <h2>4.9</h2>
              <span>Rating</span>
            </Stat>
          </Right>
        </ProfileCard>

        {/* BOOKINGS */}
        <Section>
          <SectionHeader>
            <h2>My Bookings</h2>
            <p>Manage your active and upcoming rentals</p>
          </SectionHeader>

          {bookings.map((item) => {
            const today = new Date();

            const status =
              new Date(item.end_date) < today ? "Completed" : "Upcoming";
            return (
              <BookingCard>
                <Image>
                  <img src={item.images} alt="Tractor" />
                </Image>

                <Content>
                  <Top>
                    <div>
                      <Badge>{status}</Badge>
                      <Title>{item.name}</Title>
                      <Dates>
                        {new Date(item.start_date).toDateString()} → -{" "}
                        {new Date(item.end_date).toDateString()} • {item.days}{" "}
                        Days
                      </Dates>
                    </div>

                    <Price>
                      <small>Total</small>
                      <h3>{item.totalprice}</h3>
                    </Price>
                  </Top>

                  <Actions>
                    <Btn>Details</Btn>
                    <Btn>Contact Owner</Btn>
                  </Actions>
                </Content>
              </BookingCard>
            );
          })}

          {/* <BookingCard>
            <Image>
              <img src={farmertractor.src} alt="Tractor" />
            </Image>

            <Content>
              <Top>
                <div>
                  <Badge>Confirmed</Badge>
                  <Title>John Deere 8R 410</Title>
                  <Dates>Oct 12 - Oct 15 • 3 Days</Dates>
                </div>

                <Price>
                  <small>Total</small>
                  <h3>₹1450</h3>
                </Price>
              </Top>

              <Actions>
                <Btn>Details</Btn>
                <Btn>Contact Owner</Btn>
              </Actions>
            </Content>
          </BookingCard> */}
        </Section>
      </Main>
    </Page>
  );
}

const Page = styled.div`
  background: #fafaf5;
  min-height: 100vh;
`;

const Main = styled.div`
  padding: 120px 20px 40px;
  max-width: 1200px;
  margin: auto;
`;

const ProfileCard = styled.div`
  display: flex;
  gap: 40px;
  background: #f4f4ef;
  padding: 40px;
  border-radius: 30px;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const Left = styled.div``;

// const Avatar = styled.div`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   overflow: hidden;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

const Center = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 32px;
  font-weight: 800;
`;

const Email = styled.p`
  color: #555;
`;

const SubText = styled.p`
  font-size: 13px;
  color: #888;
  margin-top: 5px;
`;

const ButtonRow = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

const PrimaryBtn = styled.button`
  background: #0d631b;
  color: white;
  padding: 10px 18px;
  border-radius: 20px;
  font-weight: 600;
`;

const SecondaryBtn = styled.button`
  background: #e3e3de;
  padding: 10px 18px;
  border-radius: 20px;
`;

const Right = styled.div`
  display: flex;
  gap: 15px;
`;

const Stat = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  text-align: center;

  h2 {
    color: #0d631b;
    font-size: 22px;
  }

  span {
    font-size: 12px;
    color: #777;
  }
`;

const Section = styled.div`
  margin-top: 50px;
`;

const SectionHeader = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 26px;
    font-weight: 800;
  }

  p {
    color: #666;
  }
`;

const BookingCard = styled.div`
  display: flex;
  background: #f4f4ef;
  border-radius: 25px;
  overflow: hidden;
  margin-top: 30px;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  }
`;

const Image = styled.div`
  width: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 25px;
  flex: 1;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Badge = styled.span`
  background: #d6c953;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-top: 8px;
`;

const Dates = styled.p`
  color: #666;
  margin-top: 5px;
`;

const Price = styled.div`
  text-align: right;

  h3 {
    color: #0d631b;
  }
`;

const Actions = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

const Btn = styled.button`
  background: #e3e3de;
  padding: 8px 14px;
  border-radius: 12px;
`;

///

const LoadingWrapper = styled.div`
  padding: 120px 20px;
  text-align: center;
`;

const SkeletonCard = styled.div`
  height: 150px;
  background: #e3e3de;
  border-radius: 20px;
  margin-bottom: 20px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

///empty state

const EmptyWrapper = styled.div`
  padding: 120px 20px;
  text-align: center;
`;

const EmptyTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const EmptyText = styled.p`
  color: #666;
`;

const BrowseBtn = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #0d631b;
  color: white;
  border-radius: 20px;
`;

const CameraButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: none;

  background: #0d631b;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Avatar = styled.div`
  position: relative; /* 🔥 ADD THIS LINE */

  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// const CameraButton = styled.div`
//   position: absolute; /* ✅ IMPORTANT */
//   bottom: 0;
//   right: 0;
//   background: #0d631b;
//   color: white;
//   border-radius: 50%;
//   padding: 6px;
//   cursor: pointer;
// `;
