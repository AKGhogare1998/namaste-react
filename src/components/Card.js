const CardComponent = (props) =>{
    const {name,cuisine,time,rating,src} = props?.resInfo;
    return <div className="m-4 p-4 rounded-xl bg-yellow-200 hover:shadow-xl hover:bg-sky-200">
        <div className="res-img">
            <img className="w-40 h-40" src={src}></img>
        </div>
        <div className="bold text-lg">{name}</div>
        <div className="bold">{cuisine}</div>
        <div className="bold">{time}</div>
        <div className="bold">{rating} star</div>
    </div>
}

//Higher order components

//input is card and output will be promoted card

export const withPromotedLabel = (CardComponent) =>{
    return (props) =>{
        return (
            <div>
                <div className="absolute bg-black rounded-lg text-white p-1">Promoted</div>
                <CardComponent {...props}/>
            </div>
        );
    }
}

export default CardComponent;