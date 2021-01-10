import React, { Component } from "react"

// import emailjs from "emailjs-com"

export default class ContactPage extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         FirstName: "",
    //         LastName: "",
    //         Email: "",
    //         State: "",
    //         City: "",
    //         Company: "",
    //         Phone: "",
    //         Message: "",
    //         buttonText: "Send Message",
    //         buttonClass: "",
    //     }

    // }

    // handleSubmit() {
    //     const url = process.env.REACT_APP_salesforce_url
    //     const {FirstName, LastName, Email, State, City, Company, Phone, Message} = this.state
    //     const newObj = {leadreq: {FirstName, LastName, Email, State, City, Company, Phone, Message}}
    //     fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newObj)
    //     })
    //         .then(res => res.text())
    //         .then(text => {
    //             this.buttonAnimationGood()
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             this.buttonAnimationBad()
    //         })
    //     // .then(json => console.log(json))
    //     // .catch(err => {
    //     //     console.log(err)
    //     // })

    //     // TODO: Connect to sailsforce backend  

    //     // OLD CODE TO SEND EMAILS
    //     // const service_id = process.env.REACT_APP_service_id
    //     // const template_id = process.env.REACT_APP_template_id
    //     // const userId = process.env.REACT_APP_userId
    //     // const sendEmail = eval(process.env.REACT_APP_sendEmail)
    //     // const good = eval(process.env.REACT_APP_good)
    //     // console.log(good, sendEmail)
    //     // if (sendEmail) {
    //     //     emailjs.send(service_id, template_id, this.state, userId)
    //     //         .then(() => {
    //     //             this.buttonAnimationGood()
    //     //         }, (err) => {
    //     //             this.buttonAnimationBad()
    //     //         });
    //     // }
    //     // else {
    //     //     if(good) {
    //     //         this.buttonAnimationGood()
    //     //     }
    //     //     else {
    //     //         this.buttonAnimationBad()
    //     //     }
    //     // }
    // }

    // resetButton() {
    //     this.setState({ buttonClass: "", buttonText: "Send Message" })
    // }

    // buttonAnimationGood() {
    //     this.setState({ buttonClass: "good", buttonText: "Message Sent" })
    //     window.setTimeout(() => this.resetButton(), 5000)
    // }

    // buttonAnimationBad() {
    //     this.setState({ buttonClass: "bad", buttonText: "Message Error" })
    //     window.setTimeout(() => {
    //         alert("Something went wrong on our end\n please wait a few minutes and try again")
    //         this.resetButton()
    //     }, 1000)
    // }


    render() {
        const { FirstName, LastName, Message, Company, Phone, buttonText, buttonClass } = this.state
        return (
            <div className="container">
                <div className="contact-us">
                    <h2>Contact Us</h2>
                    <div className="container">
                        <img src="images/contact-background.jpg" />
                        <div className="contactForm">
                            <div className="same-line">
                                <input type="text" value={FirstName} onChange={(e) => this.setState({ FirstName: e.target.value })} placeholder="First name" />
                                <input type="text" value={LastName} onChange={(e) => this.setState({ LastName: e.target.value })} placeholder="Last name" />
                            </div>
                            {/* <input type="text" value={Email} onChange={(e) => this.setState({ Email: e.target.value })} placeholder="Your Email address" /> */}
                            <div className="same-line">
                                <input type="text" value={Company} onChange={(e) => this.setState({ Company: e.target.value })} placeholder="Company" />
                                <input type="text" value={Phone} onChange={(e) => this.setState({ Phone: e.target.value })} placeholder="Phone" />
                            </div>
                            <div className="message">
                                <textarea type="text" value={Message} onChange={(e) => this.setState({ Message: e.target.value })} placeholder="Your Message" />
                            </div>
                            {/* <button type="submit" className={buttonClass} onClick={this.handleSubmit.bind(this)}>{buttonText}</button> */}
                        </div>
                        <div className="address">
                            <div className="info">
                                <p>Find us here</p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8321049701635!2d-122.44672298455107!3d37.770534779760276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580acf242cacb%3A0x62795a8658874343!2s1352%20Haight%20St%2C%20San%20Francisco%2C%20CA%2094117!5e0!3m2!1sen!2sus!4v1594595705918!5m2!1sen!2sus" width="270" height="120" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" title="map"></iframe>
                                <p>Contact us here</p>
                                <p>
                                    4304 18th, PO Box 14671 <br />
                                    San Francisco, CA 94114-9991 <br />
                                    Phone: 415-465-2534 <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}