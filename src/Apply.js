import "./App.css";
import "./Apply.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Apply = () => {
    
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_relkhhd', 'template_knnmgqi', form.current, 'tK7MeH4y1qa4niNRn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };


    return (
        <div className="total-apply">
             <div className="apply-section" id="apply">
            <div className="heading-large heading-large-apply">Apply</div>
            <div className="text-small text-small-apply">Life is short. Go for it.</div>
           
        <form ref={form} onSubmit={sendEmail}>
            <div className="apply-flex">
                <div className="gradient-box-apply-small">
                        <input type="text" placeholder="Your Name" name="name" className="input-small text-small"/>
                </div>
                <div className="gradient-box-apply-small">
                    <input type="email" placeholder="Your Email" name="email" className="input-small text-small"/>
                </div>
            </div>
            <div className="gradient-box-apply-large">
                <textarea cols="30" rows="8"type="text" placeholder="Tell us what you really think" name="message" className="input-large text-small"/>
            </div>
            <div>
                <input type="submit" value="GO FOR IT" className="button-apply text-small text-small-apply"/>
            </div>
        </form>
        </div>     
        </div>
           
    )
}

export default Apply; 