import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import profileImg from './public/profile.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <link rel="icon" type="image/png" href={profileImg} />
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
