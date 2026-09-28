import { CreditCard, ArrowRight } from "lucide-react";
import React from "react";
import MembershipCard, { plans } from "./MembershipCard";
import { Button } from "../ui/button";

const Membership = () => {
  return (
    <section className="py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/40 backdrop-blur-md border border-purple-500/40">
            <CreditCard size={15} className="text-purple-400 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-purple-300">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100">
            Choose Your{" "}
            <span className="bg-gradient-to-tr from-purple-800 via-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
              Membership
            </span>
          </h2>
          <p className="text-slate-400 max-w-md leading-relaxed">
            Flexible plans designed to fit every goal and budget — cancel
            anytime, no hidden fees.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start">
          {plans.map((plan) => (
            <MembershipCard key={plan.id} {...plan} />
          ))}
        </div>

        <p className="text-xs text-slate-500">
          All plans include a{" "}
          <span className="text-slate-400 font-medium">7-day free trial</span>.
          No credit card required to start.
        </p>
      </div>
    </section>
  );
};

export default Membership;
