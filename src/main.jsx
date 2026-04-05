import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/vitejs/vite/main/packages/vite/src/node/server/public/vite.svg" />
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
