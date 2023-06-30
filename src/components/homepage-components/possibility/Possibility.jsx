import React from 'react'
import './possibility.css'
import hacker from '../../../assets/hacker3.jpg'



const Possibility = () => {
  return (
    <div className='main-possibility section-padding'>
        <div className='possibility'>
            <div className='possibility-image'> 
                <img src={hacker} />
            </div> 
            <div className='possibility-text'> 
                <p>Request early access to get started</p>
                <h1>the possibilities are beyond your imagination</h1>
                <p>experiencing the power of artifficial intelligence with the new and powerful AI model, chatGPT, the future in the present.</p>
                <p>request early access to get started</p>
            </div>
        </div>
        <div className='possibility-banner gradient-bg'> 
            <p>register today and start exploring endless possibilities.</p>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Possibility