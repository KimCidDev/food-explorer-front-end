import React from 'react'
import ReactDOM from 'react-dom/client'

import { Menu } from './pages/Menu'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Menu />
    </ThemeProvider>
  </React.StrictMode>,
)
