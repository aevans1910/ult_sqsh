import React from "react"
import { Link } from "react-router-dom"


// styles import
import '../styles/navbar.css'



const navButtons = ["About", "News", "Join", "Tasks"]


export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link to="/">
                <img src="images/LogoColor.svg" alt="logo"></img>
                </Link>
            </div>
            <ul className="nav_buttons">
                { 
                    /* render nav buttons with links to corresponding pages */
                    navButtons.map(text => <li key={text} ><Link className="nav-button" to={`/${text.toLowerCase()}`}>{text}</Link></li>)
                }
            </ul>
            <div className="nav-right">
                <Link className="contact" to={`/contact-us`}>Contact Us</Link>
            </div>
        </nav>
    )
}