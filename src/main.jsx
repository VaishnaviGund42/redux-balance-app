import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import storeq from './storeq.js'

createRoot(document.getElementById('root')).render(
 <Provider store = {storeq}>
    <App />
  </Provider>,
)
