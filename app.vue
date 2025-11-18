<template>
  <div>
    <NavBar />
    <UContainer class="py-6">
      <NuxtPage />
    </UContainer>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
</script>