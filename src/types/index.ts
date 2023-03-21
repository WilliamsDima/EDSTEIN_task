import { ReactNode } from 'react'

export type TSelect = {
  value: string
  text: string
  select: boolean
  icon: () => ReactNode
}
