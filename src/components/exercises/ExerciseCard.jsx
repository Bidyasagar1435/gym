import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const exercises = [
  {
    id: 1,
    name: "Bench Press",
    category: "Chest",
    sets: "4 Sets",
    reps: "8–12 Reps",
    badge: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    accent: "from-orange-500 to-red-500",
    image:
      "https://www.anytimefitness.com/wp-content/uploads/2024/01/BenchPress-Form-3-scaled.jpg",
  },
  {
    id: 2,
    name: "Squats",
    category: "Legs",
    sets: "5 Sets",
    reps: "6–10 Reps",
    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    accent: "from-blue-500 to-cyan-500",
    image:
      "https://www.trainheroic.com/wp-content/uploads/2022/10/Bulgarian-Split-Squat.jpg",
  },
  {
    id: 3,
    name: "Push-Up",
    category: "Chest",
    sets: "3 Sets",
    reps: "15–20 Reps",
    badge: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    accent: "from-orange-500 to-red-500",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/pressup-66bc78c6bcd7e.jpg",
  },
  {
    id: 4,
    name: "Lunges",
    category: "Legs",
    sets: "3 Sets",
    reps: "12 Reps / Side",
    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    accent: "from-blue-500 to-cyan-500",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/walking-lunges-667e8add0acad.jpg?crop=0.599xw:0.899xh;0.324xw,0.0791xh&resize=1200:*",
  },
  {
    id: 5,
    name: "Bicep Curl",
    category: "Arms",
    sets: "4 Sets",
    reps: "10–15 Reps",
    badge: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    accent: "from-purple-500 to-pink-600",
    image:
      "https://www.trainheroic.com/wp-content/uploads/2023/01/AdobeStock_186644984-TH-jpg.webp",
  },
  {
    id: 6,
    name: "Plank",
    category: "Core",
    sets: "3 Sets",
    reps: "60 Sec Hold",
    badge: "bg-pink-500/15 text-pink-400 border-pink-500/30",
    accent: "from-pink-500 to-purple-500",
    image:
      "https://www.shape.com/thmb/T2GyvzFah3XYR8_L8W16ANWBTXs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/low-plank-hold-b8a63da1ef844f00b6f6a21141ba1d87.jpg",
  },
];

const ExerciseCard = ({ name, category, sets, reps, badge, accent, image }) => {
  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

        <span
          className={`absolute top-3 left-3 text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${badge}`}
        >
          {category}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors duration-300">
          {name}
        </h3>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/[0.06]">
            {sets}
          </div>
          <div className="w-px h-3 bg-white/10" />
          <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/[0.06]">
            {reps}
          </div>
        </div>
        <Link to="/exercises">
          <div
            className={`flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r ${accent} bg-clip-text text-transparent mt-auto`}
          >
            View Exercise
            <ArrowRight
              size={14}
              className="text-slate-400 group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExerciseCard;
