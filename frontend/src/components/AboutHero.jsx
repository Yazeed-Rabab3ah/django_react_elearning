import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import HomeHeroImg from "../assets/HomeHeroImg.jpeg";
import AboutHeroImg from "../assets/aboutHeroImg.jpeg";




const HomeHero = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="mt-[-110px]" >
  {/* Hero Section */}
  <section>
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      {/* Text Content */}
      <div className=" mt-12 flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-4xl font-bold leading-none sm:text-3xl">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </h1>
        <p className="mt-5 mb-8 text-lg sm:mb-1">
        EduMate is an innovative eLearning platform designed to revolutionize the way students and educators engage with education. By offering a seamless and intuitive interface,
        </p>
        <p className="mt-5 mb-8 text-lg sm:mb-1">
        One of the standout features of EduMate is its adaptability to different learning styles and paces. The platform uses sophisticated algorithms to analyze each user's strengths and weaknesses, tailoring the content to meet individual needs.
        </p>
        <p className="mt-5 mb-8 text-lg sm:mb-10">
        EduMate also places a strong emphasis on community and collaboration, recognizing that learning is often a social process.
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <div className="flex">
            <button
              className="text-white hover:text-black border border-black bg-black hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5"
              onClick={() => navigate("/Courses")}
            >
              Start Learning now
            </button>

            <button
              className="text-black hover:text-white border border-black bg-white hover:bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center -ml-1"
              onClick={() => navigate("/Courses")}
            >
              Explore Courses
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="mt-40 flex items-center justify-center p-6  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img
          src={AboutHeroImg}
          alt="Hero Image"
          className=" mt-50 object-contain h-150" // Simplified height class
        />
      </div>
    </div>
  </section>
</div>
  );
};

export default HomeHero;