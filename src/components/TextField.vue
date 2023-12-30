<template>
  <v-text-field
    v-model="modelValue"
    :flat="flatFlag"
    :color="color"
    :bg-color="bgColor"
    :label="label"
    :variant="variant"
    :type="type"
  />
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    modelValue: string | null
    label: string
    flatFlag?: boolean
    color?: string
    bgColor?: string
    variant?:
      | 'outlined'
      | 'filled'
      | 'plain'
      | 'underlined'
      | 'solo'
      | 'solo-inverted'
      | 'solo-filled'
    type?: string
  }>(),
  {
    flatFlag: true,
    color: 'green-darken-4',
    bgColor: 'white',
    variant: 'outlined',
    type: 'text'
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', v: string | null): void
}>()

const modelValue = useVModel(props, 'modelValue', emits)
</script>
