import React from 'react'
import './blog-component.css'




const Blog_component = ({imgUrl, date, title}) => {
  return (
    <div className='component'> 
        <div className='component-image'> 
            <img src={imgUrl} />
        </div>
        <div className='component-text'> 
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
            </div>  
            <p>Read Full Article</p>  
        </div>
    </div>
  )
}

export default Blog_component