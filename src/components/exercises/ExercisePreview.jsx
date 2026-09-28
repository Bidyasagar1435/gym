import { Dumbbell, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import ExerciseCard, { exercises } from "./ExerciseCard";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const categories = ["All", "Chest", "Legs", "Arms", "Core"];

const ExercisePreview = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? exercises
      : exercises.filter((e) => e.category === activeCategory);

  

  return (
    <section className="py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/40 backdrop-blur-md border border-purple-500/40">
            <Dumbbell size={15} className="text-purple-400 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-purple-300">
              Exercise Library
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100">
            Popular{" "}
            <span className="bg-gradient-to-tr from-purple-800 via-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
              Exercises
            </span>
          </h2>
          <p className="text-slate-400 max-w-md leading-relaxed">
            Explore a curated selection of exercises designed to target every
            muscle group and maximise your results.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold tracking-wide px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer
                ${
                  activeCategory === cat
                    ? "bg-purple-600/20 border-purple-500/50 text-purple-300"
                    : "bg-white/[0.03] border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filtered.map((exercise) => (
            <ExerciseCard key={exercise.id} {...exercise} />
          ))}
        </div>
        <Link to="/exercises">
          <Button variant="outline" className="gap-2">
            Browse All Exercises <ArrowRight size={15} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ExercisePreview;
