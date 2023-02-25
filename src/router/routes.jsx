
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Layout,ErrorLayout } from "../layouts"
import {HomePage,ProductsPage} from '../pages'
import {ProductDetails} from '../components'




const router = createBrowserRouter([
    {
     path: "/",
     element:<Layout/>,
    errorElement:<ErrorLayout/>,
    children:[
        {
           index:true,element:<HomePage/>
        },
        {
            path: "products",element:<ProductsPage/>
        },
        {
            path:'products/:productId',element:<ProductDetails/>
        }
    ]
  }
])

export default function RouterApp(){

    return <RouterProvider router={router}/>

}