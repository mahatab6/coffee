import React from 'react';
import Rectangle1 from '../assets/images/cups/Rectangle 9.png'
import Rectangle2 from '../assets/images/cups/Rectangle 10.png'
import Rectangle3 from '../assets/images/cups/Rectangle 11.png'
import Rectangle4 from '../assets/images/cups/Rectangle 12.png'
import Rectangle5 from '../assets/images/cups/Rectangle 13.png'
import Rectangle6 from '../assets/images/cups/Rectangle 14.png'
import Rectangle7 from '../assets/images/cups/Rectangle 15.png'
import Rectangle8 from '../assets/images/cups/Rectangle 16.png'

const FollowUs = () => {
    return (
        <div className='w-10/12 mx-auto md:mb-20'>
            <div className='py-20 text-center'>
                <p className='text-base '>Follow Us Now</p>
                <h1 className='text-2xl font-bold pt-5'>Follow on Instagram</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center' >
                <img src={Rectangle1} alt="" />
                <img src={Rectangle2} alt="" />
                <img src={Rectangle3} alt="" />
                <img src={Rectangle4} alt="" />
                <img src={Rectangle5} alt="" />
                <img src={Rectangle6} alt="" />
                <img src={Rectangle7} alt="" />
                <img src={Rectangle8} alt="" />
            </div>
        </div>
    );
};

export default FollowUs;