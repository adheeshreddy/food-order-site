import { useRouteError } from "react-router-dom";
const Error=()=>{
    const er=useRouteError();
    console.log(er);
    return (
        <div>
            <h1>
                OOps Error page 
            </h1>
            <h2>
                {er.data }
            </h2>
        </div>
    )
}
export default Error;