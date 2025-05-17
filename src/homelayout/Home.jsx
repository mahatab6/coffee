import React, { useState } from 'react';
import Hero from './Hero';
import Making from './Making';
import Bookingcoffee from './Bookingcoffee';
import CoffeeDisplay from './CoffeeDisplay';
import { useLoaderData } from 'react-router';
import FollowUs from './FollowUs';
import Swal from 'sweetalert2';

const Home = () => {
    const coffeeData = useLoaderData();

    const [coffee, setCoffee] = useState (coffeeData);
    
     const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/coffees/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });
                }
            })


        const remaining = coffee.filter(coffee => coffee._id !== _id);
        setCoffee(remaining);  
  }
});
    }

    return (
        <div>
            <Hero/>
            <Making/>
            <Bookingcoffee/>

            <div className=' w-10/12 mx-auto pt-10 grid lg:grid-cols-2 gap-5'>
                {
                    coffee.map((coffee) => <CoffeeDisplay coffee ={coffee} handleDelete ={handleDelete} />)
                }
            </div>
            <FollowUs/>
        </div>
    );
};

export default Home;