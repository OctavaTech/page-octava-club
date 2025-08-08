'use client';
import React from 'react';

const Footer = () => {
    return (
<footer id="contacto" className="bg-gradient-to-b from-black via-[#0a0a2a] to-[#0a0a2a] pt-12 pb-6 px-4">
<div className="max-w-5xl mx-auto flex flex-col items-center">
  <img src="/Logo-footer.svg" alt="Logo Octava" className="w-24 h-24 mb-4" />
  <hr className="w-full border-t border-zinc-400/30 my-6" />
  <div className="flex gap-6 mb-6">
    <a href="https://www.instagram.com/octavaclub" aria-label="Instagram" className="text-white text-2xl hover:text-blue-400 transition"><i className="fab fa-instagram"></i></a>
    <a href="https://www.facebook.com/cluboctava" aria-label="Facebook" className="text-white text-2xl hover:text-blue-400 transition"><i className="fab fa-facebook-f"></i></a>
    <a href="https://open.spotify.com/user/9w129wyp9f9j9ozpcw4l31rbb?si=CEXg_dN9SNar1Ru1DEbMpQ&nd=1&dlsi=c14e1a7f68b44cca" aria-label="Spotify" className="text-white text-2xl hover:text-blue-400 transition"><i className="fab fa-spotify"></i></a>
    <a href="https://www.tiktok.com/@octavaclub" aria-label="TikTok" className="text-white text-2xl hover:text-blue-400 transition"><i className="fab fa-tiktok"></i></a>
  </div>
  <div className="text-center text-white/80 mb-2 font-semibold tracking-wide">CONTACTO</div>
  <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-center text-zinc-200 text-sm mb-4">
    <span>Ubicación:Cra. 8 #63-41. Bogotá, Colombia</span>
    <span>Teléfono:+57 315 6607465</span>
    <span>Correo:info@octavaclub.com</span>
  </div>
  <div className="text-xs text-zinc-400 mt-2">
    ©2025 OCTAVA • <a href="#" className="underline hover:text-white transition">WEBSITE TERMS OF USE</a> • <a href="#" className="underline hover:text-white transition">PRIVACY POLICY</a>
  </div>
</div>
</footer>
);
};

export default Footer;  
