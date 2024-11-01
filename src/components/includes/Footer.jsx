import React, { useState } from 'react'
import axios from "axios"

// Import Icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Alert from './Alert';

function Footer() {

    // Alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState();

    const [email, setEmail] = useState({ email: "" });

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email === "") {
            throw ("Empty Input Field!")
        }
        let response;
        try {
            response = await axios({
                method: "POST",
                url: `${import.meta.env.VITE_BACKEND_URL}/user/subscribe`,
                data: email
            })
            setAlertMessage(response.data.message);
        } catch (error) {
            console.log("Unable to send data to backend!", error)
            setAlertMessage(error.response.data.message);
        }
        handleAlert();
        setEmail({ email: "" });
    }

    // Handle Alert
    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }

    return (
        <>
            <footer>
                <div className="footer">
                    <div className="about">
                        {/* <h1>E-Com <span>Express</span></h1> */}
                        <span className='footer-headings'>About Us</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                            consequatur recusandae blanditiis dicta a, sint illo earum
                            facilis natus nulla. Nesciunt, debitis fugiat.
                        </p>
                    </div>
                    <div className="category-collection">
                        <div className="category">
                            <span className='footer-headings'> Category </span>
                            <div className='category-collection-list'>
                                <span>Formal</span>
                                <span>Sports</span>
                                <span>Party Wear</span>
                                <span>Casual</span>
                            </div>
                        </div>
                        <div className="collection">
                            <span className='footer-headings'>Collection</span>
                            <div className='category-collection-list'>
                                <span>Premium</span>
                                <span>Men</span>
                                <span>Women</span>
                                <span>Kids</span>
                            </div>
                        </div>
                    </div>
                    <div className="subscribe">
                        <span className='footer-headings'>Subscribe</span>
                        <form onSubmit={handleSubmit}>
                            <span>Subscribe to get daily update on new products and exciting offers.</span>
                            <input onChange={(e) => { setEmail((prev) => { return { ...prev, [e.target.name]: e.target.value } }) }} value={email.email} name='email' type="email" placeholder="Enter your email" />
                            <button>Subscribe</button>
                        </form>
                    </div>
                    <div className="follow">
                        <span className='footer-headings'>Follow Us</span>
                        <div className="icons">
                            <FaFacebook className='icon' size="35px" />
                            <FaInstagram className='icon' size="35px" />
                            <FaTwitter className='icon' size="35px" />
                            <FaLinkedin className='icon' size="35px" />
                            <FaYoutube className='icon' size="35px" />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="copyright">
                    <span>Copyright &copy; 2024 <span>E-Com Express</span> | All rights reserved</span>
                </div>

                {showAlert ? <Alert alertMessage={alertMessage} setShowAlert={setShowAlert} /> : null}
            </footer >
        </>
    )
}

export default Footer
