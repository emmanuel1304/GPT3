import React from 'react'
import './blog.css'
import Blog_component from './blog-component'
import musk1 from '../../../assets/musk1.png'
import musk4 from '../../../assets/musk4.jpg'
import musk5 from '../../../assets/musk5.jpg'
import musk6 from '../../../assets/musk6.jpg'
import person2 from '../../../assets/person2.png'



const Blog = () => {
  return (
    <div className='blog section-padding'> 
        <div className='blog-container-header'> 
            <h1>Alot is happening and we are blogging it</h1>
        </div>
        <div className='blog-container'>
            <div className='blog-container-groupB'>
                <Blog_component imgUrl={musk1} date='16th June 2023' title='Elon Musk Planning to invest billions in AI'/> 
                <Blog_component imgUrl={musk1} date='16th June 2023' title='Elon Musk Planning to invest billions in AI'/>
                <Blog_component imgUrl={musk1} date='16th June 2023' title='Elon Musk Planning to invest billions in AI'/> 
                <Blog_component imgUrl={musk1} date='16th June 2023' title='Elon Musk Planning to invest billions in AI'/> 
                <Blog_component imgUrl={musk1} date='16th June 2023' title='Elon Musk Planning to invest billions in AI'/> 
                <Blog_component imgUrl={musk1} date='16th June 2023' title='Elon Musk Planning to invest billions in AI'/> 
            </div>
        </div>    
    </div>
  )
}

export default Blog