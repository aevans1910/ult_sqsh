import React from "react"


export default function News() {
    return (
        <div className="container">
            <div className="hero">
                <div className="text">
                    <h1>News</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo, urna vitae porta accumsan, orci massa maximus urna, vel ultrices libero sem eget neque.</p>
                </div>

                <img alt="hero" src="images/hero.jpg" />

            </div>
            <div className="articles">
                <div className="article">
                    <div className="container">
                        <img src="images/squash_player1.jpg" alt="Squash Player"/>
                    </div>
                    <div className="description">
                        <h4>Lorem ipsum dolor sit ame</h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo, urna vitae porta accumsan, orci massa maximus urna, vel ultrices libero sem eget neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                        <a href="https://www.lipsum.com/feed/html">Continue Reading</a>
                    </div>
                </div>
                <div className="article">
                    <div className="container">
                        <img src="images/squash_player2.jpeg" alt="Squash Player"/>
                    </div>
                    <div className="description">
                        <h4>Lorem ipsum dolor sit ame</h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo, urna vitae porta accumsan, orci massa maximus urna, vel ultrices libero sem eget neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                        <a href="https://www.lipsum.com/feed/html">Continue Reading</a>
                    </div>
                </div>
                <div className="article">
                    <div className="container">
                        <img src="images/squash_player3.jpeg" alt="Squash Player"/>
                    </div>
                    <div className="description">
                        <h4>Lorem ipsum dolor sit ame</h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo, urna vitae porta accumsan, orci massa maximus urna, vel ultrices libero sem eget neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                        <a href="https://www.lipsum.com/feed/html">Continue Reading</a>
                    </div>
                </div>
            </div>
        </div>
    )
}