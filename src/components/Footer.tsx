import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipo: 'visitante',
    mensagem: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const telefoneIgreja = '5588993057719';
    const mensagemWhatsApp = `Olá, meu nome é ${formData.nome}.\n\nTipo de contato: ${formData.tipo}\n\nMensagem: ${formData.mensagem}\n\nMeu contato: ${formData.email}`;
    const linkWhatsApp = `https://wa.me/${telefoneIgreja}?text=${encodeURIComponent(mensagemWhatsApp)}`;
    window.open(linkWhatsApp, '_blank');
    alert("Mensagem enviada com sucesso! Deus abençoe.");
    setFormData({ nome: '', email: '', tipo: 'visitante', mensagem: '' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#263A4F] text-white relative overflow-hidden pt-24">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* PARTE SUPERIOR */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* LADO ESQUERDO */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-300 font-bold tracking-wider uppercase text-sm">Fale Conosco</span>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mt-2 mb-4 leading-tight">
                Como podemos orar por você hoje?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-['Montserrat']">
                Seja para tirar dúvidas, pedir uma visita pastoral ou enviar um pedido de oração, nossa equipe está pronta para te ouvir.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              
              <a href="https://wa.me/5588993057719" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="bg-green-500/20 p-3 rounded-full text-green-400 group-hover:text-green-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">WhatsApp</h4>
                  <p className="text-gray-400 text-sm">(88) 99305-7719</p>
                </div>
              </a>

              <a 
                href="https://instagram.com/igrejabatistabetel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="bg-pink-500/20 p-3 rounded-full text-pink-400 group-hover:text-pink-300 transition-colors">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="currentColor" // Usei fill="currentColor" para pegar a cor do texto
                    viewBox="0 0 24 24"
                  >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
  
              <div>
                <h4 className="font-bold text-white text-lg">Instagram</h4>
                <p className="text-gray-400 text-sm">@igrejabatistabetel</p>
              </div>
            </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl text-slate-800">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Envie uma mensagem</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Nome</label>

                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 outline-none bg-slate-50 text-slate-900 font-medium"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Contato</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 outline-none bg-slate-50 text-slate-900 font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Assunto</label>
                <select 
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 outline-none bg-slate-50 text-slate-900 font-medium"
                  value={formData.tipo}
                  onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                >
                  <option value="visitante">Quero fazer uma visita</option>
                  <option value="oracao">Pedido de Oração</option>
                  <option value="membro">Sou Membro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Mensagem</label>
                <textarea 
                  rows={3}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 outline-none bg-slate-50 text-slate-900 font-medium resize-none"
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-[#263A4F] text-white font-bold rounded-xl shadow-lg hover:bg-[#1a2938] hover:-translate-y-1 transition-all"
              >
                Enviar
              </button>
            </form>
          </div>

        </div>

        {/* PARTE INFERIOR: COPYRIGHT CORRIGIDO */}
        <div className="relative border-t border-white/10 py-8 flex flex-col md:flex-row items-center md:justify-center gap-4">
          
          <div className="text-center">
            <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Igreja Batista Betel Independente de Sobral.</p>
            <p className="text-xs mt-1 text-gray-400">Feito para a glória de Deus.</p>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white group border border-white/10 md:absolute md:right-0"
            title="Voltar ao topo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </button>

        </div>

      </div>
    </footer>
  );
}