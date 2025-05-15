import React from 'react';
import img1 from '../assets/images/icons/1.png'
import img2 from '../assets/images/icons/2.png'
import img3 from '../assets/images/icons/3.png'
import img4 from '../assets/images/icons/4.png'

const Making = () => {
    return (
        <div className='w-10/12 mx-auto pt-10'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-items-center '>
                <div>
                    <div className='w-72 p-2 space-y-2'>
                        <img className='w-16 ' src={img1} alt="" />
                        <h1 className=' text-2xl'>Awesome Aroma</h1>
                        <p className='text-base '>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                </div>
                <div>
                    <div className='w-72 p-2 space-y-2'>
                        <img className='w-16 ' src={img2} alt="" />
                        <h1 className=' text-2xl'>High Quality</h1>
                        <p className='text-base'>We served the coffee to you maintaining the best quality</p>
                    </div>
                </div>
                <div>
                    <div className='w-72 p-2 space-y-2'>
                        <img className='w-16 ' src={img3} alt="" />
                        <h1 className=' text-2xl'>Pure Grades</h1>
                        <p className='text-base'>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                </div>
                <div>
                    <div className='w-72 p-2 space-y-2'>
                        <img className='w-16 ' src={img4} alt="" />
                        <h1 className=' text-2xl'>Proper Roasting</h1>
                        <p className='text-base'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Making;