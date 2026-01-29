import { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { FileText, Download, Calendar, Search } from 'lucide-react';

export default function Financeiro() {
  const [relatorios, setRelatorios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRelatorios();
  }, []);

  async function fetchRelatorios() {
    try {
      setLoading(true);
      // Busca os dados no Supabase ordenando pela data (mais novo primeiro)
      const { data, error } = await supabase
        .from('relatorios')
        .select('*')
        .order('ano_mes', { ascending: false });

      if (error) throw error;
      setRelatorios(data || []);
    } catch (error) {
      console.error('Erro ao buscar relatórios:', error);
    } finally {
      setLoading(false);
    }
  }

  // Função auxiliar para formatar "2026-01" virar "Janeiro/2026"
  const formatarData = (anoMes: { split: (arg0: string) => [any, any]; }) => {
    if (!anoMes) return 'Data desconhecida';
    const [ano, mes] = anoMes.split('-');
    const dataObj = new Date(ano, mes - 1);
    return dataObj.toLocaleString('pt-BR', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Cabeçalho Hero */}
      <div className="bg-[#263A4F] pt-32 pb-20 px-6 text-center text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-3 tracking-tight">
          Transparência Financeira
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Acesso público aos demonstrativos e relatórios mensais da nossa gestão.
        </p>
      </div>

      {/* Lista de Cards */}
      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-10 pb-20">
        
        {loading ? (
          // SKELETON LOADING (Efeito de carregamento bonito)
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 animate-pulse flex items-center justify-between">
                <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                <div className="h-10 bg-slate-200 rounded w-10"></div>
              </div>
            ))}
          </div>
        ) : relatorios.length === 0 ? (
          // ESTADO VAZIO
          <div className="bg-white p-12 rounded-xl shadow-sm border border-slate-100 text-center">
            <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-slate-400" size={24} />
            </div>
            <h3 className="text-lg font-medium text-slate-700">Nenhum relatório encontrado</h3>
            <p className="text-slate-500 text-sm mt-1">Os documentos serão publicados em breve.</p>
          </div>
        ) : (
          // LISTA REAL
          <div className="space-y-4">
            {relatorios.map((item) => (
              <div 
                key={item.id} 
                className="group bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Informações do Relatório */}
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-lg text-red-500 group-hover:scale-110 transition-transform duration-200">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg">
                      {item.titulo}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                      <Calendar size={14} />
                      <span className="capitalize">{formatarData(item.ano_mes)}</span>
                    </div>
                  </div>
                </div>

                {/* Botão de Download */}
                <a 
                  href={item.arquivo_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-200 border border-slate-200 hover:border-blue-600"
                >
                  <Download size={18} />
                  <span>Baixar PDF</span>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}