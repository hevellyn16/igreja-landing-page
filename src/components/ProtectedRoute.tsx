import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import type { Session } from '@supabase/supabase-js';

// Esse componente age como um "segurança"
export default function RotaProtegida({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Verifica se já existe uma sessão ativa (se o usuário já logou antes)
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // 2. Fica escutando: se o usuário clicar em "Sair", atualiza o estado
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Enquanto verifica, mostra um "carregando..." pra tela não piscar
  if (loading) {
    return <div className="h-screen flex items-center justify-center">Carregando...</div>;
  }

  // Se NÃO tem sessão (não tá logado), manda pro Login
  if (!session) {
    return <Navigate to="/login" />;
  }

  // Se tem sessão, deixa entrar (mostra a página filha)
  return children;
}