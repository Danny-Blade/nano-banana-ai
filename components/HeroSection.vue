<template>
  <section class="nb-hero">
    <div class="nb-decor-a">
      <div class="a"></div>
      <div class="b"></div>
    </div>
    <div class="nb-inner">
      <div class="max-w-3xl">
        <h1 class="nb-title nb-title-xxl">{{ t('home.hero.title') }}</h1>
        <p class="mt-4 nb-muted">{{ t('home.hero.subtitle') }}</p>
        <div class="nb-cta-row">
          <NuxtLink to="/editor" class="nb-btn-outline">
            {{ t('home.hero.cta_primary') }}
          </NuxtLink>
          <NuxtLink to="/chat" class="btn-primary">
            {{ t('home.hero.cta_secondary') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>