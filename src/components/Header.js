import { LOGO_URL } from "../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header=()=>{
    const onlineStatus=useOnlineStatus();

    const[btnName,setbtnName]=useState("login");
    const[logincolor,setlogincolor]=useState("green");
    // let btnName="login";
    return(
        <div className=" fixed flex justify-around items-center w-full h-20 bg-gray-50 shadow-lg">
            <div className="logo-box ">
                    <img className="logo w-36 h-20" src={LOGO_URL}></img>
            </div>
            <div className="nav-items text-2xl p-3 flex  gap-10 font-medium justify-center align-middle">
                <h3>Online status :{onlineStatus?"🟢":"🔴"}</h3>
                <h3 className=" text-gray-900 hover:text-orange-400"><Link to="/">Home</Link></h3>
                <h3 className=" text-gray-900 hover:text-orange-400"><Link to="/about">About us</Link></h3>
                <h3 className=" text-gray-900 hover:text-orange-400"><Link to="/contact">Contact us</Link></h3>
                <h3 className=" text-gray-900 hover:text-orange-400"><Link to="/grocery">Grocery</Link></h3>
                <h3 className=" text-gray-900 hover:text-orange-400 cursor-pointer">Cart</h3>
                <button className={`login-btn align-middle text-gray-900 hover:text-${btnName==="login"?"green":"red"}-400`} onClick={()=>{
                    // btnName="logout";
                    btnName=="login"?setbtnName("logout"):setbtnName("login");
                    
                    console.log(btnName);
                }}>{btnName}</button>
            </div>
        </div>
    )
};
export default Header;