import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card />    
    </>
  )
}

export default App
