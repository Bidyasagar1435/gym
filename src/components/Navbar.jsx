import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const navLinks = [
  "Home",
  "Programs",
  "Trainers",
  "Exercises",
  "Pricing",
  "Testimonials",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  
  
  const dispatch = useDispatch();

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Top bar */}
      <section className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-1.5rem)] max-w-5xl">
        <div className="flex items-center justify-between gap-4 rounded-xl px-4 sm:px-6 py-2 backdrop-blur-md bg-slate-900/50 border border-white/20 shadow-lg">
          {/* Logo */}
          <div className="w-20 sm:w-24 h-14 sm:h-16 flex items-center justify-center shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Desktop links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5 lg:gap-7 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li
                  key={link}
                  className="hover:text-fuchsia-400 cursor-pointer transition-colors duration-300"
                >
                  {link}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Button variant="primary">Login</Button>
            <Button variant="outline">Sign Up</Button>
          </div>

          {/* Mobile: Login + Hamburger */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <Button variant="primary" className="text-sm px-4 py-1.5">
              Login
            </Button>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:bg-white/15 transition-all duration-200"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown panel */}
        <div
          className={`md:hidden mt-2 rounded-xl backdrop-blur-md bg-slate-900/90 border border-white/15 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center px-4 py-3 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/[0.07] transition-all duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Sign Up */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
              <Button variant="outline" className="w-full justify-center">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
