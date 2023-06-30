import React from 'react'
import './whatgpt3.css'
import cyber1 from '../../../assets/cyber1.jpg'




const WhatGPT3 = () => {
  return (
    <div className='whatgpt3-container section-padding' id='whatgpt3'> 
        <div className='whatgpt3-image-container'> 
            <img src={cyber1} />
        </div>
        <div className='whatgpt3-text-container'> 
            <div className='whatgpt3-text-h1-container'> 
                <h1>What is the meaning of GPT3</h1>
            </div>
            <div className='line'></div>
            <div className='whatgpt3-text-paragraph-container'> 
                <p>  
                    Chat GPT is an artificial intelligence, created by the company 
                    Open AI owend by the famous billonier (Elon Musk). GPT is an AI 
                    model with high intelligence capabilities built to assist humans 
                    with daunting tasks. Although GPT is still a text based AI model for now,
                    but is capable of generating images. GPT4 has proven to me more intelligent than mobile and home assitance AI models
                    like Siri and Alexa...etc. GPT is the future of intelligence.
                </p>
            </div>
            <div className='whatgpt3-text-button-container'> 
                <button>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default WhatGPT3