import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

//Import Icons
import { IoPersonCircleOutline } from 'react-icons/io5';
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOpen } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

// Import Components
import Alert from '../includes/Alert';
import Header from "../includes/Header"
import Footer from '../includes/Footer';


function Register() {

    // Password
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState();

    // Register Button
    const [isDisable, setIsDisable] = useState(true);

    // Form Data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    // Some messy code here [TODO: Replace with better, neat and clean code]
    function handlePasswordClick() {
        setShowPassword(!showPassword)
    }
    function handleConfirmPasswordClick() {
        setShowConfirmPassword(!showConfirmPassword)
    }
    const handleShowPassword = () => {
        const el = document.getElementById("password");
        if (showPassword === true) {
            el.type = "text";
        } else {
            el.type = "password";
        }
    }
    const handleShowConfirmPassword = () => {
        const el = document.getElementById("confirm-password");
        if (showConfirmPassword === true) {
            el.type = "text";
        } else {
            el.type = "password";
        }
    }
    useEffect(() => {
        handleShowPassword();
        handleShowConfirmPassword();
    }, [handlePasswordClick, handleConfirmPasswordClick])


    const handleShowHide = () => {

    }


    // Controlled Components
    const handleChange = (event) => {
        let { name, value } = event.target;
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    // Reset Form
    const resetForm = () => {
        setFormData({
            name: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
    }

    // Handle Alert
    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }

    // Submit Form
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check the Password and Confirm-Password are same or not
        if (formData.password !== formData.confirmPassword) {
            setAlertMessage("Password doesn't match!");
            handleAlert();
            return;
        }

        let response;
        try {
            response = await axios({
                method: "POST",
                url: `${import.meta.env.VITE_BACKEND_URL}/user/registerUser`,
                data: formData
            })
            if (response.status === 200) {
                setAlertMessage(response.data.message);
                handleAlert();
            }
        } catch (error) {
            setAlertMessage(error);
            handleAlert();
        }
        resetForm();
    }

    // Check if input fields are empty or not
    const checkInputFields = () => {
        const checkEmptyArray = (arr) => {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === "") {
                    return true;
                }
            }
            return false;
        };
        if (checkEmptyArray(Object.values(formData))) {
            setIsDisable(true);
        } else {
            setIsDisable(false)
        }
    }

    useEffect(() => {
        checkInputFields();
    }, [formData])

    return (
        <>
            <Header />

            <div className="form-container">
                <div className="background-overlay"></div>
                <div className='registration-form'>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='input-field'>
                            <div className="icon"><IoPersonCircleOutline size="1.75rem" /></div>
                            <div className='divider-line'></div>
                            <input onChange={handleChange} value={formData.name} type="text" placeholder='Full Name' name='name' />
                        </div>
                        <div className='input-field'>
                            <div className="icon"><FiPhone size="1.5rem" /></div>
                            <div className='divider-line'></div>
                            <input onChange={handleChange} value={formData.phone} type="tel" placeholder='Phone Number' name='phone' minLength={10} maxLength={10} />
                        </div>
                        <div className='input-field'>
                            <div className="icon"><HiOutlineMail size="1.70rem" /></div>
                            <div className='divider-line'></div>
                            <input onChange={handleChange} value={formData.email} type="email" placeholder='Email Address' name='email' />
                        </div>
                        <div className='input-field'>
                            <div className="icon"><MdLockOpen size="1.75rem" /></div>
                            <div className='divider-line'></div>
                            <input onChange={handleChange} value={formData.password} id='password' type="password" placeholder='Create Password' name='password' />
                            <div className='password-icon-container' onClick={handlePasswordClick}>
                                {showPassword ? <FaRegEyeSlash size={"1.75rem"} /> : <FaRegEye size={"1.75rem"} />}
                            </div>
                        </div>
                        <div className='input-field'>
                            <div className="icon"><MdLockOutline size="1.75rem" /></div>
                            <div className='divider-line'></div>
                            <input onChange={handleChange} value={formData.confirmPassword} id='confirm-password' type="password" placeholder='Repeat Password' name='confirmPassword' />
                            <div className='password-icon-container' onClick={handleConfirmPasswordClick}>
                                {showConfirmPassword ? <FaRegEyeSlash size={"1.75rem"} /> : <FaRegEye size={"1.75rem"} />}
                            </div>
                        </div>
                        <button onClick={handleShowHide} disabled={isDisable} type='submit'>Register</button>
                    </form>
                    <span className='login-here'>Already Have an Account? <Link to="/user/login">Login Here</Link></span>
                </div>
            </div>

            <Footer />

            {showAlert ? <Alert alertMessage={alertMessage} setShowAlert={setShowAlert} /> : null}

        </>
    )
}

export default Register
