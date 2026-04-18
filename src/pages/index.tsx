import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Equipment from "../components/Equipment";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const Home: NextPage = () => {
  
  return (
    <>
      
      <Hero />
      <Features />
      <Equipment />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
