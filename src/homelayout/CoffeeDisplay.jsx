import React from 'react';
import { FaEye } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';
import Swal from 'sweetalert2';



const CoffeeDisplay = ({coffee ,handleDelete}) => {
    const {name,photo,chef,price,_id,} = (coffee);

   

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
                        <Link to={`/coffees/${_id}`}><button className="btn join-item bg-[#D2B48C]"><FaEye  size={25} className='text-white'/></button></Link>
                        <Link to={`/update/${_id}`}><button className="btn join-item bg-[#5C5B5B]"><MdModeEdit size={25} className='text-white'/></button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item bg-[#EA4744]"><MdDelete size={25} className='text-white' /></button>
                    </div>
                </div>
        </div>
    );
};

export default CoffeeDisplay;