import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RestomrenuCategory from "./RestomenuCategory";
const Restomenu = () => {
    const [restomenuInfo, SetrestomenuInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);

    useEffect(()=>{
        fetchMenu();
    });

    const fetchMenu = async() => {
        const RestomenuData = await axios.get ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.6287557&lng=79.4191795&restaurantId="+resId);
        // const menuDatajson = await RestomenuData.json();
        SetrestomenuInfo(RestomenuData.data);
        console.log(RestomenuData.data);
        const itemcardslist = RestomenuData.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
        console.log(itemcardslist);
       

    } 
    
    //const {name,locality} = restomenuInfo?.data?.cards[0]?.card?.card?.info;
    return (
        <div className="restomenubar">
            <h2 className="restoname">{restomenuInfo?.data?.cards[0]?.card?.card?.info.name}</h2>
            <h2 className="restoname">{restomenuInfo?.data?.cards[0]?.card?.card?.info.locality}</h2>
            <h3 className="restoname">{restomenuInfo?.data?.cards[0]?.card?.card?.info.aggregatedDiscountInfo.header}</h3>
            <h3 className="restoname">{restomenuInfo?.data?.cards[0]?.card?.card?.info.sla.deliveryTime} mins</h3>
   
    <RestomrenuCategory/>
              

        </div>
        
    )
    


    
}
export default Restomenu;