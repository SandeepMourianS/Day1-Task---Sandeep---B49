import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'


function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');


  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  }

  return (
    <center>
    <Router>
      <div className='App'>
        <div className='logout'>
          {token && <button onClick={logout}>Log out</button>}
        </div>
        <main>
          <Routes>
          <Route path="/" Component={Register}></Route>
          <Route path="/login" element={<Login setToken={setToken}></Login>}></Route>
          <Route path="/home" element={token ? <Home/> : <Navigate to='/login'></Navigate>}></Route>
          </Routes>
        </main>
      </div>
    </Router> 
    </center>
  )
}

export default App