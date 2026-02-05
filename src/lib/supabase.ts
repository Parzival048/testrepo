import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for the leads table
export interface Lead {
    id?: string;
    name: string;
    email: string;
    phone?: string;
    interest?: string;
    message?: string;
    source?: string;
    status?: string;
    created_at?: string;
    updated_at?: string;
}
