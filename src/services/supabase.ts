import { createClient } from '@supabase/supabase-js';

// Você pega esses dados lá no painel do Supabase em:
// Settings (engrenagem) -> API
const supabaseUrl = 'https://lnbwgrdqglxdixpxwuia.supabase.co';
const supabaseKey = 'sb_publishable_E_XmETCjQn492CPwVnTjJw_HIsJcd-7';

export const supabase = createClient(supabaseUrl, supabaseKey);