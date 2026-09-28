import { Users, ArrowRight } from "lucide-react";
import React from "react";
import TrainerCard, { Trainers } from "./TrainerCard";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Trainer = () => {
  return (
    <section className="py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/40 backdrop-blur-md border border-purple-500/40">
            <Users size={15} className="text-purple-400 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-purple-300">
              Meet The Team
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100">
            Expert{" "}
            <span className="bg-gradient-to-tr from-purple-800 via-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
              Trainers
            </span>
          </h2>
          <p className="text-slate-400 max-w-md leading-relaxed">
            Train with the best. Our certified coaches bring real-world
            experience and a passion for your results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {Trainers.map((trainer) => (
            <TrainerCard key={trainer.id} {...trainer} />
          ))}
        </div>

        <Link to="/trainers">
          <Button variant="outline" className="gap-2">
            Meet All Trainers <ArrowRight size={15} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Trainer;
