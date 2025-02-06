<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div v-for="video in videos" :key="video.id" class="video-card rounded-lg shadow-lg overflow-hidden">
      <div class="aspect-video relative">
        <blockquote 
          class="tiktok-embed" 
          :cite="video.embed_url" 
          :data-video-id="getVideoIdFromUrl(video.embed_url)"
          data-autoplay="0"
          style="max-width: 100%; min-width: 100%;"
        >
          <section>
            <a target="_blank" :href="video.embed_url">@{{ video.title }}</a>
            <a title="balancetonflow" target="_blank" href="https://www.tiktok.com/tag/balancetonflow">#balancetonflow</a>
          </section>
        </blockquote>
      </div>
      
      <div class="p-4">
        <NuxtLink :to="`/videos/${video.id}`">
          <h3 class="font-bold text-xl mb-2">{{ video.title }}</h3>
          <p class="text-gray-600 line-clamp-2">{{ video.description }}</p>
        </NuxtLink>
        <div class="mt-3 flex items-center text-gray-500">
          <i class="fas fa-heart text-red-500 mr-2"></i>
          <span>{{ video.total_votes || 0 }} votes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  videos: {
    type: Array,
    required: true
  }
})

const getVideoIdFromUrl = (url) => {
  const matches = url.match(/video\/(\d+)/)
  return matches ? matches[1] : ''
}

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://www.tiktok.com/embed.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<style scoped>
.video-card {
  transition: transform 0.2s;
}

.video-card:hover {
  transform: translateY(-4px);
}

.aspect-video {
  @apply flex justify-center items-center;
}
</style>
