'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCloudinaryGallery } from '../hooks/useCloudinaryGallery';

const CloudinaryGallery: React.FC = () => {
  const { images, loading, error, refetch } = useCloudinaryGallery();
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        <p className="text-white mt-4">Cargando galería...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-400 mb-4">Error al cargar la galería: {error}</p>
        <button 
          onClick={refetch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-zinc-400">No hay imágenes en la galería por el momento.</p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full py-8 overflow-hidden"
      onMouseEnter={() => setIsGalleryHovered(true)}
      onMouseLeave={() => setIsGalleryHovered(false)}
    >
      <motion.div 
        className="flex gap-6"
        animate={{ x: [0, -2040] }} // Ancho basado en el número de imágenes
        transition={{
          duration: isGalleryHovered ? 120 : 80, // Más lento en hover
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {/* Primera set de imágenes */}
        {images.map((image, i) => (
          <motion.div
            key={`first-${image.public_id}`}
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
                src={image.secure_url} 
                alt={`Galería Octava Club ${i + 1}`} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110" 
                loading="lazy"
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-xl">
                    <div className="text-lg font-bold mb-1">Octava Club</div>
                    <div className="text-sm opacity-80">
                      {new Date(image.created_at).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
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

        {/* Segunda set de imágenes (duplicada para loop infinito) */}
        {images.map((image, i) => (
          <motion.div
            key={`second-${image.public_id}`}
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
                src={image.secure_url} 
                alt={`Galería Octava Club ${i + 1}`} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110" 
                loading="lazy"
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-xl">
                    <div className="text-lg font-bold mb-1">Octava Club</div>
                    <div className="text-sm opacity-80">
                      {new Date(image.created_at).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
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
  );
};

export default CloudinaryGallery;