
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import StatusPage from "../components/StatusPage";
import Faqs from "../components/Faqs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Pricing />
      <StatusPage />
      <Faqs />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
