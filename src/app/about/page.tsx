'use client';
import React from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Recognitions from "../components/Recognitions";
import Footer from "../components/Footer";

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
          <img src="../slide-4.jpg" alt="About Background" className="w-full h-full object-cover brightness-30" />
        </div>
        <div className="absolute inset-0 bg-black/60 z-5"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <Reveal direction="up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 drop-shadow-2xl">
              NUESTRA HISTORIA
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl md:text-2xl text-zinc-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Del fuego a la gloria: La increíble historia de resurrección y éxito de Octava Club
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline de la historia */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <Reveal direction="left">
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
            </Reveal>
            <Reveal direction="right">
              <div className="relative">
                <img src="/gallery/1.png" alt="Octava Club antes del incendio" className="rounded-2xl shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <Reveal direction="left">
              <div className="relative order-2 lg:order-1">
                <img src="/gallery/2.png" alt="Reconstrucción" className="rounded-2xl shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </Reveal>
            <Reveal direction="right">
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
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <Reveal direction="left">
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
            </Reveal>
            <Reveal direction="right">
              <div className="relative">
                <img src="/gallery/3.png" alt="Octava Club actual" className="rounded-2xl shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sección de valores */}
      <section className="py-20 px-4 bg-zinc-800/30">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Nuestros Valores
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="up">
            <div className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8 border border-zinc-700 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                🔥
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Resiliencia</h3>
              <p className="text-zinc-300">
                Convertimos la adversidad en oportunidad. Cada desafío nos hace más fuertes y nos acerca a la excelencia.
              </p>
            </div>
            </Reveal>
            <Reveal direction="up" delay={0.05}>
            <div className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8 border border-zinc-700 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                🎵
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pasión</h3>
              <p className="text-zinc-300">
                La música es nuestro corazón. Cada evento es una oportunidad para crear momentos inolvidables.
              </p>
            </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
            <div className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8 border border-zinc-700 text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                🌟
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excelencia</h3>
              <p className="text-zinc-300">
                Buscamos la perfección en cada detalle, desde el sonido hasta la experiencia del cliente.
              </p>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sección de reconocimientos */}
      <Recognitions />
    
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              ¿Listo para vivir la experiencia?
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <p className="text-xl text-white/90 mb-12">
              Únete a nosotros y sé parte de la leyenda que continúa escribiéndose
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
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
          </Reveal>
        </div>
      </section>

      {/* Footer */}
    <Footer />
    </div>
  );
} 