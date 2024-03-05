import {createBrowserRouter, Navigate} from "react-router-dom";

import {CarPage} from "./pages";
import {MainLayout} from "./layouts";

const router = createBrowserRouter([
    {
        path: '',element:<MainLayout/>,children: [
            {
                index:true, element:<Navigate to={'cars'}/>
            },
            {
                path:'cars', element:<CarPage/>
            }
        ]
    }
])
export {router}