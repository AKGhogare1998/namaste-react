import CardComponent from "./Card";
import { useState } from "react";

const resInfo =[{
    name: "Abdullah",
    id: "1",
    cuisine: "Indian",
    rating: "4",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3b07757650e9c4c993d4d11b95b0c1e8"
 },{
    name: "Eagle",
    id: "2",
    cuisine: "Indian",
    rating: "3",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/idhe5oatspiwd2odxt8w"
},{
    name: "Parvati",
    id: "3",
    cuisine: "Indian",
    rating: "2",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/69a061b7e0f951cef2b4947946f94ec6"
 },{
    name: "Punjabi",
    id: "4",
    cuisine: "Indian",
    rating: "4.5",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8f79be1ffba3dec81991b65fcf0ef99b"
 },{
    name: "Khana Khajana",
    id: "5",
    cuisine: "Indian",
    rating: "4.3",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/idhe5oatspiwd2odxt8w"
}]

const BodyComponent = () =>{
    const [listOfRestaurent,setListOfRestaurent]  = useState(resInfo);
    console.log(listOfRestaurent)

    return <div className="body">
        <div className="search"> 
        <button className="filter-btn" onClick={()=>{
            setListOfRestaurent(resInfo.filter((ele)=>{
                return ele.rating > 4;
            }))
    }}>Top rated restaurent</button>
        </div>
        <div className="bodyContainer">
          {listOfRestaurent.map((restaurent) => <CardComponent key={restaurent.id} resInfo={restaurent}/>)}
        </div>
    </div>
}

export default BodyComponent;