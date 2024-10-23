import { LOGO_URL } from "../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header=()=>{
    const onlineStatus=useOnlineStatus();

    const[btnName,setbtnName]=useState("login");
    // let btnName="login";
    return(
        <div className="flex justify-between items-center justify-center bg-gray-300">
            <div className="logo-box ">
                    <img className="logo w-44" src={LOGO_URL}></img>
            </div>
            <div className="nav-items text-2xl p-3 flex justify-between gap-10 font-medium justify-center align-middle">
                <h3>Online status :{onlineStatus?"🟢":"🔴"}</h3>
                <h3 className=" text-gray-900 hover:text-gray-400"><Link to="/">Home</Link></h3>
                <h3 className=" text-gray-900 hover:text-gray-400"><Link to="/about">About us</Link></h3>
                <h3 className=" text-gray-900 hover:text-gray-400"><Link to="/contact">Contact us</Link></h3>
                <h3 className=" text-gray-900 hover:text-gray-400"><Link to="/grocery">Grocery</Link></h3>
                <h3 className=" text-gray-900 hover:text-gray-400">Cart</h3>
                <button className="login-btn border-2 border-slate-200 p-2 rounded-sm align-middle" onClick={()=>{
                    // btnName="logout";
                    btnName=="login"?setbtnName("logout"):setbtnName("login");
                    console.log(btnName);
                }}>{btnName}</button>
            </div>
        </div>
    )
};
export default Header;