import React, { useEffect, useState } from 'react'
import Header from '../includes/Header'
import Footer from '../includes/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Account() {

    let [userData, setUserData] = useState({})

    let navigate = useNavigate()

    let fetchUserData = async () => {
        let result
        try {
            result = await axios({
                method: "GET",
                url: "http://localhost:9000/user/dashboard",
                headers: {
                    authorization: localStorage.getItem("token"),
                    content: "text/json"
                }
            })
            if (result.status !== 200) {
                throw ("Authentication failed from backend")
            }
            setUserData(result.data.userData)
        } catch (err) {
            console.log("Authentication failed ", err)
            navigate("/user/login")
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <>
            <Header />
            <h1 style={{ margin: "10rem auto", textAlign: "center", fontSize: "5rem" }}>This is an User's Account Page</h1>
            <span>{ userData.name }</span>
            <Footer />
        </>
    )
}

export default Account
