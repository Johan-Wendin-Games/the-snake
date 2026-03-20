import { useState } from 'react'
import { CARDS, shuffle } from '../data/cards.ts'
import type { Card } from '../data/cards.ts'
import styles from './GameBoardView.module.css'

const COLS = 8

type SquareType = 'number' | 'star' | 'question'

interface Square {
  index: number
  type: SquareType
}

// Define which squares are stars or question marks (chanskort)
const questionSquares = new Set([1, 6, 10, 15, 20, 24, 29, 34, 38, 40])
const starSquares = new Set([2, 3, 4, 8, 9, 14, 17, 19, 22, 23, 25, 28, 33, 37])

const TOTAL = 40

const squares: Square[] = Array.from({ length: TOTAL }, (_, i) => {
  const num = i + 1
  let type: SquareType = 'number'
  if (questionSquares.has(num)) type = 'question'
  else if (starSquares.has(num)) type = 'star'
  return { index: num, type }
})

// Build rows of 8 with snake direction
function buildRows(): Square[][] {
  const rows: Square[][] = []
  for (let i = 0; i < squares.length; i += COLS) {
    const row = squares.slice(i, i + COLS)
    const rowIndex = Math.floor(i / COLS)
    // Even rows go left-to-right, odd rows go right-to-left (snake pattern)
    if (rowIndex % 2 === 1) row.reverse()
    rows.push(row)
  }
  return rows
}

const rows = buildRows()

interface Props {
  active: boolean
}

export default function GameBoardView({ active }: Props) {
  const [position, setPosition] = useState(0) // 0 = not started
  const [drawnCard, setDrawnCard] = useState<Card | null>(null)
  const [deck, setDeck] = useState(() => shuffle([...CARDS]))
  const [showCard, setShowCard] = useState(false)

  function handleSquareClick(squareIndex: number) {
    setPosition(squareIndex)

    if (questionSquares.has(squareIndex)) {
      // Draw a chanskort
      if (deck.length === 0) {
        setDeck(shuffle([...CARDS]))
      }
      const newDeck = [...deck]
      const card = newDeck.pop()!
      setDeck(newDeck)
      setDrawnCard(card)
      setShowCard(true)
    } else {
      setShowCard(false)
      setDrawnCard(null)
    }
  }

  function handleReset() {
    setPosition(0)
    setDrawnCard(null)
    setShowCard(false)
    setDeck(shuffle([...CARDS]))
  }

  return (
    <section className={styles.wrapper} style={{ display: active ? 'flex' : 'none' }}>
      <div className={styles.board}>
        {/* START label */}
        <div className={styles.startLabel}>START</div>

        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className={styles.row}>
            {row.map((sq) => {
              const isActive = position === sq.index
              const isPast = position > sq.index
              const isGoal = sq.index === TOTAL
              return (
                <button
                  key={sq.index}
                  className={`${styles.square} ${styles[sq.type]} ${isActive ? styles.current : ''} ${isPast ? styles.past : ''} ${isGoal ? styles.goal : ''}`}
                  onClick={() => handleSquareClick(sq.index)}
                  title={`Ruta ${sq.index}`}
                >
                  {sq.type === 'question' && <span className={styles.icon}>?</span>}
                  {sq.type === 'star' && <span className={styles.icon}>&#9733;</span>}
                  {sq.type === 'number' && <span className={styles.num}>{sq.index}</span>}
                  {isGoal && <span className={styles.goalStar}>&#9733;</span>}
                </button>
              )
            })}
          </div>
        ))}

        {/* MÅL label */}
        <div className={styles.goalLabel}>MÅL</div>
      </div>

      <div className={styles.sidebar}>
        <div className={styles.status}>
          {position === 0 && <p>Tryck på en ruta för att flytta pjäsen!</p>}
          {position > 0 && position < TOTAL && (
            <p>Ruta <strong>{position}</strong> av {TOTAL}</p>
          )}
          {position === TOTAL && (
            <p className={styles.done}>🎉 Grattis, du är i mål!</p>
          )}
        </div>

        {showCard && drawnCard && (
          <div className={styles.cardPopup} style={{ background: drawnCard.color }}>
            <div className={styles.cardEmoji}>{drawnCard.emoji}</div>
            <div className={styles.cardLabel}>{drawnCard.label}</div>
            <div className={styles.cardContent}>
              <drawnCard.Content />
            </div>
            <button className={styles.closeBtn} onClick={() => setShowCard(false)}>
              Stäng
            </button>
          </div>
        )}

        <button className={styles.resetBtn} onClick={handleReset}>
          Börja om
        </button>
      </div>
    </section>
  )
}
