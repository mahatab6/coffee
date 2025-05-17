import { BsCup } from "react-icons/bs";
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';


const Bookingcoffee = () => {
    
    return (
        <div className='w-10/12 mx-auto'>
            <div className=' justify-items-center space-y-3 py-16 '>
                <p className=' text-base'>--- Sip & Savor ---</p>
                <h1 className=' text-3xl'>Our Popular Products</h1>
               <Link to="/coffee-order"><button className=' text-white flex items-center text-2xl btn bg-[#E3B577] border-1 border-[#331A15]'>Add Coffee <BsCup className='text-black' size={25}/></button></Link>
            </div>
        </div>
    ); 
};

export default Bookingcoffee;