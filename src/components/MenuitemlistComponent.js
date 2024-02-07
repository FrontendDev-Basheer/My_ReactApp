import { useDispatch } from "react-redux";
import { addItem } from "../utill/cartSlice";

const Menuitemlist = ( {items} ) =>{
console.log(items);

    const dispatch = useDispatch();
    const newaddItem = (item) =>{
        dispatch(addItem(item));
    }

    return(
        <ul className="menuitems">
            {
            items.map(item =>
                <li className="itemslist">
                    {item?.card?.info.name} - $ {item?.card?.info?.price/100 }
                    {/* <span><img src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ " + item?.card?.info.imageId}/></span> */}
                    <button className="btn btn-primary" onClick={()=>newaddItem(item)}>Add to Cart</button>
                    <hr></hr>

                </li>
                )
            }
        </ul>
    );
}
export default Menuitemlist;
