import React from "react";
import { Button } from "./ui/button";
import { Flame } from "lucide-react";
import Background from "./Background";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Background />
      <section className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8 gap-6">
        <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/40 backdrop-blur-md border border-purple-500/40 cursor-default">
          <Flame
            size={15}
            className="text-purple-400 animate-pulse relative z-10"
          />
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-purple-300 relative z-10">
            Your Fitness. Your Journey.
          </span>
        </div>

        <div className="flex flex-col items-center text-center gap-1 font-bold uppercase tracking-wide">
          <span className="text-7xl md:text-8xl bg-gradient-to-br from-slate-200 to-slate-500 bg-clip-text text-transparent">
            Train Smart
          </span>
          <span className="text-7xl md:text-8xl bg-gradient-to-br from-purple-800 via-purple-700 to-blue-600 bg-clip-text text-transparent">
            Get Stronger.
          </span>
        </div>

        <p className="text-center text-lg text-slate-400 max-w-md leading-relaxed">
          Personalized workouts, expert trainers, and programs built around you.
        </p>

        <div className="flex items-center gap-3 mt-2">
          <Button variant="primary">Start Now</Button>
          <Button variant="outline">Explore Programs</Button>
        </div>

        <div className="flex items-center gap-0 mt-4 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md bg-white/5 divide-x divide-white/10">
          {[
            { value: "5K+", label: "Active Members" },
            { value: "20+", label: "Expert Trainers" },
            { value: "50+", label: "Workout Programs" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-10 py-4 hover:bg-white/5 transition-colors duration-300"
            >
              <span className="text-3xl font-extrabold bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 mt-0.5 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
