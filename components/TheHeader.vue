<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Balance Ton Flow</h1>
      <div class="space-x-4">
        <button 
          @click="$emit('showLogin')"
          class="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Connexion
        </button>
        <button 
          @click="$emit('showSignup')"
          class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
        >
          Inscription
        </button>
      </div>
    </div>
  </header>
</template>
