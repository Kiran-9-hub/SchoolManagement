import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 

const Login = () => {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  
  const validateForm = () => {
    let formErrors = {};
    if (!email) formErrors.email = 'Email is required';
    if (!password) formErrors.password = 'Password is required';
    return formErrors;
  };

 
  const handleLogin = (e) => {
    e.preventDefault();


    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      toast.success('Login successful!');
      navigate('/home');
    } else {
      setErrors(formErrors);
    }
    console.log(formErrors);
    
  };
      
      

  return (
    <div className="font-[sans-serif] bg-gray-900 md:h-screen text-2xl">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full">
          <form onSubmit={handleLogin} className="max-w-lg w-full mx-auto">
            <div className="mb-12">
              <h3 className="text-gray-800 text-4xl font-extrabold">Sign in</h3>
              <p className="text-gray-800 text-sm mt-4">
                Don't have an account?
                <button
                  type="button"
                  onClick={() => navigate('/register')} 
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </button>
              </p>
            </div>

            {/* Email Input */}
            <div>
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Password Input */}
            <div className="mt-8">
              <label className="text-gray-800 text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            {/* Login Button */}
            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
