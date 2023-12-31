<template>
  <v-list :lines="false" density="compact" :nav="true">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      color="green-lighten-1"
      @click="routerPush(item.to)"
    >
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>

      <v-list-item-title v-text="item.title"></v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import type { Menu } from '@/definitions/type'
import { routerPush } from '@/utils/common'

const items: Menu[] = [
  {
    title: '박스 관리',
    icon: 'mdi-package-variant-closed',
    to: '/boxes'
  },
  {
    title: '회원 관리',
    icon: 'mdi-account-outline',
    to: '/'
  },
  {
    title: '관리자 관리',
    icon: 'mdi-account-cog-outline',
    to: '/'
  }
]
</script>
