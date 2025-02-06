<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Classement des vidéos</h1>
    <div class="space-y-4">
      <div v-for="(video, index) in rankedVideos" :key="video.id" class="bg-white p-4 rounded-lg shadow">
        <div class="flex items-center gap-4">
          <span class="text-2xl font-bold">{{ index + 1 }}</span>
          <img :src="video.thumbnail_url" class="w-24 h-24 object-cover rounded">
          <div>
            <h3 class="text-xl font-semibold">{{ video.title }}</h3>
            <p class="text-gray-600">{{ video.total_votes }} votes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVideoStore } from '~/stores/video'

const { getRankedVideos } = useVideoStore()
const rankedVideos = await getRankedVideos()
</script>
