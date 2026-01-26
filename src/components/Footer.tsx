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
          
          {/* LADO ESQUERDO (Mantido igual) */}
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
              {/* Botões de Contato (Mantidos) */}
              <a href="https://wa.me/5588999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="bg-green-500/20 p-3 rounded-full text-green-400 group-hover:text-green-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">WhatsApp</h4>
                  <p className="text-gray-400 text-sm">(88) 9.9999-9999</p>
                </div>
              </a>

              <a href="mailto:contato@betelsobral.com" className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="bg-blue-500/20 p-3 rounded-full text-blue-400 group-hover:text-blue-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">E-mail</h4>
                  <p className="text-gray-400 text-sm">secretaria@betelsobral.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* LADO DIREITO: Formulário CORRIGIDO */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl text-slate-800">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Envie uma mensagem</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  {/* CORREÇÃO 1: Label mais escuro (text-slate-700) */}
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Nome</label>
                  {/* CORREÇÃO 2: Borda mais visível (border-slate-300) */}
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
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-center md:text-left">
            {/* CORREÇÃO 3: Texto mais claro (text-gray-300 e text-gray-400) */}
            <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Igreja Batista Betel Independente de Sobral.</p>
            <p className="text-xs mt-1 text-gray-400">Feito para a glória de Deus.</p>
          </div>

          <div className="flex gap-4">
             {/* Links mais claros */}
             <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Instagram</a>
             <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Facebook</a>
             <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">YouTube</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white group border border-white/10"
            title="Voltar ao topo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </button>

        </div>

      </div>
    </footer>
  );
}