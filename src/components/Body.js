import ResCard from "./ResCard";
import { useState, useEffect } from "react";

const Body = () => {
    const [listofres, setListOfRes] = useState([]);
    const [textvalue,setTextValue]=useState("");
    const[filteredList,setfilteredList]=useState([]);

    useEffect(() => {
        console.log("callback function called after rendering body");
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3139757&lng=78.5156793&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json);
            
            const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setListOfRes(restaurants);
            setfilteredList(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
            setListOfRes([]);  // Set to empty array in case of error
        }
    };

    console.log("body rendered");

    // if ( listofres.length === 0) {
    //     return <h1>Loading...</h1>;
    // }

    return  listofres.length === 0 ? (<h1>Loading...</h1>):(
        <div className="body-container">

            <div className="filter-box">
              
          <div className="text-input">
            <input type="text" value={textvalue} onChange={(e)=>{
              setTextValue(e.target.value);
            }}></input>
            <button onClick={()=>{
             const filteredList= listofres.filter((res)=>res.info.name.toLowerCase().includes(textvalue.toLowerCase()));
              setfilteredList(filteredList);
            }}>search</button> 


          </div>
          <button className="filter-btn" onClick={() => {
                    setfilteredList(listofres);
                }}>
                    All restaurants
                </button>

                <button className="filter-btn" onClick={() => {
                    const newlist = listofres.filter((item) => item.info.avgRating > 4);
                    console.log(newlist);
                    setfilteredList(newlist);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredList.map((restaurant) => (
                    <ResCard key={restaurant.info.id} resdata={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
