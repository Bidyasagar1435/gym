import { trainers } from "@/data/trainerData";
import {
  ArrowLeft,
  Award,
  Calendar,
  CheckCircle2,
  Dumbbell,
  MapPin,
  Star,
  Users,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const StatCard = ({ icon: Icon, value, label, accent = "purple" }) => {
  const colors = {
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    pink: "text-pink-400 bg-pink-500/10 border-pink-500/30",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  };
  return (
    <div className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm text-center">
      <div className={`p-2.5 rounded-xl border ${colors[accent]}`}>
        <Icon size={20} className={colors[accent].split(" ")[0]} />
      </div>
      <span className="text-2xl font-bold text-white">{value}</span>
      <span className="text-xs text-slate-400 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
};

const SectionHeading = ({ children }) => (
  <div className="flex items-center gap-3 mb-5">
    <h2 className="text-xl font-bold text-white">{children}</h2>
    <div className="flex-1 h-px bg-gradient-to-r from-purple-500/40 to-transparent" />
  </div>
);

const TrainerDetails = () => {
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  const trainer = trainers.find((t) => t.slug === slug);

  if (!trainer) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-6 px-4 text-center">
        <div className="p-5 rounded-full bg-purple-500/10 border border-purple-500/30">
          <Users size={40} className="text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white">Trainer Not Found</h1>
        <p className="text-slate-400 max-w-xs">
          We couldn&apos;t find the trainer you&apos;re looking for.
        </p>
        <Link
          to="/trainers"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
        >
          <ArrowLeft size={18} /> Back to Trainers
        </Link>
      </div>
    );
  }

  const {
    name,
    image,
    specialization,
    experience,
    rating,
    clients,
    bio,
    certifications,
    specialties,
    location,
  } = trainer;

  const renderStars = (r) => {
    const full = Math.floor(r);
    const partial = r % 1;
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < full
                ? "fill-amber-400 text-amber-400"
                : i === full && partial >= 0.5
                  ? "fill-amber-400/50 text-amber-400"
                  : "text-slate-600"
            }
          />
        ))}
        <span className="ml-1.5 text-sm font-semibold text-amber-400">{r}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-pink-700/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <button
          onClick={() => navigate(-1)}
          className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-purple-300 transition-colors duration-200 mb-8"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-200"
          />
          Back to Trainers
        </button>

        <div className="rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm overflow-hidden shadow-2xl mb-8">
          <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600" />

          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden ring-4 ring-purple-500/30 shadow-2xl shadow-purple-900/40">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6d28d9&color=fff&size=256`;
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>
              </div>
              <div className="flex flex-col justify-center text-center sm:text-left gap-3 flex-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {name}
                </h1>
                <span className="inline-flex self-center sm:self-start items-center gap-1.5 text-sm font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full">
                  <Zap size={13} className="text-purple-400" />
                  {specialization}
                </span>
                <div className="flex justify-center sm:justify-start">
                  {renderStars(rating)}
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-1">
                  <span className="flex items-center gap-1.5 text-sm text-slate-300 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-full">
                    <Dumbbell size={13} className="text-purple-400" />
                    {experience} Yrs Experience
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-slate-300 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-full">
                    <Users size={13} className="text-pink-400" />
                    {clients} Clients
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-slate-300 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-full">
                    <MapPin size={13} className="text-emerald-400" />
                    {location}
                  </span>
                </div>
                <div className="mt-3 flex flex-col xs:flex-row gap-3 sm:flex-row justify-center sm:justify-start">
                  <button className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-purple-900/40 hover:scale-[1.03] active:scale-[0.98]">
                    <Calendar size={17} />
                    Book a Session
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 font-semibold transition-all duration-300">
                    <Users size={17} />
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Star} value={rating} label="Rating" accent="amber" />
          <StatCard
            icon={Dumbbell}
            value={`${experience}+`}
            label="Years Exp."
            accent="purple"
          />
          <StatCard
            icon={Users}
            value={`${clients}+`}
            label="Clients"
            accent="pink"
          />
          <StatCard
            icon={Award}
            value={certifications.length}
            label="Certifications"
            accent="emerald"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm p-6 sm:p-8">
              <SectionHeading>About {name.split(" ")[0]}</SectionHeading>
              <p className="text-slate-300 leading-relaxed text-base">{bio}</p>
            </div>
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm p-6 sm:p-8">
              <SectionHeading>Specialties</SectionHeading>
              <div className="flex flex-wrap gap-3">
                {specialties.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/25 hover:bg-purple-500/20 hover:border-purple-400/40 transition-all duration-200 cursor-default"
                  >
                    <Zap size={13} className="text-purple-400" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm p-6 sm:p-8">
              <SectionHeading>Certifications</SectionHeading>
              <ul className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-emerald-500/30 transition-colors duration-200"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-emerald-400 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-slate-300 leading-snug">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-purple-950/60 to-slate-900/70 border border-purple-500/20 backdrop-blur-sm p-6">
              <SectionHeading>Quick Info</SectionHeading>
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: MapPin,
                    label: "Location",
                    val: location,
                    color: "text-emerald-400",
                  },
                  {
                    icon: Dumbbell,
                    label: "Focus",
                    val: specialization,
                    color: "text-purple-400",
                  },
                  {
                    icon: Calendar,
                    label: "Availability",
                    val: "Mon – Sat",
                    color: "text-pink-400",
                  },
                ].map(({ icon: Icon, label, val, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon size={15} className={`flex-shrink-0 ${color}`} />
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 uppercase tracking-wider">
                        {label}
                      </span>
                      <span className="text-sm text-slate-200 font-medium">
                        {val}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-purple-700/20 to-pink-700/20 border border-purple-500/25 p-6 text-center hidden lg:block">
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                Ready to start your fitness journey with {name.split(" ")[0]}?
              </p>
              <button className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-purple-900/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                <Calendar size={16} />
                Book a Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
