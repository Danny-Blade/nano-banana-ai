export type InputField = {
  id: string
  type: 'text' | 'textarea' | 'select' | 'number'
  labelKey: string
  placeholderKey?: string
  required?: boolean
  options?: { labelKey: string; value: string | number }[]
}

export type Capability = {
  id: string
  nameKey: string
  descKey: string
  category: 'text' | 'image' | 'audio' | 'rag' | 'tools' | 'workflow'
  inputs: InputField[]
}