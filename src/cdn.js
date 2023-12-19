import React from "react";
import ReactDOM from "react-dom/client";
import MysiteHeader from "./components/HeaderComponent";
import MysiteBody from "./components/BodyComponent";


// // const element = React.createElement("h1",{id:"myheading"},"Welcome to Website");
// const name = "Basheer"
// const element = (<h1>My Name is : { name }</h1>);
// const getElement = ReactDOM.createRoot(document.getElementById("root"));
// getElement.render(element);
// //Create Table
// const createtable = (<table  id="newtable" border="1">
//                     <tr>
//                         <th>One</th>
//                         <th>Two</th>
//                         <th>Three</th>
//                     </tr>
//                     <tr>
//                         <td>1</td>
//                         <td>2</td>
//                         <td>3</td>
//                     </tr>
//                 </table>);
// const getTable = ReactDOM.createRoot(document.getElementById("content"));
// getTable.render(createtable);

// const heading = (
//     <h1>My heading</h1>
// )
// const getroot = ReactDOM.createRoot(document.getElementById("root"))
// getroot.render(heading);

//Header Component

// const Foodinmind = [
//     {
//         "id": "750592",
//         "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/83649?collection_id=83649&searchQuery=biryani&tags=layout_CCS_Biryani&type=rcv2",
//             "text": "Biryani",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurants curated for biryani",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&searchQuery=biryani",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750584",
//         "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
//             "text": "South Indian",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurants curated for south indian",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750580",
//         "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
//             "text": "pizzas",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurants curated for pizza",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "762797",
//         "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
//             "text": "Burgers",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurants curated for burger",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750588",
//         "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
//             "text": "Chinese",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurant curated for chinese",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "749874",
//         "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
//             "text": "Cakes",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurant curated for cakes",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750582",
//         "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
//             "text": "North Indian",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurants curated for north indian",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750597",
//         "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
//             "text": "Ice Cream",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurants curated for icecream",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750572",
//         "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
//             "text": "Pure Veg",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurants curated for veg",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750223",
//         "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
//             "text": "Rolls",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurants curated for roll",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750239",
//         "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
//             "text": "Shake",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurant curated for shakes",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750111",
//         "imageId": "v1675667630/PC_Creative%20refresh/Desserts_2.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/83662?collection_id=83662&tags=layout_CCS_Desserts&type=rcv2",
//             "text": "Dessert",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurant curated for dessert",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=83662&tags=layout_CCS_Desserts",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750205",
//         "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/80478?collection_id=80478&tags=layout_BAU_Contextual%2Cparotta&type=rcv2",
//             "text": "Parotta",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurant curated for parotta",
//             "altTextCta": "open"
//         },
//         "entityId": "80478",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750644",
//         "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
//             "text": "Idli",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurants curated for idly",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750636",
//         "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
//             "text": "Kebabs",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurant curated for kebabs",
//             "altTextCta": "open"
//         },
//         "entityId": "80452",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "749826",
//         "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Bath.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/80356?collection_id=80356&tags=layout_BAU_Contextual%2Cbath%2Clayout_ux4&type=rcv2",
//             "text": "Bath",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurant curated for bath",
//             "altTextCta": "open"
//         },
//         "entityId": "80356",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750209",
//         "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
//             "text": "Pastry",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurant curated for Pastry",
//             "altTextCta": "open"
//         },
//         "entityId": "80358",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "749774",
//         "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
//             "text": "Noodles",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurant curated for noodles",
//             "altTextCta": "open"
//         },
//         "entityId": "80464",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750132",
//         "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
//             "text": "Dosa",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurants curated for dosa",
//             "altTextCta": "open"
//         },
//         "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
//         "frequencyCapping": {}
//     },
//     {
//         "id": "750203",
//         "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
//         "action": {
//             "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
//             "text": "Paratha",
//             "type": "WEBLINK"
//         },
//         "entityType": "BANNER",
//         "accessibility": {
//             "altText": "restaurants curated for paratha",
//             "altTextCta": "open"
//         },
//         "entityId": "80476",
//         "frequencyCapping": {}
//     }
// ]

