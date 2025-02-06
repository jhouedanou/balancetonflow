<template>
  <form @submit.prevent="handleLogin" class="space-y-4">
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
    <button
      type="submit"
      class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
    >
      Se connecter
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const { auth } = useAuthStore()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  await auth.signIn({
    email: email.value,
    password: password.value
  })
}
</script>
