const FoodComp = (foodsec) => {
    console.log(foodsec);
    return(
        <div className="scroll-menu">
            <div className="card1">
            <div className="card-body1">              
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360 " + foodsec.newFood.imageId } alt="food"></img>
                {/* <h5 className="card-title">{foodsec.newFood.action.text}</h5> */}
                
            </div>
            </div>
        </div>
        
    )
};
export default FoodComp;