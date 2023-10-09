import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Routes from './Routes/Routes'
import { Copnonets } from './copontents/Components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <App Routes={Routes} Components={Copnonets} />
      </BrowserRouter>
  </React.StrictMode>,
)
