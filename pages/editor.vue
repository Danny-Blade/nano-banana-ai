<template>
  <section class="nb-section">
    <div class="nb-container grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <div class="nb-card p-4">
          <div class="flex items-center justify-between mb-3">
            <div class="nb-title nb-title-xl">{{ t('editor.title') }}</div>
            <div class="flex items-center gap-3">
              <label class="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" v-model="batch" class="rounded" />
                {{ t('editor.batch_mode') }}
              </label>
              <select v-model="model" class="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2">
                <option v-for="m in models" :key="m" :value="m">{{ m }}</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-2">
              <label class="block text-sm font-medium mb-2">{{ t('editor.main_prompt') }}</label>
              <textarea v-model="prompt" rows="5" class="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2" placeholder="Describe your edit, e.g. place in a snowy mountain"></textarea>
              <div class="mt-3 flex gap-3">
                <button class="btn-primary" @click="generate">{{ t('editor.generate') }}</button>
                <button class="btn-secondary" @click="clearAll">{{ t('editor.clear') }}</button>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">{{ t('editor.reference') }}</label>
              <div class="border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-3 text-center">
                <input ref="fileInput" type="file" accept="image/*" multiple class="hidden" @change="onFiles" />
                <div class="text-sm mb-2">{{ t('editor.max_10mb') }}</div>
                <button class="btn-primary" @click="openFile">{{ t('editor.add_image') }}</button>
              </div>
              <div class="mt-3 grid grid-cols-3 gap-2">
                <div v-for="(img, i) in images" :key="i" class="relative">
                  <img :src="img.url" class="h-20 w-full object-cover rounded-lg" />
                  <button class="absolute top-1 right-1 bg-black/50 text-white rounded-full px-2 text-xs" @click="removeImage(i)">×</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="nb-title nb-title-xl mb-3">{{ t('editor.output_gallery') }}</div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="(o, idx) in outputs" :key="idx" class="card overflow-hidden">
              <div class="h-40 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                <div class="text-xs text-gray-500 dark:text-gray-400">{{ o.label }}</div>
              </div>
            </div>
            <div v-if="!outputs.length" class="card h-40 flex items-center justify-center">
              <div class="text-sm text-gray-500 dark:text-gray-400">No outputs yet. Submit a prompt to generate.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="nb-card p-4">
          <div class="nb-title nb-title-xl mb-2">{{ t('home.demo.title') }}</div>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('home.demo.desc') }}</p>
          <div class="mt-3">
            <NuxtLink to="/catalog" class="btn-primary">{{ t('home.cta.primary') }}</NuxtLink>
          </div>
        </div>
        <div class="nb-card p-4">
          <div class="nb-title nb-title-xl mb-2">{{ t('home.features.title') }}</div>
          <ul class="text-sm space-y-2 text-gray-600 dark:text-gray-400">
            <li>{{ t('home.features.multilingual.title') }}</li>
            <li>{{ t('home.features.categories.title') }}</li>
            <li>{{ t('home.features.security.title') }}</li>
            <li>{{ t('home.features.performance.title') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const prompt = ref('')
const model = ref('NanoBanana-Advanced')
const models = ['NanoBanana-Advanced', 'Flux-Kontext', 'Baseline']
const batch = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const images = ref<{ file: File; url: string }[]>([])
const outputs = ref<{ label: string }[]>([])
const openFile = () => fileInput.value?.click()
const onFiles = (e: Event) => {
  const input = e.target as HTMLInputElement
  const files = Array.from(input.files || [])
  for (const f of files) {
    if (images.value.length >= 9) break
    if (f.size > 10 * 1024 * 1024) continue
    images.value.push({ file: f, url: URL.createObjectURL(f) })
  }
  input.value = ''
}
const removeImage = (i: number) => {
  URL.revokeObjectURL(images.value[i].url)
  images.value.splice(i, 1)
}
const clearAll = () => {
  images.value.forEach(i => URL.revokeObjectURL(i.url))
  images.value = []
  outputs.value = []
  prompt.value = ''
}
const generate = () => {
  outputs.value = []
  const count = batch.value ? 6 : 3
  for (let i = 0; i < count; i++) outputs.value.push({ label: `Generated #${i + 1}` })
}
</script>