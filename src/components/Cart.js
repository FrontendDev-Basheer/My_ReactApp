import { useDispatch, useSelector } from "react-redux";
import Menuitemlist from "./MenuitemlistComponent";
import { Dispatch } from "@reduxjs/toolkit";
import { clearCart } from "../utill/cartSlice";

const Cart = ()=>{
    const dispatch = useDispatch();
    const clearmyCart = () =>{
        dispatch(clearCart());
    }

    const cartitems = useSelector( (store) => store.cart.items) 
    return(
        <div className="cart">
            <h2>Cart</h2>
            {cartitems.length == 0 && <h3>Oops Cart is Empty! Place Your Order..</h3>}
            <button className="btn btn-primary" onClick={clearmyCart}>Clear </button>
            <Menuitemlist items={cartitems}/>
        </div>
    );
};
export default Cart; 