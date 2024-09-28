import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Import Components
import Cart from './Cart.jsx';

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
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartSidebarRef = useRef(null);
    const menuRef = useRef(null);

    // GSAP Animation
    useGSAP(
        () => {
            const menuIcon = document.querySelector(".more-options-container");
            const closeIcon = document.querySelector(".close-btn");
            const menu = menuRef.current;
            const cartIcon = document.querySelector(".cart");
            const cartSidebar = cartSidebarRef.current;
            const cartCloseIcon = document.querySelector(".cart-close-btn");

            if (!menuIcon || !closeIcon || !menu || !cartIcon || !cartSidebar || !cartCloseIcon) {
                return;
            }

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
                setIsMenuOpen(true);
                tl.play();
            });

            closeIcon.addEventListener("click", () => {
                gsap.to(menu, {
                    duration: 0.2,
                    right: "-30%",
                    opacity: 0,
                });
                setIsMenuOpen(false);
                tl.reverse();
            });

            cartIcon.addEventListener("click", () => {
                gsap.to(cartSidebar, {
                    duration: 0.2,
                    right: 0,
                    opacity: 1,
                });
                setIsCartOpen(true);
            });

            cartCloseIcon.addEventListener("click", () => {
                gsap.to(cartSidebar, {
                    duration: 0.2,
                    right: "-30%",
                    opacity: 0,
                });
                setIsCartOpen(false);
            });
        }
    )

    const handleClickOutside = (event) => {
        if (cartSidebarRef.current && !cartSidebarRef.current.contains(event.target) && !event.target.closest('.cart') && isCartOpen) {
            gsap.to(cartSidebarRef.current, {
                duration: 0.2,
                right: "-30%",
                opacity: 0,
            });
            setIsCartOpen(false);
        }
        if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.more-options-container') && isMenuOpen) {
            gsap.to(menuRef.current, {
                duration: 0.2,
                right: "-30%",
                opacity: 0,
            });
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                if (isCartOpen) {
                    gsap.to(cartSidebarRef.current, {
                        duration: 0.2,
                        right: "-30%",
                        opacity: 0,
                    });
                    setIsCartOpen(false);
                }
                if (isMenuOpen) {
                    gsap.to(menuRef.current, {
                        duration: 0.2,
                        right: "-30%",
                        opacity: 0,
                    });
                    setIsMenuOpen(false);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isCartOpen, isMenuOpen]);

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
                    <div className="cart" onClick={() => setIsCartOpen(!isCartOpen)}>
                        <FaCartShopping size="1.25rem" /><span>Cart</span>
                    </div>
                    <div className="become-seller">
                        <BsShopWindow size="1.20rem" /><span>Become a Seller</span>
                    </div>
                </div>
                <button className='more-options-container'>
                    <RxHamburgerMenu className='more-options' size='1.5rem' />
                </button>
                <div className="more-options-menu" ref={menuRef}>
                    <h3 className="header-logo" style={{ textAlign: "left", padding: "1.5rem 3rem" }}>E-Com <span>Express</span></h3>
                    <ul className='more-options-list'>
                        <Link to="#"><li className='more-options-list-items'>About Us</li></Link>
                        <Link to="#"><li className='more-options-list-items'>Help</li></Link>
                        <Link to="#"><li className='more-options-list-items'>Contact</li></Link>
                        <Link to="#" onClick={logout}><li className='more-options-list-items'>Log out</li></Link>
                    </ul>
                    <RxCross2 className='close-btn' size="2.5rem" onClick={() => { null }} />
                </div>
                <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`} ref={cartSidebarRef} style={{ position: 'fixed', top: 0, right: '-30%', height: '100%', width: '30%', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.5)', zIndex: 10, overflowY: 'auto', opacity: 0 }}>
                    <RxCross2 className='cart-close-btn' size="2rem" style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', zIndex: 20 }} onClick={() => { setIsCartOpen(false) }} />
                    <Cart />
                </div>
            </header>
        </>
    )
}

export default Header
