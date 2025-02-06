import { defineStore } from 'pinia'
import { supabase } from '@/utils/supabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: false
  }),

  actions: {
    async login(email, password) {
      try {
        this.loading = true
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        })
        if (error) throw error
        this.user = data.user
        return data
      } finally {
        this.loading = false
      }
    },

    async register(email, password) {
      try {
        this.loading = true
        const { data, error } = await supabase.auth.signUp({
          email,
          password
        })
        if (error) throw error
        return data
      } finally {
        this.loading = false
      }
    },

    async logout() {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      this.user = null
    }
  }
})
