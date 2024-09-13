import React from 'react'
import "./style.scss"

// Import React-Router-Dom
import { Route, Routes, BrowserRouter } from "react-router-dom"

// Import Components
import Home from "./components/pages/Home.jsx"
import Register from './components/pages/Register.jsx'
import Login from './components/pages/Login.jsx'
import Account from './components/pages/Account.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/register' element={<Register />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/account' element={<Account />} />
          <Route path='/*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
