import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/courses/")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="container  mx-auto px-4 py-8">
      <h1 className="mt-4 text-5xl font-bold text-center mb-8">Courses</h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage