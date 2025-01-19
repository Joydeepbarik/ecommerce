import { NavLink, Outlet } from "react-router-dom";
import { DataContext } from "../Layouts/DataContext";
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
                                    <NavLink to="upcoming-orders">Current Order<i className="fa-solid fa-arrow-right-long"></i></NavLink>
                                </div>
                                <div className="order_type">
                                    <NavLink to="previous-orders">Previous Order<i className="fa-solid fa-arrow-right-long"></i></NavLink>
                                </div>
                                <div className="order_type">
                                    <NavLink to="cancelled-orders">Cancelled Order<i className="fa-solid fa-arrow-right-long"></i></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="right_sec">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </OrderlistWrapper>
        </>
    );
}

export default Orderlist;