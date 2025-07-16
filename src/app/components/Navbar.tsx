import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
        </div>
        {/* Menú */}
        <ul className="flex gap-6 items-center text-sm font-medium">
          <li>
            <a href="#eventos-nocturnos" className="text-zinc-200 hover:text-white transition">EVENTOS NOCTURNOS</a>
          </li>
          <li>
            <a href="#galeria" className="text-zinc-200 hover:text-white transition">GALERIA</a>
          </li>
          <li>
            <a href="#reconocimientos" className="text-zinc-200 hover:text-white transition">RECONOCIMIENTOS</a>
          </li>
          <li>
            <a href="#eventos-corporativos" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full shadow font-semibold ml-2 hover:from-blue-600 hover:to-indigo-600 transition flex items-center gap-2">
              EVENTOS CORPORATIVOS
              <span className="ml-1">↗</span>
            </a>
          </li>
          <li>
            <a href="#contacto" className="text-zinc-200 hover:text-white transition">CONTACTO</a>
          </li>
        </ul>
        {/* Redes sociales */}
        <div className="flex gap-3 items-center text-white text-lg">
          <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition"><i className="fab fa-instagram"></i>IG</a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition"><i className="fab fa-facebook"></i>FB</a>
          <a href="#" aria-label="Spotify" className="hover:text-blue-400 transition"><i className="fab fa-spotify"></i>SP</a>
          <a href="#" aria-label="TikTok" className="hover:text-blue-400 transition"><i className="fab fa-tiktok"></i>TT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 