<template>
  <div class="w-100 h-100 d-flex justify-center align-center">
    <v-card class="pa-4" width="500" variant="elevated" elevation="16">
      <v-card-item>
        <v-card-title>CrossLink 관리자 로그인</v-card-title>
      </v-card-item>
      <TextField v-model="loginId" label="아이디" />
      <TextField v-model="password" type="password" label="비밀번호" />
      <v-btn class="w-100" color="green-darken-2" @click="login">
        <span style="font-weight: 700; font-size: 1rem">로그인</span>
      </v-btn>
      <p class="pointer text-right mt-2">회원가입</p>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TextField from '@/components/TextField.vue'

const loginId = ref('')
const password = ref('')

async function login(): Promise<void> {
  // TODO: 로그인
}
</script>
