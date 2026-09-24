import React from "react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <section className="fixed top-2 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center justify-between gap-6 rounded-lg px-6 py-2 backdrop-blur-sm bg-slate-900/20 border border-white/25 shadow-lg">
        <div className="w-28 h-14 flex items-center justify-center">
            <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="hidden md:block ">
            <ul className="flex items-center gap-6">
                <li className="hover:text-purple-800 cursor-pointer transition-colors duration-500">Home</li>
                <li className="hover:text-purple-800 cursor-pointer transition-colors duration-500">Programs</li>
                <li className="hover:text-purple-800 cursor-pointer transition-colors duration-500">Trainers</li>
                <li className="hover:text-purple-800 cursor-pointer transition-colors duration-500">Exercises</li>
                <li className="hover:text-purple-800 cursor-pointer transition-colors duration-500">Pricing</li>
            </ul>
        </div>
        <div className="flex items-center justify-between gap-2">
            <Button variant="primary">Login</Button>
            <Button variant="outline">Sign Up</Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
