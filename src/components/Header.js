import { useContext, useEffect, useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

export const HeaderComponent = () =>{
    const [btnName,setBtnName] = useState("Login");
    console.log("header component")

    const data = useContext(UserContext);

    useEffect(()=>{
        console.log("use effect header called")
    },[])

    return <div className="flex justify-between mb-5 shadow-md sm:bg-yellow-300">
        <div className="ml-5">
            <img className="w-32" src={LOGO_URL} ></img>
        </div>
        <div className="flex items-center">
           <ul className="flex p-4 m-2">
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="about">About US</Link></li>
            <li className="px-4"><Link to="contact">Contact US</Link></li>
            <li className="px-4"><Link to="grocery">Grocery</Link></li>
            <li className="px-4">Cart</li>
            <li className="px-4 font-bold">{data.loggedInUser}</li>
            <button className="bg-green-100 rounded px-2 border-2" onClick={()=>{
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>        
           </ul>
        </div>
    </div>
}

export default HeaderComponent;