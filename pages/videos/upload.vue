<template>
  <div class="container mx-auto px-4 py-8 max-w-2xl">
    <h1 class="text-3xl font-bold mb-8">Partager une vidéo</h1>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label class="block mb-2">Titre</label>
        <input v-model="form.title" type="text" class="w-full p-2 border rounded" required>
      </div>
      <div>
        <label class="block mb-2">URL de la vidéo</label>
        <input v-model="form.embed_url" type="url" class="w-full p-2 border rounded" required>
      </div>
      <div>
        <label class="block mb-2">Description</label>
        <textarea v-model="form.description" class="w-full p-2 border rounded" rows="4"></textarea>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded">
        Publier
      </button>
    </form>
  </div>
</template>

<script setup>
const { video } = useVideoStore()
const router = useRouter()

const form = ref({
  title: '',
  embed_url: '',
  description: ''
})

const handleSubmit = async () => {
  await video.create(form.value)
  router.push('/')
}
</script>
