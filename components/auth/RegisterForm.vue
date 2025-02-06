<template>
  <form @submit.prevent="handleRegister" class="space-y-4">
    <div>
      <label class="block mb-2">Email</label>
      <input
        v-model="email"
        type="email"
        class="w-full p-2 border rounded"
        required
      >
    </div>
    <div>
      <label class="block mb-2">Mot de passe</label>
      <input
        v-model="password"
        type="password"
        class="w-full p-2 border rounded"
        required
      >
    </div>
    <div>
      <label class="block mb-2">Confirmer le mot de passe</label>
      <input
        v-model="confirmPassword"
        type="password"
        class="w-full p-2 border rounded"
        required
      >
    </div>
    <button
      type="submit"
      class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
    >
      S'inscrire
    </button>
  </form>
</template>
  <script setup lang="ts">
  import { useAuthStore } from '~/stores/auth'

  const authStore = useAuthStore()
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')

  const handleRegister = async () => {
    if (password.value !== confirmPassword.value) {
      alert('Les mots de passe ne correspondent pas')
      return
    }
  
    await authStore.signUp({
      email: email.value,
      password: password.value
    })
  }
  </script>
