import { useEffect, useState } from "react";

const useRestaurentMenu = (resId) =>{
    //Every JS operation will perform here you need to just return updated data!
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu = async() =>{
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6297811&lng=73.7997094&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info)
    setResInfo(json?.data?.cards[0]?.card?.card?.info)
    }
    return resInfo;
}

export default useRestaurentMenu;