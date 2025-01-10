import { useState } from "react";
import { ContactWrapper } from "../Styles/Contact-Style";
import axios from "axios";
import { Contact_Us_URL } from "../Api/Api";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';


function Contact() {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[massege, setMassege] = useState('');

    const handleSend = (e) => {
        e.preventDefault();

        let inputs = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            massege: massege
        }

        axios.post(Contact_Us_URL, inputs, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => {
            console.log(res);
            if(res.data.status == "200"){
                toast.success('Contactus Successfull Done !!!', {
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
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setMassege('');
            }
        })
        .catch(err => {
            console.log(err);
        })
        // console.log(inputs);
    }

    return(
        <>
            <ContactWrapper>
                <div className="wrapper_inner">
                    <div className="head_sec">
                        <h3>Contact <span>Us</span></h3>
                    </div>
                    <div className="contact_info_sec">
                        <div className="info_box">
                            <div className="overlay"></div>
                            <div className="icon_sec">
                                <div className="icon_box">
                                    <span></span>
                                    <span></span>
                                    <div className="icon"><i className="fa-solid fa-phone-volume"></i></div>
                                </div>
                            </div>
                            <div className="box_items">
                                <p>8978564578</p>
                                <span>Or</span>
                                <p>7856458978</p>
                            </div>
                        </div>
                        <div className="info_box">
                            <div className="overlay"></div>
                            <div className="icon_sec">
                                <div className="icon_box">
                                    <span></span>
                                    <span></span>
                                    <div className="icon"><i className="fa-solid fa-envelopes-bulk"></i></div>
                                </div>
                            </div>
                            <div className="box_items">
                                <p>info.ecommerce@gmail.com</p>
                                <span>Or</span>
                                <p>support@estore.com</p>
                            </div>
                        </div>
                        <div className="info_box">
                            <div className="overlay"></div>
                            <div className="icon_sec">
                                <div className="icon_box">
                                    <span></span>
                                    <span></span>
                                    <div className="icon"><i className="fa-solid fa-map-location"></i></div>
                                </div>
                            </div>
                            <div className="box_items">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, temporibus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="form_sec">
                        <form>
                            <div className="input_box halfWidth">
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                                <span>First Name</span>
                                <div className="line"></div>
                            </div>
                            <div className="input_box halfWidth">
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                                <span>Last Name</span>
                                <div className="line"></div>
                            </div>
                            <div className="input_box halfWidth">
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                <span>Email</span>
                                <div className="line"></div>
                            </div>
                            <div className="input_box halfWidth">
                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                                <span>Mobile No.</span>
                                <div className="line"></div>
                            </div>
                            <div className="input_box fullWidth">
                                <textarea value={massege} onChange={(e) => setMassege(e.target.value)} required></textarea>
                                <span>Messege</span>
                                <div className="line"></div>
                            </div>
                            <div className="form_btn">
                                <button onClick={handleSend}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ContactWrapper>
        </>
    );
}

export default Contact;