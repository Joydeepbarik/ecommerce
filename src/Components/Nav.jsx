import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavWrapper } from "../Styles/Nav-Footer-Style";
import axios from "axios";
import { Fetch_Categories_URL } from "../Api/Api";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';



function NavBar({loginStatus, setLoginStatus, setShowAuth, showMobileNav, setshowMobileNav, setProfileShow}) {

    const [userName, setUserName] = useState('');
    const [categories, setCategories] = useState([]);
    const [showProfile, setShowProfile] = useState(false);
    const [profileDropdownShow, setProfileDropdownShow] = useState(false);

    function openProfile() {
        setProfileDropdownShow(false);
        setProfileShow(true);
    }

    function closeProfile() {
        setProfileDropdownShow(false);
    }


    useEffect(() => {
        axios.get(Fetch_Categories_URL)
        .then(res => {
            console.log(res);
            setCategories(res.data.categories);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        const user = localStorage.getItem("userData");
        if(user) {
            const userData = JSON.parse(user);
            if(loginStatus) {
                setShowProfile(true);
                setUserName(userData.user);
            } else {
                setShowProfile(false);
            }
        }
    }, [loginStatus]);

    const handleDropdownToggle = () => {
        setProfileDropdownShow(!profileDropdownShow);
    }

    const openAuthentication = () => {
        setShowAuth(true);
    };

    const handleLogout = () => {
        setLoginStatus(false);
        setShowProfile(false);
        setProfileDropdownShow(false);
        setUserName('');
        localStorage.setItem("login", false);
        localStorage.removeItem("userData");
        toast.warn('You have Logged out !!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return(
        <>
            <NavWrapper>
                <div className="nav_inner">
                    <img src="/images/Logo.png" alt="Logo" />
                    <div className="nav_items">
                        <li><NavLink to="/home" className="nav_item">Home</NavLink></li>
                        <li>
                            <a className="nav_item">Categories<i className="fa-solid fa-angle-down"></i></a>
                            <div className="dropdown">
                                <div className="dropdown_inner">
                                    <ul>
                                        {
                                            categories &&
                                            categories.length > 0 ?
                                            categories.map((category, i) => 
                                                <NavLink to={`/home#${category.name}`} key={i}>{category.name}<i class="fa-solid fa-angle-right"></i></NavLink>
                                            )
                                            :
                                            <p>No Category Found</p>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><NavLink to="/about-us" className="nav_item">About Us</NavLink></li>
                        <li><NavLink to="/contact-us" className="nav_item">Contact Us</NavLink></li>
                        <li><NavLink to="/blog" className="nav_item">Blogs</NavLink></li>
                    </div>
                    
                    <div className="res_btn">
                        <a onClick={() => setshowMobileNav(!showMobileNav)}><i className="fa-solid fa-bars"></i></a>
                    </div>
                    {
                        showProfile ?
                        <div className="nav_profile">
                            <div className="profile_btn" onClick={handleDropdownToggle}>
                                <div className="img">
                                    <img src="/images/profile_img.jpeg" alt="image" />
                                </div>
                                <div className="profile">
                                    <h5>{userName}</h5>
                                </div>
                            </div>
                            <div className={`profile_dropdown ${profileDropdownShow ? 'active' : ''}`}>
                                <div className="dropdown_inner">
                                    <a onClick={openProfile}><i className="fa-solid fa-user"></i>My Profile</a>
                                    <Link to="/wishlist" onClick={closeProfile}><i className="fa-solid fa-heart"></i>My Wishlist</Link>
                                    <Link to="/orderlist" onClick={closeProfile}><i className="fa-solid fa-box-open"></i>My Orders</Link>
                                    <a onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i>Logout</a>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="nav_auth">
                            <button onClick={openAuthentication}>Login / Register</button>
                        </div>
                    }
                    
                </div>
            </NavWrapper>
        </>
    );
}


export default NavBar;