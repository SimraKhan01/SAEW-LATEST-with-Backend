import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase environment variables are missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.',
  )
  supabase = {
    from: () => ({
      insert: async () => ({ error: new Error('Supabase not configured.') }),
    }),
  }
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export default supabase
