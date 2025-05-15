import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";


const DetailsCoffee = () => {

    const {id} = useParams ();

    const [data, setData] = useState (null);
    
    useEffect (() => {

        fetch(`http://localhost:5000/coffees/${id}`)
        .then(res => res.json())
        .then(data => setData(data) )
    }, [id]);

   if (!data) {
        return <p>Loading...</p>;
    }


    const {photo,name,chef,supplier,taste,category,details} = data; 


    return (
        <div className='w-10/12 mx-auto'>
            <Link to="/"><h1 className='text-xl flex items-center pt-10'><FaArrowLeft />Back to home</h1></Link>
            <div className='md:flex justify-around justify-items-center py-20 items-center bg-amber-200 my-20 rounded-xl'>
                <img className="w-[250px] h-[355px]" src={photo} alt="" />
                <div>
                    <h1 className='text-xl font-bold'>Name: {name}</h1>
                    <p className='text-xl font-bold'>Chef: {chef}</p>
                    <p className='text-xl font-bold'>Supplier: {supplier}</p>
                    <p className='text-xl font-bold'>Taste: {taste}</p>
                    <p className='text-xl font-bold'>Category: {category}</p>
                    <p className='text-xl font-bold'>Details: {details}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default DetailsCoffee;