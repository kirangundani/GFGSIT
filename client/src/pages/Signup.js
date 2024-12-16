// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { User, Mail, Lock, Users, Phone } from 'lucide-react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Signup = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         role: 'member',
//         phone: '',
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Chairman verification
//         // if (formData.role === 'chairman') {
//         //     if (
//         //         formData.name.toLowerCase() !== 'raghavi' ||
//         //         formData.email.toLowerCase() !== 'raghavi@gmail.com' ||
//         //         formData.phone !== '7896541235'
//         //     ) {
//         //         toast.error('Invalid chairman credentials. Please contact the administrator.');
//         //         return;
//         //     }
//         // }

//         try {
//             await axios.post('http://localhost:5000/api/auth/signup', formData);
//             toast.success('Signup successful! Please login.');
//             navigate('/login');
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Signup failed');
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-10 rounded-xl shadow-lg">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                         Join GeeksForGeeks Club
//                     </h2>
//                     <p className="mt-2 text-center text-sm text-gray-600">
//                         Create your account and be part of our community
//                     </p>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <div className="rounded-md shadow-sm space-y-4">
//                         <div>
//                             <label htmlFor="name" className="sr-only">
//                                 Full Name
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <User className="h-5 w-5 text-gray-400" />
//                                 </div>

//                                 <input
//                                     id="name"
//                                     name="name"
//                                     type="text"
//                                     required
//                                     className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                                     placeholder="Full Name"
//                                     value={formData.name}
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, name: e.target.value })
//                                     }
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="sr-only">
//                                 Email address
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Mail className="h-5 w-5 text-gray-400" />
//                                 </div>
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     required
//                                     className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                                     placeholder="Email address"
//                                     value={formData.email}
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, email: e.target.value })
//                                     }
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <label htmlFor="password" className="sr-only">
//                                 Password
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Lock className="h-5 w-5 text-gray-400" />
//                                 </div>
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     required
//                                     className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                                     placeholder="Password"
//                                     value={formData.password}
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, password: e.target.value })
//                                     }
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <label htmlFor="phone" className="sr-only">
//                                 Phone Number
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Phone className="h-5 w-5 text-gray-400" />
//                                 </div>
//                                 <input
//                                     id="phone"
//                                     name="phone"
//                                     type="tel"
//                                     required
//                                     className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                                     placeholder="Phone Number"
//                                     value={formData.phone}
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, phone: e.target.value })
//                                     }
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <label htmlFor="role" className="sr-only">
//                                 Role
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Users className="h-5 w-5 text-gray-400" />
//                                 </div>
//                                 <select
//                                     id="role"
//                                     name="role"
//                                     required
//                                     className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
//                                     value={formData.role}
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, role: e.target.value })
//                                     }
//                                 >
//                                     <option value="member">Member</option>
//                                     <option value="coordinator">Coordinator</option>
//                                     <option value="chairman">Chairman</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>

//                     <div>
//                         <button
//                             type="submit"
//                             className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
//                         >
//                             Sign up
//                         </button>
//                     </div>

