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
              <span className="text-blue-300 poppins-bold tracking-wider uppercase text-sm">Fale Conosco</span>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mt-2 mb-4 leading-tight">
                Como podemos orar por você hoje?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed poppins-regular">
                Seja para tirar dúvidas, pedir uma visita pastoral ou enviar um pedido de oração, nossa equipe está pronta para te ouvir.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              
              <a href="https://wa.me/5588993057719" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="bg-green-500/20 p-3 rounded-full text-green-400 group-hover:text-green-300 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>
                </div>
                <div>
                  <h4 className="poppins-bold text-white text-lg">WhatsApp</h4>
                  <p className="text-gray-300 poppins-regular text-sm">(88) 99305-7719</p>
                </div>
              </a>

              <a 
                href="https://instagram.com/igrejabatistabetel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="bg-pink-500/20 p-3 rounded-full text-pink-400 group-hover:text-pink-300 transition-colors">
                  <svg className='h-6 w-6' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>instagram</title> <path d="M25.805 7.996c0 0 0 0.001 0 0.001 0 0.994-0.806 1.799-1.799 1.799s-1.799-0.806-1.799-1.799c0-0.994 0.806-1.799 1.799-1.799v0c0.993 0.001 1.798 0.805 1.799 1.798v0zM16 20.999c-2.761 0-4.999-2.238-4.999-4.999s2.238-4.999 4.999-4.999c2.761 0 4.999 2.238 4.999 4.999v0c0 0 0 0.001 0 0.001 0 2.76-2.237 4.997-4.997 4.997-0 0-0.001 0-0.001 0h0zM16 8.3c0 0 0 0-0 0-4.253 0-7.7 3.448-7.7 7.7s3.448 7.7 7.7 7.7c4.253 0 7.7-3.448 7.7-7.7v0c0-0 0-0 0-0.001 0-4.252-3.447-7.7-7.7-7.7-0 0-0 0-0.001 0h0zM16 3.704c4.003 0 4.48 0.020 6.061 0.089 1.003 0.012 1.957 0.202 2.84 0.538l-0.057-0.019c1.314 0.512 2.334 1.532 2.835 2.812l0.012 0.034c0.316 0.826 0.504 1.781 0.516 2.778l0 0.005c0.071 1.582 0.087 2.057 0.087 6.061s-0.019 4.48-0.092 6.061c-0.019 1.004-0.21 1.958-0.545 2.841l0.019-0.058c-0.258 0.676-0.64 1.252-1.123 1.726l-0.001 0.001c-0.473 0.484-1.049 0.866-1.692 1.109l-0.032 0.011c-0.829 0.316-1.787 0.504-2.788 0.516l-0.005 0c-1.592 0.071-2.061 0.087-6.072 0.087-4.013 0-4.481-0.019-6.072-0.092-1.008-0.019-1.966-0.21-2.853-0.545l0.059 0.019c-0.676-0.254-1.252-0.637-1.722-1.122l-0.001-0.001c-0.489-0.47-0.873-1.047-1.114-1.693l-0.010-0.031c-0.315-0.828-0.506-1.785-0.525-2.785l-0-0.008c-0.056-1.575-0.076-2.061-0.076-6.053 0-3.994 0.020-4.481 0.076-6.075 0.019-1.007 0.209-1.964 0.544-2.85l-0.019 0.059c0.247-0.679 0.632-1.257 1.123-1.724l0.002-0.002c0.468-0.492 1.045-0.875 1.692-1.112l0.031-0.010c0.823-0.318 1.774-0.509 2.768-0.526l0.007-0c1.593-0.056 2.062-0.075 6.072-0.075zM16 1.004c-4.074 0-4.582 0.019-6.182 0.090-1.315 0.028-2.562 0.282-3.716 0.723l0.076-0.025c-1.040 0.397-1.926 0.986-2.656 1.728l-0.001 0.001c-0.745 0.73-1.333 1.617-1.713 2.607l-0.017 0.050c-0.416 1.078-0.67 2.326-0.697 3.628l-0 0.012c-0.075 1.6-0.090 2.108-0.090 6.182s0.019 4.582 0.090 6.182c0.028 1.315 0.282 2.562 0.723 3.716l-0.025-0.076c0.796 2.021 2.365 3.59 4.334 4.368l0.052 0.018c1.078 0.415 2.326 0.669 3.628 0.697l0.012 0c1.6 0.075 2.108 0.090 6.182 0.090s4.582-0.019 6.182-0.090c1.315-0.029 2.562-0.282 3.716-0.723l-0.076 0.026c2.021-0.796 3.59-2.365 4.368-4.334l0.018-0.052c0.416-1.078 0.669-2.326 0.697-3.628l0-0.012c0.075-1.6 0.090-2.108 0.090-6.182s-0.019-4.582-0.090-6.182c-0.029-1.315-0.282-2.562-0.723-3.716l0.026 0.076c-0.398-1.040-0.986-1.926-1.729-2.656l-0.001-0.001c-0.73-0.745-1.617-1.333-2.607-1.713l-0.050-0.017c-1.078-0.416-2.326-0.67-3.628-0.697l-0.012-0c-1.6-0.075-2.108-0.090-6.182-0.090z"></path> </g></svg>
              </div>
  
              <div>
                <h4 className="poppins-bold text-white text-lg">Instagram</h4>
                <p className="text-gray-300 poppins-regular text-sm">@igrejabatistabetel</p>
              </div>
            </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl text-slate-800">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-2xl poppins-bold mb-6 text-slate-900">Envie uma mensagem</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs poppins-bold uppercase text-slate-700 mb-1">Nome</label>
                  <input 
                    type="text" 
                    required
                    aria-label='Seu nome'
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 outline-none bg-slate-50 text-slate-900 poppins-regular"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs poppins-bold uppercase text-slate-700 mb-1">Contato</label>
                  <input 
                    type="text" 
                    required
                    aria-label="Seu email ou telefone"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 outline-none bg-slate-50 text-slate-900 poppins-regular"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs poppins-bold uppercase text-slate-700 mb-1">Assunto</label>
                <select 
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 outline-none bg-slate-50 text-slate-900 poppins-regular"
                  value={formData.tipo}
                  aria-label="Assunto"
                  onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                >
                  <option value="visitante">Quero fazer uma visita</option>
                  <option value="oracao">Pedido de Oração</option>
                  <option value="membro">Sou Membro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs poppins-bold uppercase text-slate-700 mb-1">Mensagem</label>
                <textarea 
                  rows={3}
                  required
                  aria-label='Escreva aqui sua mensagem...'
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 outline-none bg-slate-50 text-slate-900 poppins-regular resize-none"
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-[#263A4F] cursor-pointer text-white poppins-bold rounded-xl shadow-lg hover:bg-[#1a2938] hover:-translate-y-1 transition-all"
              >
                Enviar
              </button>
            </form>
          </div>

        </div>

        {/* PARTE INFERIOR: COPYRIGHT CORRIGIDO */}
        <div className="relative border-t border-white/10 py-8 flex flex-col md:flex-row items-center md:justify-center gap-4">
          
          <div className="text-center">
            <p className="text-gray-300 text-sm poppins-regular">&copy; {new Date().getFullYear()} Igreja Batista Betel Independente de Sobral.</p>
            <p className="text-xs mt-1 text-gray-400 poppins-regular">Feito para a glória de Deus.</p>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white group border cursor-pointer border-white/10 md:absolute md:right-0"
            title="Voltar ao topo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </button>

        </div>

      </div>
    </footer>
  );
}