import React from 'react'
import {useNavigate} from 'react-router-dom'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import './gender.css'

function Gender() {

    const navigate = useNavigate();

    const handleClick = () =>  {
        navigate('/plan')
    }

  return (
    <center>
    <div className='gcontainer'>
        <h2 className='gtitle'>Choose your gender</h2>
      <div className='gcards'>

         <button className="gcard" onClick={handleClick}>
                <MaleIcon></MaleIcon>
                Male
        </button>

        <button className="gcard" onClick={handleClick}>
                <FemaleIcon/>
                Female
        </button>

      </div>
        
    </div>
    </center>
  )
}

export default Gender