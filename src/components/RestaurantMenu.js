import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";


const RestaurantMenu=()=>{

    const {resId}=useParams();
    const[itemsinfo , setitemsinfo]=useState(null);

useEffect(()=>{
    fetchMenu();
},[])

const fetchMenu= async ()=>{
    console.log(resId);
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3139757&lng=78.5156793&restaurantId="+resId);
    const json=await data.json();
    setitemsinfo(json.data);
    console.log(json);
}

if(itemsinfo===null){
    return <Shimmer/>
}
const resName = itemsinfo.cards[0].card.card.text;
console.log(resName);
console.log(itemsinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name);
const cardinfo=itemsinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

return(
    <div className="resMenu">
        <h1>{resName}</h1>
        <h3>Menu items in {resName}</h3>
        {/* <li>{res.card?.info?.name}</li> */}
        <ul>
           {cardinfo.map( (re)=>(<li key={re.card?.info?.id}>{re.card?.info?.name}</li>))}

        </ul>

    </div>
)
};

export default RestaurantMenu;