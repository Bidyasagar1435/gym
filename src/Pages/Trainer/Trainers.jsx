import { trainers } from "@/data/trainerData";
import { ArrowRight, Dumbbell, Heart, MapPin, Star, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Trainers = () => {
  return (
    <section className="pt-12 pb-20 px-4 bg-gradient-to-br from-slate-950 to-slate-900 text-white overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Page header */}
        <div className="flex flex-col gap-8 max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-semibold text-purple-400 uppercase tracking-[0.35em]">
            Meet Your Fitness Experts
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">Transform Your Fitness</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 block mt-4">
              With Expert Guidance
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed">
            Connect with our team of certified fitness professionals who are
            passionate about helping you achieve your goals.
          </p>
        </div>

        {/* Trainers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="group block cursor-pointer">
              {/* Card container */}
              <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-3 group-hover:border-purple-500/30 group-hover:shadow-2xl group-hover:shadow-purple-900/20">
                {/* Image section */}
                <div className="relative h-80 overflow-hidden">
                  {/* Image with overlay */}
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "/placeholder-trainer.jpg";
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-500/30 flex items-center gap-1.5">
                    <Star className="text-purple-400" size={15} />
                    <span className="text-white text-sm font-semibold">
                      {trainer.rating}
                    </span>
                  </div>

                  {/* Favorite heart button */}
                  <button className="absolute top-4 left-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:scale-110 hover:border-pink-500/50 transition-all duration-300">
                    <Heart size={18} className="text-white/70" />
                  </button>

                  {/* Location badge */}

                  <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-600/40 flex items-center justify-around gap-1.5">
                    <div className="flex items-center gap-2">
                      <MapPin className="text-slate-300" size={15} />
                      <span className="text-slate-300 text-sm capitalize">
                        {trainer.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6">
                  {/* Name & specialization */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {trainer.name}
                  </h3>

                  <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-2.5 py-1 rounded-full border border-purple-500/30">
                    {trainer.specialization}
                  </span>

                  {/* Experience & clients */}
                  <div className="flex items-center gap-4 mt-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Dumbbell size={16} />
                      <span className="text-sm">
                        {trainer.experience} yrs exp
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span className="text-sm">{trainer.clients} clients</span>
                    </div>
                  </div>

                  {/* View profile button */}
                  <Link to={`/trainers/${trainer.slug}`}>
                    <button className="w-full mt-6 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2">
                      View Profile
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
