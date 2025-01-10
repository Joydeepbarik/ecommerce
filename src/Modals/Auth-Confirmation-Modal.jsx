import { Auth_Confirmation_Modal } from "../Styles/Modal-Style";

function Auth_Confimation_Modal({confirmationModalShow, setConfirmationModalShow, setShowAuth}) {

    function openAuth() {
        setConfirmationModalShow(false);
        setShowAuth(true);
    }

    function modalClose() {
        setConfirmationModalShow(false);
    }


    return(
        <>
            <Auth_Confirmation_Modal className={confirmationModalShow ? 'active' : ''}>
                <div className={`confimation_sec ${confirmationModalShow ? 'active' : ''}`}>
                    <div className="sec_inner">
                        <h4>You are not loggedin yet. Please login first.</h4>
                        <div className="btn_sec">
                            <button onClick={modalClose}>Cancel</button>
                            <button onClick={openAuth}>Login</button>
                        </div>
                    </div>
                </div>
            </Auth_Confirmation_Modal>
        </>
    );
}

export default Auth_Confimation_Modal;