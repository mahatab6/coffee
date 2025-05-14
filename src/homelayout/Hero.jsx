import React from 'react';
import hero from '../assets/images/more/3.png'

const Hero = () => {
    return (
        <div>
            <div className='md:py-80 md:pl-208 py-10 px-5  text-white space-y-4' style={{background: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat',}}>
                <h1 className='md:text-5xl text-2xl'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-base'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='md:text-2xl text-xl btn bg-[#E3B577]'>Learn More</button>
            </div>
        </div>
    );
};

export default Hero;