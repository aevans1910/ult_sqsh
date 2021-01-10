import React from "react"
import { Link } from "react-router-dom"

// import Carousel from "../components/Carousel"

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import emailjs from "emailjs-com"
import { useState } from "react";


function Slide({ title, body }) {
    return (
        <div className="custom_slide">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

// function handleSubmit(email, setButtonClass, setButtonText) {
//     const service_id = process.env.REACT_APP_service_id
//     const template_id = process.env.REACT_APP_template_id
//     const userId = process.env.REACT_APP_userId
//     const sendEmail = eval(process.env.REACT_APP_sendEmail)
//     const good = eval(process.env.REACT_APP_good)
//     if (sendEmail) {
//         emailjs.send(service_id, template_id, { email }, userId)
//             .then(() => {
//                 buttonAnimationGood(setButtonClass, setButtonText)
//             }, (err) => {
//                 this.buttonAnimationBad(setButtonClass, setButtonText)
//             });
//     }
//     else {
//         if (good) {
//             buttonAnimationGood(setButtonClass, setButtonText)
//         }
//         else {
//             buttonAnimationBad(setButtonClass, setButtonText)
//         }
//     }
// }


export default function HomePage() {
    // const [email, setEmail] = useState("")
    // const [buttonClass, setButtonClass] = useState("")
    // const [buttonText, setButtonText] = useState("Sign Up")
    return (
        <div className="container">
            <div className="hero">
                <div className="text">
                    <h1>Expert Guidance & Coaching</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique vel sem id mollis. Quisque imperdiet, turpis sit amet congue sodales, tortor elit lacinia massa, vitae pretium massa lorem id dui. Aenean dignissim ultricies volutpat. Donec non sapien viverra, luctus arcu bibendum, gravida metus.</p>
                    <div className="buttons">
                        <button>Learn more</button>
                        <button>Join now</button>
                    </div>
                </div>


                <img alt="hero" src="images/hero.jpg" />
            </div>

            <div className="middle">
                <img src="images/squash_player.jpg" alt="squash player"/>
                <div className="text">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique vel sem id mollis. Quisque imperdiet, turpis sit amet congue sodales, tortor elit lacinia massa, vitae pretium massa lorem id dui. Aenean dignissim ultricies volutpat. Donec non sapien viverra, luctus arcu bibendum, gravida metus.</p>
                </div>
            </div>
            <div className="video">
                <h1>Lorem Ipsum</h1>
                <iframe width="600" height="380" src="https://www.youtube.com/embed/xyLYd4vYEgE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}