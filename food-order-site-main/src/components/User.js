import { useState } from "react";

const User=(props)=>{

    const[count,setcount]=useState(0);
    return(
        <div className="user-card">
            <h2>Name : {props.name}</h2>
            <h2>location : {props.location}</h2>
            <h2>{count}</h2>
            <button onClick={()=>{setcount(count+1)}}>increase Count</button>
        </div>
    )

}
export default User;