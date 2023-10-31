import React, {useState} from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route , Link , Navigate} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import Login from './components/Login'
import Plan from './components/Plan'
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  const [token, setToken] = useState(localStorage.getItem('token') || '');

  return (
    <Router>
      
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setToken={setToken}></Login>} />
            <Route path="/plan" element={token ? <Plan/> : <Navigate to='/login'></Navigate>} />
            <Route path="/dashboard" element={token ? <Dashboard setToken={setToken}/> : <Navigate to='/login'></Navigate>} />
      </Routes>
      
    </Router>
  )
}

export default App