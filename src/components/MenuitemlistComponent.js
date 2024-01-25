

const Menuitemlist = ( {items} ) =>{
console.log(items);
    return(
        <ul className="menuitems">
            {
            items.map(item =>
                <li className="itemslist">
                    {item?.card?.info.name} - $ {item?.card?.info?.defaultPrice/100}
                    {/* <span><img src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ " + item?.card?.info.imageId}/></span> */}
                    <button className="btn btn-primary">Add to Cart</button>
                    <hr></hr>

                </li>
                )
            }
        </ul>
    );
}
export default Menuitemlist;
