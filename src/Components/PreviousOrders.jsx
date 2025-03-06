import { OrderItemWrapper } from "../Styles/OrderItem-Style";

function PreviousOrders() {
    return(
        <>
            <OrderItemWrapper>
                <div className="wrapper_inner">
                    <div className="order_box">
                        <div className="order_id">
                            <p>Order Id : <span>01235455455a</span></p>
                        </div>
                        <div className="order_item_sec">
                            <div className="order_item_box">
                                <div className="content_left">
                                   <img src="/images/Banner-2.png" alt="image" />
                                </div>
                                <div className="content_right">
                                    <div className="top_content">
                                        <h5>Laptop</h5>
                                        <p>Price : <span><i className="fa-solid fa-indian-rupee-sign"></i></span></p>
                                    </div>
                                    <div className="bottom_content">
                                        <a>Qty : 1</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="extra_charge">
                            <p>Total Price: <span>20000/-</span></p>
                            <p>Delivary Charge: <span>20/-</span></p>
                            <p>GST(18%): <span>17/-</span></p>
                        </div>
                        <div className="total_charge">
                            <p>Total Amount: <span>21000/-</span></p>
                        </div>
                        <div className="bottom_box">
                            <div className="status_box">
                                <p>Your Product is on the way</p>
                            </div>
                            <div className="btn_box">
                                <button><i className="fa-solid fa-eye"></i>View Product</button>
                                <a><i className="fa-solid fa-download"></i>Download Invoice</a>
                            </div>
                        </div>
                    </div>
                </div>
            </OrderItemWrapper>
        </>
    );
}

export default PreviousOrders;