// const  Newjsondata = [
//     {
//         "info": {
//             "id": "108117",
//             "name": "Lasa Food Court",
//             "cloudinaryImageId": "4ef4b80b691438b93313eea82e12d55c",
//             "locality": "Tiruchinoor Road",
//             "areaName": "Padmavathi Nagar",
//             "costForTwo": "₹250 for two",
//             "cuisines": [
//                 "Biryani",
//                 "North Indian",
//                 "Chinese",
//                 "Hyderabadi",
//                 "Tandoor"
//             ],
//             "avgRating": 3.8,
//             "feeDetails": {
//                 "restaurantId": "108117",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2900
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2900
//             },
//             "parentId": "6911",
//             "avgRatingString": "3.8",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 26,
//                 "lastMileTravel": 2.8,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "26 mins",
//                 "lastMileTravelString": "2.8 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 23:30:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹125 OFF",
//                 "subHeader": "ABOVE ₹249",
//                 "discountTag": "FLAT DEAL"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/lasa-food-court-tiruchinoor-road-padmavathi-nagar-tirupati-108117",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "80056",
//             "name": "Spicy Paradise",
//             "cloudinaryImageId": "bih4aepjk30kblfkynox",
//             "locality": "Tata Nagar",
//             "areaName": "Bus Stand Road",
//             "costForTwo": "₹300 for two",
//             "cuisines": [
//                 "Biryani",
//                 "North Indian",
//                 "Chinese",
//                 "Hyderabadi",
//                 "Tandoor",
//                 "Ice Cream"
//             ],
//             "avgRating": 3.7,
//             "feeDetails": {
//                 "restaurantId": "80056",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2900
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2900
//             },
//             "parentId": "13072",
//             "avgRatingString": "3.7",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 17,
//                 "lastMileTravel": 0.6,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "17 mins",
//                 "lastMileTravelString": "0.6 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 23:30:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹125 OFF",
//                 "subHeader": "ABOVE ₹249",
//                 "discountTag": "FLAT DEAL"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/spicy-paradise-tata-nagar-bus-stand-road-tirupati-80056",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "80107",
//             "name": "Di Table 9",
//             "cloudinaryImageId": "y7bpsdht2ngjp9ihon0d",
//             "locality": "Korramenugunta",
//             "areaName": "Near Bustand",
//             "costForTwo": "₹380 for two",
//             "cuisines": [
//                 "Biryani",
//                 "Chinese",
//                 "South Indian"
//             ],
//             "avgRating": 3.9,
//             "feeDetails": {
//                 "restaurantId": "80107",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2900
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2900
//             },
//             "parentId": "353708",
//             "avgRatingString": "3.9",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 24,
//                 "lastMileTravel": 0.9,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "24 mins",
//                 "lastMileTravelString": "0.9 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-12 00:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹125 OFF",
//                 "subHeader": "ABOVE ₹249",
//                 "discountTag": "FLAT DEAL"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/di-table-9-korramenugunta-near-bustand-tirupati-80107",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "80072",
//             "name": "Deforest Restaurant",
//             "cloudinaryImageId": "mhy34atov6etknpijkiu",
//             "locality": "Mr Pally",
//             "areaName": "Sri Padmavati Mahila Visvavidyalayam",
//             "costForTwo": "₹300 for two",
//             "cuisines": [
//                 "Biryani",
//                 "North Indian",
//                 "Chinese",
//                 "Hyderabadi",
//                 "Tandoor"
//             ],
//             "avgRating": 3.7,
//             "feeDetails": {
//                 "restaurantId": "80072",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2900
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2900
//             },
//             "parentId": "14044",
//             "avgRatingString": "3.7",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 20,
//                 "lastMileTravel": 2.1,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "20 mins",
//                 "lastMileTravelString": "2.1 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 22:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "60% OFF",
//                 "subHeader": "UPTO ₹120"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/deforest-restaurant-mr-pally-sri-padmavati-mahila-visvavidyalayam-tirupati-80072",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "546856",
//             "name": "The Paradise",
//             "cloudinaryImageId": "wqt6legkr51c4lpwxmyw",
//             "locality": "Bairagi Patteda",
//             "areaName": "Bairagipatteda",
//             "costForTwo": "₹300 for two",
//             "cuisines": [
//                 "Biryani",
//                 "North Indian",
//                 "Chinese",
//                 "Hyderabadi",
//                 "Tandoor",
//                 "Juices"
//             ],
//             "avgRating": 4,
//             "feeDetails": {
//                 "restaurantId": "546856",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2900
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2900
//             },
//             "parentId": "212277",
//             "avgRatingString": "4.0",
//             "totalRatingsString": "5K+",
//             "sla": {
//                 "deliveryTime": 20,
//                 "lastMileTravel": 1.8,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "20 mins",
//                 "lastMileTravelString": "1.8 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 23:55:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹125 OFF",
//                 "subHeader": "ABOVE ₹249",
//                 "discountTag": "FLAT DEAL"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/the-paradise-bairagi-patteda-bairagipatteda-tirupati-546856",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "80062",
//             "name": "Aroma Coffee House",
//             "cloudinaryImageId": "cd4obdc4l2c9rxsde6eh",
//             "locality": "Tirumala Bypass Road",
//             "areaName": "Siva Jyothi Nagar",
//             "costForTwo": "₹200 for two",
//             "cuisines": [
//                 "Continental",
//                 "Biryani",
//                 "Burgers",
//                 "Snacks",
//                 "Desserts"
//             ],
//             "avgRating": 4,
//             "feeDetails": {
//                 "restaurantId": "80062",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2900
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2900
//             },
//             "parentId": "14185",
//             "avgRatingString": "4.0",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 25,
//                 "lastMileTravel": 2.2,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "25 mins",
//                 "lastMileTravelString": "2.2 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 22:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "50% OFF",
//                 "subHeader": "UPTO ₹100"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/aroma-coffee-house-tirumala-bypass-road-siva-jyothi-nagar-tirupati-80062",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "218280",
//             "name": "Sakhi Tiffin's",
//             "cloudinaryImageId": "ndw1xehee8dyt2b4xk54",
//             "locality": "Stv Nagar",
//             "areaName": "Air Bypass Road",
//             "costForTwo": "₹150 for two",
//             "cuisines": [
//                 "South Indian",
//                 "Chinese"
//             ],
//             "avgRating": 3.8,
//             "veg": true,
//             "feeDetails": {
//                 "restaurantId": "218280",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2900
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2900
//             },
//             "parentId": "14055",
//             "avgRatingString": "3.8",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 17,
//                 "lastMileTravel": 1.4,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "17 mins",
//                 "lastMileTravelString": "1.4 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 22:30:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                         "description": "pureveg"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "pureveg",
//                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹125 OFF",
//                 "subHeader": "ABOVE ₹249",
//                 "discountTag": "FLAT DEAL"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/sakhi-tiffins-stv-nagar-air-bypass-road-tirupati-218280",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "103878",
//             "name": "Mom's Kitchen",
//             "cloudinaryImageId": "jhyl0seykrwchfgml988",
//             "locality": "Lb Nagar",
//             "areaName": "Mahila University Road",
//             "costForTwo": "₹200 for two",
//             "cuisines": [
//                 "Biryani",
//                 "North Indian",
//                 "Chinese",
//                 "Desserts",
//                 "Juices"
//             ],
//             "avgRating": 3.7,
//             "feeDetails": {
//                 "restaurantId": "103878",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2900
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2900
//             },
//             "parentId": "2594",
//             "avgRatingString": "3.7",
//             "totalRatingsString": "5K+",
//             "sla": {
//                 "deliveryTime": 27,
//                 "lastMileTravel": 2.3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "27 mins",
//                 "lastMileTravelString": "2.3 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 23:45:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "60% OFF",
//                 "subHeader": "UPTO ₹120"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/moms-kitchen-lb-nagar-mahila-university-road-tirupati-103878",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "80775",
//             "name": "Pulse",
//             "cloudinaryImageId": "mnyzdoe14wskbrknamyu",
//             "locality": "Bairagi patteda",
//             "areaName": "AIR By Pass Road",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Biryani",
//                 "Chinese",
//                 "North Indian",
//                 "Kebabs",
//                 "Tandoor",
//                 "South Indian",
//                 "Indian",
//                 "Seafood",
//                 "Mughlai",
//                 "Hyderabadi",
//                 "Grill"
//             ],
//             "avgRating": 3.9,
//             "feeDetails": {
//                 "restaurantId": "80775",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2800
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2800
//             },
//             "parentId": "6886",
//             "avgRatingString": "3.9",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 23,
//                 "lastMileTravel": 1.4,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "23 mins",
//                 "lastMileTravelString": "1.4 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 22:30:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
//                         "description": "OnlyOnSwiggy"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "OnlyOnSwiggy",
//                                     "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹125 OFF",
//                 "subHeader": "ABOVE ₹249",
//                 "discountTag": "FLAT DEAL"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/pulse-bairagi-patteda-air-by-pass-road-tirupati-80775",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "284366",
//             "name": "8 Quats Cafe",
//             "cloudinaryImageId": "ebkrsfi6ul7727i9rnsk",
//             "locality": "Sri Krishna Nagar",
//             "areaName": "Mahila Univrsity Road",
//             "costForTwo": "₹200 for two",
//             "cuisines": [
//                 "Continental",
//                 "Pizzas",
//                 "Biryani",
//                 "North Indian",
//                 "Chinese",
//                 "Burgers"
//             ],
//             "avgRating": 4,
//             "feeDetails": {
//                 "restaurantId": "284366",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2900
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2900
//             },
//             "parentId": "24194",
//             "avgRatingString": "4.0",
//             "totalRatingsString": "1K+",
//             "sla": {
//                 "deliveryTime": 31,
//                 "lastMileTravel": 2.8,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "31 mins",
//                 "lastMileTravelString": "2.8 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 22:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹125 OFF",
//                 "subHeader": "ABOVE ₹199",
//                 "discountTag": "FLAT DEAL"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/8-quats-cafe-sri-krishna-nagar-mahila-univrsity-road-tirupati-284366",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "417917",
//             "name": "Di Table 9 New",
//             "cloudinaryImageId": "qo7c3w7pyuqp2vhtenny",
//             "locality": "Kapila Teertham Road",
//             "areaName": "Korlagunta",
//             "costForTwo": "₹250 for two",
//             "cuisines": [
//                 "South Indian",
//                 "North Indian",
//                 "Biryani",
//                 "Tandoor",
//                 "Chinese"
//             ],
//             "avgRating": 3.9,
//             "feeDetails": {
//                 "restaurantId": "417917",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2700
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2700
//             },
//             "parentId": "353706",
//             "avgRatingString": "3.9",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 21,
//                 "lastMileTravel": 2,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "21 mins",
//                 "lastMileTravelString": "2.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-12 00:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹125 OFF",
//                 "subHeader": "ABOVE ₹249",
//                 "discountTag": "FLAT DEAL"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/di-table-9-new-kapila-teertham-road-korlagunta-tirupati-417917",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "80143",
//             "name": "Manal Restaurant",
//             "cloudinaryImageId": "zl3arydtzgaelljtgesm",
//             "locality": "Khadi Colony",
//             "areaName": "Kt Road",
//             "costForTwo": "₹250 for two",
//             "cuisines": [
//                 "Biryani",
//                 "North Indian",
//                 "Chinese",
//                 "Hyderabadi",
//                 "Tandoor"
//             ],
//             "avgRating": 3.8,
//             "feeDetails": {
//                 "restaurantId": "80143",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2900
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2900
//             },
//             "parentId": "14176",
//             "avgRatingString": "3.8",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 24,
//                 "lastMileTravel": 2.2,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "24 mins",
//                 "lastMileTravelString": "2.2 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 23:15:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹125 OFF",
//                 "subHeader": "ABOVE ₹249",
//                 "discountTag": "FLAT DEAL"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/manal-restaurant-khadi-colony-kt-road-tirupati-80143",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "338323",
//             "name": "Biryaniwala",
//             "cloudinaryImageId": "vupg5m693e3plrktauqu",
//             "locality": "Laxmipuram Circle",
//             "areaName": "Air Bypass Road",
//             "costForTwo": "₹250 for two",
//             "cuisines": [
//                 "Biryani",
//                 "North Indian",
//                 "Chinese",
//                 "Hyderabadi",
//                 "Tandoor"
//             ],
//             "avgRating": 3.8,
//             "feeDetails": {
//                 "restaurantId": "338323",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2900
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2900
//             },
//             "parentId": "1673",
//             "avgRatingString": "3.8",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 16,
//                 "lastMileTravel": 1.6,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "16 mins",
//                 "lastMileTravelString": "1.6 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 23:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹125 OFF",
//                 "subHeader": "ABOVE ₹249",
//                 "discountTag": "FLAT DEAL"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/biryaniwala-laxmipuram-circle-air-bypass-road-tirupati-338323",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "84467",
//             "name": "KFC",
//             "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
//             "locality": "Vv Mahal Road",
//             "areaName": "Korlagunta",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Burgers",
//                 "Biryani",
//                 "American",
//                 "Snacks",
//                 "Fast Food"
//             ],
//             "avgRating": 4,
//             "feeDetails": {
//                 "restaurantId": "84467",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2800
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2800
//             },
//             "parentId": "547",
//             "avgRatingString": "4.0",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 15,
//                 "lastMileTravel": 1.1,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "15 mins",
//                 "lastMileTravelString": "1.1 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 23:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "20% OFF",
//                 "subHeader": "UPTO ₹50"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/kfc-vv-mahal-road-korlagunta-tirupati-84467",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "131588",
//             "name": "McDonald's",
//             "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
//             "locality": "Stv Nagar",
//             "areaName": "Tirumala",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Burgers",
//                 "Beverages",
//                 "Cafe",
//                 "Desserts"
//             ],
//             "avgRating": 4.1,
//             "feeDetails": {
//                 "restaurantId": "131588",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2800
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2800
//             },
//             "parentId": "630",
//             "avgRatingString": "4.1",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 15,
//                 "lastMileTravel": 1.3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "15 mins",
//                 "lastMileTravelString": "1.3 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-12 01:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "40% OFF",
//                 "subHeader": "UPTO ₹80"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/mcdonalds-stv-nagar-tirumala-tirupati-131588",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "239858",
//             "name": "Domino's Pizza",
//             "cloudinaryImageId": "a97crcgn7lkdvrkgaod8",
//             "locality": "Balaji Colony",
//             "areaName": "Tirumala",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Pizzas",
//                 "Italian",
//                 "Pastas",
//                 "Desserts"
//             ],
//             "avgRating": 4,
//             "feeDetails": {
//                 "restaurantId": "239858",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2700
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2700
//             },
//             "parentId": "2456",
//             "avgRatingString": "4.0",
//             "totalRatingsString": "1K+",
//             "sla": {
//                 "deliveryTime": 25,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "25 mins",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-12 03:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "30% OFF",
//                 "subHeader": "UPTO ₹75"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/dominos-pizza-balaji-colony-tirumala-tirupati-239858",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "356932",
//             "name": "Pizza Hut",
//             "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//             "locality": "STV Nagar",
//             "areaName": "Tirumala",
//             "costForTwo": "₹350 for two",
//             "cuisines": [
//                 "Pizzas"
//             ],
//             "avgRating": 4,
//             "feeDetails": {
//                 "restaurantId": "356932",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2900
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2900
//             },
//             "parentId": "721",
//             "avgRatingString": "4.0",
//             "totalRatingsString": "1K+",
//             "sla": {
//                 "deliveryTime": 21,
//                 "lastMileTravel": 1.1,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "21 mins",
//                 "lastMileTravelString": "1.1 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 23:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "50% OFF",
//                 "subHeader": "UPTO ₹100"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/pizza-hut-stv-nagar-tirumala-tirupati-356932",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "211321",
//             "name": "Faasos - Wraps & Rolls",
//             "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
//             "locality": "Abbanna Colony",
//             "areaName": "Tirumala",
//             "costForTwo": "₹500 for two",
//             "cuisines": [
//                 "Kebabs",
//                 "Fast Food",
//                 "Snacks",
//                 "North Indian",
//                 "American",
//                 "Healthy Food",
//                 "Desserts",
//                 "Beverages"
//             ],
//             "avgRating": 3.9,
//             "feeDetails": {
//                 "restaurantId": "211321",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2700
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2700
//             },
//             "parentId": "21809",
//             "avgRatingString": "3.9",
//             "totalRatingsString": "1K+",
//             "sla": {
//                 "deliveryTime": 28,
//                 "lastMileTravel": 1.6,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "28 mins",
//                 "lastMileTravelString": "1.6 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 23:59:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "60% OFF",
//                 "subHeader": "UPTO ₹120"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-abbanna-colony-tirumala-tirupati-211321",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "211335",
//             "name": "Oven Story Pizza - Standout Toppings",
//             "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
//             "locality": "Abbanna Colony",
//             "areaName": "Tirumala",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Pizzas",
//                 "Pastas",
//                 "Italian",
//                 "Desserts",
//                 "Beverages"
//             ],
//             "avgRating": 3.6,
//             "feeDetails": {
//                 "restaurantId": "211335",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2700
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2700
//             },
//             "parentId": "3534",
//             "avgRatingString": "3.6",
//             "totalRatingsString": "1K+",
//             "sla": {
//                 "deliveryTime": 33,
//                 "lastMileTravel": 1.9,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "33 mins",
//                 "lastMileTravelString": "1.9 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-11 23:59:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "ITEMS",
//                 "subHeader": "AT ₹149"
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-abbanna-colony-tirumala-tirupati-211335",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "401857",
//             "name": "The Belgian Waffle Co.",
//             "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
//             "locality": "Stv Nagar",
//             "areaName": "Tata Nagar",
//             "costForTwo": "₹200 for two",
//             "cuisines": [
//                 "Waffle",
//                 "Desserts",
//                 "Ice Cream",
//                 "Beverages"
//             ],
//             "avgRating": 4.3,
//             "veg": true,
//             "feeDetails": {
//                 "restaurantId": "401857",
//                 "fees": [
//                     {
//                         "name": "BASE_DISTANCE",
//                         "fee": 2700
//                     },
//                     {
//                         "name": "BASE_TIME"
//                     },
//                     {
//                         "name": "ANCILLARY_SURGE_FEE"
//                     }
//                 ],
//                 "totalFee": 2700
//             },
//             "parentId": "2233",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "1K+",
//             "sla": {
//                 "deliveryTime": 26,
//                 "lastMileTravel": 1.8,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "26 mins",
//                 "lastMileTravelString": "1.8 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-12 00:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "loyaltyDiscoverPresentationInfo": {
//                 "logoCtx": {
//                     "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                 },
//                 "freedelMessage": "FREE DELIVERY",
//                 "badgeType": "BADGE_TYPE_ONE_LITE"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-stv-nagar-tata-nagar-tirupati-401857",
//             "type": "WEBLINK"
//         }
//     }
// ]
//restaurent component


//Body Component


//Footer Component
const MysiteFooter = () => {
    return(
        <div className="site-footer">
            <nav className="navbar navbar-expand bg-warning">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Cart Value</a></li>
                 </ul>
            </nav>
        </div>
    )
};

//App Component

const AppComponent = () => {
    return(
        <div className="app">
            <MysiteHeader></MysiteHeader>
            <MysiteBody></MysiteBody>
            <MysiteFooter></MysiteFooter>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent></AppComponent>);