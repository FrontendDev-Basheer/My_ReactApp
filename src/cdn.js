import React from "react";
import ReactDOM from "react-dom/client";
import MysiteHeader from "./components/HeaderComponent";
import MysiteBody from "./components/BodyComponent";
import MysiteFooter from "./components/FooterComponent";
import Offers from "./components/OfferComponent";
import Help from "./components/HelpComponent";
import Error from "./components/ErrorComponent";
import Restomenu from "./components/RestomenuComponent";
import appStore from "./utill/appStore";
import Cart from "./components/Cart";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import { Provider } from "react-redux";


//App Component

const AppComponent = () => {
    return(
        <Provider store={appStore}>
        <div className="app">
            <MysiteHeader></MysiteHeader>
            <Outlet/>
            <MysiteFooter></MysiteFooter>
        </div>
        </Provider>
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
            },
            {
                path : "/cart",
                element : <Cart/>
            }

        ],
    
        errorElement : <Error/>
    }


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppComponent></AppComponent>);
root.render(<RouterProvider router={appRouter}/>)