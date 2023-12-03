import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Componetns } from './components/Components'
import { RoutesComponetns } from './Routes/Routes'
import { App } from './App'
import './assets/css/index.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App Routes={RoutesComponetns} Components={Componetns}/>
    </BrowserRouter>
  </React.StrictMode>,
)
