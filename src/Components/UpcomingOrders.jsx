import { useEffect, useState } from "react";
import { Fetch_Upcomming_Orderlist_URL, Product_Image_URL } from "../Api/Api";
import { OrderItemWrapper } from "../Styles/OrderItem-Style";
import axios from "axios";


function UpcomingOrders() {

    const [orderitems, setOrderitems] = useState([]);

    useEffect(() => {
        const login = localStorage.getItem("login");

        if (login == "true"){
            const user = localStorage.getItem("userData");
            const userData = JSON.parse(user);

            axios.get(`${Fetch_Upcomming_Orderlist_URL}?name=${userData.user}`)
            .then(res => {
                setOrderitems(res.data.orderlist);
                console.log(res.data.orderlist);
            })
            .catch(err => {
                setOrderitems([]);
                console.log(err);
            })
        }
    }, []);
    
    return(
        <>
            <OrderItemWrapper>
                <div className="wrapper_inner">
                    {
                        orderitems.length > 0 ? 
                        orderitems.map((orderitem, index) => {
                            const items = JSON.parse(orderitem.product_list);
                            return(
                                <div className="order_box" key={index}>
                                    <div className="order_id">
                                        <p>Order Id : <span>{orderitem.order_id}</span></p>
                                    </div>
                                    <div className="order_item_sec">
                                        {
                                            items && items.map((item, i) => 
                                                <div className="order_item_box">
                                                    <div className="content_left">
                                                        <img src={`${Product_Image_URL}/${item.pimage}`} alt="image" />
                                                    </div>
                                                    <div className="content_right">
                                                        <div className="top_content">
                                                            <h5>{item.pname}</h5>
                                                            <p>Price : <span><i className="fa-solid fa-indian-rupee-sign"></i>{item.price} {item.pCategory === 'Electronics' ? '' : `(${item.unit})`}</span></p>
                                                        </div>
                                                        <div className="bottom_content">
                                                            <a>Qty : {item.quantity}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="extra_charge">
                                        <p>Total Price: <span>{orderitem.item_total_price}/-</span></p>
                                        <p>Delivary Charge: <span>{parseFloat(orderitem.delivary_charge).toFixed()}/-</span></p>
                                        <p>GST(18%): <span>{orderitem.gst}/-</span></p>
                                    </div>
                                    <div className="total_charge">
                                        <p>Total Amount: <span>{orderitem.grand_total}/-</span></p>
                                    </div>
                                    <div className="bottom_box">
                                        <div className="status_box">
                                            <p>Your Product is on the way</p>
                                        </div>
                                        <div className="btn_box">
                                            <button><i className="fa-solid fa-eye"></i>View Product</button>
                                            <button><i className="fa-solid fa-download"></i>Download Invoice</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        :
                        <div className="empty_msg">
                            <p>No upcoming orders.</p>
                        </div>
                    }
                </div>
            </OrderItemWrapper>
        </>
    );
}

export default UpcomingOrders;