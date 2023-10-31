import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignUp } from './Pages/SignUp'
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <SignUp />
  </React.StrictMode>,
)
