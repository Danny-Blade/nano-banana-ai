<template>
  <section v-if="cap" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div>
      <h2 class="text-xl font-semibold mb-2">{{ t(cap.nameKey) }}</h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{{ t(cap.descKey) }}</p>
      <UCard>
        <UForm @submit="onSubmit">
          <div class="space-y-4">
            <UFormGroup v-for="input in cap.inputs" :key="input.id" :label="input.labelKey">
              <UInput v-if="input.type === 'text'" v-model="form[input.id]" :placeholder="input.placeholderKey" />
              <UTextarea v-else-if="input.type === 'textarea'" v-model="form[input.id]" :placeholder="input.placeholderKey" />
              <USelect v-else-if="input.type === 'select'" v-model="form[input.id]" :options="toOptions(input)" />
              <UInput v-else-if="input.type === 'number'" type="number" v-model.number="form[input.id]" />
            </UFormGroup>
          </div>
          <div class="mt-6 flex justify-end">
            <UButton type="submit" color="indigo">
              <UIcon name="i-heroicons-play" class="mr-2" />
              {{ t('common.execute') }}
            </UButton>
          </div>
        </UForm>
      </UCard>
    </div>
    <div>
      <h3 class="text-lg font-medium mb-2">{{ t('common.result') }}</h3>
      <UCard class="min-h-48">
        <div v-if="result" class="prose dark:prose-invert">
          <pre class="whitespace-pre-wrap">{{ result }}</pre>
        </div>
        <div v-else class="text-sm text-gray-500">等待执行结果...</div>
      </UCard>
    </div>
  </section>
  <section v-else>
    <UAlert title="Not found" color="red" />
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { findCapability } from '~/data/capabilities'
const { t } = useI18n()
const route = useRoute()
const id = route.params.id as string
const cap = findCapability(id)
const form = reactive<Record<string, any>>({})
const result = ref('')
const toOptions = (input: any) => input.options?.map((o: any) => ({ label: o.labelKey, value: o.value })) || []
const onSubmit = async () => {
  const res = await $fetch(`/api/capabilities/${id}`, { method: 'POST', body: { inputs: form } })
  result.value = JSON.stringify(res, null, 2)
}
</script>
