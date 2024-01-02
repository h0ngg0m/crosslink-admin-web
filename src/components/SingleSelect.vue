<template>
  <v-select
    v-model="modelValue"
    :label="label"
    :items="items"
    :chips="chips"
    :density="density"
    :variant="variant"
    :item-color="itemColor"
    :hide-details="hideDetails"
    :error-messages="errorMessages"
  />
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    modelValue: string | null
    label: string
    items: string[]
    chips?: boolean
    density?: 'default' | 'comfortable' | 'compact'
    variant?:
      | 'underlined'
      | 'outlined'
      | 'filled'
      | 'solo'
      | 'solo-inverted'
      | 'solo-filled'
      | 'plain'
    itemColor?: string
    hideDetails?: boolean
    errorMessages?: string | string[]
  }>(),
  {
    chips: true,
    density: 'compact',
    variant: 'outlined',
    itemColor: 'green-lighten-1',
    hideDetails: true,
    errorMessages: ''
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', v: string[]): void
}>()

const modelValue = useVModel(props, 'modelValue', emits)
</script>
