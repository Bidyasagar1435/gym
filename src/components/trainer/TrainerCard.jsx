import { AtSign, X, Dumbbell } from "lucide-react";
import React from "react";

export const Trainers = [
  {
    id: 1,
    name: "Alex Carter",
    specialization: "Strength & Power",
    experience: "8 Years",
    clients: "120+",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.afFU-_o_44uWJGt7JKNVSgHaHa?r=0&pid=Api&h=220&P=0",
    color: "from-orange-500 to-red-600",
    badge: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Maya Torres",
    specialization: "Weight Loss & Cardio",
    experience: "6 Years",
    clients: "95+",
    image:
      "https://i.pinimg.com/originals/60/68/6b/60686b012d167c76fb50f8975b7f5f3b.jpg",
    color: "from-blue-500 to-cyan-500",
    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    instagram: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Jordan Blake",
    specialization: "Muscle Building",
    experience: "10 Years",
    clients: "200+",
    image:
     "https://img.freepik.com/premium-photo/fit-muscular-female-personal-trainer-is-holding-tablet-her-hands-smiling-gym_232070-15233.jpg",
    color: "from-purple-500 to-pink-600",
    badge: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    instagram: "#",
    twitter: "#",
  },
];

const TrainerCard = ({
  name,
  specialization,
  experience,
  clients,
  image,
  color,
  badge,
  instagram,
  twitter,
}) => {
  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 cursor-pointer hover:border-white/20 hover:-translate-y-1">
      {/* Photo */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
     
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-[#080B14]/40 to-transparent" />

      
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={instagram}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/20 transition-colors"
          >
            <AtSign size={14} />
          </a>
          <a
            href={twitter}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/20 transition-colors"
          >
            <X size={14} />
          </a>
        </div>

        {/* Specialty badge */}
        <span
          className={`absolute bottom-4 left-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${badge}`}
        >
          {specialization}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4 p-5">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors duration-300">
            {name}
          </h3>
          <p
            className={`text-sm font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
          >
            {specialization}
          </p>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-4 pt-1 border-t border-white/[0.06]">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
              Experience
            </span>
            <span className="text-sm font-bold text-slate-200">
              {experience}
            </span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
              Clients
            </span>
            <span className="text-sm font-bold text-slate-200">{clients}</span>
          </div>
          <div className="ml-auto">
            <div
              className={`p-2 rounded-xl bg-gradient-to-br ${color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
            >
              <Dumbbell size={14} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;

