import { OrderItemWrapper } from "../Styles/OrderItem-Style";


function UpcomingOrders() {
    return(
        <>
            <OrderItemWrapper>
                <div className="wrapper_inner">
                    <div className="order_box">
                        <div className="top_box">
                            <div className="content_left">
                                <img src="/images/Banner-1.png" alt="image" />
                            </div>
                            <div className="content_right">
                                <div className="top_content">
                                    <h5>Washing Machine</h5>
                                </div>
                                <div className="bottom_content">
                                    <a>qty - 1</a>
                                    <p>Price (Rs.) : <span>24000/-</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom_box">
                            <div className="status_box">
                                <p>Your Product is on the way</p>
                            </div>
                            <div className="btn_box">
                                <button>View Product</button>
                                <button>Download Invoice</button>
                            </div>
                        </div>
                    </div>
                    <div className="order_box">
                        <div className="top_box">
                            <div className="content_left">
                                <img src="/images/Banner-1.png" alt="image" />
                            </div>
                            <div className="content_right">
                                <div className="top_content">
                                    <h5>Washing Machine</h5>
                                </div>
                                <div className="bottom_content">
                                    <a>qty - 1</a>
                                    <p>Price (Rs.) : <span>24000/-</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom_box">
                            <div className="status_box">
                                <p>Your Product is on the way</p>
                            </div>
                            <div className="btn_box">
                                <button>View Product</button>
                                <button>Download Invoice</button>
                            </div>
                        </div>
                    </div>
                    <div className="order_box">
                        <div className="top_box">
                            <div className="content_left">
                                <img src="/images/Banner-1.png" alt="image" />
                            </div>
                            <div className="content_right">
                                <div className="top_content">
                                    <h5>Washing Machine</h5>
                                </div>
                                <div className="bottom_content">
                                    <a>qty - 1</a>
                                    <p>Price (Rs.) : <span>24000/-</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom_box">
                            <div className="status_box">
                                <p>Your Product is on the way</p>
                            </div>
                            <div className="btn_box">
                                <button>View Product</button>
                                <button>Download Invoice</button>
                            </div>
                        </div>
                    </div>
                </div>
            </OrderItemWrapper>
        </>
    );
}

export default UpcomingOrders;