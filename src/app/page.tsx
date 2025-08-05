'use client';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSlides from "./components/HeroSlides";
import { useEvents } from "./hooks/useEvents";
import EventsDisplay from "./components/EventsDisplay";
import CorporateContactForm from "./components/CorporateContactForm";
import { motion } from "framer-motion";

export default function Home() {
  const { events, loading, error, refetch, forceRefetch, clearError } = useEvents();
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-900 backdrop-blur-sm transition-all duration-1000 ease-in-out">
      <Navbar />
      
      {/* Sección 1: Hero - Historia épica de resurrección */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo animado con slide-4 y slide-5 */}
        <HeroSlides />
        <div className="absolute inset-0 bg-black/60 z-5"></div>
        {/* Degradado inferior para transición suave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Título principal con efecto dramático */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl animate-fade-in-up">
              <span className="text-white">DEL FUEGO</span>
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl animate-fade-in-up-delay">
              <span className="text-white">A LA GLORIA</span>
            </h1>
          </div>

          {/* Historia épica */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 animate-fade-in-up-delay-2">
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

          {/* Llamada a la acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
            <a href="/about" className="bg-gradient-to-r from-white to-gray-200 text-black rounded-full px-8 py-4 font-bold text-lg hover:from-gray-200 hover:to-white transition-all duration-300 hover:scale-105 shadow-2xl">
              CONOCE NUESTRA HISTORIA
            </a>
            <a href="#galeria" className="border-2 border-white text-white rounded-full px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-2xl">
              VIVE LA EXPERIENCIA
            </a>
          </div>

          {/* Badge de reconocimiento */}
          <div className="mt-8 animate-fade-in-up-delay-4">
            <a href="#reconocimientos" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-400 to-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm hover:from-yellow-400 hover:to-gold-500 transition-all duration-300 hover:scale-105 cursor-pointer">
              <span>🏆</span>
              <span>TOP 100 MUNDIAL DJ MAG 2024</span>
            </a>
          </div>
        </div>
      </section>

      {/* Sección 2: Eventos Próximos - bg-2 */}
      <section id="eventos" className="relative min-h-screen py-20">
        {/* Degradado superior para transición suave */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-900 to-transparent z-15"></div>
        <div className="absolute inset-0 z-0">
          <img src="/bg-2.jpg" alt="Events Background" className="w-full h-full object-cover brightness-30 backdrop-blur-sm" />
        </div>
        <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm z-5"></div>
        {/* Degradado inferior para transición suave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent z-15"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Display de eventos con opciones de visualización */}
          <EventsDisplay events={events} loading={loading} />
          
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
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Galería del Club</h2>
              <p className="text-lg text-zinc-300 mb-1">Vive los mejores momentos capturados en nuestro club.</p>
              <span className="text-zinc-400 text-sm">Etiqueta a <span className="text-blue-400 font-semibold">@octavaclub</span> para aparecer destacado</span>
            </div>
            
            {/* Botón de Instagram en la parte superior derecha */}
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
          </div>
           
           {/* Carrusel Infinito */}
           <div 
             className="relative w-full py-8 overflow-hidden"
             onMouseEnter={() => setIsGalleryHovered(true)}
             onMouseLeave={() => setIsGalleryHovered(false)}
           >
             <motion.div 
               className="flex gap-6"
               animate={{ x: [0, -2040] }} // Ancho total de 6 tarjetas (6 * 340px)
                               transition={{
                  duration: isGalleryHovered ? 80 : 80, // Más lento
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
             >
               {/* Primera fila de imágenes */}
               {[
                 '1.png', '2.png', '3.png', '4.png', '5.png', '6.png',
                 '7.png', '8.png', '9.png', '10.png', '11.png', '12.png'
               ].map((img, i) => (
                 <motion.div
                   key={`first-${i}`}
                   className="flex-shrink-0 w-80 h-96 bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl cursor-pointer relative group"
                   whileHover={{ 
                     scale: 1.02,
                     y: -5,
                     rotateY: 8,
                     transition: { duration: 0.8 }
                   }}
                   style={{
                     transformStyle: 'preserve-3d',
                     perspective: '1000px'
                   }}
                 >
                   <div className="relative w-full h-full">
                     <img 
                       src={`/gallery/${img}`} 
                       alt={`Galería ${i + 1}`} 
                       className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110" 
                     />
                     
                     {/* Overlay con gradiente */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <div className="absolute bottom-6 left-6 right-6">
                         <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-xl">
                           <div className="text-lg font-bold mb-1">Octava Club</div>
                           <div className="text-sm opacity-80">Foto {i + 1} - Momentos únicos</div>
                         </div>
                       </div>
                     </div>
                     
                     {/* Efecto de brillo en hover */}
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     
                     {/* Borde brillante */}
                     <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300" />
                   </div>
                 </motion.div>
               ))}

               {/* Segunda fila de imágenes (duplicada para loop infinito) */}
               {[
                 '1.png', '2.png', '3.png', '4.png', '5.png', '6.png',
                 '7.png', '8.png', '9.png', '10.png', '11.png', '12.png'
            ].map((img, i) => (
                 <motion.div
                   key={`second-${i}`}
                   className="flex-shrink-0 w-80 h-96 bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl cursor-pointer relative group"
                   whileHover={{ 
                     scale: 1.02,
                     y: -5,
                     rotateY: 8,
                     transition: { duration: 0.3 }
                   }}
                   style={{
                     transformStyle: 'preserve-3d',
                     perspective: '1000px'
                   }}
                 >
                   <div className="relative w-full h-full">
                     <img 
                       src={`/gallery/${img}`} 
                       alt={`Galería ${i + 1}`} 
                       className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110" 
                     />
                     
                     {/* Overlay con gradiente */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <div className="absolute bottom-6 left-6 right-6">
                         <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-xl">
                           <div className="text-lg font-bold mb-1">Octava Club</div>
                           <div className="text-sm opacity-80">Foto {i + 1} - Momentos únicos</div>
                         </div>
                       </div>
                     </div>
                     
                     {/* Efecto de brillo en hover */}
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     
                     {/* Borde brillante */}
                     <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300" />
              </div>
                 </motion.div>
               ))}
                          </motion.div>
           </div>
        </div>
      </section>

      {/* Sección 4: Reconocimientos - bg-4 */}
    <section id="reconocimientos" className="relative min-h-[600px] py-16 flex items-center" style={{ backgroundImage: 'url(/bg-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Degradado superior para transición suave */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-900 to-transparent z-15"></div>
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm z-0"></div>
      {/* Degradado inferior para transición suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent z-15"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
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

          {/* Carrusel infinito de reconocimientos */}
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

    
        </div>
      </section>

      {/* Sección 5: Eventos Corporativos - bg-5 */}
      <section id="eventos-corporativos" className="relative min-h-screen py-20">
        {/* Degradado superior para transición suave */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-900 to-transparent z-15"></div>
        <div className="absolute inset-0 z-0">
          <img src="/bg-5.jpg" alt="Corporate Background" className="w-full h-full object-cover brightness-30 backdrop-blur-sm" />
        </div>
        <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm z-5"></div>
        {/* Degradado inferior para transición suave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent z-15"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
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

          {/* Formulario de contacto */}
          <CorporateContactForm />
        </div>
      </section>
      
      {/* Footer personalizado */}
      <footer id="contacto" className="relative pt-12 pb-6 px-4 mt-12 overflow-hidden">
        {/* Fondo con slide-4.jpg */}
        <div className="absolute inset-0 z-0">
          <img src="/Slide-4.jpg" alt="Footer Background" className="w-full h-full object-cover brightness-30 backdrop-blur-sm" />
        </div>
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-5"></div>
        {/* Degradado superior para transición suave */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-900 to-transparent z-10"></div>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <img src="/Logo-footer.svg" alt="Logo Octava" className="w-24 h-24 mb-4" />
          <hr className="w-full border-t border-zinc-400/30 my-6" />
          <div className="flex gap-6 mb-6">
            <a href="https://www.instagram.com/octavaclub" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white text-2xl hover:text-blue-400 transition"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/cluboctava" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white text-2xl hover:text-blue-400 transition"><i className="fab fa-facebook-f"></i></a>
            <a href="https://open.spotify.com/user/9w129wyp9f9j9ozpcw4l31rbb?si=CEXg_dN9SNar1Ru1DEbMpQ&nd=1&dlsi=c14e1a7f68b44cca" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="text-white text-2xl hover:text-blue-400 transition"><i className="fab fa-spotify"></i></a>
            <a href="https://www.tiktok.com/@octavaclub" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white text-2xl hover:text-blue-400 transition"><i className="fab fa-tiktok"></i></a>
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
    </div>
  );
}
