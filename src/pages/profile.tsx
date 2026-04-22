import ProfileEmpty from "@/components/ProfileEmpty";
import ProfileLoading from "@/components/ProfileLoading";
import farmertractor from "@/assets/farmertractor.jpg";

import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { AppContent } from "@/context/Appcontext";
import {
  Page,
  Main,
  ProfileCard,
  Left,
  Center,
  Right,
  Name,
  Email,
  SubText,
  ButtonRow,
  Stat,
  Section,
  SectionHeader,
  BookingCard,
  Image,
  Content,
  Top,
  Dates,
  Price,
  Actions,
  Btn,
  Avatar,
  CameraButton,
  Badge,
  Title,
} from "@/styles/profile";

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

        console.log("USER ID:", user?._id);

        const res = await fetch(`/api/bookings/my`, {
          headers: {
            "x-user-id": user?._id,
          },
        });

        const data = await res.json();
        console.log("BOOKINGS API RESPONSE:", data);

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
