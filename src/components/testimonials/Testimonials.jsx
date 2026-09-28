import { MessageSquareQuote, Star } from "lucide-react";
import React from "react";
import TestimonialCard, { testimonials } from "./TestimonialCard";

const avgRating = (
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
).toFixed(1);

const Testimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/40 backdrop-blur-md border border-purple-500/40">
            <MessageSquareQuote
              size={15}
              className="text-purple-400 animate-pulse"
            />
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-purple-300">
              Member Stories
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100">
            Real People,{" "}
            <span className="bg-gradient-to-tr from-purple-800 via-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-slate-400 max-w-md leading-relaxed">
            Don&apos;t take our word for it — hear directly from the members who
            transformed their lives with us.
          </p>

          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-slate-300 text-sm font-semibold">
              {avgRating}
            </span>
            <span className="text-slate-500 text-sm">
              from {testimonials.length} reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
