import type { Box } from '@/definitions/model'

export interface Meta {
  code: number
  message: string
}

export interface CommonResponse<T> {
  meta: Meta
  data: T | null
}

export interface PageParams {
  page: number
  size: number
}

export interface Boxes {
  [key: string]: Box[]
}

export interface Token {
  accessToken: string
  tokenType: string
}

export interface Menu {
  title: string
  icon: string
  to: string
}
