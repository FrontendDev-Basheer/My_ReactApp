
const RestomenuCategory = ({data}) => {
    console.log(data)
       return(
           <div className="category-head">
              <h1 className="caregory-title">{data.title}</h1>
           </div>
        )
   
   };
   export default RestomenuCategory;