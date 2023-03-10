import './App.css'
import { LoginScreen } from './pages/login'
import { useAuth } from './context'
import { UserMessage } from './pages/user'

function App() {
  const { user } = useAuth?.() || {}

  return <div className="App">{user?.username ? <UserMessage /> : <LoginScreen />}</div>
}

export default App
