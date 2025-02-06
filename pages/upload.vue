<template>
  <v-container>
    <h1 class="text-h3 mb-6">Uploader une vidéo</h1>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="title"
        label="Titre de la vidéo"
        required
      ></v-text-field>
      
      <v-text-field
        v-model="url"
        label="URL (YouTube, TikTok ou Instagram)"
        required
      ></v-text-field>

      <div v-if="url && isValidUrl" class="my-4">
        <h3>Prévisualisation:</h3>
        <VideoPlayer :url="url" />
      </div>

      <v-btn
        type="submit"
        color="primary"
        :loading="loading"
        :disabled="!isValidUrl"
        class="mt-4"
      >
        Publier la vidéo
      </v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { useVideosStore } from '@/stores/videos'
import { useAuthStore } from '@/stores/auth'

const title = ref('')
const url = ref('')
const loading = ref(false)
const videosStore = useVideosStore()
const authStore = useAuthStore()

const isValidUrl = computed(() => {
  const urlPattern = /(youtube|tiktok|instagram)/i
  return urlPattern.test(url.value)
})

const handleSubmit = async () => {
  if (!authStore.user) return
  
  loading.value = true
  try {
    await videosStore.addVideo({
      title: title.value,
      url: url.value,
      user_id: authStore.user.id,
      views: 0,
      likes: 0
    })
    navigateTo('/')
  } finally {
    loading.value = false
  }
}
</script>
