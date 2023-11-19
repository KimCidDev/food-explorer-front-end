import React from 'react'
import ReactDOM from 'react-dom/client'

import { NewDish } from './pages/NewDish'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <NewDish />
    </ThemeProvider>
  </React.StrictMode>,
)
