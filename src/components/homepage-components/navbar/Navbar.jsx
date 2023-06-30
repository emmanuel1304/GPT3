import React from 'react'
import './navbar.css'
import logo from '../../../assets/logo.png'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import { useState } from 'react'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar'> 
        <div className='navbar-links'> 
            <div className='navbar-links-logo'> 
                <h2>GPT-3</h2>
            </div>
            <div className='navbar-links-container'> 
                <p><a href='#header'>Home</a></p>
                <p><a href='#whatgpt3'>What is GPT</a></p>
                <p><a href='#possibility'>Open AI</a></p>
                <p><a href='#features'>Case Studies</a></p>
                <p><a href='#blog'>Library</a></p>
            </div>
            <div className='navbar-links-buttons'>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
            <div className='navbar-menu'>  
                {toggleMenu  
                ?  <RiCloseLine color='#fff' size={27} onClick={() => {setToggleMenu(false)}}/> 
                :  <RiMenu3Line color='#fff' size={27} onClick={() => {setToggleMenu(true)}}/> 
                }
                {toggleMenu && ( 
                    <div className='navbar-menu-container scale-up-center'> 
                        <div className='navbar-menu-links'> 
                            <p><a href='#home'>Home</a></p>
                            <p><a href='#whatgpt3'>What is GPT</a></p>
                            <p><a href='#possibility'>Open AI</a></p>
                            <p><a href='#features'>Case Studies</a></p>
                            <p><a href='#blog'>Library</a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar