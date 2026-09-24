import { Dumbbell, Target, TrendingUp, Users2 } from "lucide-react";
import React from "react";

export const features = [
  {
    id: 1,
    icon: Dumbbell,
    title: "Expert Training",
    description:
      "Work with certified fitness professionals who craft every session around your body and goals.",
    color: "from-purple-500 to-blue-500",
    glow: "group-hover:shadow-purple-500/20",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    id: 2,
    icon: Target,
    title: "Goal Based Programs",
    description:
      "Follow structured, science-backed programs tailored specifically to your fitness objectives.",
    color: "from-orange-500 to-red-500",
    glow: "group-hover:shadow-orange-500/20",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Visualise milestones, log personal records, and stay on top of every step of your journey.",
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-blue-500/20",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    id: 4,
    icon: Users2,
    title: "Fitness Community",
    description:
      "Join thousands of motivated members. Train together, share wins, and push each other further.",
    color: "from-pink-500 to-purple-500",
    glow: "group-hover:shadow-pink-500/20",
    iconBg: "bg-pink-500/10 border-pink-500/20",
    iconColor: "text-pink-400",
  },
];

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color,
  glow,
  iconBg,
  iconColor,
}) => {
  return (
    <div
      className={`group relative flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 cursor-default hover:border-white/20 hover:-translate-y-0.5 hover:shadow-xl ${glow}`}
    >
      <div
        className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div
        className={`w-11 h-11 flex items-center justify-center rounded-xl border ${iconBg} transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon size={20} className={iconColor} />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
