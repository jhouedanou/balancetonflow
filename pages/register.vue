<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-4">
          <h1 class="text-h4 mb-4">Inscription</h1>
          <v-form @submit.prevent="handleRegister">
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

            <v-text-field
              v-model="confirmPassword"
              label="Confirmer le mot de passe"
              type="password"
              required
              :rules="[passwordMatch]"
            ></v-text-field>

            <v-btn
              type="submit"
              color="primary"
              block
              :loading="authStore.loading"
              :disabled="!isFormValid"
            >
              S'inscrire
            </v-btn>
          </v-form>
          
          <div class="mt-4 text-center">
            <nuxt-link to="/login">Déjà un compte ? Se connecter</nuxt-link>
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
const confirmPassword = ref('')
const authStore = useAuthStore()

const passwordMatch = computed(() => 
  password.value === confirmPassword.value || "Les mots de passe ne correspondent pas"
)

const isFormValid = computed(() => 
  email.value && 
  password.value && 
  password.value === confirmPassword.value
)

const handleRegister = async () => {
  try {
    await authStore.register(email.value, password.value)
    navigateTo('/login')
  } catch (error) {
    console.error(error)
  }
}
</script>
