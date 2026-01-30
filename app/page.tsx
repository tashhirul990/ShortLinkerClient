'use client';
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import UrlShortenerBox from "./component/UrlShortenerBox";
import Features from "./component/Features";
import { use } from "react";

export default function Home() {
  return (
    <main className="min-h-[1000px] flex flex-col items-center px-6 
bg-[url('/background_img.png')] bg-cover bg-center">
      <div className=" relative max-w-6xl mt-12 border-white/40 rounded-2xl
      shadow-2xl border 
      flex flex-col
      w-full">
      <div className="mb-44">
          {/* Navbar */}
      <div className="w-full px-0!">
        <Navbar />
      </div>

      {/* Hero */}
      <Hero />

      {/* URL Shortener */}
      <UrlShortenerBox />
      </div>

      {/* Features */}
      <div className="bg-[url('/background_img.png')] bg-cover bg-center absolute bottom-16 w-full items-center justify-center ml-20 mr-auto">
        <Features />
      </div>
      
      </div>
      
    </main>
  );
}
