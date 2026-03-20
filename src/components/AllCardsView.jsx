import { CARDS } from '../data/cards.js'
import Card from './Card.jsx'
import styles from './AllCardsView.module.css'

export default function AllCardsView({ active }) {
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
