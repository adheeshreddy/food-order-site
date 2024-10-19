import { useState ,useEffect} from "react";

const useRestaurantMenu=(resId)=>{

    const[resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3139757&lng=78.5156793&restaurantId="+resId);
        const json=await data.json();
        setResInfo(json.data);
        console.log(json);
    }
    
    return resInfo;
}
export default useRestaurantMenu;
