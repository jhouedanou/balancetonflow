<template>
  <v-btn
    :loading="loading"
    :disabled="hasVoted"
    @click="handleVote"
    color="primary"
    variant="outlined"
  >
    <v-icon start>mdi-thumb-up</v-icon>
    {{ hasVoted ? 'Déjà voté' : 'Voter' }}
  </v-btn>
</template>

<script setup>
import { useVideosStore } from '@/stores/videos'
import { useAuthStore } from '@/stores/auth'

const props = defineProps({
  videoId: {
    type: String,
    required: true
  }
})

const loading = ref(false)
const hasVoted = ref(false)
const videosStore = useVideosStore()
const authStore = useAuthStore()

const handleVote = async () => {
  if (!authStore.user) {
    navigateTo('/login')
    return
  }
  
  loading.value = true
  try {
    await videosStore.updateLikes(props.videoId)
    hasVoted.value = true
  } finally {
    loading.value = false
  }
}
</script>
