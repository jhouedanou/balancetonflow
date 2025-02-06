import { defineStore } from 'pinia'
import { supabase } from '@/utils/supabase'

export const useVideosStore = defineStore('videos', {
  state: () => ({
    videos: [],
    loading: false
  }),

  actions: {
    async fetchVideos() {
      this.loading = true
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('likes', { ascending: false })
      
      if (error) throw error
      this.videos = data
      this.loading = false
    },

    async addVideo(videoData) {
      const { data, error } = await supabase
        .from('videos')
        .insert(videoData)
        .single()

      if (error) throw error
      this.videos.push(data)
    },

    async updateLikes(videoId) {
      const { data, error } = await supabase
        .from('videos')
        .update({ likes: supabase.raw('likes + 1') })
        .eq('id', videoId)
        .single()

      if (error) throw error
      const index = this.videos.findIndex(v => v.id === videoId)
      if (index !== -1) {
        this.videos[index] = data
      }
    }
  }
})
