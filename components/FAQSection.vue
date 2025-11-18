<template>
  <section class="mt-12">
    <div class="max-w-7xl mx-auto px-4">
      <h3 class="text-2xl font-bold mb-6">{{ t('home.faq.title') }}</h3>
      <div class="space-y-3">
        <Disclosure v-for="i in items" :key="i">
          <div class="rounded-xl border border-white/10 bg-white/5 dark:bg-gray-900/40">
            <DisclosureButton class="flex w-full items-center justify-between px-4 py-3">
              <span class="text-sm font-medium">{{ t(`home.faq.items.${i}.q`) }}</span>
              <ChevronDownIcon class="h-5 w-5" />
            </DisclosureButton>
            <DisclosurePanel class="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400">
              {{ t(`home.faq.items.${i}.a`) }}
            </DisclosurePanel>
          </div>
        </Disclosure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
const { t } = useI18n()
const items = ['0', '1', '2']
</script>