//                     <div className="text-center">
//                         <p className="text-sm text-gray-600">
//                             Already have an account?{' '}
//                             <button
//                                 type="button"
//                                 onClick={() => navigate('/login')}
//                                 className="font-medium text-green-600 hover:text-green-500"
//                             >
//                                 Login here
//                             </button>
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Signup;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { User, Mail, Lock, Users, Phone } from 'lucide-react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Signup = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         role: 'member',
//         phone: '',
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/auth/signup', formData);
//             toast.success('Signup successful! Please login.');
//             navigate('/login');
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Signup failed');
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-10 rounded-xl shadow-lg">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Join GeeksForGeeks Club</h2>
//                     <p className="mt-2 text-center text-sm text-gray-600">Create your account and be part of our community</p>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <div className="rounded-md shadow-sm space-y-4">
//                         {['name', 'email', 'password', 'phone'].map((field, index) => (
//                             <div key={index}>
//                                 <label htmlFor={field} className="sr-only">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                         {field === 'name' && <User className="h-5 w-5 text-gray-400" />}
//                                         {field === 'email' && <Mail className="h-5 w-5 text-gray-400" />}
//                                         {field === 'password' && <Lock className="h-5 w-5 text-gray-400" />}
//                                         {field === 'phone' && <Phone className="h-5 w-5 text-gray-400" />}
//                                     </div>
//                                     <input
//                                         id={field}
//                                         name={field}
//                                         type={field === 'password' ? 'password' : field === 'phone' ? 'tel' : 'text'}
//                                         required
//                                         className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out transform hover:scale-[1.02] hover:border-green-600"
//                                         placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                                         value={formData[field]}
//                                         onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                         <div>
//                             <label htmlFor="role" className="sr-only">Role</label>
//                             <select
//                                 id="role"
//                                 name="role"
//                                 required
//                                 className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out transform hover:scale-[1.02]"
//                                 value={formData.role}
//                                 onChange={(e) => setFormData({ ...formData, role: e.target.value })}
//                             >
//                                 <option value="member">Member</option>
//                                 <option value="coordinator">Coordinator</option>
//                                 <option value="chairman">Chairman</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div>
//                         <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200 transform hover:scale-[1.05]">
//                             Sign up
//                         </button>
//                     </div>
//                     <div className="text-center">
//                         <p className="text-sm text-gray-600">
//                             Already have an account?{' '}
//                             <button type="button" onClick={() => navigate('/login')} className="font-medium text-green-600 hover:text-green-500">
//                                 Login here
//                             </button>
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Signup;

import React, { useState } from 'react';
import {
    User,
    Mail,
    Lock,
    Users,
    Phone,
    EyeOff,
    Eye
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'member',
        phone: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Signup failed');
            }

            toast.success('Signup successful! Please login.');
            navigate('/login');
        } catch (error) {
            toast.error(error.message || 'Signup failed');
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center p-4">
            <ToastContainer />
            <motion.div
                className="w-full max-w-md"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="backdrop-blur-lg bg-white/90 rounded-2xl shadow-2xl p-8 space-y-8 transform hover:scale-[1.01] transition-all duration-300">
                    {/* Title Section */}
                    <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            Join GeeksForGeeks Club
                        </h2>
                        <p className="mt-2 text-base text-gray-600">
                            Create your account and be part of our community
                        </p>
                    </motion.div>

                    {/* Icons */}
                    <div className="flex justify-center mb-8">
                        <Users className="h-16 w-16 text-green-500" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                    group-hover:border-green-400 transition-all duration-200
                    bg-white/50 backdrop-blur-sm"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                    group-hover:border-green-400 transition-all duration-200
                    bg-white/50 backdrop-blur-sm"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                    group-hover:border-green-400 transition-all duration-200
                    bg-white/50 backdrop-blur-sm"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-green-500 transition-colors duration-200" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-green-500 transition-colors duration-200" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
                                </div>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                    group-hover:border-green-400 transition-all duration-200
                    bg-white/50 backdrop-blur-sm"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Role Selection */}
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                                Role
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Users className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
                                </div>
                                <select
                                    id="role"
                                    name="role"
                                    required
                                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                    group-hover:border-green-400 transition-all duration-200
                    bg-white/50 backdrop-blur-sm"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                >
                                    <option value="member">Member</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg font-medium 
                bg-gradient-to-r from-green-600 to-blue-600 text-white 
                hover:from-green-700 hover:to-blue-700 
                transition-all duration-200 transform hover:translate-y-[-2px]"
                        >
                            Sign Up
                        </button>

                        {/* Login Link */}
                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => navigate('/login')}
                                className="text-green-600 hover:text-green-700 transition-colors duration-200"
                            >
                                Already have an account? Login here
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;