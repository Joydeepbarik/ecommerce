import { useEffect, useState } from "react";
import { CheckoutWrapper } from "../Styles/Modal-Style";
import { Product_Image_URL } from "../Api/Api";


function CheckoutModal({checkoutModal, setCheckoutModal}) {

    const [selectedItems, setSelectedItems] = useState([]);
    const [deliveryCharge, setDeliveryCharge] = useState("40");
    const [gstPrice, setGstPrice] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [grandTotalPrice, setGrandTotalPrice] = useState('');

    function closeCheckout() {
        setCheckoutModal(false);
    }

    useEffect(() => {
        let savedItems = localStorage.getItem("cartItems");
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
            setGrandTotalPrice(total.toFixed(2));
        }
    }, [checkoutModal]);


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
                            <button>Pay Now</button>
                        </div>
                    </div>
                </div>
            </CheckoutWrapper>
        </>
    );
}

export default CheckoutModal;