import { useEffect, useState } from "react";
import { WishlistWrapper } from "../Styles/Wishlist-Style";
import axios from "axios";
import { Fetch_Wishlist_URL, Product_Image_URL } from "../Api/Api";
import { use } from "react";



function Wishlist() {

    const [wishlistItems, setWishlistItems] = useState([]);

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
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, []);

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
                                                        <a><i className="fa-solid fa-cart-shopping"></i></a>
                                                        <a><i className="fa-solid fa-trash-can"></i></a>
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