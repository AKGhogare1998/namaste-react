import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import ShimmerComponent from "./Shimmer";

const MenuComponent =  () =>{
    const { resId } = useParams();
    //All JS operation useState , UseEffect will be done inside useRestaurentMenu hook 
    const menuInfo = useRestaurentMenu(resId);
  console.log("menuInfo",menuInfo)
  if(menuInfo === null){return <ShimmerComponent />}
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