import styles from './Header.module.css'

export default function Header({ activeTab, onTabChange }) {
  return (
    <header className={styles.header}>
      <h1>🐍 Chanskort – Ormen</h1>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
          onClick={() => onTabChange('overview')}
        >
          📋 Alla kort
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'interactive' ? styles.active : ''}`}
          onClick={() => onTabChange('interactive')}
        >
          🎴 Dra ett kort
        </button>
      </div>
    </header>
  )
}
