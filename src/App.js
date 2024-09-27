import React from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/Body";
import Header  from "./components/Header";
import { createBrowserRouter ,RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
const App=()=>{
    return(
        <div className="app-list">
        <Header/>
        <Outlet/>
        </div>
    ) 
};

const appRouter=createBrowserRouter(
    
        [{
            path:"/",
            element:<App/>,
            errorElement:<Error/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/restaurants/:resId",
                    element:<RestaurantMenu/>
                }
                ]
        }]
    
)

// const resobj={
//     "info": {
//       "id": "150586",
//       "name": "Accord International",
//       "cloudinaryImageId": "ntcsuou2650qimnkrc3m",
//       "locality": "Parasia Road",
//       "areaName": "Vishnu Nagar",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "North Indian",
//         "South Indian",
//         "Continental",
//         "Beverages"
//       ],
//       "avgRating": 4.3,
//       "parentId": "26828",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "500+",
//       "sla": {
//         "deliveryTime": 55,
//         "lastMileTravel": 14.3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "14.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-08-13 23:30:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "15% OFF",
//         "subHeader": "UPTO ₹45"
//       },
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-94480841-4705-430f-99a4-4e3f3c9fc709"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/accord-international-parasia-road-vishnu-nagar-chhindwara-150586",
//       "text": "RESTAURANT_MENU",
//       "type": "WEBLINK"
//     },
//     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   };
// const resobj2={
//     "info": {
//       "id": "196341",
//       "name": "Rangla Panjab",
//       "cloudinaryImageId": "hxxasn2kf8g9eyi9eonq",
//       "locality": "Shankaracharya Nagar",
//       "areaName": "Prasia Road",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "North Indian",
//         "South Indian",
//         "Chinese",
//         "Beverages",
//         "Fast Food",
//         "Desserts"
//       ],
//       "avgRating": 4.2,
//       "parentId": "166894",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "100+",
//       "sla": {
//         "deliveryTime": 45,
//         "lastMileTravel": 13.6,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "13.6 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-08-13 23:40:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "aggregatedDiscountInfoV2": {
        
//       },
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-94480841-4705-430f-99a4-4e3f3c9fc709"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/rangla-panjab-shankaracharya-nagar-prasia-road-chhindwara-196341",
//       "text": "RESTAURANT_MENU",
//       "type": "WEBLINK"
//     },
//     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   }

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter}/>);






