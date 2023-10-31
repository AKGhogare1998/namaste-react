import CardComponent from "./Card";
import ShimmerComponent from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const resInfo =[{
    name: "Abdullah",
    id: "327891",
    cuisine: "Indian",
    rating: "4",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3b07757650e9c4c993d4d11b95b0c1e8"
 },{
    name: "Eagle",
    id: "399557",
    cuisine: "Indian",
    rating: "3",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/idhe5oatspiwd2odxt8w"
},{
    name: "Parvati",
    id: "576808",
    cuisine: "Indian",
    rating: "2",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/69a061b7e0f951cef2b4947946f94ec6"
 },{
    name: "Punjabi",
    id: "622095",
    cuisine: "Indian",
    rating: "4.5",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8f79be1ffba3dec81991b65fcf0ef99b"
 },{
    name: "Khana Khajana",
    id: "382576",
    cuisine: "Indian",
    rating: "4.3",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/idhe5oatspiwd2odxt8w"
}]

const resInfoUpdated =[{
    name: "Abdullah",
    id: "327891",
    cuisine: "Indian",
    rating: "43333",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3b07757650e9c4c993d4d11b95b0c1e8"
 },{
    name: "Eagle",
    id: "399557",
    cuisine: "Indian",
    rating: "33333",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/idhe5oatspiwd2odxt8w"
},{
    name: "Parvati",
    id: "576808",
    cuisine: "Indian",
    rating: "23333",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/69a061b7e0f951cef2b4947946f94ec6"
 },{
    name: "Punjabi",
    id: "622095",
    cuisine: "Indian",
    rating: "4.53333",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8f79be1ffba3dec81991b65fcf0ef99b"
 },{
    name: "Khana Khajana",
    id: "382576",
    cuisine: "Indian",
    rating: "4.33333",
    time: "39min",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/idhe5oatspiwd2odxt8w"
}]

const BodyComponent = () =>{
    const [listOfRestaurent,setListOfRestaurent]  = useState([]);
    const [filterListOfRestaurent,setFilterListOfRestaurent]  = useState([]);
    const [searchText,setSearchText] = useState([]);
    console.log("body component")
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5789792&lng=73.9085889&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const json = await data.json();
        // console.log(json)
        setListOfRestaurent(resInfoUpdated);
        setFilterListOfRestaurent(resInfoUpdated)
    }
     

    return <div className="body">
        <div className="search"> 
        <input className="filter-btn" type="text" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
            console.log("text search",e.target.value)
            setFilterListOfRestaurent(resInfo.filter((ele)=>{
                return ele.name.toLowerCase().includes(searchText);
            }));
            }}/>
        <button className="filter-btn" onClick={()=>{
            //filter the restaurent card and update the UI
            setFilterListOfRestaurent(resInfo.filter((ele)=>{
                return ele.name.includes(searchText);
            }))
        }}>Search Button</button>
        <button className="filter-btn" onClick={()=>{
            setListOfRestaurent(resInfo.filter((ele)=>{
                return ele.rating > 4;
            }))
       }}>Top rated restaurent</button>
        </div>
        <div className="bodyContainer">
          {filterListOfRestaurent.map((restaurent) => <Link key={restaurent.id} to={'/menu/'+restaurent.id}><CardComponent  resInfo={restaurent}/></Link>)}
        </div>
    </div>
}

export default BodyComponent;