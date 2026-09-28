import CTA from "@/components/CTA";
import ExercisePreview from "@/components/exercises/ExercisePreview";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Membership from "@/components/membership/Membership";
import Navbar from "@/components/Navbar";
import Programs from "@/components/program/Programs";
import Testimonials from "@/components/testimonials/Testimonials";
import Trainer from "@/components/trainer/Trainer";
import WhyChooseUs from "@/components/whychoose/WhyChooseUs";
import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Programs />
      <Trainer />
      <WhyChooseUs />
      <ExercisePreview />
      <Membership />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
