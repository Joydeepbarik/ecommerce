import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import Layout from "../Layouts/Layout";
import HomePage from "../Pages/Home";
import Aboutus from "../Pages/Aboutus";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contactus";
import Products from "../Pages/Products";
import Wishlist from "../Pages/Wishlist";
import Orderlist from "../Pages/Orderlist";
import UpcomingOrders from "../Components/UpcomingOrders";
import PreviousOrders from "../Components/PreviousOrders";
import CancelledOrders from "../Components/CancelledOrders";
import Payment from "../Pages/Payment";





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
                        <Route exact path='orderlist' element={<Orderlist/>}>
                            <Route path='' element={<Navigate to="upcoming-orders" />} />
                            <Route exact path='upcoming-orders' element={<UpcomingOrders/>} />
                            <Route exact path='previous-orders' element={<PreviousOrders/>} />
                            <Route exact path='cancelled-orders' element={<CancelledOrders/>} />
                        </Route>
                        <Route exact path='payment' element={<Payment/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;