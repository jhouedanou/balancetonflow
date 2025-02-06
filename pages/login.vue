<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-6">Connexion</h1>
      <LoginForm />
      <p class="mt-4 text-center">
        Pas encore de compte ? 
        <NuxtLink to="/register" class="text-blue-500 hover:underline">
          S'inscrire
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
