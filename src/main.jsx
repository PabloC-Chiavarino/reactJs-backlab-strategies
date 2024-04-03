import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LangProvider } from './context/LangContext.jsx'
import ScrollToTop from './components/ScrollToTop/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ScrollToTop/>
      <LangProvider>
        <App />
      </LangProvider>
  </BrowserRouter>
  )