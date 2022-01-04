import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";
import Info from "../components/information/Info"

export default props => 
    <Routes>
        <Route exact path="/" element={<Home/>}> </Route>
        <Route path="/users" element={<UserCrud/>}> </Route>
        <Route path="/info" element={<Info/>}> </Route>
        <Route path="*" element={<Home/>}> </Route>
    </Routes>