import { useState, useEffect } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Hooks do React Router para saber onde estamos e para navegar
  const location = useLocation(); 
  const navigate = useNavigate();

  // Efeito de sombra ao rolar a tela
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lista atualizada: separei o ID do link normal
  const navItems = [
    { name: 'Nossa história', target: 'about', type: 'scroll' },
    { name: 'Nossa programação', target: 'time', type: 'scroll' },
    { name: 'Saiba onde nos encontrar', target: 'local', type: 'scroll' },
    { name: 'Contato', target: 'contato', type: 'scroll' },
    { name: 'Relatórios', target: '/financeiro', type: 'route' }, // Esse é uma rota!
  ];

  // Função inteligente de navegação
  const handleNavigation = (item: { name?: string; target: any; type: any; }) => {
    setIsOpen(false); // Fecha o menu mobile

    if (item.type === 'route') {
      // CASO 1: É uma página separada (ex: Financeiro)
      navigate(item.target);
      window.scrollTo(0, 0); // Garante que a nova página abra no topo
    } else {
      // CASO 2: É uma seção da Home (Scroll)
      
      if (location.pathname !== '/') {
        // Se eu NÃO estou na home (ex: estou no financeiro), vá para a home
        navigate('/');
        // Pequeno delay para dar tempo de carregar a home antes de tentar scrollar (opcional)
        setTimeout(() => {
            const element = document.getElementById(item.target);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Se já estou na home, só faz o scroll suave
        const element = document.getElementById(item.target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`
        fixed top-0 left-0 w-full z-50 transition-all poppins-regular duration-300
        ${scrolled || location.pathname !== '/' 
            ? 'bg-[#263A4F]/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-transparent py-4' 
        }
    `}>
      {/* Nota: Adicionei "location.pathname !== '/'" na classe acima para a navbar 
          ficar sempre com fundo escuro se não estiver na Home (para ler melhor) */}

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* 1. LOGO */}
        <div 
            className="text-2xl font-bold text-white tracking-tighter cursor-pointer z-50 hover:text-purple-300 transition-colors"
            onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
        >
          <img src="/logotipo.svg" alt="Logotipo" className="h-8 w-auto"/>
        </div>

        {/* 2. MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className="text-sm cursor-pointer font-medium text-white/90 hover:text-white transition-all hover:bg-white/10 px-4 py-2 rounded-full"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* 3. BOTÃO HAMBÚRGUER */}
        <button 
          className="md:hidden text-white z-50 p-2 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>

        {/* 4. MENU MOBILE */}
        <div className={`
            fixed top-0 left-0 w-screen h-screen bg-[#263A4F] z-40 flex flex-col items-center justify-center gap-10 transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
        `}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-3xl cursor-pointer font-bold text-white hover:text-purple-400 transition-colors"
              >
                {item.name}
              </button>
            ))}
        </div>

      </div>
    </nav>
  );
}