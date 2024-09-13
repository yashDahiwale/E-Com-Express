import React from 'react'

//Import Components
import Header from '../includes/Header'
import Footer from '../includes/Footer'
import Carousel from '../includes/Carousel.jsx'
import ProductCardsSection from '../includes/ProductCardsSection.jsx'

function Home() {
    return (
        <>
            <Header />
            <main className='home-main-container'>
            <Carousel />
            <ProductCardsSection />
            </main>
            <Footer />
        </>
    )
}

export default Home
