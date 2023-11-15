import { useState } from "react";
import ItemComponent from "./Item";

const CategoryComponent = (props) =>{
    // const [showItems,setShowItems] = useState(false);
     const handleClick = () =>{
    //     console.log("click");
    //     setShowItems(!showItems) 
    props.setShowIndex()
    }
   
 return props?.data?.title ? <div className="pb-5">
    <div className="flex bg-slate-400 cursor-pointer pb-5 shadow-2xl justify-between p-4" onClick={handleClick}>
    <h1>{props?.data?.title}</h1>
    <h1>{props.showItems ? 'Up' : 'Down'}</h1>
    </div>
    {props.showItems && <ItemComponent items={props?.data.itemCards}/>}
 </div> : ''
}

export default CategoryComponent;
