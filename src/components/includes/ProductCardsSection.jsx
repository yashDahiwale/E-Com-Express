import React from 'react'
import ProductCard from './ProductCard'

// Import Product Images
import cloth_1 from "../../assets/products/clothes/cloth-1.jpg"
import cloth_2 from "../../assets/products/clothes/cloth-2.jpg"
import cloth_3 from "../../assets/products/clothes/cloth-3.jpg"
import cloth_4 from "../../assets/products/clothes/cloth-4.jpg"
import cloth_5 from "../../assets/products/clothes/cloth-5.jpg"
import cloth_6 from "../../assets/products/clothes/cloth-6.jpg"
import cloth_7 from "../../assets/products/clothes/cloth-7.jpg"
import cloth_8 from "../../assets/products/clothes/cloth-8.jpg"

function ProductCardsSection() {
    return (
        <>
            <section className="product-section">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    <ProductCard
                        image={cloth_1}
                        title="Product 1"
                        price="29.99"
                    />
                    <ProductCard
                        image={cloth_2}
                        title="Product 2"
                        price="39.99"
                    />
                    <ProductCard
                        image={cloth_3}
                        title="Product 3"
                        price="49.99"
                    />
                    <ProductCard
                        image={cloth_4}
                        title="Product 4"
                        price="59.99"
                    />
                    <ProductCard
                        image={cloth_5}
                        title="Product 5"
                        price="59.99"
                    />
                    <ProductCard
                        image={cloth_6}
                        title="Product 6"
                        price="59.99"
                    />
                    <ProductCard
                        image={cloth_7}
                        title="Product 7"
                        price="59.99"
                    />
                    <ProductCard
                        image={cloth_8}
                        title="Product 8"
                        price="59.99"
                    />
                </div>
            </section>
        </>
    )
}

export default ProductCardsSection
