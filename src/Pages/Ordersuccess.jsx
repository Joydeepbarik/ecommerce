import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderSuccessWrapper } from "../Styles/Layout-Style";


function Ordersuccess() {

    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("cartItems");
        const interval = setInterval(() => {
            setCountdown(prevCount => prevCount - 1);
        }, 1000);

        if(countdown === 0) {
            navigate('/home');
        }

        return () => clearInterval(interval);

    }, [navigate, countdown]);


    return(
        <>
            <OrderSuccessWrapper>
                <div className="success_inner">
                    <div className="page_icon">
                        <img src="/images/Thank-you.gif" alt="image" />
                    </div>
                    <div className="content">
                        <h3>Thank You</h3>
                        <h5>Your order is confirm.</h5>
                        <p>Redirect to home page in <span>{countdown} second{countdown > 1 && 's'}</span></p>
                    </div>
                </div>
            </OrderSuccessWrapper>
        </>
    );
}

export default Ordersuccess;