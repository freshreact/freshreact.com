import React, { Component } from 'react';
import "./Contact.css";
import emailjs from 'emailjs-com';

class Contact extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render(){

        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('default_service', 'contactform', e.target,  "user_CmDv065oEO1CoPph9hrjc")
              .then((result) => {
                  console.log(result.text);
                  alert("Woohoo! Your message has been sent!")
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
        }

        return(
            <div className="contact-container">
                <div className="contact-contain">
                    <p>Want to talk tech?<br></br>Interested in building your own website?<br></br>Want to just say hi?<br></br>Send me a message!</p>
                    <br></br>
                    <hr></hr>
                    <div className="form-contain">
                    <form className="contact-form" onSubmit={sendEmail}>
                        <label className="form-label">Name</label>
                        <br></br>
                        <input type="text" name="user_name" required />
                        <br></br>
                        <label className="form-label">Email</label>
                        <br></br>
                        <input type="email" name="user_email" required />
                        <br></br>
                        <label className="form-label">Message</label>
                        <br></br>
                        <textarea name="message" />
                        <br></br>
                        <input style={{ color: "#ffffff"}} type="submit" value="Send" />
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;