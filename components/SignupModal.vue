<template>
  <Modal @close="$emit('close')">
    <template #header>
      <h2 class="text-2xl font-bold">Inscription</h2>
    </template>
    
    <form @submit.prevent="handleSignup" class="space-y-4">
      <div>
        <label class="block mb-1">Email</label>
        <input 
          v-model="form.email" 
          type="email" 
          class="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label class="block mb-1">Mot de passe</label>
        <input 
          v-model="form.password" 
          type="password" 
          class="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <div>
        <label class="block mb-1">Lien vidéo TikTok</label>
        <input 
          v-model="form.tiktokUrl" 
          type="url" 
          class="w-full px-4 py-2 border rounded"
          placeholder="https://www.tiktok.com/@user/video/1234567890"
          required
        />
      </div>

      <button 
        type="submit" 
        class="w-full px-4 py-2 bg-primary text-white rounded-lg"
      >
        S'inscrire
      </button>

      <div class="text-center mt-4">
        <p class="text-gray-600">
          Déjà inscrit ? 
          <a 
            @click="switchToLogin"
            class="text-primary hover:underline cursor-pointer"
          >
            Se connecter
          </a>
        </p>
      </div>
    </form>
  </Modal>
</template>

<script setup>
const emit = defineEmits(['close', 'switchToLogin'])
const supabase = useSupabaseClient()
const { auth } = useAuthStore()

const form = ref({
  email: '',
  password: '',
  tiktokUrl: ''
})

const handleSignup = async () => {
  await auth.signUp(form.value)
  await supabase.from('videos').insert({
    embed_url: form.value.tiktokUrl,
    user_id: auth.user.id
  })
  emit('close')
}

const switchToLogin = () => {
  emit('close')
  emit('switchToLogin')
}
</script>
