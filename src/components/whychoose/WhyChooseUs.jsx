import { ShieldCheck, ArrowRight } from "lucide-react";
import React from "react";
import FeatureCard, { features } from "./FeatureCard";
import { Button } from "../ui/button";

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "10K+", label: "Sessions Done" },
  { value: "15+", label: "Awards Won" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        <div className="flex flex-col gap-8 lg:max-w-sm w-full lg:sticky lg:top-24">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/40 backdrop-blur-md border border-purple-500/40 w-fit">
            <ShieldCheck size={15} className="text-purple-400 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-purple-300">
              Why Choose Us
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 leading-tight">
              Built for{" "}
              <span className="bg-gradient-to-tr from-purple-800 via-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
                Real Results
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We combine expert knowledge, proven methods, and a supportive
              community so you can hit your goals — and surpass them.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent w-20 shrink-0">
                  {s.value}
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" />
                <span className="text-sm text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>

          <Button variant="outline" className="gap-2 w-fit">
            Get Started <ArrowRight size={15} />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
