import React from "react";
import ReactDOM from "react-dom/client";
import MysiteHeader from "./components/HeaderComponent";
import MysiteBody from "./components/BodyComponent";
import MysiteFooter from "./components/FooterComponent";
import Offers from "./components/OfferComponent";
import Help from "./components/HelpComponent";
import Error from "./components/ErrorComponent";
import Restomenu from "./components/RestomenuComponent";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";



//App Component

const AppComponent = () => {
    return(
        <div className="app">
            <MysiteHeader></MysiteHeader>
            <Outlet/>
            <MysiteFooter></MysiteFooter>
        </div>
    )
};

//App Routing Configuration
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppComponent/>,
        children : [
            {
                path : "/",
                element : <MysiteBody/>
            },
            {
                path : "/offers",
                element : <Offers/>
            },
            {
                path : "/help",
                element : <Help/>
            },
            {
                path : "/restomenu/:resId",
                element : <Restomenu/>
            }

        ],
    
        errorElement : <Error/>
    }


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppComponent></AppComponent>);
root.render(<RouterProvider router={appRouter}/>)