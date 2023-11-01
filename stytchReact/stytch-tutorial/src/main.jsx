import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router } from 'react-router-dom'
import {StytchProvider,initStytch} from '@stytch/stytch-react'

const stytch = initStytch("public-token-test-4c173f7f-3fc7-4700-999f-99008c354b28")
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StytchProvider stytch={stytch}>
      <Router>
         <App />
      </Router>
    </StytchProvider>
  </React.StrictMode>,
)
