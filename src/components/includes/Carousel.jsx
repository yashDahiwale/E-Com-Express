import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import Images
import img1 from "../../assets/hero-bg-1.jpg"
import img2 from "../../assets/hero-bg-2.jpg"
import img3 from "../../assets/hero-bg-3.jpg"
import img4 from "../../assets/hero-bg-4.jpg"
import img5 from "../../assets/shoe-1.png"

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
                    interval={3000}
                    className="carousel-wrapper"
                >
                    <div className='carousel'>
                        <img src={img1} alt="Slide 1" />
                        <div className="carousel-caption">
                            <h2>Incredible Discounts</h2>
                            <p>Shop the latest trends at unbeatable prices.</p>
                        </div>
                    </div>
                    <div className='carousel'>
                        <img src={img2} alt="Slide 2" />
                        <div className="carousel-caption">
                            <h2>New Arrivals</h2>
                            <p>Discover the freshest styles in fashion today.</p>
                        </div>
                    </div>
                    <div className='carousel'>
                        <img src={img3} alt="Slide 3" />
                        <div className="carousel-caption">
                            <h2>Exclusive Collections</h2>
                            <p>Shop our exclusive collections before they’re gone.</p>
                        </div>
                    </div>
                </Carousel>
                {/* <div className="hero-content">
                    <h1>Welcome to Our E-Commerce Store</h1>
                    <p>Explore thousands of products from top brands at unbeatable prices.</p>
                    <button className="cta-button">Shop Now</button>
                </div> */}
            </section>
        </div>
    );
};

export default Home;
