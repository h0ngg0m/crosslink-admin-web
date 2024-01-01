<template>
  <v-select
    v-model="modelValue"
    :label="label"
    :items="items"
    :multiple="true"
    :chips="chips"
    :density="density"
    :variant="variant"
    :item-color="itemColor"
    :hide-details="hideDetails"
  />
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    modelValue: string[]
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
  }>(),
  {
    chips: true,
    density: 'compact',
    variant: 'outlined',
    itemColor: 'green-lighten-1',
    hideDetails: true
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', v: string[]): void
}>()

const modelValue = useVModel(props, 'modelValue', emits)
</script>
