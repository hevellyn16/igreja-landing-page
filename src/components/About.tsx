export default function About() {
  const values = [
    {
      title: "Fundamentados na Palavra",
      description: "Cremos nas Sagradas Escrituras como a única regra infalível para nossa fé e vida, revelada por Deus.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
      )
    },
    {
      title: "Salvação pela Graça",
      description: "Entendemos que a salvação é um presente gratuito de Deus mediante a fé em Jesus, e não por mérito humano.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      )
    },
    {
      title: "Serviço ao Próximo",
      description: "Cremos que servir aos vulneráveis gera uma transformação espiritual autêntica em quem serve e quem recebe.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      )
    }
  ];

  return (
    <section id="about" className="py-24 bg-white text-gray-900 relative overflow-hidden">
      
      {/* Elemento decorativo de fundo (opcional) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Lado Esquerdo: Texto */}
        <div className="space-y-8 animate-fade-in-up">
          <div>
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Nossa História</span>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mt-2 mb-6 leading-tight">
              Uma família de fé em Sobral desde 2007.
            </h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed font-['Montserrat']">
            A <strong>Igreja Batista Betel Independente de Sobral</strong> nasceu com o propósito de ser um lugar de adoração verdadeira e comunhão.
          </p>
          
          <p className="text-gray-700 text-lg leading-relaxed font-['Montserrat']">
            Somos uma comunidade sem muros, fundamentada na Bíblia Sagrada e movida pelo amor de Deus revelado em Jesus Cristo. Acreditamos que a igreja não é apenas um lugar para estar, mas uma família para pertencer e uma missão para viver.
          </p>

        </div>

        {/* Lado Direito: Cards de Valores */}
        <div className="grid gap-6">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-['Playfair_Display'] mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}