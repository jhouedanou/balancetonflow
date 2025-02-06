<template>
  <div class="video-wrapper">
    <iframe
      v-if="embedUrl"
      :src="embedUrl"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
import { getEmbedUrl } from '@/utils/videoEmbed'

const props = defineProps({
  url: {
    type: String,
    required: true
  }
})

const embedUrl = computed(() => getEmbedUrl(props.url))
</script>
