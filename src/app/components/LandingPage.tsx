import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import FeaturedBooks from "./FeaturedBooks";
import HowItWorks from "./HowItWorks";
import Categories from "./Categories";
import Testimonials from "./Testimonials";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturedBooks />
      <HowItWorks />
      <Categories />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
} 