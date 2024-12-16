import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Code2, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Login = ({ setIsLoggedIn, setUserRole }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, formData);
            localStorage.setItem('token', response.data.token);
            setIsLoggedIn(true);
            setUserRole(response.data.role);
            toast.success('Login successful!');
            navigate('/');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed');
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 20
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
            <motion.div
                className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="text-center" variants={childVariants}>
                    <Code2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900">
                        Welcome Back Geek
                    </h2>
                    <p className="mt-2 text-base text-gray-600">
                        Access your GeeksForGeeks Club account
                    </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div className="space-y-4" variants={childVariants}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base transition-all duration-200"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base transition-all duration-200"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
                        variants={childVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Login
                    </motion.button>

                    <motion.div className="text-center" variants={childVariants}>
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <button
                                type="button"
                                onClick={() => navigate('/signup')}
                                className="font-medium text-green-600 hover:text-green-500 transition-colors duration-200"
                            >
                                Sign up here
                            </button>
                        </p>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;


