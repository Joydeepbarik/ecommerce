import { OrderlistWrapper } from "../Styles/Orderlist-Style";


function Orderlist() {
    return(
        <>
            <OrderlistWrapper>
                <div className="wrapper_inner">
                    <div className="page_head">
                        <h2>My <span>Orders</span></h2>
                    </div>
                    <div className="order_section">
                        <div className="left_sec">
                            <div className="sec_inner">
                                <div className="order_type">
                                    <a>Current Order<i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                                <div className="order_type">
                                    <a>Previous Order<i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                                <div className="order_type">
                                    <a>Cancell Order<i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="right_sec"></div>
                    </div>
                </div>
            </OrderlistWrapper>
        </>
    );
}

export default Orderlist;