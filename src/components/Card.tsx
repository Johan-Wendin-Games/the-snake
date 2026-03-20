import type { Card as CardData } from '../data/cards.ts'
import styles from './Card.module.css'

interface Props {
  card: CardData
}

export default function Card({ card }: Props) {
  return (
    <div className={styles.card} style={{ background: card.color }}>
      <div className={styles.label}>{card.label}</div>
      <div className={styles.emoji}>{card.emoji}</div>
      <div className={styles.text}>
        <card.Content />
      </div>
    </div>
  )
}
