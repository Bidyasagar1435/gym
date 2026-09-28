import { Dumbbell, ArrowRight, Mail } from "lucide-react";
import React from "react";

const links = {
  Company: ["About Us", "Careers", "Press", "Blog"],
  Programs: [
    "Strength Training",
    "Muscle Building",
    "Weight Loss",
    "Yoga & Flexibility",
  ],
  Support: ["FAQ", "Contact Us", "Privacy Policy", "Terms of Service"],
};

const socials = [
  {
    label: "Instagram",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/[0.06]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 pt-16 pb-8 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600">
                <Dumbbell size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold text-slate-100 tracking-wide">
                Fitrd
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Your all-in-one fitness platform. Expert trainers, proven
              programs, and a community that keeps you moving.
            </p>

            <div className="flex items-center gap-0 mt-1">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-l-xl bg-white/[0.04] border border-white/10 flex-1 min-w-0">
                <Mail size={13} className="text-slate-500 shrink-0" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-transparent text-sm text-slate-300 placeholder-slate-600 outline-none w-full"
                />
              </div>
              <button className="flex items-center justify-center px-4 py-2.5 rounded-r-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300 shrink-0 border border-purple-500/50">
                <ArrowRight size={15} className="text-white" />
              </button>
            </div>
            <p className="text-xs text-slate-600 -mt-2">
              Get weekly tips & offers. No spam, ever.
            </p>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading} className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400">
                {heading}
              </span>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 order-2 sm:order-1">
            © {new Date().getFullYear()} Fitrd. All rights reserved.
          </p>

          <div className="flex items-center gap-2 order-1 sm:order-2">
            {socials.map(({ svg, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 text-slate-500 hover:text-slate-200 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
