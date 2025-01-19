import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import Layout from "../Layouts/Layout";
import HomePage from "../Pages/Home";
import Aboutus from "../Pages/Aboutus";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contactus";
import Products from "../Pages/Products";
import Wishlist from "../Pages/Wishlist";
import Orderlist from "../Pages/Orderlist";




function Router() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path='' element={<Navigate to="home" />}/>
                        <Route exact path='home' element={<HomePage/>}/>
                        <Route exact path='about-us' element={<Aboutus/>}/>
                        <Route exact path='contact-us' element={<Contact/>}/>
                        <Route exact path='blog' element={<Blog/>}/>
                        <Route exact path='products' element={<Products/>}/>
                        <Route exact path='wishlist' element={<Wishlist/>}/>
                        <Route exact path='orderlist' element={<Orderlist/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;