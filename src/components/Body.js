import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listofres, setListOfRes] = useState([]);
    const [textvalue,setTextValue]=useState("");
    const[filteredList,setfilteredList]=useState([]);

    console.log("body component rendered");

    useEffect(() => {
        console.log("first useeffect calling fetchdata to display the data received from the api ");
        fetchData();
    }, []);

    useEffect(()=>{
        console.log("useeffect called after updating the textvalue");
        console.log(textvalue);
        console.log("*");
        const filteredList=listofres.filter((res)=>res.info.name.toLowerCase().includes(textvalue.toLowerCase()));
    setfilteredList(filteredList);
            },[textvalue]);


    // useEffect(() => {
    //     if (textvalue !== "") {
    //         console.log("useeffect called after updating the textvalue");
    //         console.log(textvalue);
    //         console.log("*");
    
    //         const filteredList = listofres.filter((res) =>
    //             res.info.name.toLowerCase().includes(textvalue.toLowerCase())
    //         );
    //         setfilteredList(filteredList);
    //     }
    // }, [textvalue]);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3139757&lng=78.5156793&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            // console.log(json);
            
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            console.log("updated fetched data");
            setListOfRes(restaurants);
            setfilteredList(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
            setListOfRes([]);  // Set to empty array in case of error
        }
    };

    // if ( listofres.length === 0) {
    //     return <h1>Loading...</h1>;
    // }

    return  listofres.length === 0 ? (<Shimmer/>):(
        <div className="body-container">

            <div className="filter-box">
              
          <div className="text-input">
            <input type="text" placeholder="enter restaurant name..." value={textvalue} onChange={(e)=>{
              setTextValue(e.target.value);
              console.log(e.target.value);
              
            }}></input>
            {/* the below code is the filter based on the searchtext and after clicking the search button , 
            Instead i've used this code in the onchange function whenever we are changing the text in the searchbox. */}
            {/* <button onClick={()=>{
             const filteredList= listofres.filter((res)=>res.info.name.toLowerCase().includes(textvalue.toLowerCase()));
              setfilteredList(filteredList);
            }}>search</button>  */}


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
                    <Link to={"/restaurants/"+ restaurant.info.id}> <ResCard key={restaurant.info.id} resdata={restaurant} /> </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
