

import { IMG_URL } from "../utils/links";

 const ResCard=(props)=>{
    const {resdata}=props; 
   // console.log(props);
       return (
           <div className="card w-80 items-center rounded-xl transition-transform duration-300 hover:scale-95">
               <img className="resimg w-full h-52 p-3 object-cover rounded-3xl" src={IMG_URL+resdata.info.cloudinaryImageId}></img>
               <div className="card-details px-7">
               <h4 className="font-bold text-xl">{resdata.info.name}</h4>
               <h4 className="text-xl">{resdata.info.avgRating}</h4>
               <h4 className="text-gray-500 text-xl">{resdata.info.cuisines.join(" , ")}</h4>
               
               </div>
           </div>
       )
   };

   export default ResCard;
