import React from 'react';
import navbg from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'
import { Link } from 'react-router';

const Navber = () => {
    return (
        <div>
          <div className="flex items-center justify-between bg-base-100 shadow-sm px-4" style={{ background: `url(${navbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-[50px]"></div>
            <div className=" space-x-2 mx-auto">
                <Link to="/" className='flex items-center'>
                <img className='w-[50px]' src={logo} alt="" />
                <a className="text-white text-2xl">Espresso Emporium</a>
                </Link>
            </div>
            <Link to="/sing-in"><button className='btn btn-sm '>Sign-In</button></Link>
            </div>

        </div>
    );
};

export default Navber;