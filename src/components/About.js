import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("parent cpmpoentDidMOunt");
    }
    render(){
        console.log("parent render");
        return(
            <div>
                <h1>this is about us page</h1>
                <h2>welcome to this page</h2>
                {/* <User name={"adheesh func"} location={"hyderabad func"}/> */}
                
                <UserClass />

            </div>
        )
    }
}



// const About=()=>{
//     return(
//         <div>
//             <h1>this is about us page</h1>
//             <h2>welcome to this page</h2>
//             {/* <User name={"adheesh func"} location={"hyderabad func"}/> */}
            
//             <UserClass name={"adheesh class"} location={"hyderabad class"}/>
//         </div>
//     )
// }
export default About;