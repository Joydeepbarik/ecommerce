import { useEffect, useState } from "react";
import { CartWrapper } from "../Styles/Modal-Style";
import { Product_Image_URL } from "../Api/Api";



function Cart({showCart, setShowCart, cartItems, setCartItems, setCheckoutModal}) {

    function closeCart() {
        setShowCart(false);
    }

    const handleRemoveItem = (itemIndex) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter((_, index) => index !== itemIndex); // Remove the item at the given index
            localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Update local storage
            return updatedItems;
        });
    };

    const handleIncrement = (index) => {
        setCartItems((prevProducts) => {
            const updatedItems = prevProducts.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const handleDecrement = (index) => {
        setCartItems((prevProducts) => {
            const updatedItems = prevProducts.map((item, i) => {
                if (i === index) {
                    return item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : null;
                }
                return item;
            }).filter(item => item !== null); // Remove nulls when quantity hits 0
    
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    
            return updatedItems; // Return the updated cart state
        });
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    function handleRedirectToCheckout() {
        setShowCart(false);
        setCheckoutModal(true);
    }
    

    return(
        <>
            <CartWrapper className={showCart ? 'active' : ''}>
                <div className="cart_inner">
                    <div className="cart_top_section">
                        <h5>MY CART</h5>
                        <a onClick={closeCart}><i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className="cart_item_section">
                        <div className="sec_inner">
                            {
                                cartItems.length > 0 ?
                                cartItems.map((item, i) => 
                                    <div className="item_box" key={i}>
                                        <div className="box_inner">
                                            <div className="img_box">
                                                <img src={`${Product_Image_URL}/${item.pimage}`} alt="image" />
                                            </div>
                                            <div className="content_box">
                                                <h5>{item.pname}</h5>
                                                <p>Price : <span><i className="fa-solid fa-indian-rupee-sign"></i>{item.price} {item.pCategory === 'Electronics' ? '' : `(${item.unit})`}</span></p>
                                                <div className="item_count">
                                                    <div className="count_box">
                                                        <a onClick={() => handleDecrement(i)}><i class="fa-solid fa-minus"></i></a>
                                                        <p>{item.quantity}</p>
                                                        <a onClick={(e) => {
                                                            e.stopPropagation()
                                                            handleIncrement(i)
                                                        }}><i class="fa-solid fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="action_box">
                                                <a onClick={() => handleRemoveItem(i)}><i className="fa-solid fa-trash-can"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                                :
                                <div className="no_item_message">
                                    <p>You haven't added any product.</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="bottom_section">
                        <div className="total_sec">
                            <a>Item Total</a>
                            <p>Rs. <span>{calculateTotal()}</span>/-</p>
                        </div>
                        <div className="btn">
                            <button onClick={handleRedirectToCheckout}>Checkout</button>
                        </div>
                    </div>
                </div>
            </CartWrapper>
        </>
    );
}


export default Cart;