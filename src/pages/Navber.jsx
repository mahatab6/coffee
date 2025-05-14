import React from 'react';
import navbg from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'

const Navber = () => {
    return (
        <div>
            <div className="navbar justify-center bg-base-100 shadow-sm" style={{background:`url(${navbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <img className='w-[50px]' src={logo} alt="" />
                 <a className=" text-white text-2xl ">Espresso Emporium</a>
            </div>
        </div>
    );
};

export default Navber;