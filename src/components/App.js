import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Main from "./Main/Main";
import Calendar2 from "./Main/Month/Calendar2";
export default function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/Calendar" element={<Calendar2 />} />
            </Routes>
        </Router>
    )
};