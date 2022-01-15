import React, {useState} from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'

function Header() {
    const [active, setActive] = useState("Home")
    return (
        <div className = "header">
            <p className = "logo">User Management System</p>
            <div className = "header-right">
                <Link to = "/">
                    <p className={`${active==="Home" ? "active" : "" }`} onClick={()=>{setActive("Home")}}>Home</p>
                </Link>
                <Link to = "/add">
                    <p className={`${active==="AddUser" ? "active" : "" }`} onClick={()=>{setActive("AddUser")}}>Add User</p>
                </Link>
            </div>
        </div>
    )
}

export default Header
