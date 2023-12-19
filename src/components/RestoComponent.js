

const RestsurantComp = (props) => {
    console.log(props);
    return(
        <div className="scroll-menu">
            <div className="card">
            <div className="card-body">              
                <img className="card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.resData.info.cloudinaryImageId} alt="food"></img>
                <h5 className="card-title">{props.resData.info.name}</h5>
                <p className="card-text">Rating : {props.resData.info.avgRatingString}</p>
                <p className="card-text">{props.resData.info.locality}</p>
                <a href="" className="btn btn-primary">Order</a>
            </div>
            </div>
        </div>
        
    )
};
export default RestsurantComp;