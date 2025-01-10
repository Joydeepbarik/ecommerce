import { useState } from "react";
import { AuthWrapper } from "../Styles/Modal-Style";
import axios from "axios";
import { Login_URL, Register_URL } from "../Api/Api";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';



function Auth({showAuth, setShowAuth, authToggle, setAuthToggle, setLoginStatus}) {

    const [name, setName]=useState('');
    const [phone, setPhone]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [userName, setUserName]=useState('');
    const [userpass, setUserPass]=useState('');

    const [logPassShow, setLogPassShow]=useState(false);
    const [regPassShow, setRegPassShow]=useState(false);
    

    const closeAuthentication = () => {
        setShowAuth(false);
        setAuthToggle(false);
    };

    const handleAuthentication = () => {
        setAuthToggle(!authToggle);
    };

    const handleRegPassShow = () => {
        setRegPassShow(!regPassShow);
    };

    const handleLogPassShow = () => {
        setLogPassShow(!logPassShow);
    }

    const handleRegistration = (e) => {
        e.preventDefault();

        let inputs = {
            name: name,
            phone: phone,
            email: email,
            password: password
        }  

        axios.post(Register_URL, inputs, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            console.log(res);
            if(res.data.status == "200"){
                toast.success('Registration Successfull !!!', {
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
                setName('');
                setPhone('');
                setEmail('');
                setPassword('');
                setAuthToggle(false);
            }
        })
        .catch(err => {
            console.log(err);
        })
    };

    const handleLogin = (e) => {
        e.preventDefault();

        let userInputs = {
            userName: userName,
            userPass: userpass
        }

        axios.post(Login_URL, userInputs, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            console.log(res);
            if(res.data.status == "200"){
                toast.success('You have Successfull login !!!', {
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

                const userData = {userId: res.data.userId, user: res.data.username};
                localStorage.setItem("userData", JSON.stringify(userData));
                localStorage.setItem("login", true);
                setLoginStatus(true);
                setUserName('');
                setUserPass('');
                setShowAuth(false);
            } else {
                setLoginStatus(false);
            } 
        })
        .catch(err => {
            console.log(err);
            toast.error('Incorrect Username or Password', {
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
            setLoginStatus(false);
            setUserName('');
            setUserPass('');
        })
    }

    return(
        <>
            <AuthWrapper className={showAuth ? 'active' : ''}>
                <div className="wrapper_inner">
                    <div className={`auth_box ${showAuth ? 'active' : ''}`}>
                        <div className="close_btn">
                            <a onClick={closeAuthentication}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                        <div className={`box_inner ${authToggle ? 'active' : ''}`}>
                            <div className="form_sec login_form">
                                <form action="#">
                                    <div className="form_box">
                                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required/>
                                        <span>Name</span>
                                        <div className="line"></div>
                                    </div>
                                    <div className="form_box">
                                        <input type={logPassShow ? 'text' : 'password'} value={userpass} onChange={(e) => setUserPass(e.target.value)} required/>
                                        <span>Password</span>
                                        <a onClick={handleLogPassShow}><i className={`fa-solid fa-eye${logPassShow ? '' : '-slash'}`}></i></a>
                                        <div className="line"></div>
                                    </div>
                                    <div className="remeber_forgot_sec">
                                        <div className="remember_sec">
                                            <input type="checkbox" name="" id="remember" />
                                            <label htmlFor="remember">
                                                <span></span>
                                                <p>Remember Me</p>
                                            </label>
                                        </div>
                                        <div className="forgot_sec">
                                            <a href="#">Forgot Password ?</a>
                                        </div>
                                    </div>
                                    <div className="form_btn">
                                        <button onClick={handleLogin}>Sign In</button>
                                    </div>
                                    <div className="redirect_sec">
                                        <p>Don't have any account? <a onClick={handleAuthentication}>Sign Up</a></p>
                                    </div>
                                </form>
                            </div>
                            <div className="form_sec registration_form">
                                <form action="#">
                                    <div className="form_box">
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                                        <span>Name</span>
                                        <div className="line"></div>
                                    </div>
                                    <div className="form_box">
                                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                                        <span>Mobile No.</span>
                                        <div className="line"></div>
                                    </div>
                                    <div className="form_box">
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                        <span>Email</span>
                                        <div className="line"></div>
                                    </div>
                                    <div className="form_box">
                                        <input type={regPassShow ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                        <span>Password</span>
                                        <a onClick={handleRegPassShow}><i className={`fa-solid fa-eye${regPassShow ? '' : '-slash'}`}></i></a>
                                        <div className="line"></div>
                                    </div>
                                    <div className="terms_conditions_sec">
                                        <div className="sec_inner">
                                            <input type="checkbox" name="" id="terms_check" />
                                            <label htmlFor="terms_check">
                                                <span></span>
                                                <p>By cliking this you are accepting our <a>Terms & Conditions</a> and <a>Privacy Policy</a></p>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form_btn">
                                        <button onClick={handleRegistration}>Sign Up</button>
                                    </div>
                                    <div className="redirect_sec">
                                        <p>Already have an account? <a onClick={handleAuthentication}>Sign In</a></p>
                                    </div>
                                </form>
                            </div>
                            <div className="image_sec login_image">
                                <img src="images/Login-Icon.svg" alt="icon" />
                            </div>
                            <div className="image_sec registration_image">
                                <img src="images/Register-Icon.svg" alt="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </AuthWrapper>
        </>
    );
}

export default Auth;