import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Money from './components/Money/Money'
import DisplayNumber from './components/DisplayNumber/DisplayNumber'
import Number from './components/SelectedNumber/Number'

function App() {

  return (
    <>
      <Header />

      <div className="grid-container">
        <Money />
        <DisplayNumber />
        <Number />
      </div>

    </>
  )
}

export default App
