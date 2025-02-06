<template>
  <v-container>
    <div v-if="video">
      <h1 class="text-h4 mb-4">{{ video.title }}</h1>
      <VideoPlayer :url="video.url" />
      <v-card class="mt-4">
        <v-card-text>
          <div>Vues: {{ video.views }}</div>
          <div>Likes: {{ video.likes }}</div>
        </v-card-text>
        <v-card-actions>
          <VoteButton :video-id="video.id" />
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
const route = useRoute()
const videosStore = useVideosStore()

const video = ref(null)

onMounted(async () => {
  video.value = await videosStore.fetchVideoById(route.params.id)
})
</script>
