import React from 'react'
import { useState } from 'react'
import Button from './components/button.jsx'
import './App.css'

const App = () => {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    function reset() {
        setCount(0)
    }
  return (
    <div className="App">    
      <h1>Counter App</h1>
      <p>Welcome to the Counter App!</p>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
      <div className="button-container">
      <Button label="➕Increment" onClick={increment} />
      <Button label="➖Decrement" onClick={decrement} />
      <Button label="🔄Reset" onClick={reset} />
      </div>
    </div>
  )
}

export default App
