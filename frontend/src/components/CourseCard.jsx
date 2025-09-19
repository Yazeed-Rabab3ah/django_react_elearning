import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate(`/CourseDetails/${course.id}`);
    
  };

  return (
    <div className="course-card bg-white rounded-lg shadow-md overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{course.category}</p>
        <p className="text-sm text-gray-700 mb-4">
          {/* Truncate description to avoid long text */}
          {course.description.length > 100 
            ? `${course.description.substring(0, 100)}...` 
            : course.description}
        </p>
        <p className="text-lg font-bold text-gray-900 mb-4">${course.price}</p>
        <button 
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition duration-300 border border-black"
          onClick={handleEnrollClick}
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    slug: PropTypes.string,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseCard;