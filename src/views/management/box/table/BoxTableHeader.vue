<template>
  <v-card height="200" variant="plain" class="d-flex flex-column pl-3 pr-3">
    <div class="h-50 d-flex mt-3">
      <p class="text-h6">박스 관리</p>
      <v-btn
        class="ml-auto"
        prepend-icon="mdi-package-variant-closed-plus"
        variant="outlined"
        color="green-lighten-1"
        @click="boxAddSheetFlag = true"
        >박스 추가</v-btn
      >
    </div>
    <div class="h-50">
      <MultiSelect v-model="selectedCity" label="도시" :items="Object.values(City)" />
    </div>
    <BoxAddSheet v-model:boxAddSheetFlag="boxAddSheetFlag" />
  </v-card>
</template>
<script setup lang="ts">
import MultiSelect from '@/components/MultiSelect.vue'
import { City } from '@/definitions/enums'
import { ref } from 'vue'
import BoxAddSheet from '@/views/management/box/table/BoxAddSheet.vue'

const boxAddSheetFlag = ref(false)
const selectedCity = ref<string[]>([])
</script>
