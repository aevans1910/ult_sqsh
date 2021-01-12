import React from "react"

import ToDo from "../components/ToDo.js"

export default function Tasks() {
    return (
        <div className="container">
            <div className="hero">
                <div className="text">
                    <h1>Join</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo, urna vitae porta accumsan, orci massa maximus urna, vel ultrices libero sem eget neque.</p>
                </div>

                <img alt="hero" src="images/hero.jpg" />

            </div>
            <ToDo />
            
        </div>
    )
}