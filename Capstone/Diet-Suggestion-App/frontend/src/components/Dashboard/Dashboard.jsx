import React, {useContext, useState} from 'react' 
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LocalDiningSharpIcon from '@mui/icons-material/LocalDiningSharp';
import { Link , Navigate } from "react-router-dom";
import Chart from '../Chart/Chart';
import Headers from '../Header/Headers';
import MyTable from '../Table/Table';
import Paper from '@mui/material/Paper';
import './index.css'

function Dashboard({setToken}) {

  //logout to remove the token
  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    Navigate('/');
  }

  return (
    //sidebar
    <div style={{ display: "flex"}}>
      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1">
            <p className='title' > <LocalDiningSharpIcon /> Diet App</p>
          </MenuItem>

          <MenuItem 
          icon={<GridViewRoundedIcon />}
           component={<Link to="/dashboard" className="link" />}>
            Home
            </MenuItem>

          <MenuItem 
          icon={<MenuRoundedIcon />} 
          component={<Link to="/plans" className="link" />}>
            Plans
          </MenuItem>

          <MenuItem
           icon={<LogoutRoundedIcon />}
           onClick={logout}> 
            Log out
           </MenuItem>

        </Menu>
      </Sidebar>
  
      <div className='container' component={Paper}>

          <Headers/>

          <div className='sub-container'>

            <MyTable></MyTable>

            <span className='span-chart'><Chart /></span>

          </div>
          
      </div>
      
    </div>
  )
}

export default Dashboard