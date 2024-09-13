import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

//Import Icons
import { MdLockOpen } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

// Import Components
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Alert from "../includes/Alert"

function Login() {

    // Alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState();

    // Register Button
    const [isDisable, setIsDisable] = useState(true);

    // Form Data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // useNavigate Hook
    const navigate = useNavigate();

    // ShowHide Password
    const [showPassword, setShowPassword] = useState(false);
    const handleShowHide = () => {
        setShowPassword(!showPassword);
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
            email: "",
            password: "",
        });
    }

    // Handle Alert
    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
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
            setIsDisable(false);
        }
    }

    useEffect(() => {
        checkInputFields();
    }, [formData])

    const handleSubmit = async (event) => {
        event.preventDefault();
        let response;
        try {
            response = await axios({
                method: "POST",
                url: "http://localhost:9000/user/loginUser",
                data: formData
            })
            if (response.status !== 200) {
                setAlertMessage("Something went wrong! Please try again later.");
                handleAlert();
            }
            setAlertMessage(response.data.message);
            handleAlert();
            const token = response.data.token;
            console.log(token)
            localStorage.setItem("token", token);
            if (token) {
                navigate("/user/account");
            } else{
                navigate("/user/login")
            }
        } catch (error) {
            setAlertMessage("Unable to Register the User!")
            console.log(error)
        }
        resetForm();
    }

    return (
        <>
            <Header />

            <div className="form-container">
                <div className="background-overlay"></div>
                <div className='login-form'>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>

                        <div className='input-field'>
                            <HiOutlineMail className='icon' size="1.70rem" />
                            <div className='divider-line'></div>
                            <input onChange={handleChange} value={formData.email} type="email" placeholder='Email Address' name='email' />
                        </div>
                        <div className='input-field'>
                            <MdLockOpen className='icon' size="1.75rem" />
                            <div className='divider-line'></div>
                            <input onChange={handleChange} value={formData.password} id='password' type={showPassword ? "text" : "password"} placeholder='Enter Password' name='password' />
                            <div className='password-icon-container' onClick={handleShowHide}>
                                {showPassword ? <FaRegEyeSlash size={"1.75rem"} /> : <FaRegEye size={"1.75rem"} />}
                            </div>
                        </div>
                        <button disabled={isDisable} type='submit'>Login</button>
                    </form>
                    <span className='register-here'>Don't Have an Account? <Link to="/user/register">Register Here</Link></span>
                </div>
            </div>

            {showAlert ? <Alert alertMessage={alertMessage} setShowAlert={setShowAlert} /> : null}
            <Footer />
        </>
    )
}

export default Login