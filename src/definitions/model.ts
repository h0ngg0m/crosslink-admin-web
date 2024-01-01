import type { CityType } from '@/definitions/enums'
import { Dayjs } from 'dayjs'

export interface DefaultInfo {
  id?: number
  createdAt?: Dayjs
  updatedAt?: Dayjs
}

export interface Box extends DefaultInfo {
  name: string
  description: string
  address: string
  city: CityType
  tel: string
}
