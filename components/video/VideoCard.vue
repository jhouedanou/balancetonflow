<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="video.thumbnail_url" :alt="video.title" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{{ video.title }}</h3>
      <p class="text-gray-600 mb-4">{{ truncateDescription(video.description) }}</p>
      <div class="flex justify-between items-center">
        <VoteButton :video-id="video.id" />
        <span class="text-sm text-gray-500">
          {{ formatDate(video.created_at) }}
        </span>
      </div>
    </div>
  </div>
</template>
  <script setup>
  const props = defineProps({
    video: Object
  })

  const truncateDescription = (desc) => {
    return desc.length > 100 ? `${desc.substring(0, 100)}...` : desc
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR')
  }
  </script>
