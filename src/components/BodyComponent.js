import RestsurantComp from "./RestoComponent";
import FoodComp from "./FoodComponent";
import Foodinmind from "../utill/FoodData";
// import Newjsondata from "../utill/RestaurantData";
import { useEffect, useState } from "react";


const MysiteBody = () => {


    const  [Newjsondata,updatedResto] = useState([ ]);

    useEffect ( () =>{
        getSwiggydata();
    },[])

    const getSwiggydata = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6236709&lng=79.4233186&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        jsondata = await data.json();
        const newrestdata = jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        updatedResto(newrestdata);
        
        
    }

    const  [Foodinmind,updatedItem] = useState([]);

    useEffect ( () =>{
        getSwiggyfooddata();
    },[])

    const getSwiggyfooddata = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6236709&lng=79.4233186&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        jsonitemdata = await data.json();
        const newitemdata = jsonitemdata.data.cards[0].card.card.gridElements.infoWithStyle.info.imageId;
        updatedItem(newitemdata);
        
    }
      
    return(
        <div className="main-body">
            <div className="input-group mt-3 w-25" >
            <input type="search" name=" " id=" "></input>
            <button onClick = { () => {
                filterresto = Newjsondata.filter (
                    (resto) => resto.info.avgRating >= 4 
                );
                console.log(filterresto); 
                updatedResto(filterresto); 
            } }
            name ="Rating" className="btn btn-warning">Rating 4+</button>
            </div>        
            
            <h3 className="food-heading">What's On Your Mind</h3>
            <div className="food-section">
               
                 {
                    Foodinmind.map (foodsel => <FoodComp newFood = {foodsel}/>)
                }      
                
            </div>   
            {/* <h3 className="resto-heading">Find Best Restaurant Near You...</h3> */}
            <h3 className="main-heading">Restaurants with online food delivery in Tirupati</h3>
            <div className="resto-section">
                
                {
                    Newjsondata.map(rest => <RestsurantComp resData = {rest}/>)
                }
                
            </div>    
        </div>
        
    )
};

export default MysiteBody;