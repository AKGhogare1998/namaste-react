import { useEffect, useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";

export const HeaderComponent = () =>{
    const [btnName,setBtnName] = useState("Login");
    console.log("header component")

    useEffect(()=>{
        console.log("use effect header called")
    },[])

    return <div className="header">
        <div className="logo">
            <img className="logoImg" src={LOGO_URL} ></img>
           </div>
        <div className="nav-items">
           <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About US</Link></li>
            <li><Link to="contact">Contact US</Link></li>
            <li><Link to="grocery">Grocery</Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>        
           </ul>
        </div>
    </div>
}

export default HeaderComponent;