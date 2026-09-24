import { ArrowRight, Clock, Signal } from "lucide-react";
import React from "react";

export const programs = [
  {
    id: 1,
    title: "Strength Training",
    description:
      "Build raw power and improve overall athletic performance with progressive overload principles.",
    duration: "8 Weeks",
    level: "Intermediate",
    category: "Strength",
    color: "from-orange-500 to-red-600",
    badge: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  },
  {
    id: 2,
    title: "Muscle Building",
    description:
      "A structured hypertrophy program designed to maximise muscle growth and definition.",
    duration: "12 Weeks",
    level: "Intermediate",
    category: "Muscle",
    color: "from-purple-500 to-pink-600",
    badge: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  },
  {
    id: 3,
    title: "Weight Loss",
    description:
      "Burn calories efficiently and build sustainable fitness habits that last a lifetime.",
    duration: "6 Weeks",
    level: "Beginner",
    category: "Weight Loss",
    color: "from-blue-500 to-cyan-500",
    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  },
];

const levelDots = { Beginner: 1, Intermediate: 2, Advanced: 3 };

const ProgramCard = ({
  title,
  description,
  duration,
  level,
  category,
  color,
  badge,
}) => {
  return (
    <div className="group relative flex flex-col gap-5 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 transition-all duration-500 cursor-pointer overflow-hidden">
      <span
        className={`self-start text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${badge}`}
      >
        {category}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Clock size={13} className="text-slate-500" />
          {duration}
        </div>
        <div className="w-px h-3 bg-white/10" />
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Signal size={13} className="text-slate-500" />
          {level}
        </div>
      </div>

      <div
        className={`flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent mt-auto`}
      >
        View Program
        <ArrowRight
          size={15}
          className={`text-slate-400 group-hover:translate-x-1 transition-transform duration-300`}
        />
      </div>
    </div>
  );
};

export default ProgramCard;
