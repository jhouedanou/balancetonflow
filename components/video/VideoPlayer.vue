<template>
  <div class="aspect-w-16 aspect-h-9">
    <iframe
      :src="embedUrl"
      class="w-full h-full"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
defineProps({
  embedUrl: String
})
</script>
