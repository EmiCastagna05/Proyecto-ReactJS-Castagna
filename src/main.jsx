import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/styles.scss'
import './Components/Firebase/config.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
