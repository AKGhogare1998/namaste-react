const CardComponent = (props) =>{
    const {name,cuisine,time,rating,src} = props?.resInfo;
    return <div className="res-cards">
        <div className="res-img">
            <img className="res-img-logo" src={src}></img>
        </div>
        <div className="res-name">{name}</div>
        <div className="res-cuisine">{cuisine}</div>
        <div className="res-time">{time}</div>
        <div className="star">{rating} star</div>
    </div>
}

export default CardComponent;