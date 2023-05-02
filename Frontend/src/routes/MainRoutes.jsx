


import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import Dashboard from "../components/Dashboard";
import Addnotes from '../pages/Addnotes'


import AddNotes from "../pages/Addnotes";

function MainRoutes() {

  return <Routes>
 
    <Route path='/' element={<HomePage/>}/>
     <Route path="/dashboard" element={<Dashboard />} />
    <Route path='/login' element={<LoginPage/>}/>

    <Route path="/notes" element ={<Addnotes/>}/>

    <Route path='/register' element={<Register/>}/>

  </Routes>


}

export default MainRoutes;
