import React from "react"

export default function About() {
    return (
        <div className="container">
            <div className="hero">
                <div className="text">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo, urna vitae porta accumsan, orci massa maximus urna, vel ultrices libero sem eget neque.</p>
                </div>

                <img alt="hero" src="images/hero.jpg" />

            </div>
            <div className="author">
                <img src="images/instructor.jpg" alt="Instructor"/>
                <div className="text">
                    <h2>Instructor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum, ex et dictum aliquam, risus leo sodales lorem, et feugiat mi ligula nec sapien. Vivamus lobortis, velit vel porttitor semper</p>
                </div>
            </div>
            
        </div>
    )
}