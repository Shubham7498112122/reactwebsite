import React from "react";
import { Link } from "react-router-dom";
import "./Nevbar.css";

const Nevbar=()=>{
    return(<div className="Nevbar card">
        <Link className="card" to="reactwebsite" style={{textDecoration:"none",color:"black"}}>Home</Link>
        <Link className="card" to="reactwebsite/about" style={{textDecoration:"none",color:"black"}}>About</Link>
        <Link className="card" to="reactwebsite/courses" style={{textDecoration:"none",color:"black"}}>Courses</Link>
        <Link className="card" to="reactwebsite/contact" style={{textDecoration:"none",color:"black"}}>Contact</Link>
    </div>)
}
export default Nevbar;
