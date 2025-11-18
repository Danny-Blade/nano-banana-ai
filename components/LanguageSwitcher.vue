<template>
  <Listbox v-model="model">
    <div class="relative">
      <ListboxButton class="relative w-28 cursor-default rounded-lg bg-white/60 dark:bg-gray-800 py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none sm:text-sm">
        <span class="block truncate">{{ currentLabel }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" />
        </span>
      </ListboxButton>
      <Transition leave-active-class="transition duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          <ListboxOption v-for="opt in options" :key="opt.value" :value="opt.value" as="template">
            <li class="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 dark:text-gray-100" :class="{ 'bg-indigo-50 dark:bg-indigo-900/40': model === opt.value }">
              <span class="block truncate" :class="{ 'font-medium': model === opt.value, 'font-normal': model !== opt.value }">{{ opt.label }}</span>
              <span v-if="model === opt.value" class="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                <CheckIcon class="h-5 w-5" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </Transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/24/solid'
const { locale } = useI18n()
const options = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en' }
]
const model = computed({
  get: () => locale.value,
  set: (v: string) => (locale.value = v)
})
const currentLabel = computed(() => options.find(o => o.value === model.value)?.label || '')
</script>
