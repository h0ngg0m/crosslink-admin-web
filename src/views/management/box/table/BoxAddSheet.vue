<template>
  <v-bottom-sheet v-model="boxAddSheetFlag" :inset="true">
    <v-form>
      <v-card title="박스 추가">
        <div class="pa-3">
          <TextField
            class="mb-3"
            @input="v$.name.$touch()"
            @blur="v$.name.$touch()"
            v-model="name"
            :error-messages="v$.name.$errors.map((e) => e.$message.toString())"
            label="이름"
            density="compact"
          />
          <TextArea
            class="mb-3"
            @input="v$.description.$touch()"
            @blur="v$.description.$touch()"
            v-model="description"
            :error-messages="v$.description.$errors.map((e) => e.$message.toString())"
            label="설명"
            density="compact"
          />
          <TextField
            class="mb-3"
            @input="v$.address.$touch()"
            @blur="v$.address.$touch()"
            v-model="address"
            :error-messages="v$.address.$errors.map((e) => e.$message.toString())"
            label="주소"
            density="compact"
          />
          <SingleSelect
            class="mb-3"
            @input="v$.city.$touch()"
            @blur="v$.city.$touch()"
            v-model="city"
            :error-messages="v$.city.$errors.map((e) => e.$message.toString())"
            label="도시"
            :items="Object.values(City)"
            :chips="false"
            :hide-details="false"
          />
          <TextField
            class="mb-3"
            @input="v$.tel.$touch()"
            @blur="v$.tel.$touch()"
            v-model="tel"
            :error-messages="v$.tel.$errors.map((e) => e.$message.toString())"
            label="연락처"
            density="compact"
          />
          <v-btn
            class="w-100"
            color="green-darken-1"
            :disabled="!isAddButtonAble"
            :loading="loading"
            @click="add"
          >
            <span style="font-weight: 700; font-size: 1rem">추가</span>
          </v-btn>
        </div>
      </v-card>
    </v-form>
  </v-bottom-sheet>
</template>
<script setup lang="ts">
import TextField from '@/components/TextField.vue'
import { computed, ref } from 'vue'
import SingleSelect from '@/components/SingleSelect.vue'
import { City, type CityType } from '@/definitions/enums'
import TextArea from '@/components/TextArea.vue'
import { useVModel } from '@vueuse/core'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'

const props = defineProps<{
  boxAddSheetFlag: boolean
}>()

const emits = defineEmits<{
  (e: 'update:boxAddSheetFlag', v: boolean): void
}>()

const boxAddSheetFlag = useVModel(props, 'boxAddSheetFlag', emits)

const loading = ref(false)
const name = ref('')
const description = ref('')
const address = ref('')
const city = ref<CityType | null>(null)
const tel = ref('')
const isAddButtonAble = computed(
  () => !!name.value && !!description.value && !!address.value && !!city.value && !!tel.value
)

const rules = {
  name: { required: helpers.withMessage('이름을 입력해주세요.', required) },
  description: { required: helpers.withMessage('설명을 입력해주세요.', required) },
  address: { required: helpers.withMessage('주소를 입력해주세요.', required) },
  city: { required: helpers.withMessage('도시를 선택해주세요.', required) },
  tel: { required: helpers.withMessage('연락처를 입력해주세요.', required) }
}
const v$ = useVuelidate(rules, { name, description, address, city, tel })

async function add(): Promise<void> {
  const isValid = await v$.value.$validate()

  if (!isValid) {
    return
  } else {
    console.log('add')
  }
}
</script>
