const ItemComponent = (props) =>{
    return <div>
    {props.items?.map((item)=>(
     <div key={item.card.info.id} className="flex justify-between border-b-2 p-2 border-gray-500 bg-slate-200">
        <div className="text-black">{item.card.info.name}</div>
        <div>{-- item.card.info.price/100}</div>
        <div>{item.card.info.ratings.aggregatedRating.ratingCount}</div>
        </div>
    ))}
    </div>
}
export default ItemComponent;