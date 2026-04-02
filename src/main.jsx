import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.css'
import './styles/variables.css'
import App from './App.jsx'
import LoadingProvider from './contexts/LoadingProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </StrictMode>,
)