<template>
  <v-container>
    <v-row>
      <v-col v-for="video in videos" :key="video.id" cols="12" sm="6" md="4">
        <VideoCard :video="video" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useVideosStore } from '@/stores/videos'

const videosStore = useVideosStore()
const videos = computed(() => videosStore.videos)

onMounted(async () => {
  await videosStore.fetchVideos()
})
</script>
