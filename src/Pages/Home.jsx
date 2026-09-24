import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/program/Programs";
import Trainer from "@/components/trainer/Trainer";
import WhyChooseUs from "@/components/whychoose/WhyChooseUs";
import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <Programs />
      <Trainer />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
