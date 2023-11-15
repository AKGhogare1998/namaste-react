import UserContext from "../utils/UserContext";
import { useContext } from "react";

const ContactComponent = () =>{
  const data = useContext(UserContext);

  return (<UserContext.Provider value ={ {loggedInUser : "Akshay Ghogare"}}><div>
    <h1>Contact Us</h1>
    <h1> Pune Pimpri chinchwad Location</h1>
    <h1> Looged In user : {data.loggedInUser}</h1>
  </div>
  </UserContext.Provider>)
}

export default ContactComponent;