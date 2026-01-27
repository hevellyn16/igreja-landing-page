export default function Time() {
  const currentDay = new Date().getDay();

  const events = [
    {
      day: "Domingo",
      dayId: 0, // ID do dia para comparação
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
      ),
      schedule: [
        { time: "19:00", title: "Culto de Oração e Estudo Bíblico" }
      ]
    },
    {
      day: "Sexta-feira",
      dayId: 5, // 5 = Sexta
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/></svg>
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
          <span className="text-blue-600 poppins-bold tracking-wider uppercase text-sm">Nossa Agenda</span>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mt-2 text-slate-900">
            Dias de Culto
          </h2>
          <p className="text-gray-600 poppins-regular mt-4 max-w-2xl mx-auto font-medium">
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
                  <div className="poppins-regular absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-wide">
                    É HOJE!
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-6">
                  {/* Ícone */}
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${isToday ? 'bg-blue-600 text-white' : 'bg-gray-200 text-blue-600'}
                  `}>
                    {item.icon}
                  </div>
                  
                  <h3 className={`text-2xl poppins-bold font-['Playfair_Display'] ${isToday ? 'text-blue-700' : 'text-slate-800'}`}>
                    {item.day}
                  </h3>
                </div>

                {/* Lista de Horários */}
                <div className="space-y-4">
                  {item.schedule.map((event, idx) => (
                    <div key={idx} className={`flex flex-col border-l-2 pl-4 py-1 ${isToday ? 'border-blue-200' : 'border-slate-100'}`}>
                      <span className={`poppins-bold text-lg ${isToday ? 'text-blue-700' : 'text-blue-600'}`}>
                        {event.time}
                      </span>
                      <span className="text-gray-600 poppins-regular leading-tight">
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