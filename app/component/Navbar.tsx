"use client";

import { useState } from "react";
import { Menu, X, Link2 } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full p-6
    bg-white/80 backdrop-blur-lg shadow-lg rounded-t-2xl border border-white/40">

      {/* Top Row */}
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 font-extrabold text-2xl text-blue-700">
          <Link2 className="text-blue-600" />
          ShortLinker
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">

          <a
            href="#"
            className="relative group hover:text-blue-600 transition"
          >
            Dashboard
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>

          <a
            href="#"
            className="relative group hover:text-blue-600 transition"
          >
            URL History
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>

          <a
            href="#"
            className="relative group hover:text-blue-600 transition"
          >
            Login
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block px-6 py-2 rounded-xl font-semibold text-white
        bg-gradient-to-r from-blue-600 to-indigo-600 
        hover:scale-105 transition-transform duration-300 shadow-md">
          Get Started 🚀
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-5 flex flex-col gap-4 
        bg-white rounded-xl p-5 shadow-lg border">

          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </a>

          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            URL History
          </a>

          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </a>

          <button className="w-full py-2 rounded-xl font-semibold text-white
          bg-gradient-to-r from-blue-600 to-indigo-600">
            Get Started 🚀
          </button>
        </div>
      )}
    </nav>
  );
}
