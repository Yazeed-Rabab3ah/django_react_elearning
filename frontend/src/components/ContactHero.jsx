import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import HomeHeroImg from "../assets/HomeHeroImg.jpeg";
import AboutHeroImg from "../assets/aboutHeroImg.jpeg";
import { FaFacebook,FaLinkedin,FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from './ContactForm';



const HomeHero = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div>
  {/* Hero Section */}
  <section>
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      {/* Text Content */}
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-6xl font-bold leading-none sm:text-5xl">
        Contact us
        </h1>
        <p className="my-7 text-lg ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="hidden md:flex space-x-4">
            <IoMdMail  className="my-2 w-6 h-6 text-black hover:text-blue-600 cursor-pointer" /><p className='mt-1.5 text-lg'>hello@relume.io</p>
        </div>

        <div className="hidden md:flex space-x-4">
            <FaPhoneAlt className="my-2 w-6 h-6 text-black hover:text-blue-600 cursor-pointer" /><p className='mt-1.5 text-lg'>+1 (555) 000-0000</p>
        </div>
        <div className="hidden md:flex space-x-4">
            <FaLocationDot className="my-2 w-6 h-6 text-black hover:text-blue-600 cursor-pointer" /><p className='mt-1.5 text-lg'>123 Sample St, Sydney NSW 2000 AU</p>
        </div>
        


      </div>

      {/* Form */}
      <div className="flex items-center justify-center mx-60 p-6 mt-8 lg:mt-0 w-full max-w-md aspect-square">
  <ContactForm />
</div>

    </div>
  </section>
</div>
  );
};

export default HomeHero;