import { useState } from 'react'
import Header from './components/Header.tsx'
import AllCardsView from './components/AllCardsView.tsx'
import InteractiveView from './components/InteractiveView.tsx'
import GameBoardView from './components/GameBoardView.tsx'

type Tab = 'overview' | 'interactive' | 'board'

export default function App() {
  const [tab, setTab] = useState<Tab>('overview')

  return (
    <>
      <Header activeTab={tab} onTabChange={setTab} />
      <AllCardsView active={tab === 'overview'} />
      <InteractiveView active={tab === 'interactive'} />
      <GameBoardView active={tab === 'board'} />
    </>
  )
}
