import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddData from "./AddData";
import AllData from './AllData';
import UpdateData from "./UpdateData";
import Layout from "./Layout";
 
// Check README.md

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllData/>}/> 
        <Route path="/add-data" element={<AddData />} /> 
        <Route path="/update-data/:id" element={<UpdateData />} /> 
      </Routes>
    </Layout>
  );
}
export default App;