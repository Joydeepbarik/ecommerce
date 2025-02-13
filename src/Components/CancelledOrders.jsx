import { CancellItemWrapper } from "../Styles/CancellOrder-Style";

function CancelledOrders() {
    return(
        <>
            <CancellItemWrapper>
                <div className="wrapper_inner">
                    <div className="order_box">
                        <div className="inner_box">
                            <div className="top_box">
                                <div className="content_left">
                                    <img src="/images/Banner-1.png" alt="image" />
                                </div>
                                <div className="content_right">
                                    <div className="top_content">
                                        <h5>Laptop</h5>
                                        <p>Price (Rs.) : <span>24000/-</span></p>
                                    </div>
                                    <div className="bottom_content">
                                        <a>qty - 1</a>
                                        <p>Total Amt : <span>24000/-</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom_box">
                                <div className="status_box">
                                    <p>Your Product is Cancell</p>
                                </div>
                                <div className="btn_box">
                                    <button><i className="fa-solid fa-eye"></i>View Product</button>
                                    <button><i className="fa-solid fa-download"></i>Download Invoice</button>
                                </div>
                            </div>
                        </div>
                        <div className="cancel_tag">
                            <img src="/images/cancel-tag.png" alt="image" />
                        </div>
                    </div>
                </div>
            </CancellItemWrapper>
        </>
    );
}

export default CancelledOrders;