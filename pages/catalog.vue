<template>
  <section>
    <h2 class="text-xl font-semibold mb-4">{{ t('catalog.title') }}</h2>
    <div class="mb-4 max-w-md">
      <UInput v-model="q" :placeholder="t('catalog.search_placeholder')" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CapabilityCard v-for="cap in filtered" :key="cap.id" :cap="cap" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { capabilities } from '~/data/capabilities'
import CapabilityCard from '~/components/CapabilityCard.vue'
const { t } = useI18n()
const q = ref('')
const filtered = computed(() => {
  const s = q.value.trim().toLowerCase()
  if (!s) return capabilities
  return capabilities.filter(c =>
    t(c.nameKey).toLowerCase().includes(s) || t(c.descKey).toLowerCase().includes(s)
  )
})
</script>
