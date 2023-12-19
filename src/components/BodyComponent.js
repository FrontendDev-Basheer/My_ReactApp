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
        const newrestdata = jsondata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
        updatedResto(newrestdata);
    }
    // console.log(Newjsondata);    
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
            <h3 className="highlight-heading">What's On Your Mind? </h3>

            {/* <div className="food-section">
                {/* {/* <RestsurantComp propsData = {Newjsondata[0]}/>
                <RestsurantComp propsData = {Newjsondata[1]}/>
                <RestsurantComp propsData = {Newjsondata[2]}/>
                <RestsurantComp propsData = {Newjsondata[2]}/> */}
                {/* {
                    Foodinmind.map(foodsel => <FoodComp newFood = {foodsel}/>)
                }
                
                
            </div>  */} 
            <h3 className="resto-heading">Find Best Restaurant Near You...</h3>
            <div className="resto-section">
                
                {
                    Newjsondata.map(rest => <RestsurantComp resData = {rest}/>)
                }
                
            </div>    
        </div>
        
    )
};

export default MysiteBody;