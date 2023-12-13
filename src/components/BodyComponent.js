import RestsurantComp from "./RestoComponent";
import FoodComp from "./FoodComponent";
import Foodinmind from "../utill/FoodData";
import Newjsondata from "../utill/RestaurantData";



const MysiteBody = () => {
    return(
        <div className="main-body">
            <div className="input-group mt-3 w-25" >
            <input type="search" name=" " id=" "></input>
            <button type="submit" className="btn btn-dark">Search</button>
            </div>        
            <h3 className="highlight-heading">What's On Your Mind? </h3>

            <div className="food-section">
                {/* <RestsurantComp propsData = {Newjsondata[0]}/>
                <RestsurantComp propsData = {Newjsondata[1]}/>
                <RestsurantComp propsData = {Newjsondata[2]}/>
                <RestsurantComp propsData = {Newjsondata[2]}/> */}
                {
                    Foodinmind.map(foodsel => <FoodComp newFood = {foodsel}/>)
                }
               
                
            </div> 
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