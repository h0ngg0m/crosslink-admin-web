<template>
  <v-bottom-sheet :inset="true">
    <template v-slot:activator="{ props }">
      <slot :props="props" />
    </template>
    <v-card title="박스 추가">
      <div class="pa-3">
        <TextField v-model="name" label="이름" density="compact" />
        <TextArea v-model="description" label="설명" density="compact" />
        <TextField v-model="address" label="주소" density="compact" />
        <SingleSelect
          v-model="city"
          label="도시"
          :items="Object.values(City)"
          :chips="false"
          :hide-details="false"
        />
        <TextField v-model="tel" label="연락처" density="compact" />
      </div>
    </v-card>
  </v-bottom-sheet>
</template>
<script setup lang="ts">
import TextField from '@/components/TextField.vue'
import { ref } from 'vue'
import SingleSelect from '@/components/SingleSelect.vue'
import { City } from '@/definitions/enums'
import TextArea from '@/components/TextArea.vue'

const name = ref('')
const address = ref('')
const description = ref('')
const city = ref<string | null>(null)
const tel = ref('')
</script>
