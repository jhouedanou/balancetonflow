<template>
  <v-container>
    <h1 class="text-h3 mb-6">Top 10 des vidéos</h1>
    <v-list>
      <v-list-item
        v-for="(video, index) in topVideos"
        :key="video.id"
        :to="`/videos/${video.id}`"
      >
        <template v-slot:prepend>
          <v-chip color="primary">{{ index + 1 }}</v-chip>
        </template>
        <v-list-item-title>{{ video.title }}</v-list-item-title>
        <template v-slot:append>
          <div class="d-flex align-center">
            <v-icon>mdi-eye</v-icon>
            <span class="ml-1">{{ video.views }}</span>
            <v-icon class="ml-4">mdi-thumb-up</v-icon>
            <span class="ml-1">{{ video.likes }}</span>
          </div>
        </template>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { useVideosStore } from '@/stores/videos'

const videosStore = useVideosStore()
const topVideos = computed(() => 
  [...videosStore.videos]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 10)
)

onMounted(() => {
  videosStore.fetchVideos()
})
</script>
