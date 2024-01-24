import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RestomrenuCategory from "./RestomenuCategory";
const Restomenu = () => {
    const [restomenuInfo, SetrestomenuInfo] = useState(null);
    const {resId} = useParams();
   // console.log(resId);

    useEffect(()=>{
        fetchMenu();
    },[]);
    },[]);

    const fetchMenu = async() => {
        const RestomenuData = await axios.get ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.6287557&lng=79.4191795&restaurantId="+resId);
        // const menuDatajson = await RestomenuData.json();
        SetrestomenuInfo(RestomenuData.data);
        console.log(RestomenuData.data);
       // const itemcardslist = RestomenuData.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
       // console.log(itemcardslist);
       

    } 
    
    const categories = restomenuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(
        (cd) => cd.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    //const {name,locality} = restomenuInfo?.data?.cards[0]?.card?.card?.info;
    return (
        <div className="restomenubar">
            {/* {
                categories.map((category) => (
                    <RestomrenuCategory/>
                ))
            } */}
       <RestomrenuCategory/>
            
        </div>
        
    )
   
}
export default Restomenu;