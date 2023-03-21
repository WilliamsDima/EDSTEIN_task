import React from 'react'
import './App.scss'
import { AppProvider } from './context/appContext'
import Home from './screens/Home'

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}

export default App
