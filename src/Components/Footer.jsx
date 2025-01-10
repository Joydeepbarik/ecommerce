import { FooterWrapper } from "../Styles/Nav-Footer-Style";




function Footer({setShowAuth, setAuthToggle}) {

    const openSigninModal = () => {
        setShowAuth(true);
        setAuthToggle(false);
    };

    const openSignupModal = () => {
        setShowAuth(true);
        setAuthToggle(true);
    };

    return(
        <>
            <FooterWrapper>
                <div className="wave">
                    <img src="images/footer-wave.png" alt="wave" />
                </div>
                <div className="footer_sec">
                    <div className="footer_top">
                        <div className="inner_content">
                            <div className="box">
                                <div className="box_inner">
                                    <div className="footer_logo">
                                        <img src="images/Logo.png" alt="logo" />
                                    </div>
                                    <div className="brief_about">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, velit dolor deserunt amet nobis fugit suscipit at veritatis excepturi explicabo? Aperiam itaque eveniet, eum tenetur deleniti impedit optio fugit aspernatur autem esse vel ipsum laudantium ullam error accusantium doloribus</p>
                                    </div>
                                    <div className="social_media">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box_inner">
                                    <h5>Quick Links</h5>
                                    <ul>
                                        <a href="#"><i class="fa-solid fa-angle-right"></i>Home</a>
                                        <a href="#"><i class="fa-solid fa-angle-right"></i>About Us</a>
                                        <a href="#"><i class="fa-solid fa-angle-right"></i>Contact Us</a>
                                        <a href="#"><i class="fa-solid fa-angle-right"></i>Our Blogs</a>
                                        <a onClick={openSigninModal}><i class="fa-solid fa-angle-right"></i>Sign In</a>
                                        <a onClick={openSignupModal}><i class="fa-solid fa-angle-right"></i>Sign Up</a>
                                    </ul>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box_inner">
                                    <h5>Categories</h5>
                                    <ul>
                                        <a href="#"><i class="fa-solid fa-angle-right"></i>Grocery</a>
                                        <a href="#"><i class="fa-solid fa-angle-right"></i>Electronics</a>
                                        <a href="#"><i class="fa-solid fa-angle-right"></i>Top Wear</a>
                                        <a href="#"><i class="fa-solid fa-angle-right"></i>Foot Wear</a>
                                        <a href="#"><i class="fa-solid fa-angle-right"></i>Cosmetics</a>
                                    </ul>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box_inner">
                                    <div className="contact_info">
                                        <h5>Contact Info</h5>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-phone"></i>
                                                <p>+91 9749708386</p>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-envelope"></i>
                                                <p>info@grocery.com</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="subscribe_sec">
                                        <h5>Subscribe Now</h5>
                                        <div className="input_sec">
                                            <div className="input_box">
                                                <input type="text" placeholder="Email address" />
                                                <button>GO</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <p>Created By <span>Jack</span> & <span>Shadow</span> | All right reserved.</p>
                    </div>
                </div>
            </FooterWrapper>
        </>
    );
}


export default Footer;