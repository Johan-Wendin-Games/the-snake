/// <reference types="vite/client" />

declare module '*.md' {
  import type { ComponentType } from 'react'
  const Component: ComponentType
  export default Component
  export const emoji: string
  export const label: string
  export const color: string
}
