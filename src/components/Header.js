import { LOGO_URL } from "../utils/links";
import { useState } from "react";

export const Header=()=>{

    const[btnName,setbtnName]=useState("login");
    // let btnName="login";
    return(
        <div className="head-box">
            <div className="logo-box">
                    <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <h3>home</h3>
                <h3>About us</h3>
                <h3>Contact us</h3>
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