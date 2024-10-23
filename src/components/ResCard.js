

import { IMG_URL } from "../utils/links";

 const ResCard=(props)=>{
    const {resdata}=props; 
   // console.log(props);
       return (
           <div className="card w-52 bg-orange-100 rounded-xl hover:bg-orange-300">
               <img className="resimg w-52 p-3" src={IMG_URL+resdata.info.cloudinaryImageId}></img>
               <div className="card-details p-3">
               <h4 className="font-bold">{resdata.info.name}</h4>
               <h4>{resdata.info.cuisines.join(" , ")}</h4>
               <h4>{resdata.info.avgRating}</h4>
               </div>
           </div>
       )
   };

   export default ResCard;
