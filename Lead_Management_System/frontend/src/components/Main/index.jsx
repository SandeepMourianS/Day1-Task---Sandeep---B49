import styles from "./styles.module.css";
import logo from '../../assets/download.jpg'
import { Link , Navigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Chart from "../Chart/Chart";
import Headers from "../Header/Headers";
import Graph from "../Graph/Graph";
 
const Main = () => {

	const handleLogout = () => {
		localStorage.removeItem("token");
	};

	return (
		<div>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Lead Management System</h1>
				{/* <button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button> */}
				<img src={logo} alt="" />
			</nav>
		</div>

		<div style={{ display: "flex"}}>
      <Sidebar className="app">
        <Menu>

          <MenuItem 
          icon={<GridViewRoundedIcon />}
		  component={<Link to="/main" className="link" />}>
            Dashboard
            </MenuItem>

			<MenuItem 
          icon={<GridViewRoundedIcon />} 
		  component={<Link to="/my-leeds" className="link" />}>
            My Leads
            </MenuItem>

			{/* <MenuItem 
          icon={<GridViewRoundedIcon />}
		  component={<Link to="/profile" className="link" />}
		  >
            Profile
            </MenuItem> */}

		  <MenuItem
		  icon={<LogoutRoundedIcon />}
		  component={<Link to="/" className="link" />}
		  onClick={handleLogout}
		  >
			Logout
		  </MenuItem>

        </Menu>
      </Sidebar>

	  <div className="box">
		<h1>Dashboard</h1>
		<Headers></Headers>
		<Chart></Chart>
	  <Graph></Graph>
	  </div>
    </div>


		</div>

	);
};

export default Main;
