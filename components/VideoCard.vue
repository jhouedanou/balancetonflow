<template>
  <v-card class="ma-2" max-width="400">
    <v-card-title>{{ video.title }}</v-card-title>
    <div class="video-container">
      <VideoPlayer :url="video.url" />
    </div>
    <v-card-text>
      <div class="d-flex align-center justify-space-between">
        <span>{{ video.views }} vues</span>
        <span>{{ video.likes }} likes</span>
      </div>
    </v-card-text>
    <v-card-actions>
      <VoteButton :video-id="video.id" />
      <v-btn :to="`/videos/${video.id}`" text>
        Voir plus
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps({
  video: {
    type: Object,
    required: true
  }
})
</script>
