import { Flame, ArrowRight } from "lucide-react";
import React from "react";
import ProgramCard, { programs } from "./ProgramCard";
import { Button } from "../ui/button";

const Programs = () => {
  return (
    <section className="py-24 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl pointer-events-none" />
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/40 backdrop-blur-md border border-purple-500/40">
            <Flame size={15} className="text-purple-400 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-purple-300">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100">
            Our{" "}
            <span className="bg-gradient-to-tr from-purple-800 via-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <p className="text-slate-400 max-w-md leading-relaxed">
            Choose a program tailored to your goals — from beginners to advanced
            athletes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {programs.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>

        <Button variant="outline" className="gap-2">
          View All Programs <ArrowRight size={15} />
        </Button>
      </div>
    </section>
  );
};

export default Programs;
