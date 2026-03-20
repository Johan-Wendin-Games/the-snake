import { useState } from 'react'
import Header from './components/Header.jsx'
import AllCardsView from './components/AllCardsView.jsx'
import InteractiveView from './components/InteractiveView.jsx'

export default function App() {
  const [tab, setTab] = useState('overview')

  return (
    <>
      <Header activeTab={tab} onTabChange={setTab} />
      <AllCardsView active={tab === 'overview'} />
      <InteractiveView active={tab === 'interactive'} />
    </>
  )
}
