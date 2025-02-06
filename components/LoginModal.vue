<template>
  <Modal @close="$emit('close')">
    <template #header>
      <h2 class="text-2xl font-bold">Connexion</h2>
    </template>
    
    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label class="block mb-1">Email</label>
        <input 
          v-model="form.email" 
          type="email" 
          class="w-full px-4 py-2 border rounded"
        />
      </div>
      
      <div>
        <label class="block mb-1">Mot de passe</label>
        <input 
          v-model="form.password" 
          type="password" 
          class="w-full px-4 py-2 border rounded"
        />
      </div>

      <button 
        type="submit" 
        class="w-full px-4 py-2 bg-primary text-white rounded-lg"
      >
        Se connecter
      </button>

      <div class="text-center mt-4">
        <p class="text-gray-600">
          Pas encore inscrit ? 
          <a 
            @click="switchToSignup"
            class="text-primary hover:underline cursor-pointer"
          >
            S'inscrire
          </a>
        </p>
      </div>
    </form>
  </Modal>
</template>

<script setup>
const emit = defineEmits(['close', 'switchToSignup'])
const { auth } = useAuthStore()

const form = ref({
  email: '',
  password: ''
})

const switchToSignup = () => {
  emit('close')
  emit('switchToSignup')
}

const handleLogin = async () => {
  await auth.signIn(form.value)
  emit('close')
}
</script>
