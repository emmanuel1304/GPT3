import React from 'react'
import './footer.css'






const Footer = () => {
  return (
    <div className='footer section-padding gradient-bg'> 
        <div className='footer-logo'> 
            <h1>GPT-3</h1>
        </div>
        <div className='footer-header'> 
            <h1>Possibilities beyond your imagination</h1>
        </div>
        <div className='footer-links-container'>
            <div className='footer-contact-us'>
                 <h3>Contact Us</h3>
                 <div className='footer-form'>
                     <input type='email' placeholder='Your Email Address'/>
                     <input type="text" placeholder='Your FullName'/>
                     <textarea placeholder='Your Message Here'/>
                     <button>Send Message</button>
                 </div>
            </div> 
            <div className='links-container'>
                <div className='links-1'> 
                    <p>Link Here</p>
                    <p>Link Here</p>
                    <p>Link Here</p>
                    <p>Link Here</p>
                    <p>Link Here</p>
                    <p>Link Here</p>
                </div>
                <div className='links-2'> 
                    <p>Link Here</p>
                    <p>Link Here</p>
                    <p>Link Here</p>
                    <p>Link Here</p>
                    <p>Link Here</p>
                    <p>Link Here</p>
                </div>
                <div className='links-3'> 
                    <p>Link Here</p>
                    <p>Link Here</p>
                    <p>Link Here</p>
                    <p>Link Here</p>
                    <p>Link Here</p>
                    <p>Link Here</p>
                </div>
            </div>
        </div>
        <div className='copyright'> 
            <p>Made With Love By Lucky</p>
        </div>
    </div>
  )
}

export default Footer