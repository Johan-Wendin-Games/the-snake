import { useState, useRef, useCallback } from 'react'
import { type Card, CARDS, shuffle } from '../data/cards.ts'
import styles from './InteractiveView.module.css'

interface Props {
  active: boolean
}

export default function InteractiveView({ active }: Props) {
  const deck = useRef<Card[]>(shuffle([...CARDS]))
  const [remaining, setRemaining] = useState(deck.current.length)
  const [current, setCurrent] = useState<Card | null>(null)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const draw = useCallback(() => {
    const card = deck.current.pop()!
    setRemaining(deck.current.length)
    setCurrent(card)
    setIsFlipped(false)
    setTimeout(() => setIsFlipped(true), 300)
  }, [])

  const handleDraw = useCallback(() => {
    if (deck.current.length > 0) draw()
  }, [draw])

  const handleNext = useCallback(() => {
    if (deck.current.length === 0) {
      setIsDone(true)
      setCurrent(null)
      return
    }
    setIsFlipped(false)
    setTimeout(draw, 400)
  }, [draw])

  const handleReset = useCallback(() => {
    deck.current = shuffle([...CARDS])
    setRemaining(deck.current.length)
    setCurrent(null)
    setIsFlipped(false)
    setIsDone(false)
  }, [])

  const counterText = isDone
    ? '🎉 Alla kort är dragna! Blanda om för att börja om.'
    : remaining === 0
    ? '🎉 Alla kort är dragna!'
    : `${remaining} kort kvar i högen`

  const showPile = current === null && !isDone

  return (
    <div className={`${styles.interactive} ${active ? styles.visible : ''}`}>
      <div className={styles.counter}>{counterText}</div>

      {showPile && (
        <>
          <div className={styles.pileArea} onClick={handleDraw}>
            <div className={styles.pileShadow} />
            <div className={styles.pileShadow} />
            <div className={styles.pileShadow} />
            <div className={styles.pileTop}>
              <div className={styles.backEmoji}>🐍</div>
              <div className={styles.backLabel}>Dra ett kort!</div>
            </div>
          </div>
          <div className={styles.tapHint}>👆 Tryck på högen</div>
        </>
      )}

      {current && (
        <div className={styles.revealArea}>
          <div className={`${styles.flipper} ${isFlipped ? styles.flipped : ''}`}>
            <div className={`${styles.face} ${styles.front}`}>
              <div className={styles.backEmoji}>🐍</div>
              <div className={styles.backLabel}>Chanskort</div>
            </div>
            <div
              className={`${styles.face} ${styles.back}`}
              style={{ background: current.color }}
            >
              <div className={styles.rEmoji}>{current.emoji}</div>
              <div className={styles.rLabel}>{current.label}</div>
              <div className={styles.rText}>
                <current.Content />
              </div>
            </div>
          </div>
        </div>
      )}

      {current && isFlipped && (
        <div className={styles.btnRow}>
          <button className={`${styles.btn} ${styles.primary}`} onClick={handleNext}>
            🎴 Nästa kort
          </button>
          <button className={`${styles.btn} ${styles.secondary}`} onClick={handleReset}>
            🔄 Blanda om
          </button>
        </div>
      )}

      {isDone && (
        <div className={styles.btnRow}>
          <button className={`${styles.btn} ${styles.primary}`} onClick={handleReset}>
            🔄 Blanda om
          </button>
        </div>
      )}
    </div>
  )
}
