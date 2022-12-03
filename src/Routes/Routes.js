import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main/Main';
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrder from "../Pages/MyOrder/MyOrder";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../Pages/AllUser/AllUser";
import AllSeller from "../Pages/AllSeller/AllSeller";
import MyWishList from "../Pages/MyWishList/MyWishList";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Blog from "../Pages/Blog/Blog";
import MyProducts from "../Pages/MyProducts/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Payment from "../Pages/Payment/Payment";
import SearchResult from "../Pages/SearchResult/SearchResult";
import AllProducts from "../Pages/AllProducts/AllProducts";
export const route = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/category/:name', element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({ params }) => params.name
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },

            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/search-result/:search_text', element: <SearchResult></SearchResult>,
                loader: ({params})=> fetch(`https://puran-mobile-server-side.vercel.app/search/?search=${params.search_text}`)
            },

            {
                path: '*', element: <ErrorPage></ErrorPage>
            }
        ]
    },



    {
        path: '/dashboard', element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, children: [




            {
                path: '/dashboard/all-buyer', element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/all-seller', element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/all-seller-products', element: <AllProducts></AllProducts>
            },




            {
                path: '/dashboard/my-order', element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/my-wish-list', element: <MyWishList></MyWishList>
            },




            {
                path: '/dashboard/add-product', element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/my-products', element: <MyProducts></MyProducts>
            },


            {
                path: '/dashboard/buy/:id', element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://puran-mobile-server-side.vercel.app/product/buy/${params.id}`)
            }
        ]
    }


])


