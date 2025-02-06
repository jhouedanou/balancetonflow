export interface Video {
  id: string
  title: string
  description: string
  embed_url: string
  thumbnail_url: string
  user_id: string
  created_at: string
  vote_start_date: string | null
  vote_end_date: string | null
  total_votes?: number
}

export interface Vote {
  id: string
  video_id: string
  user_id: string
  vote_type: boolean
  created_at: string
}

export interface User {
  id: string
  email: string
  created_at: string
}
