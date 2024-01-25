import Menuitemlist from "./MenuitemlistComponent";
import { useState } from "react";

const RestomenuCategory = ({data}) => {

   const [showitems,setshowitems] = useState(false);

   const showlistitems = () =>{
      setshowitems(!showitems);
   }

    return(
        <div className="category-head" onClick={showlistitems}>
           <h3 className="caregory-title">{data.title}</h3>
      {showitems && <Menuitemlist items = {data.itemCards}/>}

        </div>
     );

};
export default RestomenuCategory;