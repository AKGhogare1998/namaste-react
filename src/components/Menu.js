import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import ShimmerComponent from "./Shimmer";

const MenuComponent =  () =>{
    const { resId } = useParams();
    //All JS operation useState , UseEffect will be done inside useRestaurentMenu hook 
    const menuInfo = useRestaurentMenu(resId);
  console.log("menuInfo",menuInfo)
  if(menuInfo === null){return <ShimmerComponent />}
    return <div className="flex-col  bg-yellow-200 hover:shadow-xl">
        <div className="flex">
        <h1 className="text-sm">Name of restaurent</h1>
        <h1>{menuInfo?.name}</h1>
        <h1>{menuInfo?.areaName}</h1>
        <h1 className="text-lg">{menuInfo?.city}</h1>
        <h1 className="font-black">{menuInfo?.locality}</h1>
        <h1 className="text-slate-600">{menuInfo?.totalRatings}</h1>
        </div>
        <img className="w-40" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eldyxkh4fkqarj7z38a9" />
    </div>
}

export default MenuComponent; 