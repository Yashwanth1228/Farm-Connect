import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { AppContent } from "@/context/Appcontext";
import toast from "react-hot-toast";

import {
  Page,
  Hero,
  StatusBadge,
  Container,
  Grid,
  Card,
  Title,
  SubText,
  Row,
  PrimaryBtn,
  SecondaryBtn,
  DisabledBtn,
} from "@/pages/bookings/styles/bookingDetails";

export default function BookingDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { user }: any = useContext(AppContent);

  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    if (!id || !user?._id) return;

    const fetchBooking = async () => {
      try {
        const res = await fetch(`/api/bookings/${id}`, {
          headers: {
            "x-user-id": user._id,
          },
        });

        const data = await res.json();
        setBooking(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBooking();
  }, [id, user]);

  if (!booking) return <p>Loading...</p>;

  // ✅ STATUS FIX (important)
  const end = new Date(booking.end_date);
  end.setHours(23, 59, 59, 999);

  const status = end < new Date() ? "Completed" : "Upcoming";

  return (
    <Page>
      {/* HERO */}
      <Hero>
        <img src={booking.images} alt="equipment" />
        <StatusBadge>{status}</StatusBadge>
      </Hero>

      <Container>
        <Grid>
          {/* LEFT */}
          <Card>
            <Title>{booking.name}</Title>
            <SubText>Premium Equipment Rental</SubText>

            <br />

            <Row>
              <span>Start Date</span>
              <b>{new Date(booking.start_date).toDateString()}</b>
            </Row>

            <Row>
              <span>End Date</span>
              <b>{new Date(booking.end_date).toDateString()}</b>
            </Row>

            <Row>
              <span>Duration</span>
              <b>{booking.days} Days</b>
            </Row>

            <Row>
              <span>Booking ID</span>
              <b>{booking._id}</b>
            </Row>
          </Card>

          {/* RIGHT */}
          <Card>
            <h2>Summary</h2>

            <Row>
              <span>Price / day</span>
              <b>₹{booking.price}</b>
            </Row>

            <Row>
              <span>Days</span>
              <b>{booking.days}</b>
            </Row>

            <Row>
              <span>Subtotal</span>
              <b>₹{booking.subtotal}</b>
            </Row>

            <Row>
              <span>GST (8%)</span>
              <b>₹{booking.tax}</b>
            </Row>

            <Row style={{ borderTop: "1px solid #eee", paddingTop: "10px" }}>
              <span>
                <strong>Total Paid</strong>
              </span>
              <b style={{ color: "#1b5e20" }}>₹{booking.totalprice}</b>
            </Row>

            {/* ACTIONS */}
            <PrimaryBtn
              onClick={() => {
                const link = document.createElement("a");
                link.href = `/api/bookings/invoice?bookingId=${booking._id}`;
                link.download = `Invoice_${booking._id}.pdf`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Invoice
            </PrimaryBtn>

            {status === "Completed" ? (
              <DisabledBtn disabled>Cannot Cancel</DisabledBtn>
            ) : (
              <SecondaryBtn
                onClick={async () => {
                  const confirmCancel = confirm("Cancel booking?");
                  if (!confirmCancel) return;

                  const res = await fetch("/api/bookings/cancel", {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                      "x-user-id": user._id,
                    },
                    body: JSON.stringify({ bookingId: booking._id }),
                  });

                  if (res.ok) {
                    toast.success("Cancelled");
                    router.push("/profile");
                  } else {
                    toast.error("Failed");
                  }
                }}
              >
                Cancel Booking
              </SecondaryBtn>
            )}
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}
