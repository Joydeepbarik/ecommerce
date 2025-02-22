import { useEffect, useState } from "react";
import { CheckoutWrapper } from "../Styles/Modal-Style";
import { Payment_URL, Product_Image_URL } from "../Api/Api";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import axios from "axios";



function CheckoutModal({checkoutModal, setCheckoutModal, loginStatus}) {

    const [userName, setUserName] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [deliveryCharge, setDeliveryCharge] = useState("40");
    const [gstPrice, setGstPrice] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [grandTotalPrice, setGrandTotalPrice] = useState('');

    function closeCheckout() {
        setCheckoutModal(false);
    }

    useEffect(() => {
        const user = localStorage.getItem("userData");
        if(user) {
            const userData = JSON.parse(user);
            if(loginStatus) {
                setUserName(userData.user);
            }
        }
    }, [loginStatus]);

    useEffect(() => {
        let savedItems = localStorage.getItem("cartItems");
        if(savedItems) {
            const itemArray = JSON.parse(savedItems);
            setSelectedItems(itemArray);
            console.log(itemArray);
            if(itemArray) {
                let itemTotal = 0;
                itemArray.forEach(item => {
                    itemTotal += item.price * item.quantity;
                });
                setTotalPrice(itemTotal.toFixed(2));
                let gst = itemTotal * 0.18;
                setGstPrice(gst.toFixed(2));
                let total = itemTotal + parseFloat(gst) + parseFloat(deliveryCharge);
                setGrandTotalPrice(parseFloat(total).toFixed(2));
            }
        }
    }, [checkoutModal]);


    const handlePayment = () => {
        if(loginStatus) {
            const inputs = {
                username: userName,
                products: JSON.stringify(selectedItems),
                deliveryCharge: deliveryCharge,
                gstPrice: gstPrice,
                totalPrice: totalPrice,
                grandTotalPrice: grandTotalPrice
            };
            axios.post(Payment_URL, inputs, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => {
                console.log(res);
                if(res.data.success) {
                    window.location.href = res.data.paymentUrl;
                } else {
                    console.log('Payment failed: ' + res.data.message);
                }
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            toast.warn('Please login to place an order.', {
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
        }
    }


    return(
        <>
            <CheckoutWrapper className={checkoutModal ? 'active' : ''}>
                <div className="checkout_inner">
                    <div className="head_sec">
                    <h5>Oder Summary</h5>
                    <a onClick={closeCheckout}><i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className="content_section">
                        <div className="sec_inner">
                            <div className="item_box_sec">
                                {
                                    selectedItems.length > 0 ?
                                    selectedItems.map((item, i) => 
                                        <div className="item_box" key={i}>
                                            <div className="box_inner">
                                                <div className="img_box">
                                                    <img src={`${Product_Image_URL}/${item.pimage}`} alt="image" />
                                                </div>
                                                <div className="content_box">
                                                    <h5>{item.pname}</h5>
                                                    <p>Price : <span><i className="fa-solid fa-indian-rupee-sign"></i>{item.price} {item.pCategory === 'Electronics' ? '' : `(${item.unit})`}</span></p>
                                                    <p>Qty: {item.quantity}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    :
                                    <div className="empty_message"></div>
                                }
                            </div>
                            <div className="extra_charge">
                                <p>Total Price: <span>{totalPrice}/-</span></p>
                                <p>Delivary Charge: <span>{deliveryCharge}/-</span></p>
                                <p>GST(18%): <span>{gstPrice}/-</span></p>
                            </div>
                            <div className="total_charge">
                                <p>Payble Amount: <span>{grandTotalPrice}/-</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_section">
                        <div className="total_sec">
                            <a>Grand Total</a>
                            <p>Rs. <span>{grandTotalPrice}</span>/-</p>
                        </div>
                        <div className="btn">
                            <button onClick={handlePayment}>Pay Now</button>
                        </div>
                    </div>
                </div>
            </CheckoutWrapper>
        </>
    );
}

export default CheckoutModal;