import { useEffect,useRef } from "react";
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5; // Ajusta a velocidade do vídeo para 1.5x
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex items-center bg-linear-to-br from-[#263A4F]/50 to-teal-900/60 overflow-hidden"
    >
      

      {/* --- 3. CONTEÚDO --- */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        <h1 className="text-5xl poppins-bold md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
          Igreja Batista Betel
        </h1>
        
        <p className="text-xl md:text-2xl poppins-light text-gray-100 mb-8 font-light drop-shadow-md">
          Uma família de fé, esperança e amor em Sobral.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 animate-fade-in-up delay-300">
          <button className="bg-white text-[#263A4F] px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gray-100 transition-transform hover:-translate-y-1 shadow-xl">
            Nossos Cultos
          </button>
          
          <button className="border border-white/30 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm hover:-translate-y-1 shadow-xl">
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
}