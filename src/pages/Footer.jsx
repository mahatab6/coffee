import React from 'react';
import logo from '../assets/images/more/logo1.png'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import navbg from '../assets/images/more/15.jpg'
import logos from '../assets/images/more/logo1.png'



const Footer = () => {
    return (
        <footer className='pt-20 bg-base-300'>
            <div className='flex flex-col-reverse md:flex-row pb-5 justify-between w-10/12 mx-auto'>
                <div className=' space-y-8'>
                    <div className='flex items-center'>
                        <img className='w-[50px]' src={logo} alt="" />
                        <h1 className='text-xl font-bold' >Espresso Emporium</h1>
                    </div>
                    <p className='text-base'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                    <div className='flex space-x-2'>
                        <FaFacebook size={30} />
                        <FaYoutube size={30} />
                        <FaTwitter size={30} />
                         <FaSquareInstagram size={30} />
                    </div>
                    <h1 className='text-xl font-bold'>Get in Touch</h1>
                    <div>
                        <h1 className='flex items-center gap-2'><IoCall /> 8801783-64595</h1>
                        <h1 className='flex items-center gap-2'><IoMdMail /> hello@espresso.com</h1>
                        <h1 className='flex items-center gap-2'><MdLocationOn /> Q6MF+V2, Saliabakpur Union</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Connect with Us</h1>
                    <form>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input type="name" name="name" id="name" placeholder="Enter your name" className="w-full px-5 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email address" className="w-full px-5 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                            <input type="text" name="message" id="message" placeholder="Write your opinion" className="w-full px-5 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </form>
                    <button className='btn mt-3'>Send Message</button>
                </div>
            </div>
             <div className="navbar justify-center bg-base-100 shadow-sm" style={{background:`url(${navbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <img className='w-[50px]' src={logos} alt="" />
                        <a className=" text-white text-2xl ">Espresso Emporium</a>
            </div>
        </footer>
    );
};

export default Footer;