<template>
  <div class="flex gap-2">
    <button
      @click="handleVote(true)"
      :class="['p-2 rounded', userVote === true ? 'bg-green-500 text-white' : 'bg-gray-200']"
    >
      👍 {{ likes }}
    </button>
    <button
      @click="handleVote(false)"
      :class="['p-2 rounded', userVote === false ? 'bg-red-500 text-white' : 'bg-gray-200']"
    >
      👎 {{ dislikes }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  videoId: String
})

const { addVote, getVotes } = useVotes()
const { likes, dislikes, userVote } = await getVotes(props.videoId)

const handleVote = async (voteType) => {
  await addVote(props.videoId, voteType)
}
</script>
