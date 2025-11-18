<template>
  <section class="mt-14">
    <div class="max-w-7xl mx-auto px-4">
      <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
        <div class="absolute inset-0 opacity-20">
          <div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-2xl"></div>
          <div class="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/20 blur-2xl"></div>
        </div>
        <div class="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="text-2xl font-bold">{{ t('home.cta.title') }}</h3>
            <p class="mt-2 text-white/90">{{ t('home.cta.desc') }}</p>
          </div>
          <div class="flex gap-3">
            <NuxtLink to="/catalog" class="btn-secondary">{{ t('home.cta.primary') }}</NuxtLink>
            <NuxtLink to="/chat" class="btn-primary">{{ t('home.cta.secondary') }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>