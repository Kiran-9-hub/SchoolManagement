import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full  bg-[#111827] text-white ">
      <div className="w-full px-0 py-8 mx-auto max-w-7xl">
       
        <div className="flex flex-wrap justify-between items-center">
          
          <div className="text-center md:text-left">
            <h5 className="text-lg font-bold">Saraswati Sishu Vidya Mandira (SSVM)</h5>
            <p className="text-sm text-gray-300">Excellence in education and holistic development of every child.</p>
          </div>

          
          <div className="text-center md:text-left">
            <h6 className="font-bold">Academics</h6>
            <a href="#" className="text-gray-300 hover:text-gray-100 text-sm block">Curriculum</a>
            <a href="#" className="text-gray-300 hover:text-gray-100 text-sm block">Faculty</a>
            <a href="#" className="text-gray-300 hover:text-gray-100 text-sm block">Activities</a>
          </div>

         
          <div className="text-center md:text-left">
            <h6 className="font-bold">Admissions</h6>
            <a href="#" className="text-gray-300 hover:text-gray-100 text-sm block">How to Apply</a>
            <a href="#" className="text-gray-300 hover:text-gray-100 text-sm block">Fees</a>
            <a href="#" className="text-gray-300 hover:text-gray-100 text-sm block">Scholarships</a>
          </div>

          
          <div className="text-center md:text-left">
            <h6 className="font-bold">Contact Us</h6>
            <p className="text-gray-300 text-sm">ssvm School Lane, Education City</p>
            <p className="text-gray-300 text-sm">Phone: (123) 456-7890</p>
            <p className="text-gray-300 text-sm">Email: info@ssvm.com</p>
          </div>

          
          <div className="text-center md:text-left">
            <h6 className="font-bold">Subscribe to our Newsletter</h6>
            <form className="mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full md:w-auto rounded bg-gray-800 text-gray-300 placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-4 py-2 mt-2 md:mt-0 md:ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-600 mt-0.5"></div>

        
        <div className="flex flex-col md:flex-row items-center justify-between mt-1">
          <p className="text-sm text-center text-gray-300">
            Copyright © 2025 <a href="#" className="hover:underline">SSVM</a>. All Rights Reserved.
          </p>
          <div className="flex space-x-4  md:mt-0">
            <a href="https://www.facebook.com/" className="text-white hover:text-gray-400 bg-gray-800 p-2 rounded-full shadow-md">
              <FaFacebookF size={18} />
            </a>
            <a href="https://x.com/i/flow/login" className="text-white hover:text-gray-400 bg-gray-800 p-2 rounded-full shadow-md">
              <FaTwitter size={18} />
            </a>
            <a href="https://www.instagram.com/" className="text-white hover:text-gray-400 bg-gray-800 p-2 rounded-full shadow-md">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/kiran-kumar-sahoo-710a86209/" className="text-white hover:text-gray-400 bg-gray-800 p-2 rounded-full shadow-md">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://www.youtube.com/" className="text-white hover:text-gray-400 bg-gray-800 p-2 rounded-full shadow-md">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
