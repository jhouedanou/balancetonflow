<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-4">
          <h1 class="text-h4 mb-4">Connexion</h1>
          <v-form @submit.prevent="handleLogin">
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              required
            ></v-text-field>
            
            <v-text-field
              v-model="password"
              label="Mot de passe"
              type="password"
              required
            ></v-text-field>

            <v-btn
              type="submit"
              color="primary"
              block
              :loading="authStore.loading"
            >
              Se connecter
            </v-btn>
          </v-form>
          
          <div class="mt-4 text-center">
            <nuxt-link to="/register">Pas encore de compte ? S'inscrire</nuxt-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const authStore = useAuthStore()

const handleLogin = async () => {
  try {
    await authStore.login(email.value, password.value)
    navigateTo('/')
  } catch (error) {
    console.error(error)
  }
}
</script>
