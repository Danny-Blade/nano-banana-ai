import { findCapability } from '~/data/capabilities'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id as string
  const body = await readBody(event)
  const cap = findCapability(id)
  if (!cap) {
    setResponseStatus(event, 404)
    return { error: 'Capability not found' }
  }
  const inputs = body?.inputs || {}
  const missing = cap.inputs.filter(i => i.required && (inputs[i.id] === undefined || inputs[i.id] === ''))
  if (missing.length) {
    setResponseStatus(event, 400)
    return { error: 'Missing required inputs', fields: missing.map(m => m.id) }
  }
  const config = useRuntimeConfig()
  const apiKey = config.nanoBananaApiKey
  const echo = { id, inputs, note: apiKey ? 'ready to integrate nano banana backend' : 'set nanoBananaApiKey in runtimeConfig' }
  return { ok: true, data: echo }
})