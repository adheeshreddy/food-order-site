

import { IMG_URL } from "../utils/links";

 const ResCard=(props)=>{
    const {resdata}=props; 
   // console.log(props);
       return (
           <div className="card">
               <img className="resimg" src={IMG_URL+resdata.info.cloudinaryImageId}></img>
               <div className="card-details">
               <h4>{resdata.info.name}</h4>
               <h4>{resdata.info.cuisines.join(" , ")}</h4>
               <h4>{resdata.info.avgRating}</h4>
               </div>
           </div>
       )
   };

   export default ResCard;
