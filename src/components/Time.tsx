export default function Time() {
  const currentDay = new Date().getDay();

  const events = [
    {
      day: "Domingo",
      dayId: 0, // ID do dia para comparação
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
      dayId: 3, // 3 = Quarta
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      ),
      schedule: [
        { time: "19:00", title: "Culto de Oração e Estudo Bíblico" }
      ]
    },
    {
      day: "Sexta-feira",
      dayId: 5, // 5 = Sexta
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      schedule: [
        { time: "19:00", title: "Estudo de homens e mulheres (Quinzenal)" }
      ]
    }
  ];

  return (
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
          {events.map((item, index) => {
            // Verifica se o card atual corresponde ao dia de hoje
            const isToday = currentDay === item.dayId;

            return (
              <div 
                key={index}
                className={`
                  relative p-8 rounded-2xl transition-all duration-300
                  ${isToday 
                    ? 'bg-white shadow-xl scale-105 border-2 border-blue-500 z-10' // Estilo se for HOJE
                    : 'bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 border border-slate-100 hover:border-blue-300' // Estilo padrão
                  }
                `}
              >
                {/* Badge "HOJE" - Só aparece se for o dia atual */}
                {isToday && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-wide">
                    É HOJE!
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-6">
                  {/* Ícone */}
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${isToday ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}
                  `}>
                    {item.icon}
                  </div>
                  
                  <h3 className={`text-2xl font-bold font-['Playfair_Display'] ${isToday ? 'text-blue-700' : 'text-slate-800'}`}>
                    {item.day}
                  </h3>
                </div>

                {/* Lista de Horários */}
                <div className="space-y-4">
                  {item.schedule.map((event, idx) => (
                    <div key={idx} className={`flex flex-col border-l-2 pl-4 py-1 ${isToday ? 'border-blue-200' : 'border-slate-100'}`}>
                      <span className={`font-bold text-lg ${isToday ? 'text-blue-700' : 'text-blue-600'}`}>
                        {event.time}
                      </span>
                      <span className="text-gray-600 font-medium leading-tight">
                        {event.title}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}