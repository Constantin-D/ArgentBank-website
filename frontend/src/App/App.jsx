import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./../pages/Home/Home";
import Login from "./../pages/Login/Login";
import NotFound from "./../pages/NotFound/NotFound";
import Profile from "./../pages/Profile/Profile";
import { useSelector } from "react-redux";

import "./app.scss";

const App = () => {
    const token = useSelector((state) => state.authentication.token);
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login"/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
