<template>
  <div>
    <TheHeader 
      @showLogin="showLoginModal = true"
      @showSignup="showSignupModal = true"
    />

    <div class="container mx-auto px-4 py-8">
      <VideoList :videos="videos" />
    </div>

    <LoginModal 
      v-if="showLoginModal" 
      @close="showLoginModal = false"
      @switchToSignup="showLoginModal = false; showSignupModal = true"
    />

    <SignupModal
      v-if="showSignupModal"
      @close="showSignupModal = false"
      @switchToLogin="showSignupModal = false; showLoginModal = true"
    />
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const showLoginModal = ref(false)
const showSignupModal = ref(false)

const { data: videos } = await supabase
  .from('videos')
  .select('*')
  .order('created_at', { ascending: false })
</script>
