<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="currentVideo" class="max-w-4xl mx-auto">
      <div class="aspect-video relative mb-6">
        <blockquote 
          class="tiktok-embed" 
          :cite="currentVideo.embed_url" 
          :data-video-id="getVideoIdFromUrl(currentVideo.embed_url)" 
          style="max-width: 605px;min-width: 325px;"
        >
          <section>
            <a 
              target="_blank" 
              :title="currentVideo.title"
              :href="currentVideo.embed_url"
            >
              @{{ currentVideo.title }}
            </a>
            <a 
              title="balancetonflow" 
              target="_blank" 
              href="https://www.tiktok.com/tag/balancetonflow"
            >
              #balancetonflow
            </a>
          </section>
        </blockquote>
      </div>
      
      <div class="mt-4">
        <h1 class="text-3xl font-bold mb-4">{{ currentVideo.title }}</h1>
        <p class="text-gray-600 mb-4">{{ currentVideo.description }}</p>
        
        <button 
          @click="handleLike"
          class="like-button flex items-center px-4 py-2 rounded-full"
          :class="{ 'liked': hasVoted }"
          :disabled="hasVoted"
        >
          <i class="fas fa-heart text-2xl"></i>
          <span class="ml-2">{{ likesCount }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const videoStore = useVideoStore()
const currentVideo = ref(null)
const hasVoted = ref(false)
const likesCount = ref(0)
const { getVotes, addVote } = useVotes()

const loadVideo = async () => {
  currentVideo.value = await videoStore.fetchOne(route.params.id)
}

const getVideoIdFromUrl = (url) => {
  const matches = url.match(/video\/(\d+)/)
  return matches ? matches[1] : ''
}

const handleLike = async () => {
  if (!hasVoted.value) {
    await addVote(currentVideo.value.id, true)
    hasVoted.value = true
    likesCount.value++
    alert('Merci pour votre vote !')
  }
}

onMounted(async () => {
  await loadVideo()
  const { likes } = await getVotes(route.params.id)
  likesCount.value = likes
  
  const script = document.createElement('script')
  script.src = 'https://www.tiktok.com/embed.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<style scoped>
.like-button {
  @apply transition-all duration-200;
}

.like-button.liked {
  @apply text-red-500 cursor-not-allowed opacity-75;
}

.like-button:not(.liked):hover {
  @apply transform scale-110;
}

.aspect-video {
  @apply flex justify-center items-center;
}
</style>
