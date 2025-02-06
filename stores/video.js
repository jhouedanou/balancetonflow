import { defineStore } from 'pinia'

export const useVideoStore = defineStore('video', {
  state: () => ({
    videos: [],
    currentVideo: null
  }),

  actions: {
    async fetchAll() {
      const supabase = useSupabaseClient()
      const { data, error } = await supabase
        .from('videos')
        .select(`
          *,
          votes(count)
        `)
      
      if (error) throw error
      
      this.videos = data.map(video => ({
        ...video,
        thumbnail_url: `https://www.tiktok.com/api/img/?itemId=${this.getVideoIdFromUrl(video.embed_url)}&format=jpeg`,
        total_votes: video.votes ? parseInt(video.votes[0].count) : 0
      }))
      
      return this.videos
    },

    async fetchOne(id) {
      const supabase = useSupabaseClient()
      const { data, error } = await supabase
        .from('videos')
        .select(`
          *,
          votes(count)
        `)
        .eq('id', id)
        .single()
      
      if (error) throw error

      this.currentVideo = {
        ...data,
        thumbnail_url: `https://www.tiktok.com/api/img/?itemId=${this.getVideoIdFromUrl(data.embed_url)}&format=jpeg`,
        total_votes: data.votes ? parseInt(data.votes[0].count) : 0
      }
      return this.currentVideo
    },

    async create(videoData) {
      const supabase = useSupabaseClient()
      const { data, error } = await supabase
        .from('videos')
        .insert(videoData)
        .select()
        .single()

      if (error) throw error
      return data
    },

    getVideoIdFromUrl(url) {
      const matches = url.match(/video\/(\d+)/)
      return matches ? matches[1] : ''
    }
  }
})
