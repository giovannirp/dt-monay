import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Transactions } from './pages/Transactions';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <Transactions />
    </ThemeProvider>
  )
}

export default App
