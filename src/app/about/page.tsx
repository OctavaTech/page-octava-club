'use client';
import React from "react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Header con navegación de regreso */}
      <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900/95 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
          <div className="flex items-center gap-2">
            <img src="/logo.webp" alt="Logo" className="h-12 w-auto max-h-12 max-w-[48px] object-contain" />
          </div>
          <Link 
            href="/" 
            className="text-white hover:text-blue-400 transition flex items-center gap-2 font-semibold"
          >
            <span>←</span>
            <span>Volver al Inicio</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/bg-1.jpg" alt="About Background" className="w-full h-full object-cover brightness-30" />
        </div>
        <div className="absolute inset-0 bg-black/60 z-5"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 drop-shadow-2xl animate-fade-in-up">
            NUESTRA HISTORIA
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Del fuego a la gloria: La increíble historia de resurrección y éxito de Octava Club
          </p>
        </div>
      </section>

      {/* Timeline de la historia */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="bg-zinc-800/50 backdrop-blur rounded-2xl p-8 border border-zinc-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2019
                  </div>
                  <h3 className="text-2xl font-bold text-white">El Incendio</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Las llamas devoraron nuestros sueños en una noche trágica. Octava Club se convirtió en cenizas, 
                  pero no nuestro espíritu. Fue el momento más oscuro de nuestra historia, pero también el catalizador 
                  de nuestra transformación.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/gallery/1.png" alt="Octava Club antes del incendio" className="rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <img src="/gallery/2.png" alt="Reconstrucción" className="rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="bg-zinc-800/50 backdrop-blur rounded-2xl p-8 border border-zinc-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2020-2021
                  </div>
                  <h3 className="text-2xl font-bold text-white">La Reconstrucción</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  De las ruinas surgió la determinación. Reconstruimos no solo un club, sino una leyenda. 
                  Cada ladrillo, cada detalle fue pensado para crear algo más grande y mejor que antes. 
                  La pandemia nos dio tiempo para perfeccionar cada aspecto.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="bg-zinc-800/50 backdrop-blur rounded-2xl p-8 border border-zinc-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2022-2025
                  </div>
                  <h3 className="text-2xl font-bold text-white">La Gloria</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Hoy somos más fuertes que nunca. Top 100 mundial en DJ Mag por 6 años consecutivos. 
                  Hemos representado a Colombia entre los mejores clubes del mundo, creando experiencias 
                  únicas que trascienden la música.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/gallery/3.png" alt="Octava Club actual" className="rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de valores */}
      <section className="py-20 px-4 bg-zinc-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8 border border-zinc-700 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                🔥
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Resiliencia</h3>
              <p className="text-zinc-300">
                Convertimos la adversidad en oportunidad. Cada desafío nos hace más fuertes y nos acerca a la excelencia.
              </p>
            </div>
            <div className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8 border border-zinc-700 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                🎵
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pasión</h3>
              <p className="text-zinc-300">
                La música es nuestro corazón. Cada evento es una oportunidad para crear momentos inolvidables.
              </p>
            </div>
            <div className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8 border border-zinc-700 text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                🌟
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excelencia</h3>
              <p className="text-zinc-300">
                Buscamos la perfección en cada detalle, desde el sonido hasta la experiencia del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de reconocimientos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Reconocimientos que nos hacen únicos
          </h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-3xl mx-auto">
            En los últimos 6 años hemos estado en el prestigioso ranking de DJ MAG, 
            que destaca a los mejores clubes de música electrónica a nivel mundial.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              {img: '2024.png', alt: '#99 2024'},
              {img: '2023.png', alt: '#98 2023'},
              {img: '2022.png', alt: '#91 2022'},
              {img: '2022-1.png', alt: '#93 2022'},
              {img: '2021.png', alt: '#97 2021'},
              {img: '2020.png', alt: '#99 2020'},
              {img: '2019.png', alt: '#96 2019'},
            ].map((logo, i) => (
              <div key={i} className="bg-zinc-800/50 backdrop-blur rounded-xl p-4 border border-zinc-700">
                <img src={`/slider2/${logo.img}`} alt={logo.alt} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            ¿Listo para vivir la experiencia?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Únete a nosotros y sé parte de la leyenda que continúa escribiéndose
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#galeria" 
              className="bg-white text-blue-600 rounded-full px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              VER GALERÍA
            </Link>
            <Link 
              href="/#eventos" 
              className="border-2 border-white text-white rounded-full px-8 py-4 font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              VER EVENTOS
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black via-[#0a0a2a] to-[#0a0a2a] pt-12 pb-6 px-4">
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
            <span>Ubicación: Cra. 8 #63-41. Bogotá, Colombia</span>
            <span>Teléfono: +57 315 6607465</span>
            <span>Correo: info@octavaclub.com</span>
          </div>
          <div className="text-xs text-zinc-400 mt-2">
            ©2025 OCTAVA • <a href="#" className="underline hover:text-white transition">WEBSITE TERMS OF USE</a> • <a href="#" className="underline hover:text-white transition">PRIVACY POLICY</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 