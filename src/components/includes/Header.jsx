import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Import Icons
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { BsShopWindow } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

// Import GSAP Animations
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // GSAP Animation
    useGSAP(
        () => {
            const menuIcon = document.querySelector(".more-options-container");
            const closeIcon = document.querySelector(".close-btn");
            const menu = document.querySelector(".more-options-menu");

            const tl = gsap.timeline();

            tl.from(".more-options-menu ul li", {
                opacity: 0,
                x: 150,
                duration: 0.3,
                stagger: 0.15,
            }).from(
                closeIcon,
                {
                    opacity: 0,
                    duration: 0.2,
                },
                "-=0.2"
            );

            tl.pause();

            menuIcon.addEventListener("click", () => {
                gsap.to(menu, {
                    duration: 0.2,
                    right: 0,
                    opacity: 1,
                });
                tl.play();
            });

            closeIcon.addEventListener("click", () => {
                gsap.to(menu, {
                    duration: 0.2,
                    right: "-30%",
                    opacity: 0,
                });
                tl.reverse();
            });
        }
    )

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        // navigate("/user/login", { replace: true });
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/user/login", { replace: true });
        }
    }, [isLoggedIn]);

    return (
        <>
            <header>
                <Link to='/'><h1 className="header-logo">E-Com <span>Express</span></h1></Link>
                <div className="search-container">
                    <button><CiSearch color='black' size="1.5rem" /></button>
                    <input type="search" placeholder='Serach for Products, Brands and More' />
                </div>
                <div className='nav-options'>
                    <Link to="/user/login">
                        <div className="login">
                            <IoPersonCircleOutline size="1.5rem" /><span>Login</span>
                        </div>
                    </Link>
                    <div className="cart">
                        <FaCartShopping size="1.25rem" /><span>Cart</span>
                    </div>
                    <div className="become-seller">
                        <BsShopWindow size="1.20rem" /><span>Become a Seller</span>
                    </div>
                </div>
                <button className='more-options-container'>
                    <RxHamburgerMenu className='more-options' size='1.5rem' />
                </button>
                <div className="more-options-menu">
                    <h3 className="header-logo" style={{ textAlign: "left", padding: "1.5rem 3rem" }}>E-Com <span>Express</span></h3>
                    <ul className='more-options-list'>
                        <Link to="#"><li className='more-options-list-items'>About Us</li></Link>
                        <Link to="#"><li className='more-options-list-items'>Help</li></Link>
                        <Link to="#"><li className='more-options-list-items'>Contact</li></Link>
                        <Link to="#" onClick={logout}><li className='more-options-list-items'>Log out</li></Link>
                    </ul>
                    <RxCross2 className='close-btn' size="2.5rem" onClick={() => { null }} />
                </div>
            </header>
        </>
    )
}

export default Header
