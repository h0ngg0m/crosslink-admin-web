import { defineStore } from 'pinia'
import { routerPush } from '@/utils/common'
import { computed, ref } from 'vue'
import { isTokenExpired } from '@/utils/token'
import type { AdminRoleType } from '@/definitions/enums'

export const useAdminStore = defineStore(
  'admin',
  () => {
    const accessToken = ref<string | null>(null)
    const role = ref<AdminRoleType | null>(null)

    const loginFlag = computed<boolean>(() => {
      return !isTokenExpired(accessToken.value)
    })

    function saveAccessToken(token: string): void {
      accessToken.value = token
    }

    async function logout(): Promise<void> {
      accessToken.value = null
      await routerPush('/auth/login')
    }

    return { accessToken, loginFlag, saveAccessToken, logout }
  },
  { persist: true }
)
