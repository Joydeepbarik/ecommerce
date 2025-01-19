import { MobileWrapper } from "../Styles/Modal-Style";


function MobileNavigation({showMobileNav, setshowMobileNav}) {
    return(
        <>
            <MobileWrapper className={showMobileNav ? 'active' : ''}>
                <div className="mobile_inner">
                    <div className="top_section">
                        <div className="img">
                            <img src="/images/profile_img.jpeg" alt="" />
                        </div>
                        <h3>Joydeep Barik</h3>
                    </div>
                    <div className="bottom_section">
                        <li><a>Home<i className="fa-solid fa-angle-right"></i></a></li>
                        <li><a>About Us<i className="fa-solid fa-angle-right"></i></a></li>
                        <li><a>Contact Us<i className="fa-solid fa-angle-right"></i></a></li>
                        <li><a>Blogs<i className="fa-solid fa-angle-right"></i></a></li>
                        <li><a>SignIn/SignUp<i className="fa-solid fa-angle-right"></i></a></li>
                    </div>
                </div>
            </MobileWrapper>
        </>
    );
}

export default MobileNavigation;