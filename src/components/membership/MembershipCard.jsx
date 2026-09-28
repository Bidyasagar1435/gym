import { Check, ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const plans = [
  {
    id: 1,
    name: "Basic",
    price: 19,
    description: "Everything you need to kick-start your fitness journey.",
    features: [
      "Full gym access",
      "Basic workout programs",
      "Progress tracking",
      "Community forum",
    ],
    color: "from-blue-500 to-cyan-500",
    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    glow: "hover:shadow-blue-500/10",
  },
  {
    id: 2,
    name: "Pro",
    price: 39,
    description: "More guidance and features to accelerate your progress.",
    features: [
      "Everything in Basic",
      "Advanced workout programs",
      "Trainer guidance",
      "Progress analytics",
      "Nutrition tips",
    ],
    popular: true,
    color: "from-purple-500 to-pink-600",
    badge: "bg-purple-500/15 text-fuchsia-400 border-purple-500/30",
    glow: "hover:shadow-purple-500/10",
  },
  {
    id: 3,
    name: "Elite",
    price: 69,
    description: "A fully personalised fitness experience built around you.",
    features: [
      "Everything in Pro",
      "Dedicated personal trainer",
      "Custom diet plan",
      "Weekly check-ins",
      "Priority support",
    ],
    color: "from-orange-500 to-red-500",
    badge: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    glow: "hover:shadow-orange-500/10",
  },
];

const MembershipCard = ({
  name,
  price,
  description,
  features,
  popular,
  color,
  badge,
  glow,
}) => {
  return (
    <div
      className={`group relative flex flex-col gap-6 p-7 rounded-2xl border backdrop-blur-sm transition-all duration-500 cursor-pointer hover:shadow-xl ${glow}
        ${
          popular
            ? "bg-white/[0.07] border-purple-800/60 shadow-purple-500/10 shadow-lg"
            : "bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]"
        }`}
    >
      <div className="min-h-[28px] flex items-center">
        {popular && (
          <span
            className={`text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${badge}`}
          >
            Most Popular
          </span>
        )}
      </div>

    
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
          {name}
        </span>
        <div className="flex items-end gap-1">
          <span
            className={`text-5xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
          >
            ${price}
          </span>
          <span className="text-slate-500 mb-2 text-sm">/month</span>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>

      <div className="h-px bg-white/[0.07]" />

     
      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span
              className={`flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br ${color} shrink-0`}
            >
              <Check size={11} className="text-white" strokeWidth={3} />
            </span>
            <span className="text-sm text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={popular ? "default" : "outline"}
        className={`gap-2 w-full mt-auto ${
          popular
            ? `bg-gradient-to-br ${color} border-0 text-white hover:opacity-90`
            : ""
        }`}
      >
        Get Started <ArrowRight size={15} />
      </Button>
    </div>
  );
};

export default MembershipCard;
