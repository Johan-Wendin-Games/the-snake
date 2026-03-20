import styles from './Card.module.css'

export default function Card({ card }) {
  return (
    <div className={styles.card} style={{ background: card.color }}>
      <div className={styles.label}>{card.label}</div>
      <div className={styles.emoji}>{card.emoji}</div>
      <div className={styles.text}>{card.text}</div>
    </div>
  )
}
