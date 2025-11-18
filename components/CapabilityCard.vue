<template>
  <UCard class="nb-hover nb-gradient-border">
    <template #header>
      <div class="flex items-center gap-2">
        <UIcon :name="icon" class="text-indigo-600" />
        <div class="font-medium">{{ t(cap.nameKey) }}</div>
      </div>
    </template>
    <p class="text-sm text-gray-500 dark:text-gray-400">{{ t(cap.descKey) }}</p>
    <template #footer>
      <div class="flex justify-end">
        <UButton :to="`/c/${cap.id}`" color="indigo" variant="solid">
          <UIcon name="i-heroicons-arrow-right" class="mr-1" />
          {{ t('home.get_started') }}
        </UButton>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Capability } from '~/types/capability'
const { t } = useI18n()
const props = defineProps<{ cap: Capability }>()
const icon = computed(() => (props.cap.category === 'image' ? 'i-heroicons-photo' : 'i-heroicons-chat-bubble-left-right'))
</script>
