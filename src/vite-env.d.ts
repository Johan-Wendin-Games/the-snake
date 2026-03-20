/// <reference types="vite/client" />

declare module '*.mdx' {
  import type { ComponentType } from 'react'
  const Component: ComponentType
  export default Component
  export const frontmatter: {
    emoji: string
    label: string
    color: string
  }
}
