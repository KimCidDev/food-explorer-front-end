import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './routes'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './hooks/auth'

import theme from './styles/theme'
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
    <GlobalStyles /> 
    <AuthProvider>
    <Routes />
    </AuthProvider>
    </ThemeProvider>
)
