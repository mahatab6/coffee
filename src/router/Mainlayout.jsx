import React from 'react';
import Navber from '../pages/Navber';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Mainlayout;