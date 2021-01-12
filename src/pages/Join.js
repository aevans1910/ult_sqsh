import React from "react"

export default function Join() {
    return (
        <div className="container">
            <div className="hero">
                <div className="text">
                    <h1>Join</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo, urna vitae porta accumsan, orci massa maximus urna, vel ultrices libero sem eget neque.</p>
                </div>

                <img alt="hero" src="images/hero.jpg" />

            </div>
            <div className="section">
                <img src="images/process.jpg" alt="Process"/>
                <div className="text">
                    <h2>How to Join</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum, ex et dictum aliquam, risus leo sodales lorem, et feugiat mi ligula nec sapien. Vivamus lobortis, velit vel porttitor semper</p>
                </div>
            </div>

            <div className="section2">
                <div className="text">
                    <h2>Colleges</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum, ex et dictum aliquam, risus leo sodales lorem, et feugiat mi ligula nec sapien. Vivamus lobortis, velit vel porttitor semper</p>
                </div>
                <img src="images/college.jpg" alt="College"/>
            </div>

            <div className="text">
                <h2>Process</h2>
                <ol>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ol>
                <div className="buttons">
                    <button>Join now</button>
                </div>
            </div>

            <div className="video">
                <h1>Example Videos</h1>
                <iframe width="600" height="380" src="https://www.youtube.com/embed/xyLYd4vYEgE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
        </div>
    )
}