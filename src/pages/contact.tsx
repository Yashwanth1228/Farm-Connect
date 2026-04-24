import styled from "@emotion/styled";
import { Input, InputGroup, InputMessage } from "@/components/InputBox";
import { Button } from "@/components/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FormHeading,
  FormLabel,
  Page,
  Hero,
  Grid,
  FormCard,
  TextArea,
  SubmitBtn,
  InfoCard,
  MapBox,
  MapImage,
  CTA,
} from "@/styles/contact";

// ---------------- COMPONENT ----------------
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!", { id: toastId });
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message, { id: toastId });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.", { id: toastId });
    }
  };
  return (
    <>
      <Page>
        <Hero>
          <h1>
            Cultivating <span>Connections.</span>
          </h1>
          <p>
            Whether you're looking for high-performance machinery or need expert
            agricultural advice.
          </p>
        </Hero>

        <Grid>
          {/* FORM */}
          <FormCard>
            <FormHeading>Send a Message</FormHeading>
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <FormLabel>Full Name</FormLabel>
                <Input
                  placeholder="Enter your full name"
                  name="name"
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup>
                <FormLabel>Subject</FormLabel>
                <Input
                  placeholder="Your Subject Here"
                  name="subject"
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup>
                <FormLabel>Message</FormLabel>
                <InputMessage
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                  onChange={handleChange}
                />
              </InputGroup>

              <Button>Send Message</Button>
            </form>
          </FormCard>

          {/* RIGHT SIDE */}
          <div>
            <InfoCard>
              <div>📞</div>
              <div>
                <p>Call</p>
                <h3>+91-8800-9911-22</h3>
              </div>
            </InfoCard>

            <InfoCard>
              <div>✉️</div>
              <div>
                <p>Email</p>
                <h3>support@farmconnect.com</h3>
              </div>
            </InfoCard>

            <MapBox>
              <MapImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmYhVssb_9uwa0ywDv2CLz3lAa7W6uYpwY-TiayzbbkJljtUCTHGHHAR2aukTlmsDbdCoKeFfk71ZHRhLorHIgQi3NNM-mig9E50nfZKLSXrqNlFAhknUWx8LcF65vo2LN94YOF0LEDC8UXZMGWT5SWHjXF1bGgpXntHU4Ismw57DaDp94kharMQ8J1Y9d41u80JediFYpSTArlLdryco7C_NQ7wpy2oMtbDhchizLPQX8Syh_-5rUqv2w1sZQ5H6D1FoMPeFBZTA" />
            </MapBox>
          </div>
        </Grid>

        {/* CTA */}
        <CTA>
          <h2>Join our growing community</h2>
          <p>Follow us for updates and farming tips</p>
        </CTA>
      </Page>

      {/* Footer is included in app.tsx */}
    </>
  );
}
