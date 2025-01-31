import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /.+@.+\..+/;

    
    if (!formData.name) {
      newErrors.name = 'Full Name is required.';
    }

    
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }

  
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be greater than 6 character.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      
      toast.success('Registration successful! You can now log in.', { position: 'top-right' });

      
      setTimeout(() => {
        navigate('/login');
      }, 1000); 

      
      setFormData({ name: '', email: '', password: '' });
    } else {
      toast.error('Please fix the errors and try again.', { position: 'top-right' });
    }
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <ToastContainer />
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img src="https://readymadeui.com/signin-image.webp" className="lg:max-w-[85%] w-full h-full object-contain block mx-auto" alt="login-image" />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto rounded-tl-[55px] rounded-bl-[55px]">
          <form className="max-w-lg w-full mx-auto" onSubmit={handleSubmit}>
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-yellow-400">Create an account</h3>
            </div>

            <div>
              <label className="text-white text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none`}
                  placeholder="Enter name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
            </div>

            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none`}
                  placeholder="Enter email"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={`w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none`}
                  placeholder="Enter password"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
            </div>

            <div className="flex items-center mt-8">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
              <label for="remember-me" className="text-white ml-3 block text-sm">
                I accept the <a href="javascript:void(0);" className="text-yellow-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>

            <div className="mt-12">
              <button type="submit" className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-transparent bg-yellow-400 hover:bg-yellow-500 focus:outline-none">
                Register
              </button>
              <p className="text-sm text-white mt-8">
                Already have an account? <a href="/login" className="text-yellow-400 font-semibold hover:underline ml-1">Login here</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
