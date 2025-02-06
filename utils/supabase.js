import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://whtrkdlxmqfdfyufknwy.supabase.co'
const supabaseKey = 'votre-clé-publique'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Middleware pour vérifier l'authentification
export const requireAuth = async (to, from, next) => {
  const user = supabase.auth.user()
  if (!user && to.meta.requiresAuth) {
    return navigateTo('/login')
  }
  return next()
}
