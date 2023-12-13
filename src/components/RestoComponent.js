

const RestsurantComp = (props) => {
    console.log(props);
    return(
        <div className="scroll-menu">
            <div className="card">
            <div className="card-body">              
                <img src="https://tse3.mm.bing.net/th?id=OIP.n5kTYovUzLXXmy_FH0XVpgHaE3&pid=Api&P=0&h=180" alt="food"></img>
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