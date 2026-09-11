import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { applySiteMetadata } from './lib/seo'

const reportWebVitals = () => {}

/* Sync document metadata from src/data/site.ts (static twins in index.html). */
applySiteMetadata()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

reportWebVitals()