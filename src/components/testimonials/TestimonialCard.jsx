import { Star } from "lucide-react";
import React from "react";

export const testimonials = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Strength Program Member",
    rating: 5,
    review:
      "The structured programs kept me consistent for the first time in years. I'm hitting PRs every week and actually enjoying the process.",
    accent: "from-orange-500 to-red-500",
    initials: "AM",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Weight Loss Program Member",
    rating: 5,
    review:
      "Lost 18 lbs in 10 weeks without feeling like I was starving. The community here is incredibly supportive and motivating.",
    accent: "from-blue-500 to-cyan-500",
    initials: "SJ",
  },
  {
    id: 3,
    name: "David Smith",
    role: "Elite Member",
    rating: 5,
    review:
      "My personal trainer completely transformed my approach to fitness. The custom diet plan alone was worth every penny.",
    accent: "from-purple-500 to-pink-600",
    initials: "DS",
  },
  {
    id: 4,
    name: "Emily Wilson",
    role: "Muscle Building Member",
    rating: 5,
    review:
      "Top-notch equipment and trainers who actually care about your form. I've tried four gyms — this one is in a different league.",
    accent: "from-orange-500 to-red-500",
    initials: "EW",
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Pro Member",
    rating: 5,
    review:
      "The progress analytics in the Pro plan are a game-changer. Seeing the data week over week keeps me locked in and accountable.",
    accent: "from-blue-500 to-cyan-500",
    initials: "MB",
  },
  {
    id: 6,
    name: "Jessica Davis",
    role: "Strength Program Member",
    rating: 5,
    review:
      "I was nervous starting out, but the beginner-friendly programs eased me in perfectly. Three months later I feel unrecognisable.",
    accent: "from-purple-500 to-pink-600",
    initials: "JD",
  },
];

const Stars = ({ count }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        size={13}
        className="text-yellow-400 fill-yellow-400"
      />
    ))}
  </div>
);

const TestimonialCard = ({ name, role, rating, review, accent, initials }) => {
  return (
    <div className="group flex flex-col gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]">
      
      <Stars count={rating} />

     
      <p className="text-sm text-slate-300 leading-relaxed flex-1">
        &ldquo;{review}&rdquo;
      </p>

    
      <div className="flex items-center gap-3 pt-1 border-t border-white/[0.06] mt-2">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${accent} shrink-0 text-white text-xs font-bold`}
        >
          {initials}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-100">{name}</span>
          <span className="text-xs text-slate-500">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
