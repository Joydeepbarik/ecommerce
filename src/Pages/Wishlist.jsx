import { useContext, useEffect, useState } from "react";
import { WishlistWrapper } from "../Styles/Wishlist-Style";
import { DataContext } from "../Layouts/DataContext";
import axios from "axios";
import { Add_Wishlist_URL, Delete_Wishlist_URL, Fetch_Wishlist_URL, Product_Image_URL } from "../Api/Api";
import { use } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';


function Wishlist() {

    const {setSelectedCategory, setCartItems, setConfirmationModalShow, wishlistItems, setWishlistItems} = useContext(DataContext);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const login = localStorage.getItem("login");

        if (login == "true"){
            const user = localStorage.getItem("userData");
            const userData = JSON.parse(user);

            axios.get(`${Fetch_Wishlist_URL}?name=${userData.user}`)
            .then(res => {
                const products = res.data.wishlist.productlist;
                const jsonProducts = JSON.parse(products);
                setWishlistItems(jsonProducts);
                console.log(jsonProducts);
                setReload(false);
            })
            .catch(err => {
                console.log(err);
                setReload(false);
            })
        }
    }, [reload]);

    const handleDeleteWishlist = (product) => {

        const login = localStorage.getItem("login");
    
        if (login == "true"){
            const user = localStorage.getItem("userData");
            const userData = JSON.parse(user);
            
            setWishlistItems((prevItems) => {
                let updatedWishlist = prevItems.filter(item => item.id !== product.id);
                // console.log(updatedWishlist);
                
                const inputs = {
                    name: userData.user,
                    products: JSON.stringify(updatedWishlist)
                };
                
                axios.post(Add_Wishlist_URL, inputs, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                .then(res => {
                    console.log(res);
                    toast.warn('Item Deleted from Wishlist', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    setReload(true);
                })
                .catch(err => {
                    console.log(err);
                    setReload(true);
                })
                return updatedWishlist;
            });
        }
        
    }

    const handleAddToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                // Increment quantity if item already in cart
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // Add new item to the cart
                const newItem = { ...item, quantity: 1 };
                return [...prevItems, newItem];
            }
        });

        toast.success('Item added to cart!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return(
        <>
            <WishlistWrapper>
                <div className="wrapper_inner">
                    <div className="page_head">
                        <h2>My Wishlist</h2>
                    </div>
                    <div className="wishlist_sec">
                        <div className="sec_inner">
                            {
                                wishlistItems.length > 0 ? 
                                wishlistItems.map((item, i) => {
                                    return(
                                        <div className="sec_box" key={i}>
                                            <div className="box_inner">
                                                <div className="img_box">
                                                    <img src={`${Product_Image_URL}/${item.pimage}`} alt="image" />
                                                </div>
                                                <div className="content_box">
                                                    <h5>{item.pname}</h5>
                                                    <p>Price : <span><i className="fa-solid fa-indian-rupee-sign"></i>{item.price} {item.pCategory === 'Electronics' ? '' : `(${item.unit})`}</span></p>
                                                    <div className="action_box">
                                                        <a onClick={() => handleAddToCart(item)}><i className="fa-solid fa-cart-shopping"></i></a>
                                                        <a onClick={() => handleDeleteWishlist(item)}><i className="fa-solid fa-trash-can"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                                :
                                <div className="empty_msg">
                                    <p>Please add products to your wishlist.</p>
                                </div>
                            }
                           
                        </div>
                    </div>
                </div>
            </WishlistWrapper>
        </>
    );
}

export default Wishlist