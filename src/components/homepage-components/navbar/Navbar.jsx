import React from 'react'
import './navbar.css'
import logo from '../../../assets/logo.png'
import {RiMenu3line, RiCloseLine} from 'react-icons/ri'



const Navbar = () => {
  return (
    <div className='navbar'> 
        <div className='navbar-links'> 
            <div className='navbar-links-logo'> 
                <img src={logo} alt='logo'/>
            </div>
            <div className='navbar-links-container'> 
                <p><a href='#home'>Home</a></p>
                <p><a href='#whatgpt3'>What is GPT</a></p>
                <p><a href='#possibility'>Open AI</a></p>
                <p><a href='#features'>Case Studies</a></p>
                <p><a href='#blog'>Library</a></p>
            </div>
            <div className='navbar-links-buttons'>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar