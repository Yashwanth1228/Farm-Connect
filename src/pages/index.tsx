import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Equipment from "../components/Equipment";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Equipment />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
