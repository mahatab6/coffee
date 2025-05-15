import React from 'react';
import { FaEye } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";






// category: "Hot"
// chef: "John"
// details: "Rich in flavor"
// name: "Latte"
// photo: "https://i.ibb.co/XZTgcWPD/1.png"
// price: "5.99"
// quantity: "10"
// supplier: "Star Beans"
// taste: "Smooth"
// _id: "6824c6c78e5a3304070c4936"


const CoffeeDisplay = ({coffee}) => {
    const {name,photo,chef,price} = (coffee);
    return (
        <div className='md:flex items-center gap-5 justify-center bg-yellow-100 md:justify-around rounded-xl'>
            <img src={photo} alt="" />
           
                <div className='flex items-center space-x-10 justify-center'>
                    <div>
                        <h1 className='text-xl font-medium'>Name: {name}</h1>
                        <p className='text-xl font-medium'>Chef: {chef}</p>
                        <p className='text-xl font-medium'>Price: {price}</p>
                    </div>
                    <div className="join join-vertical space-y-2">
                        <button className="btn join-item bg-[#D2B48C]"><FaEye  size={25} className='text-white'/></button>
                        <button className="btn join-item bg-[#5C5B5B]"><MdModeEdit size={25} className='text-white'/></button>
                        <button className="btn join-item bg-[#EA4744]"><MdDelete size={25} className='text-white' /></button>
                    </div>
                </div>
                
           
        </div>
    );
};

export default CoffeeDisplay;