export default function Cronograma() {
  const events = [
    {
      day: "Domingo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      ),
      schedule: [
        { time: "18:00", title: "Estudo Bíblico (EBD)" },
        { time: "19:20", title: "Culto de Adoração" }
      ]
    },
    {
      day: "Quarta-feira",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      ),
      schedule: [
        { time: "19:00", title: "Culto de Oração e Estudo Bíblico" }
      ]
    },
    {
      day: "Sexta-feira",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      schedule: [
        { time: "19:00", title: "Estudo de homens e mulheres (Quinzenal)" }
      ]
    }
  ];

  return (
    // MUDANÇA 1: Fundo agora é um cinza muito claro (slate-50) para dar contraste
    <section id="time" className="py-24 bg-slate-50 text-slate-800">
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Nossa Agenda</span>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mt-2 text-slate-900">
            Dias de Culto
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-medium">
            Reserve um tempo na sua semana para estar em comunhão.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((item, index) => (
            <div 
              key={index}
              className={`
                relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl 
                transition-all duration-300 hover:-translate-y-2
                border border-slate-100
                border-t-4 border-t-transparent
                hover:border-t-blue-600
              `}
            >
              
              <div className="flex items-center gap-4 mb-6">
                {/* Ícone: Fundo azul claro e ícone azul escuro */}
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  bg-blue-50 text-blue-600
                `}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold font-['Playfair_Display'] text-slate-800">
                  {item.day}
                </h3>
              </div>

              {/* Lista de Horários */}
              <div className="space-y-4">
                {item.schedule.map((event, idx) => (
                  <div key={idx} className="flex flex-col border-l-2 border-slate-100 pl-4 py-1">
                    <span className="text-blue-600 font-bold text-lg">
                      {event.time}
                    </span>
                    <span className="text-gray-600 font-medium leading-tight">
                      {event.title}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}