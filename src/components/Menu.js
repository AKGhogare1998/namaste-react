import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MenuComponent =  () =>{
    const [menuInfo,setMenuInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId)
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu = async() =>{
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6297811&lng=73.7997094&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info)
    setMenuInfo(json?.data?.cards[0]?.card?.card?.info);
    }

    return <div>
        <h1>Name of restaurent</h1>
        <h1>{menuInfo?.name}</h1>
        <h1>{menuInfo?.areaName}</h1>
        <h1>{menuInfo?.city}</h1>
        <h1>{menuInfo?.locality}</h1>
        <h1>{menuInfo?.totalRatings}</h1>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eldyxkh4fkqarj7z38a9" />
        <ul>
        <h2>Menu</h2>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Pizza</li>
        </ul>
    </div>
}

export default MenuComponent; 