<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

const { data: videos } = await supabase
  .from('videos')
  .select('*')
  .order('created_at', { ascending: false })
</script>
