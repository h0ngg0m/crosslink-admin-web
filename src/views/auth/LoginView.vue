<template>
  <div class="w-100 h-100 d-flex justify-center align-center">
    <v-card class="pa-4" width="500" variant="elevated" elevation="24">
      <v-card-item>
        <v-card-title>CrossLink 관리자 로그인</v-card-title>
      </v-card-item>
      <TextField v-model="loginId" label="아이디" @keydown.enter="login" :loading="loading" />
      <TextField
        v-model="password"
        type="password"
        label="비밀번호"
        @keydown.enter="login"
        :loading="loading"
      />
      <v-btn class="w-100" color="green-darken-1" @click="login" :loading="loading">
        <span style="font-weight: 700; font-size: 1rem">로그인</span>
      </v-btn>
      <p class="pointer text-right mt-2">회원가입</p>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TextField from '@/components/TextField.vue'
import axios from 'axios'
import type { CommonResponse, Token } from '@/definitions/type'
import { useAdminStore } from '@/stores/admin'
import { routerPush } from '@/utils/common'
import { SHA512 } from 'crypto-js'

const loginId = ref('')
const password = ref('')
const loading = ref(false)
const { saveAccessToken } = useAdminStore()

async function login(): Promise<void> {
  loading.value = true
  await axios
    .post<CommonResponse<Token>>(`${import.meta.env.VITE_API_URL}/api/v1/auth/admin/login`, {
      loginId: loginId.value,
      password: SHA512(password.value).toString()
    })
    .then(async (response) => {
      loading.value = false
      if (response.status === 200 && response.data?.meta?.code === 200) {
        if (response.data?.data?.accessToken) {
          saveAccessToken(response.data.data.accessToken)
          await routerPush('/')
        }
      }
    })
    .catch((response) => {
      loading.value = false
      console.warn(response)
      alert('잘못된 아이디 또는 비밀번호입니다. 다시 입력해 주세요.')
    })
}
</script>
