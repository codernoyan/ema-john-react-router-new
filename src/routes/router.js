import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Home from "../Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {path: '/', element: <Home></Home>},
            {path: '/home', element: <Home></Home>}
        ],
        errorElement: <NotFound></NotFound>
    }
])