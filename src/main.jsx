import { StrictMode, React } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
    <App />
   
  </StrictMode>,
)

