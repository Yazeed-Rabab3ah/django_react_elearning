import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import HomeHeroImg from "../assets/HomeHeroImg.jpeg";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

const HomeHero = () => {
  const navigate = useNavigate(); 

  return (
    <div  className="mt-[-150px]" >
      {/* Hero Section */}
      <section>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          {/* Text Content */}
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Learn new skills online with ease
            </h1>
            <p className="mt-6 mb-8 text-xl sm:mb-12">
              Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>

            {/* Buttons */}
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <div className="flex">
                <button
                  className="text-white hover:text-black border border-black bg-black hover:bg-white font-medium rounded-lg text-lg px-8 py-3 text-center mr-5 transition duration-300"
                  onClick={() => navigate("/courses")}
                >
                  Start Learning now
                </button>

                <button
                  className="text-black hover:text-white border border-black bg-white hover:bg-black font-medium rounded-lg text-lg px-8 py-3 text-center transition duration-300"
                  onClick={() => navigate("/courses")}
                >
                  Explore Courses
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-10 w-full lg:w-1/2 h-96 sm:h-112 lg:h-auto">
            <img
              src={HomeHeroImg}
              alt="Hero Image"
              className="object-contain h-full w-full"
            />
</div>
        </div>
      </section>

      {/* Trusted By Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Side Text (Left) */}
            <div className="flex flex-col justify-center p-6 text-center lg:text-left lg:max-w-md xl:max-w-lg">
              <h2 className="text-3xl font-semibold text-gray-700 mb-8">
                Trusted by 2000+ companies worldwide
              </h2>
            </div>

            {/* Logos Grid (Right) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {/* Logo 1 */}
              <div className="flex items-center justify-center">
                <img src={logo1} alt="Logo 1" className="h-20" />
              </div>

              {/* Logo 2 */}
              <div className="flex items-center justify-center">
                <img src={logo2} alt="Logo 2" className="h-20" />
              </div>

              {/* Logo 3 */}
              <div className="flex items-center justify-center">
                <img src={logo3} alt="Logo 3" className="h-20" />
              </div>

              {/* Logo 4 */}
              <div className="flex items-center justify-center">
                <img src={logo4} alt="Logo 4" className="h-20" />
              </div>

              {/* Logo 5 */}
              <div className="flex items-center justify-center">
                <img src={logo5} alt="Logo 5" className="h-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;