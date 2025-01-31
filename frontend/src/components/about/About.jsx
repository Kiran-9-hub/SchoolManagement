import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className=" bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <h1 className="text-5xl font-serif text-center  text-gray-800 mb-10">About Us</h1>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 bg-indigo-100 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-indigo-800">Our Mission</h2>
          <p className="mt-4 text-indigo-700 text-lg">
            At our school management platform, we are dedicated to improving the way educational institutions operate and interact with students, teachers, and staff.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 bg-green-100 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-green-800">Our Vision</h2>
          <p className="mt-4 text-green-700 text-lg">
            Our vision is to empower educational institutions to achieve operational excellence by providing them with an advanced management system that simplifies administrative tasks and enhances the learning experience.
          </p>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 bg-yellow-100 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-yellow-800">Why Choose Us?</h2>
          <p className="mt-4 text-yellow-700 text-lg">
            Choosing our school management platform means choosing efficiency, reliability, and ease of use. Say goodbye to time-consuming paperwork and cumbersome manual processes.
          </p>
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 bg-pink-100 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-pink-800">Our Values</h2>
          <ul className="list-disc pl-6 text-pink-700 text-lg mt-4">
            <li>Integrity: Transparency and honesty in all our operations.</li>
            <li>Innovation: Continuously seeking new ways to serve our users.</li>
            <li>Customer-Centric: Built with the needs of schools, students, and educators in mind.</li>
            <li>Quality: Prioritizing high-quality service and reliable technology.</li>
            <li>Collaboration: Fostering a culture of teamwork and collaboration.</li>
          </ul>
        </motion.div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 bg-blue-100 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-blue-800">Our Approach</h2>
          <p className="mt-4 text-blue-700 text-lg">
            We focus on simplicity and flexibility, ensuring that our platform adapts to the unique needs of each institution while maintaining an efficient experience for all users.
          </p>
        </motion.div>

        {/* Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 bg-teal-100 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-teal-800">Our Team</h2>
          <p className="mt-4 text-teal-700 text-lg">
            Our team consists of passionate professionals who believe in transforming education through technology. Everyone is committed to providing the best possible experience for our users.
          </p>
        </motion.div>

        {/* Future Goals Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 bg-purple-100 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-purple-800">Our Future Goals</h2>
          <p className="mt-4 text-purple-700 text-lg">
            Our goals include expanding our platform’s capabilities, integrating AI for personalized learning, and expanding our reach to educational institutions worldwide.
          </p>
        </motion.div>

        {/* Technology Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 bg-red-100 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-red-800">Our Technology</h2>
          <p className="mt-4 text-red-700 text-lg">
            Our platform is built with React.js, Node.js, and MongoDB, ensuring performance, security, and scalability to provide a seamless experience.
          </p>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 bg-orange-100 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-orange-800">Our Impact</h2>
          <p className="mt-4 text-orange-700 text-lg">
            Our platform has empowered over 200 schools by streamlining administrative tasks, improving school operations, and enhancing student outcomes.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
