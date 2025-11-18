import type { Capability } from '~/types/capability'

export const categories = [
  { id: 'text', nameKey: 'catalog.title' },
  { id: 'image', nameKey: 'catalog.title' }
]

export const capabilities: Capability[] = [
  {
    id: 'llm_chat',
    nameKey: 'capabilities.llm_chat.name',
    descKey: 'capabilities.llm_chat.desc',
    category: 'text',
    inputs: [
      {
        id: 'system',
        type: 'textarea',
        labelKey: 'LLM System Prompt',
        placeholderKey: 'e.g. You are a helpful assistant'
      },
      {
        id: 'message',
        type: 'textarea',
        labelKey: 'User Message',
        placeholderKey: 'Ask me anything',
        required: true
      }
    ]
  },
  {
    id: 'image_generate',
    nameKey: 'capabilities.image_generate.name',
    descKey: 'capabilities.image_generate.desc',
    category: 'image',
    inputs: [
      {
        id: 'prompt',
        type: 'textarea',
        labelKey: 'Prompt',
        placeholderKey: 'A cat astronaut'
      },
      {
        id: 'size',
        type: 'select',
        labelKey: 'Size',
        options: [
          { labelKey: '512x512', value: '512x512' },
          { labelKey: '1024x1024', value: '1024x1024' }
        ]
      }
    ]
  }
]

export const findCapability = (id: string) => capabilities.find(c => c.id === id)