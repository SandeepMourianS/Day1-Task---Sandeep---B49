import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom'
import './App.css'
import All from './All'
import FullStack from './FullStack'
import DataScience from './DataScience'
import Career from './Career'
import CyberSecurity from './CyberSecurity'
import logo from "./assets/Guvi-logo.webp";
import head from "./assets/head.webp";


function App() {

  return (
    <>
        <div className='topic'>
          <span><img className='logo' src={logo} /></span>
          <p><a href="https://www.guvi.in/courses/?current_tab=myCourses">COURSES</a></p>
          <p>LIVE CLASSES</p>
          <p>PRACTICE</p>
          <p>RESOURSES</p>
          <p>OUR PROCUCT</p> 
        </div>
      <div>
        <Router>
          <div className='mid'>
          <img className="head" src={head}/>
          <div className='link'>
          <nav>
            <Link className='all' to="/">ALL</Link>
            <Link className='all' to="/full_stack_development">FULL STACK DEVELOPMENT</Link>
            <Link className='all' to="/data_science">DATA SCIENCE</Link>
            <Link className='all' to="/cyber_security">CYBER SECURITY</Link>
            <Link className='all' to="/career">CAREER</Link>
          </nav>
          </div>
          </div>
          <Routes>
            <Route path="/"  Component={All}/>
            <Route path="/full_stack_development"  Component={FullStack}/>
            <Route path="/data_science"  Component={DataScience}/>
            <Route path="/cyber_security" Component={CyberSecurity}/>
            <Route path="/career"  Component={Career}/>
          </Routes >
        </Router>
      </div>
    </>
  )
}

export default App
