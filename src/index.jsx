import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Routes from './Routes/Routes'
import { Copnonets } from './copontents/Components'
import { store } from './redux/store';
import './assets/css/index.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
          <Provider store={store}>
            <BrowserRouter>
              <App Routes={Routes} Components={Copnonets} />
            </BrowserRouter>
          </Provider>
  </>,
)
