export default function About() {
  const values = [
    {
      title: "Fundamentados na Palavra",
      description: "Cremos nas Sagradas Escrituras como a única regra infalível para nossa fé e vida, revelada por Deus.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6q47 0 91.5 10.5T440-278Zm40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q74 0 126 17t112 52q11 6 16.5 14t5.5 21v418q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-481q15 5 29.5 11t28.5 14q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Zm140-240v-440l120-40v440l-120 40Zm-340-99Z"/></svg>
      )
    },
    {
      title: "Salvação pela Graça",
      description: "Entendemos que a salvação é um presente gratuito de Deus mediante a fé em Jesus, e não por mérito humano.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
      )
    },
    {
      title: "Serviço ao Próximo",
      description: "Cremos que servir aos vulneráveis gera uma transformação espiritual autêntica em quem serve e quem recebe.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
      )
    }
  ];

  return (
    <section id="about" className="py-24 bg-white text-gray-900 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Lado Esquerdo: Texto */}
        <div className="space-y-8 animate-fade-in-up">
          <div>
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm poppins-bold">Nossa História</span>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mt-2 mb-6 leading-tight">
              Uma família de fé em Sobral desde 2007.
            </h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed poppins-regular">
            A <strong>Igreja Batista Betel Independente de Sobral</strong> nasceu com o propósito de ser um lugar de adoração verdadeira e comunhão.
          </p>
          
          <p className="text-gray-700 text-lg leading-relaxed poppins-regular">
            Somos uma comunidade sem muros, fundamentada na Bíblia Sagrada e movida pelo amor de Deus revelado em Jesus Cristo. Acreditamos que a igreja não é apenas um lugar para estar, mas uma família para pertencer e uma missão para viver.
          </p>

        </div>

        {/* Lado Direito: Cards de Valores */}
        <div className="grid gap-6">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="bg-white  p-6 rounded-xl border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold poppins-regular mb-2">{item.title}</h3>
                  <p className="text-gray-800 text-sm leading-relaxed">
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