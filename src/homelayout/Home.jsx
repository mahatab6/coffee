import React from 'react';
import Hero from './Hero';
import Making from './Making';
import Bookingcoffee from './Bookingcoffee';
import CoffeeDisplay from './CoffeeDisplay';
import { useLoaderData } from 'react-router';

const Home = () => {
    const coffeeData = useLoaderData();
    return (
        <div>
            <Hero/>
            <Making/>
            <Bookingcoffee/>

            <div className=' w-10/12 mx-auto pt-10 grid lg:grid-cols-2 gap-5'>
                {
                    coffeeData.map((coffee) => <CoffeeDisplay coffee ={coffee} />)
                }
            </div>
            
        </div>
    );
};

export default Home;