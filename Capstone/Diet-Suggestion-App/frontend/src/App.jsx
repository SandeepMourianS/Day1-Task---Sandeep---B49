import React, {useState} from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route , Link , Navigate} from 'react-router-dom'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import Gender from './components/Gender/Gender'
import Login from './components/Login/Login'
import Plan from './components/Plan/Plan'
import Dashboard from './components/Dashboard/Dashboard'
import { ContextProvider } from './components/Context/Context'
import Plan1 from './components/Plan/Plan1'

function App() {

  const [token, setToken] = useState(localStorage.getItem('token') || '');

  return (
    <ContextProvider>
    <Router>
      
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setToken={setToken}></Login>} />
            <Route path="/plan" element={token ? <Plan/> : <Navigate to='/login'></Navigate>} />
            <Route path="/dashboard" element={token ? <Dashboard setToken={setToken}/> : <Navigate to='/login'></Navigate>} />
            <Route path="/gender" element={token ? <Gender setToken={setToken}/> : <Navigate to='/login'></Navigate>} />
            <Route path="/plans" element={token ? <Plan1 setToken={setToken}/> : <Navigate to='/login'></Navigate>} />
      </Routes>
      
    </Router>
    </ContextProvider>
  )
}

export default App