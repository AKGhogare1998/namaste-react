import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import ShimmerComponent from "./Shimmer";
import cardMenuFilterArray from "../utils/cardFilterArray";
import CategoryComponent from "./Category";
import { useState } from "react";

const MenuComponent =  () =>{
    const { resId } = useParams();

    const [showIndex,setShowIndex] = useState(null);
    //All JS operation useState , UseEffect will be done inside useRestaurentMenu hook 
    const menuInfo = useRestaurentMenu(resId);
  console.log("card array",cardMenuFilterArray.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
  const categories = cardMenuFilterArray.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  if(menuInfo === null){return <ShimmerComponent />}
    return <div><div className="flex justify-center  bg-yellow-200 hover:shadow-xl">
        <div className="border-spacing-2">
        <h1 className="text-sm bold">Name of restaurent</h1>
        <h1 className="bold">{menuInfo?.name}</h1>
        <h1 className="font-bold">{menuInfo?.areaName}</h1>
        <h1 className="text-lg">{menuInfo?.city}</h1>
        <h1 className="font-black">{menuInfo?.locality}</h1>
        <h1 className="text-slate-600">{menuInfo?.totalRatings}</h1>
        </div>
        <img className="w-40" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eldyxkh4fkqarj7z38a9" />
    </div>
    <div className="p-3">{
          categories.map((category, index)=>{
            return <CategoryComponent data={category?.card?.card} showItems={index == showIndex && true} 
            setShowIndex ={()=> setShowIndex(index)}/>
          })
        }</div>
    </div>
}

export default MenuComponent; 