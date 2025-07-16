import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 relative">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl mt-8 relative">
          <img
            src="/bg-home.jpg"
            alt="Noche en el club"
            className="w-full h-[420px] object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
              Vive la noche como nunca antes
            </h1>
            <p className="text-lg md:text-xl text-zinc-200 mb-8 drop-shadow">
              Sumérgete en una experiencia única bajo las luces de nuestra pista.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="border border-white text-white rounded-full px-6 py-2 font-semibold text-base hover:bg-white hover:text-zinc-900 transition">
                VER VIDEO
              </button>
              <button className="border border-white text-white rounded-full px-6 py-2 font-semibold text-base hover:bg-white hover:text-zinc-900 transition">
                PRÓXIMOS EVENTOS
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
