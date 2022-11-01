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
                <Route path="/reactwebsite" element={<Home/>}></Route>
                <Route path="reactwebsite/about" element={<About/>}></Route>
                <Route path="reactwebsite/courses" element={<Courses/>}></Route>
                <Route path="reactwebsite/contact" element={<Contact/>}></Route>
                <Route path="*" element={<Tuddos/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
}
export default App;
