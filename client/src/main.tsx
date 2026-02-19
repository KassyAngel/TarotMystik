import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// ✅ FIX PERFORMANCE : On retire StrictMode en production.
// StrictMode double chaque render en développement — sur un vieux Android
// ça peut causer des lags même en build de prod si mal configuré.
// On garde StrictMode uniquement en dev pour le debugging.

if (import.meta.env.DEV) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  // ✅ PROD : Rendu direct, deux fois moins de renders au démarrage
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
  )
}