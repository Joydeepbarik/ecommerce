import { useState } from "react";
import { ProfileWrapper } from "../Styles/Modal-Style";


function Profile({profileShow, setProfileShow}) {


    function closeProfile() {
        setProfileShow(false);
    }
    return(
        <>
            <ProfileWrapper className={profileShow ? 'active' : ''}>
                <div className="wrapper_inner">
                    <div className="icon_sec">
                        <a onClick={closeProfile}><i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className="content_sec">
                        <div className="top_sec">
                            <img src="/images/profile.png" alt="image" />
                            <h3>Joydeep Barik</h3>
                        </div>
                        <div className="item_sec">
                            <p>Email : joydeepbarik007@gmail.com</p>
                            <p>Mobile : 9749708386</p>
                            <p>Location: Bengaluru</p>
                        </div>
                        <div className="btn_sec">
                            <a><i class="fa-solid fa-right-from-bracket"></i>Change Password</a>
                        </div>
                    </div>
                </div>
            </ProfileWrapper>
        </>
    );
}

export default Profile;