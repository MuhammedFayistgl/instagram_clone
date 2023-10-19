import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import 'rsuite/dist/rsuite.min.css';
import './index.css'
import { Provider } from 'react-redux';
import { Store } from './redux/store.ts';





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>

  </React.StrictMode>,
)
