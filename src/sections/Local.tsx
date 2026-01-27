
export default function Local() {
  return (
    <section id="local" className="py-20 bg-white relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LADO ESQUERDO: Texto e Informações */}
        <div className="space-y-8 animate-fade-in-up">
          <div>
            <span className="poppins-bold text-blue-600 tracking-wider uppercase text-sm">Localização</span>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mt-2 text-slate-900 leading-tight">
              Saiba onde nos <br/>encontrar
            </h2>
          </div>

          <p className="text-gray-600 poppins-regular text-lg leading-relaxed max-w-md">
            Nossas portas estão sempre abertas para receber você e sua família. Venha nos fazer uma visita e tomar um café conosco.
          </p>

          <div className="space-y-4">
            {/* Item de Endereço */}
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <img src="/pin-drop.svg" alt="Location Icon" className="h-6 w-6"/>
              </div>
              <div>
                <h4 className="poppins-bold text-slate-900 text-lg">Endereço</h4>
                <p className="text-gray-600 poppins-regular leading-relaxed">
                  Rua São Judas Tadeu, 156 <br/>
                  Bairro Sumaré, Sobral - CE
                </p>
              </div>
            </div>
          </div>

          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Igreja+Batista+Betel+Independente+Sobral" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base poppins-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Traçar Rota no GPS
          </a>
        </div>

        {/* LADO DIREITO: O Mapa Estiloso */}
        <div className="relative h-125 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-fade-in-up delay-200 group">
          
          {/* Iframe do Google Maps */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.5142636225755!2d-40.366149624978895!3d-3.697273496276697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7eac6f6c10e08c5%3A0xa5c676de1b4d601d!2sIgreja%20Batista%20Betel%20de%20Sobral!5e0!3m2!1spt-BR!2sbr!4v1769437794971!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            title="Localização"
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-20 group-hover:grayscale-0 transition-all duration-700"
          ></iframe>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <span className="relative flex h-8 w-8">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-8 w-8 bg-blue-600 border-4 border-white shadow-lg items-center justify-center">
                 <div className="h-2 w-2 bg-white rounded-full"></div>
              </span>
            </span>
          </div>

          {/* Card Flutuante de Endereço (Estilo App) */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 md:hidden">
             <p className="text-sm poppins-bold text-slate-800">Igreja Batista Betel</p>
             <p className="text-xs poppins-regular text-gray-500">Sobral - Ceará</p>
          </div>

        </div>

      </div>
    </section>
  );
}