import CourseDetailsHero from "../components/CourseDetailsHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CourseDetails = () => {
    return ( 
        <>
            <Navbar/>
            <div className="my-20">

            <CourseDetailsHero/>
            </div>
            <Footer/>
        </>
     );
}
 
export default CourseDetails;