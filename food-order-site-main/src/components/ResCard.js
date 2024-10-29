

import { IMG_URL } from "../utils/links";

 const ResCard=(props)=>{
    const {resdata}=props; 
//    console.log(props);
       return (
           <div className="card relative w-80 items-center rounded-xl  transition-transform duration-400 hover:scale-95">
     {/* <label className="absolute   pt-24 pb-2 pl-5  text-2xl text-gray-200 font-extrabold ">{resdata?.info?.aggregatedDiscountInfoV3?.header + resdata?.info?.aggregatedDiscountInfoV3?.subHeader }</label> */}

               <img className="resimg w-full h-52 p-3 border-t-2 border-x-2 object-cover rounded-3xl " src={IMG_URL+resdata.info.cloudinaryImageId}></img>
               <div className="card-details py-2 px-7">
        {/* <label>{resdata?.info?.aggregatedDiscountInfoV3?.header}</label> */}

               <h4 className="font-bold text-xl">{resdata.info.name}</h4>
               <h4 className="text-xl">{resdata.info.avgRating}</h4>
               <h4 className="text-gray-500 text-xl">{resdata.info.cuisines.join(" , ")}</h4>
               
               </div>
           </div>
       )
   };


// export const ResCardWithTag=(ResCard)=>{

//     return (props)=>{
//         const {resdata}=props;
//         console.log("adasdad");
//         // console.log(resdata);
//         // {console.log(resdata?.info?.aggregatedDiscountInfoV3?.header)}
//       return (
//         <div className="relative transition-transform duration-400 hover:scale-95">
//         {/* <h1>asdasdasd</h1> */}
//         <label className="absolute   pt-44 pb-2 pl-1  text-2xl text-gray-200 font-extrabold z-10">{resdata?.info?.aggregatedDiscountInfoV3?.header + resdata?.info?.aggregatedDiscountInfoV3?.subHeader }</label>
//         <ResCard {...props}/>
//     </div>
//       )
//     }
// }

   export default ResCard;
