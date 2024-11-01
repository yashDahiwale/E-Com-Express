import React from 'react'
import "./style.scss"

// Import React-Router-Dom
import { Route, Routes, BrowserRouter } from "react-router-dom"

// Import Components
import Home from "./components/pages/Home.jsx"
import Register from './components/pages/Register.jsx'
import Login from './components/pages/Login.jsx'
import Dashboard from './components/pages/Dashboard.jsx'
import Checkout from './components/includes/Checkout.jsx'
import CartPage from './components/pages/CartPage.jsx'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/register' element={<Register />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/dashboard' element={<Dashboard />} />
          <Route path='/user/cart' element={<CartPage />} />
          <Route path='/user/checkout' element={<Checkout />} />
          <Route path='/*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
