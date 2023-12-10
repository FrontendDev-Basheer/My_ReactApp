import React from "react";
import ReactDOM from "react-dom/client";


// // const element = React.createElement("h1",{id:"myheading"},"Welcome to Website");
// const name = "Basheer"
// const element = (<h1>My Name is : { name }</h1>);
// const getElement = ReactDOM.createRoot(document.getElementById("root"));
// getElement.render(element);
// //Create Table
// const createtable = (<table  id="newtable" border="1">
//                     <tr>
//                         <th>One</th>
//                         <th>Two</th>
//                         <th>Three</th>
//                     </tr>
//                     <tr>
//                         <td>1</td>
//                         <td>2</td>
//                         <td>3</td>
//                     </tr>
//                 </table>);
// const getTable = ReactDOM.createRoot(document.getElementById("content"));
// getTable.render(createtable);

// const heading = (
//     <h1>My heading</h1>
// )
// const getroot = ReactDOM.createRoot(document.getElementById("root"))
// getroot.render(heading);

//Header Component
const MysiteHeader = () => {
    return(
    <div class="site-header">
        <nav className="navbar navbar-expand bg-warning">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#">logo</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Cart Value</a></li>
            </ul>
        </nav>
    </div>
    )
};

//Body Component
const MysiteBody = () => {
    return(
        <div className="site-body">
            <input type="search" name="" id=""></input>
        </div>
    )
};

//Footer Component
const MysiteFooter = () => {
    return(
        <div className="site-footer">
            <nav className="navbar navbar-expand bg-warning">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Cart Value</a></li>
                 </ul>
            </nav>
        </div>
    )
};

//App Component

const AppComponent = () => {
    return(
        <div className="app">
            <MysiteHeader></MysiteHeader>
            <MysiteBody></MysiteBody>
            <MysiteFooter></MysiteFooter>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent></AppComponent>);