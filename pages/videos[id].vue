<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="currentVideo" class="max-w-4xl mx-auto">
      <div class="aspect-video relative mb-6">
        <blockquote 
          class="tiktok-embed"
          :cite="currentVideo.embed_url"
          :data-video-id="getVideoIdFromUrl(currentVideo.embed_url)"
          style="max-width: 605px; min-width: 325px; margin: 0 auto;"
        />
      </div>
      <div class="mt-4">
        <h1 class="text-3xl font-bold mb-4">{{ currentVideo.title }}</h1>
        <p class="text-gray-600 mb-4">{{ currentVideo.description }}</p>
        <VoteButton :video-id="currentVideo.id" />
      </div>
    </div>
  </div>
</template>
  <script setup>
  const route = useRoute()
  const videoStore = useVideoStore()
  const currentVideo = ref(null)

  onMounted(async () => {
    currentVideo.value = await videoStore.fetchOne(route.params.id)
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
