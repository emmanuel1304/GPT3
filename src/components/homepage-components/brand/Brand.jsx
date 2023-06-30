import React from 'react'
import './brand.css'
import cyber3 from '../../../assets/cyber3.jpg'
import cyber4 from '../../../assets/cyber4.jpg'
import cyber6 from '../../../assets/cyber6.jpg'
import cyber7 from '../../../assets/cyber7.jpg'



const Brand = () => {
  return (
    <div className='brand-container section-padding' id='brand'> 
        <div className='brand-image-container'> 
            <img src={cyber3} />
        </div>
        <div className='brand-image-container'> 
            <img src={cyber4} />
        </div>
        <div className='brand-image-container'> 
            <img src={cyber6} />
        </div>
        <div className='brand-image-container'> 
            <img src={cyber7} />
        </div>
    </div>
  )
}

export default Brand