import './landing.css'
import { Brand, Blog, Possibility, Features, Header, Navbar, CTA, Footer, WhatGPT3 } from '../components';





function Landing(){ 
     return ( 
        <div className='App'> 
            <div className='gradient-bg'> 
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
     );
}

export default Landing;