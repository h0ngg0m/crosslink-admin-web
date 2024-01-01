<template>
  <BoxTableHeader />
  <v-card variant="plain">
    <v-data-table-server
      v-model:page="page"
      v-model:items-per-page="itemsPerPage"
      v-model:sort-by="sortBy"
      :headers="HEADERS"
      :items-length="itemsLength"
      :items="items"
      :loading="loading"
      :items-per-page-options="[10, 30, 50]"
      items-per-page-text="페이지 당 행 수"
    >
      <template #[`item.createdAt`]="{ item }">
        {{ toDatetimeFormat(item.createdAt?.toLocaleString() ?? '-') }}
      </template>
      <template #[`item.updatedAt`]="{ item }">
        {{ toDatetimeFormat(item.updatedAt?.toLocaleString() ?? '-') }}
      </template>
    </v-data-table-server>
  </v-card>
</template>
<script setup lang="ts">
import BoxTableHeader from '@/views/management/box/table/BoxTableHeader.vue'
import { ref } from 'vue'
import { getApi } from '@/utils/api'
import type { ListResponse } from '@/definitions/type'
import type { Box } from '@/definitions/model'
import { stringifyParams, toDatetimeFormat } from '@/utils/common'
import { watchDebounced } from '@vueuse/core'

const HEADERS = [
  {
    title: 'ID',
    key: 'id'
  },
  {
    title: '이름',
    key: 'name'
  },
  {
    title: '설명',
    key: 'description'
  },
  {
    title: '주소',
    key: 'address'
  },
  {
    title: '도시',
    key: 'city'
  },
  {
    title: '연락처',
    key: 'tel'
  },
  {
    title: '생성 일시',
    key: 'createdAt'
  },
  {
    title: '수정 일시',
    key: 'updatedAt'
  }
]

const page = ref(1)
const itemsPerPage = ref(10)
const sortBy = ref<{ key: string; order: string }[]>([])
const itemsLength = ref(100)
const loading = ref(false)
const items = ref<Box[]>([])

async function fetchItems(): Promise<void> {
  loading.value = true
  const response = await getApi<ListResponse<Box>>(
    `api/v1/boxes?${stringifyParams({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value[0]?.key ?? null,
      sortOrder: sortBy.value[0]?.order ?? null
    })}`
  )
  loading.value = false
  items.value = response.data.data?.items ?? []
  itemsLength.value = response.data.data?.itemsLength ?? 0
}

watchDebounced(() => [page.value, itemsPerPage.value, sortBy.value], fetchItems, {
  debounce: 500,
  immediate: true
})
</script>
