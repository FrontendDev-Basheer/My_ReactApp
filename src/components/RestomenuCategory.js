

const RestomenuCategory = ({catdata}) => {
    console.log(catdata);
    return(
        <div className="category-head">
           <h1 className="caregory-title">{catdata.title}</h1>
        </div>
     )

};
export default RestomenuCategory;