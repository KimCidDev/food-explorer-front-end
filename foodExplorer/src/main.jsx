import React from 'react'
import ReactDOM from 'react-dom/client'

import { FoodInfo } from './pages/FoodInfo'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles /> 
    <FoodInfo />
    </ThemeProvider>
  </React.StrictMode>,
)
