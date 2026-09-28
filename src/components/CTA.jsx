import { ArrowRight, Zap, Users, ShieldCheck } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const perks = [
  { icon: Zap, label: "No contracts" },
  { icon: Users, label: "Expert trainers" },
  { icon: ShieldCheck, label: "7-day free trial" },
];

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl p-[1px] bg-gradient-to-br from-purple-600 via-fuchsia-600 to-purple-900">
          <div className="relative flex flex-col items-center text-center gap-8 rounded-3xl overflow-hidden bg-slate-950/90 backdrop-blur-sm px-8 py-16">
            <div className="relative z-10 flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/60 backdrop-blur-md border border-purple-500/40">
              <Zap size={14} className="text-purple-400 animate-pulse" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-purple-300">
                Limited Time Offer
              </span>
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 leading-tight">
                Start Your{" "}
                <span className="bg-gradient-to-tr from-purple-700 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                  Transformation,
                </span>
                <br />
                Today
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto leading-relaxed mt-2">
                Join thousands of members already training smarter. Your first
                week is completely free — no credit card required.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
              {perks.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-sm text-slate-300"
                >
                  <Icon size={13} className="text-purple-400" />
                  {label}
                </div>
              ))}
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary">
                Get Started Free <ArrowRight size={15} />
              </Button>
              <Button variant="outline" className="gap-2 px-8">
                View All Plans
              </Button>
            </div>

            {/* Fine print */}
            <p className="relative z-10 text-xs text-slate-600">
              Cancel anytime &bull; No hidden fees &bull; Instant access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
