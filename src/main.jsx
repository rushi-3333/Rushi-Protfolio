import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootEl = document.getElementById('root')
createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Hide loading screen with shine after app has mounted
const loader = document.getElementById('app-loader')
if (loader) {
  requestAnimationFrame(() => {
    loader.classList.add('hidden')
    setTimeout(() => loader.remove(), 450)
  })
}
