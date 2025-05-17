import React, { useContext } from 'react';
import navbg from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import users from '../assets/images/more/users.png'

const Navber = () => {

    const {user, signOutUser} = useContext (AuthContext);

    console.log(user)
    
    const handelSignOut = () => {
        signOutUser()
        .then (()=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign-Out Done",
                showConfirmButton: false,
                timer: 1500
                });
        });

    }

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
                <div className="avatar mr-5">

                    {
                         user?
                        <div className="w-10 rounded-full">
                        <img src={users} /> </div> : <span className="loading loading-spinner loading-xs"></span>
                    }
                </div>
            {
                user? <Link onClick={handelSignOut} className='btn btn-sm  '>Sign-Out</Link> : <Link to="/sign-in"><button className='btn btn-sm '>Sign-In</button></Link>
            }
            </div>

        </div>
    );
};

export default Navber;