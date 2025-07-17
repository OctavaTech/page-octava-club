'use client';
import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar";
import EventGrid from "./components/EventGrid";
import { useEvents } from "./hooks/useEvents";

export default function Home() {
  // Configuración de la API FourVenues
  const apiConfig = {
    apiKey: process.env.NEXT_PUBLIC_FOURVENUES_API_KEY,
    channelSlug: process.env.NEXT_PUBLIC_FOURVENUES_CHANNEL_SLUG,
    enabled: !!(process.env.NEXT_PUBLIC_FOURVENUES_API_KEY && process.env.NEXT_PUBLIC_FOURVENUES_CHANNEL_SLUG)
  };
  
  const { events, loading, error } = useEvents(apiConfig);

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      
      {/* Sección 1: Hero - slide-4 y slide-5 dinámicos */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo animado con slide-4 y slide-5 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slide-4 animate-slideshow-bg opacity-100"></div>
          <div className="absolute inset-0 bg-slide-5 animate-slideshow-bg-delayed opacity-0"></div>
        </div>
        <div className="absolute inset-0 bg-black/40 z-5"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg animate-fade-in-up">
            Vive la noche como nunca antes
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200 mb-10 drop-shadow animate-fade-in-up-delay">
            Sumérgete en una experiencia única bajo las luces de nuestra pista
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="border-2 border-white text-white rounded-full px-8 py-3 font-semibold text-md hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-105">
              VER VIDEO
            </button>
            <button className="border-2 border-white text-white rounded-full px-8 py-3 font-semibold text-md hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-105">
              PRÓXIMOS EVENTOS
            </button>
          </div>
        </div>
      </section>

      {/* Sección 2: Eventos Próximos - bg-2 */}
      <section id="eventos" className="relative min-h-screen py-20">
        <div className="absolute inset-0 z-0">
          <img src="/bg-2.jpg" alt="Events Background" className="w-full h-full object-cover brightness-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Eventos Nocturnos Destacados
          </h2>
          <p className="text-md text-zinc-300 mb-16">
          Puertas abiertas desde las 9:00 P.M.
          </p>
          
          {/* Estado de carga */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              <span className="ml-4 text-white">Cargando eventos...</span>
            </div>
          )}
          
          {/* Estado de error */}
          {error && (
            <div className="text-center py-20">
              <p className="text-red-400 mb-4">Error al cargar eventos: {error}</p>
              <p className="text-zinc-400">Mostrando eventos de ejemplo</p>
            </div>
          )}
          
          {/* Grid de eventos */}
          {!loading && events.length > 0 && (
            <EventGrid events={events} />
          )}
          
          {/* Estado vacío */}
          {!loading && events.length === 0 && !error && (
            <div className="text-center py-20">
              <p className="text-zinc-400 text-lg">No hay eventos disponibles en este momento</p>
            </div>
          )}
        </div>
      </section>

      {/* Sección 3: Galería - bg-3 */}
      <section id="galeria" className="relative min-h-screen py-20">
        <div className="absolute inset-0 z-0">
          <img src="/bg-3.jpg" alt="Gallery Background" className="w-full h-full object-cover brightness-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            GALERÍA
          </h2>
          <p className="text-xl text-zinc-300 text-center mb-16 max-w-2xl mx-auto">
            Revive los mejores momentos de nuestros eventos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <img src={`/gallery-${i}.jpg`} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 4: Reconocimientos - bg-4 */}
      <section id="reconocimientos" className="relative min-h-screen py-20">
        <div className="absolute inset-0 z-0">
          <img src="/bg-4.jpg" alt="Recognition Background" className="w-full h-full object-cover brightness-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            RECONOCIMIENTOS
          </h2>
          <p className="text-xl text-zinc-300 text-center mb-16 max-w-2xl mx-auto">
            Premiados por brindar las mejores experiencias nocturnas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Mejor Club 2024", desc: "Reconocido por la excelencia en entretenimiento nocturno" },
              { title: "DJ Awards", desc: "Mejor programación musical de la región" },
              { title: "Experiencia VIP", desc: "Servicio premium reconocido por clientes" }
            ].map((award, i) => (
              <div key={i} className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8 text-center hover:bg-zinc-900/90 transition">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                <p className="text-zinc-300">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 5: Eventos Corporativos - bg-5 */}
      <section id="eventos-corporativos" className="relative min-h-screen py-20">
        <div className="absolute inset-0 z-0">
          <img src="/bg-5.jpg" alt="Corporate Background" className="w-full h-full object-cover brightness-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              EVENTOS CORPORATIVOS
            </h2>
            <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
              Organiza tu evento corporativo con nosotros. Espacios exclusivos, catering premium y entretenimiento de primera clase.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Servicios Incluidos</h3>
                <ul className="text-zinc-300 space-y-2">
                  <li>• Espacios privados exclusivos</li>
                  <li>• Catering personalizado</li>
                  <li>• Sistema de sonido profesional</li>
                  <li>• Iluminación especializada</li>
                  <li>• Servicio de bar premium</li>
                </ul>
              </div>
              <div className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Capacidades</h3>
                <ul className="text-zinc-300 space-y-2">
                  <li>• Hasta 500 personas</li>
                  <li>• Múltiples espacios disponibles</li>
                  <li>• Parqueadero privado</li>
                  <li>• Seguridad 24/7</li>
                  <li>• Coordinación completa</li>
                </ul>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full px-10 py-4 font-bold text-lg hover:from-blue-600 hover:to-indigo-600 transition">
              SOLICITAR COTIZACIÓN
            </button>
          </div>
        </div>
      </section>

      {/* Sección 6: Contacto - bg-6 */}
      <section id="contacto" className="relative min-h-screen py-20">
        <div className="absolute inset-0 z-0">
          <img src="/bg-6.jpg" alt="Contact Background" className="w-full h-full object-cover brightness-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            CONTACTO
          </h2>
          <p className="text-xl text-zinc-300 text-center mb-16 max-w-2xl mx-auto">
            Estamos aquí para hacer realidad tu próximo evento
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Nombre completo" className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:border-indigo-500 focus:outline-none" />
                <input type="email" placeholder="Email" className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:border-indigo-500 focus:outline-none" />
                <input type="tel" placeholder="Teléfono" className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:border-indigo-500 focus:outline-none" />
                <textarea placeholder="Mensaje" rows={4} className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:border-indigo-500 focus:outline-none resize-none"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg py-3 font-semibold hover:from-blue-600 hover:to-indigo-600 transition">
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>
            <div className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    📍
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Dirección</h4>
                    <p className="text-zinc-300">Cra 8. #63 - 41, Bogotá</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    📞
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Teléfono</h4>
                    <p className="text-zinc-300">+57 300 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-zinc-300">info@octavaclub.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    🕒
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Horarios</h4>
                    <p className="text-zinc-300">Jueves a Sábado: 9:00 PM - 4:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
