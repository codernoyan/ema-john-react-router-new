import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Shop from "../components/Shop/Shop";
import Home from "../Home/Home";
import Main from "../layout/Main";
import { productAndCartLoader } from "../loader/productAndCartLoader";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/shop',
                loader: productAndCartLoader,
                element: <Shop></Shop>
            }
        ],
        errorElement: <NotFound></NotFound>
    }
])