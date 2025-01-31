import React, { useState, useEffect } from "react";
import "animate.css";


const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://t4.ftcdn.net/jpg/03/91/34/41/360_F_391344115_87kavQ0r8fjUd1ra8fd5BIowbJ8sbVTZ.jpg",
    "https://www.oxfordlearning.com/wp-content/uploads/2018/09/how-to-help-your-child-focus-in-school-860x420.jpeg",
    "https://kmrschool.com/wp-content/uploads/2019/12/SmartBoard-Classroom-1024x680.jpg",
    "https://dpssirsa.com/downloads/nimages/IMG_3544.jpg",
    "https://media.licdn.com/dms/image/D5612AQFdH7eUTt_Uzw/article-cover_image-shrink_720_1280/0/1712685835981?e=2147483647&v=beta&t=0Edh9hOo6tDwu7koYY0rgEcLEy9uzZWOy92IiQzIBeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mb-32 bg-gray-50">

      {/* Carousel */}
      <div className="relative overflow-hidden h-[525px] shadow-lg">
        <div
          className="flex transition-all duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform hover:scale-110 transition-all duration-300"
        onClick={handlePrev}
      >
        <span className="w-10 h-10 flex items-center justify-center bg-white/30 rounded-full group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform hover:scale-110 transition-all duration-300"
        onClick={handleNext}
      >
        <span className="w-10 h-10 flex items-center justify-center bg-white/30 rounded-full group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>

      {/* Content Sections */}
      <div className="px-6 md:px-16 py-12 space-y-16">
       {/* Latest News Section */}
<div className="animate__animated animate__bounceInLeft">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Latest News</h2>
  <ul className="space-y-4 text-xl text-gray-700">
    <li className="animate__animated animate__fadeInLeft animate__delay-1s transition-all duration-300 transform hover:scale-105 hover:opacity-80 p-4 rounded-lg bg-lime-200 shadow-md">
      School wins the National Best Sports Award for the third time in a row, showcasing incredible talent and teamwork!
    </li>
    <li className="animate__animated animate__fadeInLeft animate__delay-2s transition-all duration-300 transform hover:scale-105 hover:opacity-80 p-4 rounded-lg bg-lime-300 shadow-md">
      Our students excelled at the National Science Olympiad, securing top positions and demonstrating exceptional problem-solving skills.
    </li>
    <li className="animate__animated animate__fadeInLeft animate__delay-3s transition-all duration-300 transform hover:scale-105 hover:opacity-80 p-4 rounded-lg bg-lime-400 shadow-md">
      Principal's new initiative to introduce AI-driven learning tools, enhancing personalized education and improving student outcomes.
    </li>
  </ul>
</div>


{/* Upcoming Events Section */}
<div className="animate__animated animate__fadeInRightBig">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Upcoming Events</h2>
  <ul className="space-y-4 text-xl text-gray-700">
    <li className="animate__animated animate__fadeInRightBig animate__delay-1s transition-all duration-300 transform hover:scale-105 hover:opacity-80 p-4 rounded-lg bg-cyan-200 shadow-md">
      Annual Sports Day – February 2025
    </li>
    <li className="animate__animated animate__fadeInRightBig animate__delay-2s transition-all duration-300 transform hover:scale-105 hover:opacity-80 p-4 rounded-lg bg-cyan-300 shadow-md">
      School Cultural Fest – March 2025
    </li>
    <li className="animate__animated animate__fadeInRightBig animate__delay-3s transition-all duration-300 transform hover:scale-105 hover:opacity-80 p-4 rounded-lg bg-cyan-400 shadow-md">
      Inter-School Science Fair – April 2025
    </li>
  </ul>
</div>



        {/* Why Choose Us? Section */}
        <div className="animate__animated animate__fadeInUp">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Why Choose Our School?</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="animate__animated animate__fadeInUp animate__delay-1s text-center transition-all duration-300 transform hover:scale-105 hover:opacity-80 bg-rose-200 rounded-xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Facilities</h3>
      <p className="text-black ">
        Equipped with modern classrooms, labs, libraries, and sports facilities to ensure holistic development.
      </p>
    </div>
    <div className="animate__animated animate__fadeInUp animate__delay-2s text-center transition-all duration-300 transform hover:scale-105 hover:opacity-80 bg-rose-300 rounded-2xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expert Faculty</h3>
      <p className="text-black ">
        Our experienced and passionate educators ensure personalized learning and academic excellence.
      </p>
    </div>
    <div className="animate__animated animate__fadeInUp animate__delay-3s text-center transition-all duration-300 transform hover:scale-105 hover:opacity-80 bg-rose-400 rounded-3xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Public Reputation</h3>
      <p className="text-black ">
        Highly rated for academic achievements, cultural events, and student satisfaction in the region.
      </p>
    </div>
    <div className="animate__animated animate__fadeInUp animate__delay-4s text-center transition-all duration-300 transform hover:scale-105 hover:opacity-80 bg-rose-500 rounded-full">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Student-Centered</h3>
      <p className="text-black ">
        Fostering an environment where every student thrives in academics, arts, and sports.
      </p>
    </div>
  </div>
</div>


        {/* Achievements Section */}
        <div className="animate__animated animate__fadeInUp">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Achievements</h2>
  <ul className="space-y-6 text-xl text-gray-700">
    <li className="animate__animated animate__fadeInLeft animate__delay-3s transition-all duration-500 transform hover:scale-105 hover:opacity-80 p-6 rounded-lg bg-orange-200 shadow-lg hover:shadow-xl">
      National-level Science Fair winners for three consecutive years.
    </li>
    <li className="animate__animated animate__fadeInLeft animate__delay-4s transition-all duration-500 transform hover:scale-105 hover:opacity-80 p-6 rounded-lg bg-orange-300 shadow-lg hover:shadow-xl">
      Top-performing school in regional board examinations.
    </li>
    <li className="animate__animated animate__fadeInLeft animate__delay-5s transition-all duration-500 transform hover:scale-105 hover:opacity-80 p-6 rounded-lg bg-orange-400 shadow-lg hover:shadow-xl">
      Awarded the Best School for Sports Excellence in 2023.
    </li>
  </ul>
</div>



        {/* Testimonials Section */}
        <div className="animate__animated animate__fadeInUp">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">What People Say</h2>
  <div className="flex flex-wrap justify-center space-x-8">
    <div className="animate__animated animate__fadeInUp animate__delay-3s w-80 text-center bg-emerald-300 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
      <p className="italic text-black">
        "The teachers are extremely supportive and the facilities are excellent. My child loves going to school!"
      </p>
      <p className="font-semibold text-gray-800 mt-4">- Parent</p>
    </div>
    <div className="animate__animated animate__fadeInUp animate__delay-4s w-80 text-center bg-emerald-400 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
      <p className="italic text-black">
        "A great environment for learning and growing, both academically and personally."
      </p>
      <p className="font-semibold text-black mt-4">- Student</p>
    </div>
    <div className="animate__animated animate__fadeInUp animate__delay-5s w-80 text-center bg-emerald-500 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
      <p className="italic text-black">
        "The emphasis on both academics and extracurricular activities is commendable."
      </p>
      <p className="font-semibold text-black mt-4">- Alumni</p>
    </div>
  </div>
</div>


        {/* Call-to-Action Section */}
        <div className="bg-blue-600 py-12 text-center text-white animate__animated animate__fadeInUp">
          <h2 className="text-4xl font-bold mb-4">Join Our School Today!</h2>
          <p className="mb-8 text-xl">Experience the difference in education and excellence.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg transform hover:scale-110 transition-all duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
