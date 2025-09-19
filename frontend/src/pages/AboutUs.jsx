import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import TestCard from "../components/TestCard";
import Footer from "../components/Footer";

const AboutUs = () => {
    return ( 
        <div>
            <Navbar/>
            <AboutHero/>
            <div className="mt-12 flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="ml-4 text-4xl font-bold leading-none sm:text-3xl">
                What Our Student Say
                </h1>
            </div> 
            <TestCard/>
            <Footer/>
        </div> 
    );
}
 
export default AboutUs;
