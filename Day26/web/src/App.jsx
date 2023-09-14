import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route , Link } from  'react-router-dom'
import { DataScience } from './DataScience'
import { CyberSecurity } from './CyberSecurity'
import { Career } from './Career'
import { FullStack } from './FullStack'
import { All } from './All'


function App() {

  return (
    <>
    <center>
    <div>
      <img src="./src/assets/home.png" alt="" />
    </div>
      <Router>
        <div className='container'>
          <nav>
            <span><Link to='/' className='link'> All Course</Link></span>
            <span><Link to='/Full-Stack-Development' className='link'> Full Stack Development</Link> </span>
            <span><Link to='/Data-Science' className='link'> Data Science</Link></span>
            <span><Link to='/Cyber-Security' className='link'> Cyber Security</Link></span>
            <span><Link to='/Career' className='link'> Career </Link></span>
          </nav>
        </div>
        <Routes>
          <Route path='/' exact Component={All} ></Route>
          <Route path='/Full-Stack-Development' Component={FullStack}></Route>
          <Route path='/Data-Science' Component={DataScience}></Route>
          <Route path='/Cyber-Security' Component={CyberSecurity}></Route>
          <Route path='/Career' Component={Career}></Route>
        </Routes>
      </Router>
      </center>
    </>
  )
}

export default App