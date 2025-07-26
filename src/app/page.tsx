'use client';
import React from "react";
import Navbar from "./components/Navbar";
import HeroSlides from "./components/HeroSlides";
import { useEvents } from "./hooks/useEvents";
import EventsDisplay from "./components/EventsDisplay";
import CorporateContactForm from "./components/CorporateContactForm";
import CorporateServices from "./components/CorporateServices";

export default function Home() {
  const { events, loading, error, refetch, clearError } = useEvents();

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      
      {/* Sección 1: Hero - slide-4 y slide-5 dinámicos */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo animado con slide-4 y slide-5 */}
        <HeroSlides />
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
          {/* Display de eventos con opciones de visualización */}
          <EventsDisplay events={events} loading={loading} />
          
          {/* Estado de error */}
          {error && (
            <div className="text-center py-20">
              <p className="text-red-400 mb-4">Error al cargar eventos: {error}</p>
              <div className="flex gap-4 justify-center mt-4">
                <button 
                  onClick={refetch}
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
        <div className="absolute inset-0 z-0">
          <img src="/bg-3.jpg" alt="Gallery Background" className="w-full h-full object-cover brightness-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Galería del Club</h2>
              <p className="text-lg text-zinc-300 mb-1">Vive los mejores momentos capturados en nuestro club.</p>
              <span className="text-zinc-400 text-sm">Etiqueta a <span className="text-blue-400 font-semibold">@octavaclub</span> para aparecer destacado</span>
            </div>
            <div className="flex items-center gap-3 self-start md:self-center">
              <button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xl hover:bg-zinc-700 transition"><span>&lt;</span></button>
              <button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xl hover:bg-zinc-700 transition"><span>&gt;</span></button>
              <a href="https://www.instagram.com/octavaclub/" target="_blank" rel="noopener noreferrer" className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow hover:from-blue-600 hover:to-indigo-600 transition text-sm">SÍGUENOS EN INSTAGRAM</a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {[
              '1.png',
              '2.png',
              '3.png',
              '4.png',
              '5.png',
              '6.png',
              '7.png',
              '8.png',
              '9.png',
              '10.png',
              '11.png',
              '12.png',
            ].map((img, i) => (
              <div key={i} className="aspect-square bg-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <img src={`/gallery/${img}`} alt={`Galería ${i+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 4: Reconocimientos - bg-4 */}
      <section id="reconocimientos" className="relative min-h-[420px] py-20 flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/bg-4.jpg" alt="Recognition Background" className="w-full h-full object-cover brightness-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="bg-zinc-900/80 backdrop-blur rounded-2xl p-8 md:p-12 w-full">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl md:text-4xl"><img src="/icons/icon-trophy.svg" alt="Logo" className="w-10 h-10" /></span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Reconocimientos que nos hacen únicos</h2>
            </div>
            <h3 className="text-md md:text-lg text-white font-medium mb-1">Hemos representado a Colombia entre los mejores clubes del mundo</h3>
            <p className="text-zinc-200 mb-6">En los últimos <span className="font-bold">6 años</span> hemos estado en el prestigio ranking de la reconocida revista <span className="font-bold">DJ MAG</span>, que destaca a los mejores clubes de música electrónica a nivel mundial.</p>
            {/* Slider de logos */}
            <div>
              {/* Grid en móvil, slider horizontal en md+ */}
              <div className="grid grid-cols-3 gap-4 md:flex md:gap-8 md:min-w-[900px] lg:min-w-[1100px] md:overflow-x-auto md:scrollbar-hide items-center justify-center">
                {[
                  {img: '2024.png', alt: '#99 2024'},
                  {img: '2023.png', alt: '#98 2023'},
                  {img: '2022.png', alt: '#91 2022'},
                  {img: '2022-1.png', alt: '#93 2022'},
                  {img: '2021.png', alt: '#97 2021'},
                  {img: '2020.png', alt: '#99 2020'},
                  {img: '2019.png', alt: '#96 2019'},
                ].map((logo, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <img src={`/slider2/${logo.img}`} alt={logo.alt} className="w-24 h-16 md:w-28 md:h-20 object-contain mb-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Eventos Corporativos - bg-5 */}
      <section id="eventos-corporativos" className="relative min-h-screen py-20">
        <div className="absolute inset-0 z-0">
          <img src="/bg-5.jpg" alt="Corporate Background" className="w-full h-full object-cover brightness-30" />
        </div>
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

      {/* Sección 6: Contacto - bg-6 
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
      */}
      
      {/* Footer personalizado */}
      <footer className="bg-gradient-to-b from-black via-[#0a0a2a] to-[#0a0a2a] pt-12 pb-6 px-4 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <img src="/Logo-footer.svg" alt="Logo Octava" className="w-24 h-24 mb-4" />
          <hr className="w-full border-t border-zinc-400/30 my-6" />
          <div className="flex gap-6 mb-6">
            <a href="#" aria-label="Instagram" className="text-white text-2xl hover:text-blue-400 transition"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook" className="text-white text-2xl hover:text-blue-400 transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Spotify" className="text-white text-2xl hover:text-blue-400 transition"><i className="fab fa-spotify"></i></a>
            <a href="#" aria-label="TikTok" className="text-white text-2xl hover:text-blue-400 transition"><i className="fab fa-tiktok"></i></a>
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
