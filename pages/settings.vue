<template>
  <section>
    <h2 class="text-xl font-semibold mb-4">{{ t('nav.settings') }}</h2>
    <div class="space-y-6">
      <div>
        <div class="mb-2">Language</div>
        <LanguageSwitcher />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'
const { t } = useI18n()
</script>