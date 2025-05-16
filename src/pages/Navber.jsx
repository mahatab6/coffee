import React from 'react';
import navbg from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'

const Navber = () => {
    return (
        <div>
          <div className="flex items-center justify-between bg-base-100 shadow-sm px-4" style={{ background: `url(${navbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-[50px]"></div>
            <div className="flex items-center space-x-2 mx-auto">
                <img className='w-[50px]' src={logo} alt="" />
                <a className="text-white text-2xl">Espresso Emporium</a>
            </div>
            <button className='btn btn-sm '>Sign-In</button>
            </div>

        </div>
    );
};

export default Navber;