import React, { useState, useEffect } from 'react';
import { Upload, FileText, Trash2, CheckCircle, Calendar, Loader2, Pencil, X } from 'lucide-react';
import { supabase } from '../services/supabase';
// 1. Importação do Toast
import toast, { Toaster } from 'react-hot-toast';

const DashboardFinanceiro = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [mesReferencia, setMesReferencia] = useState('');
  
  // Novos estados para Edição e Listagem
  const [listaRelatorios, setListaRelatorios] = useState<any[]>([]);
  const [modoEdicao, setModoEdicao] = useState(null); // Guarda o ID do item sendo editado

  // 1. Carregar a lista assim que abrir a tela
  useEffect(() => {
    carregarRelatorios();
  }, []);

  const carregarRelatorios = async () => {
    const { data } = await supabase
      .from('relatorios')
      .select('*')
      .order('ano_mes', { ascending: false });
    
    if (data) setListaRelatorios(data);
  };

  // 2. Função Unificada: Criar ou Editar
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!mesReferencia) {
      // MUDANÇA: alert -> toast.error
      toast.error("Selecione o mês de referência.");
      return;
    }

    // Se NÃO estiver editando, exige arquivo. Se estiver editando, arquivo é opcional.
    if (!modoEdicao && !file) {
      toast.error("Por favor, selecione um arquivo PDF.");
      return;
    }

    try {
      setLoading(true);
      let publicUrl = null;

      // SE TIVER ARQUIVO NOVO (Upload)
      if (file) {
        // Limpeza do nome
        const fileExt = file.name.split('.').pop();
        const cleanName = file.name
          .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "_");
        const fileName = `${Date.now()}_${cleanName}.${fileExt}`;

        // Envia pro Storage
        const { error: uploadError } = await supabase.storage
          .from('documentos')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        // Pega URL
        const { data: urlData } = supabase.storage
          .from('documentos')
          .getPublicUrl(fileName);
        
        publicUrl = urlData.publicUrl;
      }

      const tituloFormatado = `Relatório ${mesReferencia}`;

      if (modoEdicao) {
        // --- MODO EDIÇÃO (UPDATE) ---
        const dadosParaAtualizar: { titulo: string; ano_mes: string; arquivo_url?: string | null } = {
          titulo: tituloFormatado,
          ano_mes: mesReferencia,
        };
        // Só atualiza a URL se o usuário enviou um novo PDF
        if (publicUrl) dadosParaAtualizar.arquivo_url = publicUrl;

        const { error } = await supabase
          .from('relatorios')
          .update(dadosParaAtualizar)
          .eq('id', modoEdicao);

        if (error) throw error;
        
        // MUDANÇA: alert -> toast.success
        toast.success("Relatório atualizado com sucesso!");

      } else {
        // --- MODO CRIAÇÃO (INSERT) ---
        const { error } = await supabase
          .from('relatorios')
          .insert([{ 
            titulo: tituloFormatado, 
            ano_mes: mesReferencia,
            arquivo_url: publicUrl 
          }]);

        if (error) throw error;
        
        // MUDANÇA: alert -> toast.success
        toast.success("Relatório publicado com sucesso!");
      }

      // Limpar tudo
      cancelarEdicao();
      carregarRelatorios(); // Atualiza a lista na hora

    } catch (error) {
      console.error('Erro:', error);
      // MUDANÇA: alert -> toast.error
      const errorMsg = (error && typeof error === 'object' && 'message' in error)
        ? (error as { message: string }).message
        : String(error);
      toast.error("Erro ao salvar: " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // 3. Função de Excluir
  const handleExcluir = (item: { titulo: any; id: any; }) => {
    // Em vez de window.confirm, chamamos um toast especial
    toast((t) => (
      <div className="flex flex-col gap-2">
        <span className="font-medium text-slate-700">
          Tem certeza que deseja excluir?
        </span>
        <span className="text-xs text-slate-500 mb-2">
          O <b>{item.titulo}</b> será apagado permanentemente.
        </span>
        <div className="flex gap-2">
          {/* Botão SIM */}
          <button
            onClick={async () => {
              toast.dismiss(t.id); // Fecha o aviso
              
              // Executa a exclusão
              try {
                const { error } = await supabase
                  .from('relatorios')
                  .delete()
                  .eq('id', item.id);

                if (error) throw error;
                
                toast.success("Relatório excluído.");
                carregarRelatorios(); 
              } catch (error) {
                toast.error("Erro ao excluir: " + (error as Error).message);
              }
            }}
            className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-red-600 transition-colors"
          >
            Sim, excluir
          </button>

          {/* Botão NÃO */}
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-slate-200 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    ), {
      duration: 5000, // Fica na tela por 5s se ninguém clicar
      position: 'top-center', // Aparece no topo, centralizado
      style: {
        background: '#fff',
        padding: '16px',
        borderRadius: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e2e8f0'
      },
    });
  };

  // 4. Preparar para Editar
  const iniciarEdicao = (item: { id: React.SetStateAction<null>; ano_mes: React.SetStateAction<string>; }) => {
    setModoEdicao(item.id);
    setMesReferencia(item.ano_mes);
    setFile(null); // Reseta o arquivo (o usuário só põe outro se quiser trocar)
    
    // Rola para o topo do formulário (mobile friendly)
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast("Modo de edição ativado", { icon: '✏️' });
  };

  const cancelarEdicao = () => {
    setModoEdicao(null);
    setMesReferencia('');
    setFile(null);
  };

  // --- Funções de Drag & Drop (Iguais) ---
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault(); e.stopPropagation(); setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setFile(e.dataTransfer.files[0]);
        toast.success("Arquivo carregado!");
      }
  };

  return (
    <div className="bg-white rounded-2xl pt-32 mt-24 shadow-xl overflow-hidden flex flex-col md:flex-row min-h-200">
      
      {/* 2. ADICIONEI O COMPONENTE VISUAL AQUI */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* LADO ESQUERDO: Formulário */}
      <div className="p-8 md:w-1/2 border-b md:border-b-0 md:border-r border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            {modoEdicao ? 'Editar Relatório' : 'Novo Relatório'}
          </h2>
          {modoEdicao && (
            <button onClick={cancelarEdicao} className="text-sm text-red-500 hover:bg-red-50 px-3 py-1 rounded-full flex items-center gap-1 transition-colors">
              <X size={14} /> Cancelar
            </button>
          )}
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Mês */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Referência</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <input 
                type="month" 
                required
                value={mesReferencia}
                onChange={(e) => setMesReferencia(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-600"
              />
            </div>
          </div>

          {/* Upload */}
          <div 
            className={`relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all ${
              dragActive ? "border-indigo-500 bg-indigo-50" : "border-slate-300 hover:border-indigo-400"
            }`}
            onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
          >
            <input 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                    setFile(e.target.files[0]);
                    toast.success("PDF selecionado!");
                }
              }}
              accept=".pdf" 
            />
            
            {file ? (
              <div className="flex flex-col items-center animate-in fade-in zoom-in">
                <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle size={24} />
                </div>
                <p className="text-sm font-medium text-slate-700">{file.name}</p>
                <p className="text-xs text-green-600 mt-1">Arquivo selecionado</p>
              </div>
            ) : (
              <>
                <div className="h-12 w-12 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center mb-3">
                  <Upload size={24} />
                </div>
                <p className="text-sm font-medium text-slate-700">
                  {modoEdicao ? 'Clique para trocar o PDF (opcional)' : 'Clique ou arraste o PDF'}
                </p>
              </>
            )}
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-2.5 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2
              ${modoEdicao ? 'bg-orange-500 hover:bg-orange-600' : 'bg-indigo-600 hover:bg-indigo-700'}
            `}
          >
            {loading ? <Loader2 className="animate-spin" /> : modoEdicao ? 'Salvar Alterações' : 'Publicar Relatório'}
          </button>
        </form>
      </div>

      {/* LADO DIREITO: Lista de Gerenciamento */}
      <div className="p-8 md:w-1/2 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-100 flex flex-col h-full">          
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          Relatórios Publicados 
          <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
            {listaRelatorios.length}
          </span>
        </h3>
        
        <div className="flex-1 overflow-y-auto space-y-3 pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
          {listaRelatorios.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-10">Nenhum relatório encontrado.</p>
          ) : (
            listaRelatorios.map((item) => (
              <div key={item.id} className="group bg-white p-3 rounded-lg border border-slate-200 hover:border-indigo-200 hover:shadow-sm transition-all flex items-center justify-between">
                
                {/* Info do Arquivo */}
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="h-10 w-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0 text-red-500">
                    <FileText size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-700 truncate">{item.titulo}</p>
                    <p className="text-xs text-slate-400">{item.ano_mes}</p>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => iniciarEdicao(item)}
                    title="Editar"
                    className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                  >
                    <Pencil size={18} />
                  </button>
                  <button 
                    onClick={() => handleExcluir(item)}
                    title="Excluir"
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
};

export default DashboardFinanceiro;