import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lnbwgrdqglxdixpxwuia.supabase.co';
const supabaseKey = 'sb_publishable_E_XmETCjQn492CPwVnTjJw_HIsJcd-7';

export const supabase = createClient(supabaseUrl, supabaseKey);