export const useVotes = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const getVotes = async (videoId) => {
    const { data: votes, error } = await supabase
      .from('votes')
      .select('*')
      .eq('video_id', videoId)

    if (error) throw error

    const likes = votes.filter(v => v.vote_type).length
    const dislikes = votes.filter(v => !v.vote_type).length
    const userVote = votes.find(v => v.user_id === user.value?.id)?.vote_type

    return { likes, dislikes, userVote }
  }

  const addVote = async (videoId, voteType) => {
    const { data, error } = await supabase
      .from('votes')
      .insert({
        video_id: videoId,
        vote_type: voteType,
        user_id: user.value?.id
      })
      
    if (error) throw error
    return data
  }
  
  return {
    addVote,
    getVotes
  }
}
