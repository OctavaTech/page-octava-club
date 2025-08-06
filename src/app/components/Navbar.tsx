'use client';
import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaSpotify, FaTiktok, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

// Hook para detectar la sección activa
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'eventos', 'galeria', 'reconocimientos', 'eventos-corporativos', 'contacto'];
      const scrollPosition = window.scrollY + 100; // Offset para el navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar posición inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Función para obtener las clases del enlace según si está activo
  const getLinkClasses = (sectionId: string, isMobile: boolean = false) => {
    const baseClasses = isMobile 
      ? "text-white text-2xl font-semibold transition" 
      : "text-zinc-200 hover:text-white transition";
    
    const activeClasses = isMobile
      ? "text-blue-400 border-b-2 border-blue-400 pb-1"
      : "text-white border-b-2 border-white pb-1";
    
    return `${baseClasses} ${activeSection === sectionId ? activeClasses : ''}`;
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
            <a href="#inicio" className={getLinkClasses('inicio')}>INICIO</a>
          </li>
          <li>
            <a href="#eventos" className={getLinkClasses('eventos')}>EVENTOS</a>
          </li>
          <li>
            <a href="#galeria" className={getLinkClasses('galeria')}>GALERIA</a>
          </li>
          <li>
            <a href="#reconocimientos" className={getLinkClasses('reconocimientos')}>RECONOCIMIENTOS</a>
          </li>
          <li>
            <a href="#eventos-corporativos" className={`bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full shadow font-semibold ml-2 hover:from-blue-600 hover:to-indigo-600 transition flex items-center gap-2 ${activeSection === 'eventos-corporativos' ? 'ring-2 ring-white ring-opacity-50' : ''}`}>
              EVENTOS CORPORATIVOS
            </a>
          </li>
          <li>
            <a href="#contacto" className={getLinkClasses('contacto')}>CONTACTO</a>
          </li>
        </ul>

        {/* Redes sociales Desktop */}
        <div className="hidden md:flex gap-4 items-center text-white text-xl">
          <a href="https://www.instagram.com/octavaclub" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-400 transition">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/cluboctava" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition">
            <FaFacebookF />
          </a>
          <a href="https://open.spotify.com/user/9w129wyp9f9j9ozpcw4l31rbb?si=CEXg_dN9SNar1Ru1DEbMpQ&nd=1&dlsi=c14e1a7f68b44cca" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="hover:text-blue-400 transition">
            <FaSpotify />
          </a>
          <a href="https://www.tiktok.com/@octavaclub" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-blue-400 transition">
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
          <a href="#inicio" onClick={closeMenu} className={getLinkClasses('inicio', true)}>
            INICIO
          </a>
          <a href="#eventos" onClick={closeMenu} className={getLinkClasses('eventos', true)}>
            EVENTOS
          </a>
          <a href="#galeria" onClick={closeMenu} className={getLinkClasses('galeria', true)}>
            GALERIA
          </a>
          <a href="#reconocimientos" onClick={closeMenu} className={getLinkClasses('reconocimientos', true)}>
            RECONOCIMIENTOS
          </a>
          <a href="#eventos-corporativos" onClick={closeMenu} className={`bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow font-semibold hover:from-blue-600 hover:to-indigo-600 transition ${activeSection === 'eventos-corporativos' ? 'ring-2 ring-white ring-opacity-50' : ''}`}>
            EVENTOS CORPORATIVOS
          </a>
          <a href="#contacto" onClick={closeMenu} className={getLinkClasses('contacto', true)}>
            CONTACTO
          </a>
          
          {/* Redes sociales móvil */}
          <div className="flex gap-6 items-center text-white text-3xl mt-8">
            <a href="https://www.instagram.com/octavaclub" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-400 transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/cluboctava" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition">
              <FaFacebookF />
            </a>
            <a href="https://open.spotify.com/user/9w129wyp9f9j9ozpcw4l31rbb?si=CEXg_dN9SNar1Ru1DEbMpQ&nd=1&dlsi=c14e1a7f68b44cca" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="hover:text-blue-400 transition">
              <FaSpotify />
            </a>
            <a href="https://www.tiktok.com/@octavaclub" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-blue-400 transition">
              <FaTiktok />
            </a>
            <a href="https://wa.me/573156607465" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-blue-400 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 