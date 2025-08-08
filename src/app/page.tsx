'use client';
import React from "react";
import Navbar from "./components/Navbar";
import HeroSlides from "./components/HeroSlides";
import { useEvents } from "./hooks/useEvents";
import EventsDisplay from "./components/EventsDisplay";
import CorporateContactForm from "./components/CorporateContactForm";
import CloudinaryGallery from "./components/CloudinaryGallery";
import { motion } from "framer-motion";
import Reveal from "./components/Reveal";
import Footer from "./components/Footer";

export default function Home() {
  const { events, loading, error, refetch, forceRefetch, clearError } = useEvents();

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      
      {/* Sección 1: Hero - Historia épica de resurrección */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo animado con slide-4 y slide-5 */}
        <HeroSlides />
        <div className="absolute inset-0 bg-black/60 z-5"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Título principal con efecto dramático */}
          <div className="mb-8">
            <Reveal direction="up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl">
                <span className="text-white">DEL FUEGO</span>
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl">
                <span className="text-white">A LA GLORIA</span>
              </h1>
            </Reveal>
          </div>

          {/* Historia épica */}
          <Reveal direction="up">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
            <p className="text-lg md:text-xl text-zinc-200 mb-4 leading-relaxed text-justify">
              <span className="text-white font-semibold">2019:</span> Las llamas devoraron nuestros sueños. 
              Octava Club se convirtió en cenizas, pero no nuestro espíritu.
            </p>
            <p className="text-lg md:text-xl text-zinc-200 mb-4 leading-relaxed text-justify">
              <span className="text-white font-semibold">2020-2021:</span> De las ruinas surgió la determinación. 
              Reconstruimos no solo un club, sino una leyenda.
            </p>
            <p className="text-lg md:text-xl text-zinc-200 leading-relaxed text-justify">
              <span className="text-white font-semibold">2022-2025:</span> Hoy somos más fuertes que nunca. 
              <span className="text-white font-bold"> Top 100 mundial en DJ Mag</span> por 6 años consecutivos.
            </p>
          </div>
          </Reveal>

          {/* Llamada a la acción */}
          <Reveal direction="up" delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/about" className="bg-gradient-to-r from-white to-gray-200 text-black rounded-full px-8 py-4 font-bold text-lg hover:from-gray-200 hover:to-white transition-all duration-300 hover:scale-105 shadow-2xl">
              CONOCE NUESTRA HISTORIA
            </a>
            <a href="#galeria" className="border-2 border-white text-white rounded-full px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-2xl">
              VIVE LA EXPERIENCIA
            </a>
          </div>
          </Reveal>

          {/* Badge de reconocimiento */}
          <Reveal direction="up" delay={0.2}>
          <div className="mt-8">
            <a href="#reconocimientos" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-400 to-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm hover:from-yellow-400 hover:to-gold-500 transition-all duration-300 hover:scale-105 cursor-pointer">
              <span>🏆</span>
              <span>TOP 100 MUNDIAL DJ MAG 2024</span>
            </a>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Sección 2: Eventos Próximos - bg-2 */}
      <section id="eventos" className="relative min-h-screen py-20">
        <div className="absolute inset-0 z-0">
          <img src="/bg-2.jpg" alt="Events Background" className="w-full h-full object-cover brightness-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Reveal direction="up">
            {/* Display de eventos con opciones de visualización */}
            <EventsDisplay events={events} loading={loading} />
          </Reveal>
          
          {/* Estado de error */}
          {error && (
            <div className="text-center py-20">
              <p className="text-red-400 mb-4">Error al cargar eventos: {error}</p>
              <div className="flex gap-4 justify-center mt-4">
                <button 
                  onClick={forceRefetch}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Reintentar
                </button>
                <button 
                  onClick={clearError}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                  Ocultar Error
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sección 3: Galería - bg-3 */}
      <section id="galeria" className="relative min-h-screen py-20">
        {/* Degradado superior para transición suave */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-900 to-transparent z-15"></div>
        <div className="absolute inset-0 z-0">
          <img src="/bg-3.jpg" alt="Gallery Background" className="w-full h-full object-cover brightness-30 backdrop-blur-sm" />
        </div>
        <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm z-5"></div>
        {/* Degradado inferior para transición suave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent z-15"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
            <Reveal direction="left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Galería del Club</h2>
                <p className="text-lg text-zinc-300 mb-1">Vive los mejores momentos capturados en nuestro club.</p>
                <span className="text-zinc-400 text-sm">Etiqueta a <span className="text-blue-400 font-semibold">@octavaclub</span> para aparecer destacado</span>
              </div>
            </Reveal>
            
            {/* Botón de Instagram en la parte superior derecha */}
            <Reveal direction="right" delay={0.1}>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/octavaclub/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-lg">📸</span>
                  <span>SÍGUENOS EN INSTAGRAM</span>
                </a>
              </div>
            </Reveal>
          </div>
           
           {/* Galería de Cloudinary */}
           <Reveal direction="up">
             <CloudinaryGallery />
           </Reveal>
        </div>
      </section>

      {/* Sección 4: Reconocimientos - bg-4 */}
      <section id="reconocimientos" className="relative min-h-[500px] py-10 flex items-center" style={{ backgroundImage: 'url(/bg-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Degradado superior para transición suave */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-900 to-transparent z-15"></div>
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm z-0"></div>
      {/* Degradado inferior para transición suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent z-15"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <Reveal direction="up">
          <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3 
                  }}
                  className="relative"
                >
                  <img src="/icons/icon-trophy.svg" alt="Trofeo" className="w-12 h-12 md:w-16 md:h-16" />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-black text-white">
                  TOP 100 MUNDIAL
                </h2>
        </div>
              <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                <span className="text-yellow-400 font-bold">6 años consecutivos</span> representando a Colombia 
                en el prestigioso ranking de <span className="text-white font-bold">DJ MAG</span>
              </p>
            </div>
          </Reveal>

          {/* Carrusel infinito de reconocimientos */}
          <Reveal direction="up">
          <div className="relative overflow-hidden pt-4 pb-4">
                        {/* Carrusel infinito */}
            <div className="relative">
              <motion.div
                animate={{ 
                  x: [0, -1560] // Ancho exacto de 5 tarjetas (5 * 312px)
                }}
                transition={{ 
                  duration: 50, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="flex gap-6"
              >
                {/* Primera set de tarjetas */}
                {[
                  { year: '2024', position: '#99', img: '2024.png', highlight: 'Mantenemos la excelencia'},
                  { year: '2023', position: '#98', img: '2023.png', highlight: 'Consolidación mundial'},
                  { year: '2022', position: '#91', img: '2022.png', highlight: 'Ascenso meteórico'},
                  { year: '2021', position: '#97', img: '2021.png', highlight: 'Resiliencia post-pandemia'},
                  { year: '2019', position: '#96', img: '2019.png', highlight: 'El inicio de la leyenda'},
                ].map((recognition, i) => (
                  <div key={`first-${i}`} className="flex-shrink-0 w-72">
                    <motion.div
                      whileHover={{ 
                        scale: 1.05, 
                        y: -10,
                        boxShadow: "0 20px 40px rgba(234, 179, 8, 0.3)"
                      }}
                      className="relative bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-4 border border-zinc-700/30 hover:border-yellow-400/50 transition-all duration-300 group"
                    >
                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                      {/* Contenido principal */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-1">
                              {recognition.position}
                            </div>
                            <div className="text-base md:text-lg font-bold text-white">
                              {recognition.year}
                            </div>
                          </div>
                          <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-800/50 rounded-xl flex items-center justify-center p-2 group-hover:bg-yellow-400/10 transition-colors duration-300">
                            <img 
                              src={`/slider2/${recognition.img}`} 
                              alt={`DJ Mag ${recognition.year}`} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                        
                        <p className="text-zinc-300 text-sm font-medium text-center">
                          {recognition.highlight}
                        </p>

                        {/* Línea decorativa */}
                        <div className="mt-3 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
                      </div>

                      {/* Efecto de partículas doradas */}
                      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                        <motion.div
                          animate={{ 
                            x: [0, 100, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            repeatDelay: 3 
                          }}
                          className="absolute top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full blur-sm"
                        />
                        <motion.div
                          animate={{ 
                            x: [100, 0, 100],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            repeatDelay: 4 
                          }}
                          className="absolute bottom-0 right-0 w-1 h-1 bg-yellow-300 rounded-full blur-sm"
                        />
                      </div>
                    </motion.div>
                  </div>
                ))}

                {/* Segunda set de tarjetas (duplicada para seamless loop) */}
                {[
                  { year: '2024', position: '#99', img: '2024.png', highlight: 'Mantenemos la excelencia'},
                  { year: '2023', position: '#98', img: '2023.png', highlight: 'Consolidación mundial'},
                  { year: '2022', position: '#91', img: '2022.png', highlight: 'Ascenso meteórico'},
                  { year: '2021', position: '#97', img: '2021.png', highlight: 'Resiliencia post-pandemia'},
                  { year: '2019', position: '#96', img: '2019.png', highlight: 'El inicio de la leyenda'},
                ].map((recognition, i) => (
                  <div key={`second-${i}`} className="flex-shrink-0 w-72">
                    <motion.div
                      whileHover={{ 
                        scale: 1.05, 
                        y: -10,
                        boxShadow: "0 20px 40px rgba(234, 179, 8, 0.3)"
                      }}
                      className="relative bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-4 border border-zinc-700/30 hover:border-yellow-400/50 transition-all duration-300 group"
                    >
                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Contenido principal */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-1">
                              {recognition.position}
                            </div>
                            <div className="text-base md:text-lg font-bold text-white">
                              {recognition.year}
                            </div>
                          </div>
                          <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-800/50 rounded-xl flex items-center justify-center p-2 group-hover:bg-yellow-400/10 transition-colors duration-300">
                            <img 
                              src={`/slider2/${recognition.img}`} 
                              alt={`DJ Mag ${recognition.year}`} 
                              className="w-full h-full object-contain"
                            />
              </div>
            </div>
                        
                        <p className="text-zinc-300 text-sm font-medium text-center">
                          {recognition.highlight}
                        </p>

                        {/* Línea decorativa */}
                        <div className="mt-3 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
                      </div>

                      {/* Efecto de partículas doradas */}
                      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                        <motion.div
                          animate={{ 
                            x: [0, 100, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            repeatDelay: 3 
                          }}
                          className="absolute top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full blur-sm"
                        />
                        <motion.div
                          animate={{ 
                            x: [100, 0, 100],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            repeatDelay: 4 
                          }}
                          className="absolute bottom-0 right-0 w-1 h-1 bg-yellow-300 rounded-full blur-sm"
                        />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
          </div>
          </div>
          </Reveal>

    
        </div>
      </section>

      {/* Sección 5: Eventos Corporativos - bg-5 */}
      <section id="eventos-corporativos" className="relative min-h-screen py-20">
        <div className="absolute inset-0 z-0">
          <img src="/bg-5.jpg" alt="Corporate Background" className="w-full h-full object-cover brightness-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Eventos Corporativos
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Transforma tu evento empresarial en una experiencia inolvidable. 
                Nuestras instalaciones exclusivas y servicios personalizados están 
                diseñados para hacer de tu evento corporativo un éxito rotundo.
              </p>
            </div>
          </Reveal>

          {/* Formulario de contacto */}
          <Reveal direction="up" delay={0.1}>
            <CorporateContactForm />
          </Reveal>
        </div>
      </section>
      
      {/* Footer personalizado */}
      <Footer />
 
    </div>
  );
}