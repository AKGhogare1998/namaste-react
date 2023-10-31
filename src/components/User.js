import { useEffect, useState } from "react";

const UserComponent = (props) =>{
   const [count,setCount] = useState(0);

    return <div className="user-card">
        <h1>count : {count}</h1>
        <h1 className="user-name">Name : { props.name }</h1>
        <h1 className="user-location">location : Pimple saudagar Pune</h1>
        <h1 className="user-email">Email : akshayghogare98@gmail.com</h1>
    </div>
}

export default UserComponent;