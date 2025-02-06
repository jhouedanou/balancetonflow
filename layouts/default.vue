<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <nuxt-link to="/" class="text-decoration-none">Balance Ton Flow</nuxt-link>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Accueil</v-btn>
      <v-btn to="/classement" text>Classement</v-btn>
      <template v-if="authStore.user">
        <v-btn to="/upload" text>Upload</v-btn>
        <v-btn @click="authStore.logout" text>Déconnexion</v-btn>
      </template>
      <template v-else>
        <v-btn to="/login" text>Connexion</v-btn>
        <v-btn to="/register" text>Inscription</v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
</script>
