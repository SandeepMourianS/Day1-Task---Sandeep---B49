import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MyLeeds from "./components/MyLeeds/MyLeeds";
import Profile from "./components/Profile/Profile";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/" exact element={<Signup />} />
			{user && <Route path="/main"  element={<Main/>} />}
			<Route path="/login"  element={<Login />} />
			{user && <Route path="/my-leeds" element={<MyLeeds/>}/>}
			{user && <Route path="/profile" element={<Profile/>}/>}
		</Routes>

	);
}

export default App;
