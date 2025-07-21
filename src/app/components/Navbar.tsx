'use client';
import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaSpotify, FaTiktok, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900/95 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.webp" alt="Logo" className="h-12 w-auto max-h-12 max-w-[48px] object-contain" />
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-8 items-center text-sm font-medium">
          <li>
            <a href="#inicio" className="text-zinc-200 hover:text-white transition">INICIO</a>
          </li>
          <li>
            <a href="#eventos" className="text-zinc-200 hover:text-white transition">EVENTOS NOCTURNOS</a>
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

        {/* Redes sociales Desktop */}
        <div className="hidden md:flex gap-4 items-center text-white text-xl">
          <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Spotify" className="hover:text-blue-400 transition">
            <FaSpotify />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-blue-400 transition">
            <FaTiktok />
          </a>
        </div>

        {/* Botón hamburguesa */}
        <button 
          className="md:hidden text-white text-2xl z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-zinc-900/95 backdrop-blur transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#inicio" onClick={closeMenu} className="text-white text-2xl font-semibold hover:text-blue-400 transition">
            INICIO
          </a>
          <a href="#eventos" onClick={closeMenu} className="text-white text-2xl font-semibold hover:text-blue-400 transition">
            EVENTOS NOCTURNOS
          </a>
          <a href="#galeria" onClick={closeMenu} className="text-white text-2xl font-semibold hover:text-blue-400 transition">
            GALERIA
          </a>
          <a href="#reconocimientos" onClick={closeMenu} className="text-white text-2xl font-semibold hover:text-blue-400 transition">
            RECONOCIMIENTOS
          </a>
          <a href="#eventos-corporativos" onClick={closeMenu} className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow font-semibold hover:from-blue-600 hover:to-indigo-600 transition">
            EVENTOS CORPORATIVOS
          </a>
          <a href="#contacto" onClick={closeMenu} className="text-white text-2xl font-semibold hover:text-blue-400 transition">
            CONTACTO
          </a>
          
          {/* Redes sociales móvil */}
          <div className="flex gap-6 items-center text-white text-3xl mt-8">
            <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Spotify" className="hover:text-blue-400 transition">
              <FaSpotify />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-blue-400 transition">
              <FaTiktok />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-blue-400 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 