
const RestomrenuCategory = ({data}) => {
 console.log(data)
    return(
        <div className="category-head">
           <h1 className="caregory-title">{data.title} - ({data.itemCards.length})</h1>
        </div>
     )

};
export default RestomrenuCategory;