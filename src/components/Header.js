import { LOGO_URL } from "../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header=()=>{
    const onlineStatus=useOnlineStatus();

    const[btnName,setbtnName]=useState("login");
    // let btnName="login";
    return(
        <div className="head-box">
            <div className="logo-box">
                    <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <h3>Online status :{onlineStatus?"🟢":"🔴"}</h3>
                <h3><Link to="/">Home</Link></h3>
                <h3><Link to="/about">About us</Link></h3>
                <h3><Link to="/contact">Contact us</Link></h3>
                <h3><Link to="/grocery">Grocery</Link></h3>
                <h3>Cart</h3>
                <button className="login-btn" onClick={()=>{
                    // btnName="logout";
                    btnName=="login"?setbtnName("logout"):setbtnName("login");
                    console.log(btnName);
                }}>{btnName}</button>
            </div>
        </div>
    )
};
export default Header;