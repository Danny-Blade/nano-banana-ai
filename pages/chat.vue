<template>
  <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2">
      <h2 class="text-xl font-semibold mb-4">{{ t('nav.chat') }}</h2>
      <UCard>
        <div class="space-y-3">
          <div v-for="m in messages" :key="m.id" class="flex" :class="m.role === 'user' ? 'justify-end' : 'justify-start'">
            <div :class="m.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'" class="max-w-[80%] rounded-2xl px-4 py-3">
              <div class="text-xs opacity-70 mb-1">{{ m.role }}</div>
              <div>{{ m.content }}</div>
            </div>
          </div>
        </div>
      </UCard>
      <div class="mt-4 flex items-center gap-3">
        <UTextarea v-model="input" placeholder="Type a message" autoresize class="flex-1" />
        <UButton @click="send" color="indigo">
          <UIcon name="i-heroicons-paper-airplane" class="mr-2" />
          发送
        </UButton>
      </div>
    </div>
    <div>
      <UCard>
        <div class="font-medium mb-2">会话设置</div>
        <UForm class="space-y-3">
          <UFormGroup label="系统提示">
            <UTextarea v-model="system" placeholder="You are a helpful assistant" autoresize />
          </UFormGroup>
        </UForm>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const input = ref('')
const system = ref('')
const messages = ref<{ id: number; role: string; content: string }[]>([])
const send = () => {
  if (!input.value.trim()) return
  messages.value.push({ id: Date.now(), role: 'user', content: input.value })
  input.value = ''
}
</script>
