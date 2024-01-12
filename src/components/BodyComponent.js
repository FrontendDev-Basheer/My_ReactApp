import RestsurantComp from "./RestoComponent";
import WhatsonMind from "./Whatsonmind";
import Onlinefooddel from "./Onlinefooddel"
// import Foodinmind from "../utill/FoodData";
// import Restodata from "../utill/RestaurantData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MysiteBody = () => {

    //What's on your mind
    const [whatsonyourmindData,SetyoumindData] = useState ([]);

    //Top Restaurants Data
    const  [Restodata,SettopResto] = useState([ ]);

    //Resto Online food Delivery
    const [onlinefoodDel,SetonlinefoodDel] = useState ([]);


    useEffect ( () =>{
        getSwiggydata();
    },[])

    const getSwiggydata = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6236709&lng=79.4233186&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        jsondata = await data.json();
        const whatsonmindjson = jsondata.data.cards[0].card.card.gridElements.infoWithStyle.info;
        const allrestdatajson = jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        const onlinedeljson = jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        SetyoumindData(whatsonmindjson);
        SettopResto(allrestdatajson);
        SetonlinefoodDel(onlinedeljson);
        
    }

    

    
      
    return(
        <div className="main-body">
            <div className="input-group mt-3 w-25" >
            <input type="search" name=" " id=" "></input>
            <button onClick = { () => {
                filterresto = Restodata.filter (
                    (resto) => resto.info.avgRating >= 4 
                );
                console.log(filterresto); 
                updatedResto(filterresto); 
            } }
            name ="Rating" className="btn btn-warning">Rating 4+</button>
            </div>        
             {/* //whats on your mind  */}
            <h3 className="food-heading">What's On Your Mind</h3>

            <div className="food-section">
               
                 {
                    whatsonyourmindData.map (foodsel => <WhatsonMind newFood = {foodsel}/>)
                }      
                
            </div>    
            {/* <h3 className="resto-heading">Find Best Restaurant Near You...</h3> */}
            <h3 className="main-heading">Top restaurant chains in Tirupati</h3>
            <div className="resto-section">
                
                {
                    Restodata.map( rest =>
                        <Link to ={"/restomenu/" + rest.info.id}>
                            <RestsurantComp resData = {rest}/>
                        </Link>
                         )
                }
                
            </div>    

            <h3 className="onlinedel-heading">Restaurants with online food delivery in Tirupati</h3>
            <div className="resto-section">
                
                {
                    onlinefoodDel.map(onlinedel => <Onlinefooddel onlinedelData = {onlinedel }/>)
                }
                
            </div> 

            
        </div>
        
    )
};

export default MysiteBody;