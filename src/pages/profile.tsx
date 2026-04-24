import ProfileEmpty from "@/components/ProfileEmpty";
import ProfileLoading from "@/components/ProfileLoading";
import farmertractor from "@/assets/farmertractor.jpg";

import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { toast } from "react-hot-toast";

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
  const { user, setUser }: any = useContext(AppContent);

  // =========================
  // FETCH BOOKINGS
  // =========================
  useEffect(() => {
      

    const fetchBookings = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/bookings/my`,);

        const data = await res.json();
        setBookings(data.data || []);
      } catch (err) {
        console.log("Error:", err);
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user?._id]);

  // =========================
  // LOADING STATE
  // =========================
  if (!user) {
    return <ProfileLoading />;
  }

  // =========================
  // CANCEL BOOKING
  // =========================
  const handleCancel = async (bookingId: string) => {
    if (!user?._id) {
      toast.error("User not loaded");
      return;
    }

    const confirmCancel = confirm(
      "Are you sure you want to cancel this booking?",
    );
    if (!confirmCancel) return;

    try {
      const res = await fetch("/api/bookings/cancel", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": user._id,
        },
        body: JSON.stringify({ bookingId }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Booking cancelled ✅");

        // ✅ remove instantly from UI
        setBookings((prev: any) =>
          prev.filter((b: any) => b._id !== bookingId),
        );
      } else {
        toast.error(data.message || "Failed to cancel");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
    if (!user?.email) {
      toast.error("User not found");
      return;
    }

    const toastId = toast.loading("Uploading image...");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "farm-connect"); // your preset
      formData.append("cloud_name", "duj7ttpjf");

      // ✅ Upload to Cloudinary
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/duj7ttpjf/image/upload",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      const imageUrl = data.secure_url;

      // ✅ Save to backend (MongoDB)
      await fetch("/api/users/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          profilePic: imageUrl,
        }),
      });

      // ✅ Update UI instantly
      setUser((prev: any) => ({
        ...prev,
        profilePic: imageUrl,
      }));

      toast.success("Profile updated ✅", { id: toastId });
    } catch (error) {
      console.error(error);
      toast.error("Upload failed ❌", { id: toastId });
    }
  };

  return (
    <Page>
      <Main>
        {/* PROFILE */}
        <ProfileCard>
          <Left>
            <Avatar>
              {user?.profilePic ? (
                <img src={user.profilePic} alt="profile" />
              ) : (
                <div>{user?.name?.charAt(0)?.toUpperCase() || "U"}</div>
              )}

              {/* ✅ Hidden file input */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
                id="profileUpload"
              />

              {/* ✅ Camera button */}
              <label htmlFor="profileUpload">
                <CameraButton>📷</CameraButton>
              </label>
            </Avatar>
          </Left>

          <Center>
            <Name>{user?.name || "User"}</Name>
            <Email>{user?.email}</Email>
            <SubText>Member since March 2022 • Premium Cultivator</SubText>
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
            <p>Manage your rentals</p>
          </SectionHeader>

          {bookings.map((item) => {
            const today = new Date();

            // ✅ ADD HERE
            const end = new Date(item.end_date);
            end.setHours(23, 59, 59, 999);

            const status = end < today ? "Completed" : "Upcoming";

            return (
              <BookingCard key={item._id}>
                <Image>
                  <img src={item.images} alt="Tractor" />
                </Image>

                <Content>
                  <Top>
                    <div>
                      <Badge>{status}</Badge>
                      <Title>{item.name}</Title>
                      <Dates>
                        {new Date(item.start_date).toDateString()} →{" "}
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
                    <Btn onClick={() => router.push(`/bookings/${item._id}`)}>
                      Details
                    </Btn>
                    <Btn>Contact Owner</Btn>

                    {/* ✅ FIXED HERE */}
                    <Btn
                      disabled={status === "Completed"}
                      onClick={() => handleCancel(item._id)}
                    >
                      Cancel Booking
                    </Btn>
                  </Actions>
                </Content>
              </BookingCard>
            );
          })}
        </Section>
      </Main>
    </Page>
  );
}
