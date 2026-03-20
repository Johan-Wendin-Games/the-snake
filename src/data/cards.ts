import type { ComponentType } from 'react'

export interface Card {
  emoji: string
  label: string
  color: string
  Content: ComponentType
}

type CardModule = {
  default: ComponentType
  emoji: string
  label: string
  color: string
}

const modules = import.meta.glob<CardModule>('/cards/*.md', { eager: true })

export const CARDS: Card[] = Object.values(modules).map((mod) => ({
  emoji: mod.emoji,
  label: mod.label,
  color: mod.color,
  Content: mod.default,
}))

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
