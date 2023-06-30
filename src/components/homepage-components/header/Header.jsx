import React from 'react'
import './header.css'
import ai from '../../../assets/ai.png'
import { useSpring, animated } from 'react-spring'



const Header = () => {
  
  const fade = useSpring({ 
    from:{opacity:0},
    to: {opacity:5}
  })  

  return (
    <animated.div className='header section-padding' id='header' style={fade}> 
        <div className='header-text-container'> 
            <div className='header-h1-container'>
                <h1>AI is the future of mankind moving us to greater places</h1>
            </div>
            <div className='header-paragraph-container'>
                <p>Welcome to a new world of intelligence with ChatGPT, bringing life to the world with chatGPT, Open AI's attificial intelligence model, the future of intelligent machines. A new dawn is arising on earth where machines take over the day to day activities of humans, making life much easier.</p> 
            </div>
            <div className='header-text-button-container'>  
                <input type="email" required placeholder='Enter Your Email' />
                <button>Get Started</button>
            </div>
        </div>
        <div className='header-image-container'> 
            <img src={ai} alt='ai'/>
        </div>
    </animated.div>
  )
}

export default Header