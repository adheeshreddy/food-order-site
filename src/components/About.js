import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
            <h1>this is about us page</h1>
            <h2>welcome to this page</h2>
            <User name={"adheesh func"} location={"hyderabad func"}/>
            
            <UserClass name={"adheesh class"} location={"hyderabad class"}/>
        </div>
    )
}
export default About;