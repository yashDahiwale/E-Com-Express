import React, { useState } from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        card: '',
        phone: '',
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <Header />
            <div className="checkout-background">
                <div className="checkout-container">
                    <h1 className="checkout-title">Checkout</h1>
                    <form className="checkout-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name <span style={{color: 'red'}}>*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email <span style={{color: 'red'}}>*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john.doe@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address <span style={{color: 'red'}}>*</span></label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="123 Main St"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City <span style={{color: 'red'}}>*</span></label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Anytown"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State <span style={{color: 'red'}}>*</span></label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="CA"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zip">Zip Code <span style={{color: 'red'}}>*</span></label>
                            <input
                                type="text"
                                id="zip"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                placeholder="12345"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="card">Credit Card <span style={{color: 'red'}}>*</span></label>
                            <input
                                type="text"
                                id="card"
                                name="card"
                                value={formData.card}
                                onChange={handleChange}
                                placeholder="1234 5678 9012 3456"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number <span style={{color: 'red'}}>*</span></label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(123) 456-7890"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="notes">Notes <span style={{color: 'red'}}>*</span></label>
                            <input
                                type="text"
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Additional notes"
                                required
                            />
                        </div>
                        <button type="submit" className="checkout-button">Place Order</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
