import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

let supabase

if (!isSupabaseConfigured) {
  supabase = {
    from: () => ({
      insert: async () => ({ error: new Error('Supabase not configured.') }),
    }),
  }
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export default supabase
