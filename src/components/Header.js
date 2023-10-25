import {LOGO_URL} from "../utils/constants";

export const HeaderComponent = () =>{
    return <div className="header">
        <div className="logo">
            <img className="logoImg" src={LOGO_URL} ></img>
           </div>
        <div className="nav-items">
           <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Contact US</li>
            <li>Cart</li>            
           </ul>
        </div>
    </div>
}

export default HeaderComponent;