import { CARDS } from '../data/cards.ts'
import Card from './Card.tsx'
import styles from './AllCardsView.module.css'

interface Props {
  active: boolean
}

export default function AllCardsView({ active }: Props) {
  return (
    <section className={`${styles.section} ${active ? styles.visible : ''}`}>
      <button className={styles.printBtn} onClick={() => window.print()}>
        🖨️ Skriv ut alla kort
      </button>
      <div className={styles.grid}>
        {CARDS.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </section>
  )
}
