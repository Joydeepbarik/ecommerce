import { OrderItemWrapper } from "../Styles/OrderItem-Style";

function PreviousOrders() {
    return(
        <>
            <OrderItemWrapper>
                <div className="wrapper_inner">
                    <div className="order_box">
                        <div className="order_id">
                            <p>Oreder Id : <span>0124544545</span></p>
                        </div>
                        <div className="order_tem_sec">
                            <div className="order_item_box">
                                <div className="content_left">
                                    <img src="/images/Banner-1.png" alt="image" />
                                </div>
                                <div className="content_right">
                                    <div className="top_content">
                                        <h5>Laptop</h5>
                                        <p>Price (Rs.) : <span>24000/-</span></p>
                                    </div>
                                    <div className="bottom_content">
                                        <a>Qty : 1</a>
                                        <p>Price : <span>24000/-</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom_box">
                            <div className="status_box">
                                <p>This is your Previous Order.</p>
                            </div>
                            <div className="btn_box">
                                <button><i className="fa-solid fa-eye"></i>View Product</button>
                                <button><i className="fa-solid fa-download"></i>Download Invoice</button>
                            </div>
                        </div>
                    </div>
                </div>
            </OrderItemWrapper>
        </>
    );
}

export default PreviousOrders;