
import styled from "@emotion/styled";
import { Input, InputGroup, InputMessage } from "@/components/InputBox";
import { Button } from "@/components/Button";
import { useState } from "react";

// ---------------- NAVBAR ----------------
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  background: rgba(250, 250, 250, 0.8);
  z-index: 50;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const FormHeading = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #0d631b;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

// ---------------- PAGE ----------------
const Page = styled.div`
  padding-top: 120px;
  padding-bottom: 80px;
  max-width: 1200px;
  margin: auto;
  padding-left: 24px;
  padding-right: 24px;
`;

// ---------------- HERO ----------------
const Hero = styled.div`
  max-width: 600px;
  margin-bottom: 60px;

  h1 {
    font-size: 56px;
    font-weight: 800;
    color: #0d631b;
    margin-bottom: 20px;
  }

  span {
    color: #1a1c19;
  }

  p {
    color: #555;
    font-size: 18px;
  }
`;

// ---------------- GRID ----------------
const Grid = styled.div`
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

// ---------------- FORM ----------------
const FormCard = styled.div`
  background: #eeeee9;
  padding: 40px;
  border-radius: 24px;
`;

// const Input = styled.input`
//   width: 100%;
//   padding: 16px;
//   margin-top: 8px;
//   border: none;
//   border-bottom: 2px solid #ccc;
//   background: #e8e8e3;
// `;

const TextArea = styled.textarea`
  width: 100%;
  padding: 16px;
  margin-top: 8px;
  border: none;
  border-bottom: 2px solid #ccc;
  background: #e8e8e3;
`;

const SubmitBtn = styled.button`
  margin-top: 20px;
  padding: 14px 30px;
  border-radius: 9999px;
  border: none;
  background: linear-gradient(135deg, #0d631b, #2e7d32);
  color: white;
  font-weight: bold;
`;

// ---------------- INFO ----------------
const InfoCard = styled.div`
  background: #f4f4ef;
  padding: 24px;
  border-radius: 20px;
  display: flex;
  gap: 16px;
  margin-bottom: 30px;
`;

const MapBox = styled.div`
  border-radius: 24px;
  overflow: hidden;
`;

const MapImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

// ---------------- CTA ----------------
const CTA = styled.div`
  margin-top: 80px;
  background: #fed7ca;
  padding: 60px;
  border-radius: 40px;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }
`;

// ---------------- FOOTER ----------------
// const Footer = styled.footer`
//   margin-top: 80px;
//   padding: 40px;
//   background: #f5f5f5;
// `;

// const FooterGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 30px;
// `;

// const FooterDetails = styled.p`
//   color: #555;
//   margin-top: 8px;
// `;

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
        alert("Message sent successfully ");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
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