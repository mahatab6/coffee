import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {

    const {signIn, signInGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate ();

    const handleSingIn = e => {
        e.preventDefault();
        const form = e.target;   
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
        .then(() => {
            Swal.fire({
                title: "Sing-IN Done!",
                icon: "success",
                draggable: true
                 });
            navigate(location?.state || '/')
        })
        
    
    };

    const handleGoogle = () => {
        signInGoogle()
        .then(() => {
                Swal.fire({
                    title: "Sing-In Done Whit Google!",
                    icon: "success",
                    draggable: true
                    });
                navigate(location?.state || '/')
            })
    }



    return (
       <div className='w-10/12 mx-auto'>
            <div className="w-full max-w-md mx-auto my-20 p-4 rounded-md shadow sm:p-8">
                <h2 className="mb-3 text-3xl font-semibold text-center">Sign In to your account</h2>
                <div onClick={handleGoogle} className="my-6 space-y-4">
                    <button aria-label="Sing up with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Sing in with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr  className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr  className="w-full dark:text-gray-600" />
                </div>
                <form onSubmit={handleSingIn} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email"  placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password"  placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                    </div>
                    <button type="submite" className="w-full px-8 py-3 font-semibold rounded-md bg-amber-500">Sign IN</button>
                </form>
                <p className='text-base text-center pt-3'>New here? Create an <Link to="/sign-up" className='text-green-500'>Espresso Emporium account</Link></p>
            </div>
        </div>
    );
};

export default SignIn;