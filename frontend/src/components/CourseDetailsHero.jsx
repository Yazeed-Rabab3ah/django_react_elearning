// CourseDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CourseDetailsHero = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/courses/${id}/`);
        console.log("Fetching course from:", `http://localhost:8000/courses/${id}/`);
        setCourse(response.data);
        console.log(response.data)
        setLoading(false);
      } catch (err) {
        setError('Failed to load course details');
        setLoading(false);
        console.log(err)
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!course) return <div className="text-center">Course not found</div>;
    console.log(course)
  return (
    
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {course.image && (
          <div className="w-full h-64 overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
              {course.category && (
                <span className="inline-block bg-gray-200 text-black text-sm px-3 py-1 rounded-full mt-2">
                  {course.category}
                </span>
              )}
            </div>
            <div className="text-3xl font-bold text-black">${course.price}</div>
          </div>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-2">Course Description</h2>
            <div dangerouslySetInnerHTML={{ __html: course.description }} />
          </div>
          
          <div className="mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-white border-2 border-white hover:border-black hover:text-black transition-colors">
  Enroll Now
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsHero;