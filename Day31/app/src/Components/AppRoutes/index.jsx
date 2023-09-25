import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Author from "../../Pages/Author";
import Books from "../../Pages/Books"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/author" element={<Author/>}></Route>
      <Route path="/books" element={<Books/>}></Route>
    </Routes>
  );
}
export default AppRoutes;