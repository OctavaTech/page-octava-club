'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Recognitions: React.FC = () => {
  return (
    <section
      id="reconocimientos"
      className="relative min-h-[500px] py-10 flex items-center"
      style={{ backgroundImage: 'url(/bg-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
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
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="relative"
              >
                <img src="/icons/icon-trophy.svg" alt="Trofeo" className="w-12 h-12 md:w-16 md:h-16" />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-black text-white">TOP 100 MUNDIAL</h2>
            </div>
            <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              <span className="text-yellow-400 font-bold">6 años consecutivos</span> representando a Colombia en el prestigioso ranking de
              <span className="text-white font-bold"> DJ MAG</span>
            </p>
          </div>
        </Reveal>

        {/* Carrusel infinito de reconocimientos */}
        <Reveal direction="up">
          <div className="relative overflow-hidden pt-4 pb-4">
            {/* Carrusel infinito */}
            <div className="relative">
              <motion.div
                animate={{ x: [0, -1560] }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
                className="flex gap-6"
              >
                {/* Primera set de tarjetas */}
                {[
                  { year: '2024', position: '#99', img: '2024.png', highlight: 'Mantenemos la excelencia' },
                  { year: '2023', position: '#98', img: '2023.png', highlight: 'Consolidación mundial' },
                  { year: '2022', position: '#91', img: '2022.png', highlight: 'Ascenso meteórico' },
                  { year: '2021', position: '#97', img: '2021.png', highlight: 'Resiliencia post-pandemia' },
                  { year: '2019', position: '#96', img: '2019.png', highlight: 'El inicio de la leyenda' },
                ].map((recognition, i) => (
                  <div key={`first-${i}`} className="flex-shrink-0 w-72">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -10, boxShadow: '0 20px 40px rgba(234, 179, 8, 0.3)' }}
                      className="relative bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-4 border border-zinc-700/30 hover:border-yellow-400/50 transition-all duration-300 group"
                    >
                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Contenido principal */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-1">{recognition.position}</div>
                            <div className="text-base md:text-lg font-bold text-white">{recognition.year}</div>
                          </div>
                          <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-800/50 rounded-xl flex items-center justify-center p-2 group-hover:bg-yellow-400/10 transition-colors duration-300">
                            <img src={`/slider2/${recognition.img}`} alt={`DJ Mag ${recognition.year}`} className="w-full h-full object-contain" />
                          </div>
                        </div>

                        <p className="text-zinc-300 text-sm font-medium text-center">{recognition.highlight}</p>

                        {/* Línea decorativa */}
                        <div className="mt-3 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
                      </div>

                      {/* Efecto de partículas doradas */}
                      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                        <motion.div
                          animate={{ x: [0, 100, 0], opacity: [0, 1, 0] }}
                          transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                          className="absolute top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full blur-sm"
                        />
                        <motion.div
                          animate={{ x: [100, 0, 100], opacity: [0, 1, 0] }}
                          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                          className="absolute bottom-0 right-0 w-1 h-1 bg-yellow-300 rounded-full blur-sm"
                        />
                      </div>
                    </motion.div>
                  </div>
                ))}

                {/* Segunda set de tarjetas (duplicada para seamless loop) */}
                {[
                  { year: '2024', position: '#99', img: '2024.png', highlight: 'Mantenemos la excelencia' },
                  { year: '2023', position: '#98', img: '2023.png', highlight: 'Consolidación mundial' },
                  { year: '2022', position: '#91', img: '2022.png', highlight: 'Ascenso meteórico' },
                  { year: '2021', position: '#97', img: '2021.png', highlight: 'Resiliencia post-pandemia' },
                  { year: '2019', position: '#96', img: '2019.png', highlight: 'El inicio de la leyenda' },
                ].map((recognition, i) => (
                  <div key={`second-${i}`} className="flex-shrink-0 w-72">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -10, boxShadow: '0 20px 40px rgba(234, 179, 8, 0.3)' }}
                      className="relative bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-4 border border-zinc-700/30 hover:border-yellow-400/50 transition-all duration-300 group"
                    >
                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Contenido principal */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-1">{recognition.position}</div>
                            <div className="text-base md:text-lg font-bold text-white">{recognition.year}</div>
                          </div>
                          <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-800/50 rounded-xl flex items-center justify-center p-2 group-hover:bg-yellow-400/10 transition-colors duration-300">
                            <img src={`/slider2/${recognition.img}`} alt={`DJ Mag ${recognition.year}`} className="w-full h-full object-contain" />
                          </div>
                        </div>

                        <p className="text-zinc-300 text-sm font-medium text-center">{recognition.highlight}</p>

                        {/* Línea decorativa */}
                        <div className="mt-3 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
                      </div>

                      {/* Efecto de partículas doradas */}
                      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                        <motion.div
                          animate={{ x: [0, 100, 0], opacity: [0, 1, 0] }}
                          transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                          className="absolute top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full blur-sm"
                        />
                        <motion.div
                          animate={{ x: [100, 0, 100], opacity: [0, 1, 0] }}
                          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
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
  );
};

export default Recognitions;


