import { useEffect, useState } from "react";
import { LayoutWrapper } from "../Styles/Layout-Style";
import { Outlet } from "react-router-dom";
import { DataContext } from "./DataContext";

import NavBar from "../Components/Nav";
import Footer from "../Components/Footer";
import Auth from "../Modals/Auth-Modal";
import Cart from "../Modals/Cart";
import Auth_Confimation_Modal from "../Modals/Auth-Confirmation-Modal";
import MobileNavigation from "../Modals/Mobile-Navigation";





function Layout() {

    const [loginStatus, setLoginStatus] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const [authToggle, setAuthToggle] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showMobileNav, setshowMobileNav] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [confirmationModalShow, setConfirmationModalShow] = useState(false);
    const [cartItems, setCartItems] = useState(() => {
        const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        return storedItems;
    });
    const [wishlistItems, setWishlistItems] = useState([]);


    useEffect(() => {
        const login = localStorage.getItem("login");
        if(login) {
            if(login == "true") {
                setLoginStatus(true);
            } else {
                setLoginStatus(false);
            }
        }
    }, [loginStatus]);

    function handleCart() {
        setShowCart(!showCart);
    }


    return(
        <>
            <LayoutWrapper>
                <NavBar loginStatus={loginStatus} setLoginStatus={setLoginStatus} setShowAuth={setShowAuth} setSelectedCategory={setSelectedCategory} showMobileNav={showMobileNav} setshowMobileNav={setshowMobileNav} />
                <DataContext.Provider value={{selectedCategory, setSelectedCategory, cartItems, setCartItems, setConfirmationModalShow, wishlistItems, setWishlistItems}}>
                    <Outlet/>
                </DataContext.Provider>
                <Footer setShowAuth={setShowAuth} setAuthToggle={setAuthToggle} />

                <div className="float_btn">
                    <a onClick={handleCart} className={cartItems.length > 0 ? 'pulse' : ''}><span><i className="fa-solid fa-cart-shopping"></i>{cartItems.length > 0 && <p>{cartItems.length}</p>}</span></a>
                </div>
            </LayoutWrapper>
            <Auth showAuth={showAuth} setShowAuth={setShowAuth} authToggle={authToggle} setAuthToggle={setAuthToggle} setLoginStatus={setLoginStatus} />
            <Cart showCart={showCart} setShowCart={setShowCart} cartItems={cartItems} setCartItems={setCartItems} />
            <MobileNavigation showMobileNav={showMobileNav} setshowMobileNav={setshowMobileNav}  />
            <Auth_Confimation_Modal confirmationModalShow={confirmationModalShow} setConfirmationModalShow={setConfirmationModalShow} setShowAuth={setShowAuth} />
        </>
    );
}


export default Layout;