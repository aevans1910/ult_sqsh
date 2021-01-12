import React, { Component } from "react"

import emailjs from "emailjs-com"

export default class ContactPage extends Component {
    constructor(props) {
        super(props)
        emailjs.init("<MY USER ID>")

        this.state = {
            FirstName: "",
            LastName: "",
            Email: "",
            State: "",
            City: "",
            Company: "",
            Phone: "",
            Message: "",
            buttonText: "Send Message",
            buttonClass: "",
        }

    }

    handleSubmit() {
        const service_id = process.env.REACT_APP_service_id
        const template_id = process.env.REACT_APP_template_id
        const userId = process.env.REACT_APP_userId
        const sendEmail = eval(process.env.REACT_APP_sendEmail)
        const good = eval(process.env.REACT_APP_good)
        console.log(good, sendEmail)
        if (sendEmail) {
            emailjs.send(service_id, template_id, this.state, userId)
                .then(() => {
                    this.buttonAnimationGood()
                }, (err) => {
                    this.buttonAnimationBad()
                });
        }
        else {
            if(good) {
                this.buttonAnimationGood()
            }
            else {
                this.buttonAnimationBad()
            }
        }
    }

    resetButton() {
        this.setState({ buttonClass: "", buttonText: "Send Message" })
    }

    buttonAnimationGood() {
        this.setState({ buttonClass: "good", buttonText: "Message Sent" })
        window.setTimeout(() => this.resetButton(), 5000)
    }

    buttonAnimationBad() {
        this.setState({ buttonClass: "bad", buttonText: "Message Error" })
        window.setTimeout(() => {
            alert("Something went wrong on our end\n please wait a few minutes and try again")
            this.resetButton()
        }, 1000)
    }


    render() {
        const { name, message, email, company, phone, buttonText, buttonClass } = this.state
        return (
            <div className="container">
                <div className="contact-us">
                    <h2>Contact Us</h2>
                    <div className="container">
                        <div className="contactForm">
                            <div className="same-line">
                                <input type="text" value={name} onChange={(e) => this.setState({ name: e.target.value })} placeholder="Name" />
                                <input type="text" value={email} onChange={(e) => this.setState({ email: e.target.value })} placeholder="Email" />
                            </div>
                            {/* <input type="text" value={Email} onChange={(e) => this.setState({ Email: e.target.value })} placeholder="Your Email address" /> */}
                            <div className="same-line">
                                <input type="text" value={company} onChange={(e) => this.setState({ company: e.target.value })} placeholder="Company" />
                                <input type="text" value={phone} onChange={(e) => this.setState({ phone: e.target.value })} placeholder="Phone" />
                            </div>
                            <div className="message">
                                <textarea type="text" value={message} onChange={(e) => this.setState({ message: e.target.value })} placeholder="Your Message" />
                            </div>
                            <button type="submit" className={buttonClass} onClick={this.handleSubmit.bind(this)}>{buttonText}</button>
                        </div>
                        <div className="address">
                            <div className="info">
                                <p>Contact us here</p>
                                <p>
                                    XXX XXXXXX XXXX <br />
                                    San Francisco, CA XXXXX <br />
                                    Phone: XXX-XXX-XXXX <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}