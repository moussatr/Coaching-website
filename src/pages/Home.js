import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
// import VideosSection from "../components/VideosSection";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <Services />
      <Testimonials />
      {/* <VideosSection /> */}
      {/* Autres sections */}
    </div>
  );
};

export default Home;
