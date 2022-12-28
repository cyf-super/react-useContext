import { useState } from 'react'
import './App.css'
import { LoginScreen } from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoginScreen></LoginScreen>
    </div>
  )
}

export default App
