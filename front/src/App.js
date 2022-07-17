import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import {Login} from "./auth/Login"
import TopNavBar from "./components/Navbar";

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <BrowserRouter>
      <TopNavBar/>
      <ToastContainer position="center-top"/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
