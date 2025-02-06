<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Balance Ton Flow</h1>
    <VideoList :videos="videos" />
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const { data: videos } = await supabase
  .from('videos')
  .select('*')
  .order('created_at', { ascending: false })
</script>
