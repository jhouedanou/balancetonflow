import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),

  actions: {
    async signIn(credentials) {
      const supabase = useSupabaseClient()
      const { data, error } = await supabase.auth.signInWithPassword(credentials)
      
      if (error) throw error
      this.user = data.user
    },

    async signUp(credentials) {
      const supabase = useSupabaseClient()
      const { data, error } = await supabase.auth.signUp(credentials)
      
      if (error) throw error
      this.user = data.user
    },

    async signOut() {
      const supabase = useSupabaseClient()
      const { error } = await supabase.auth.signOut()
      
      if (error) throw error
      this.user = null
    }
  }
})
