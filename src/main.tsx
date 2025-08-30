import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import JumpButton from './components/JumpButton.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Home />
    <JumpButton />
  </StrictMode>,
)
