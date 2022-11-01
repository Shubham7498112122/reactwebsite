import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Footer from "./Footer";
import Home from "./Home";
import Nevbar from "./Nevbar";
import Sider from "./Sider";

const App = () => {
    return (<div className="Container">
        <BrowserRouter>
        <Nevbar/>
        <Sider/>
        <Footer/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
}
export default App;