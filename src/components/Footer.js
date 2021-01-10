import React, { Component } from "react"
import { Link } from "react-router-dom"

import "../styles/footer.css"

const navButtons = ["About", "News", "Join", "Sign In"]

export default function Footer()  {

    return (
        <footer>
            <div className="top">
                <div className="left">
                    <ul className="nav_buttons">
                        { 
                            /* render nav buttons with links to corresponding pages */
                            navButtons.map(text => <li key={text} ><Link className="nav-button" to={`/${text.toLowerCase()}`}>{text}</Link></li>)
                        }
                    </ul>
                </div>
                <div className="right">
                    <div className="info">
                        <p>
                        Lorem ipsum dolor <br />
                        San Francisco, CA XXXXXXXX <br />
                        Phone: XXX-XXX-XXXX <br />
                        </p>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <p>© 2020 Ultimate Squash US All Rights Reserved</p>
            </div>
        </footer>
    )
}