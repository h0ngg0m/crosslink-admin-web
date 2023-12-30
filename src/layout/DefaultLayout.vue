<template>
  <v-layout>
    <v-app-bar flat color="green-lighten-1">
      <template #prepend>
        <span class="ml-2 pointer text-h6" @click="routerPush('/')">👨🏻‍🔧CrossLink 관리자</span>️
      </template>
      <template #append>
        <v-tooltip v-if="loginFlag" text="마이 페이지" location="bottom">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="mdi-account"></v-btn>
          </template>
        </v-tooltip>
        <v-btn v-if="loginFlag" @click="logout">로그아웃</v-btn>
        <v-btn v-else @click="routerPush('/auth/login')">로그인</v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer :permanent="true"> </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>

    <v-footer app name="footer">FOOTER</v-footer>
  </v-layout>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { routerPush } from '@/utils/common'

const userStore = useUserStore()
const { logout } = userStore
const { loginFlag } = storeToRefs(userStore)
</script>
