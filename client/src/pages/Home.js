import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Calendar, Users, Award, ExternalLink } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

export default function Home() {
    const [showRecruitmentModal, setShowRecruitmentModal] = useState(false);
    const [recruitmentDetails, setRecruitmentDetails] = useState(null);

    useEffect(() => {
        const isFirstVisit = !localStorage.getItem('visited');
        if (isFirstVisit) {
            setShowRecruitmentModal(true);
            localStorage.setItem('visited', 'true');
        }
    }, []);

    const fetchRecruitmentUrl = async () => {
        try {
            const response = await axios.get('server2-delta-plum.vercel.app/api/recruitment-url');
            setRecruitmentDetails(response.data);
        } catch (error) {
            toast.error('Failed to fetch recruitment details');
        }
    };

    const handleRecruitmentClick = () => {
        fetchRecruitmentUrl();
        setShowRecruitmentModal(true);
    };

    const openRecruitmentLink = () => {
        if (recruitmentDetails?.url) {
            window.open(recruitmentDetails.url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
            {/* Hero Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Code2 className="h-16 w-16 sm:h-24 sm:w-24 text-green-400 mx-auto mb-6" strokeWidth={1.5} />
                        </motion.div>
                        <motion.h1
                            className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Welcome to{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                                GeeksForGeeks
                            </span>{' '}
                            Club
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 px-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Join our community of passionate developers and tech enthusiasts
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Link
                                to="/events"
                                className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 w-full sm:w-auto text-lg font-medium shadow-lg hover:shadow-xl"
                            >
                                <Calendar className="w-5 h-5 mr-2" />
                                Upcoming Events
                            </Link>
                            <Link
                                to="/signup"
                                className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto text-lg font-medium shadow-lg hover:shadow-xl"
                            >
                                <Users className="w-5 h-5 mr-2" />
                                Join Now
                            </Link>
                            <button
                                onClick={handleRecruitmentClick}
                                className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto text-lg font-medium shadow-lg hover:shadow-xl"
                            >
                                <ExternalLink className="w-5 h-5 mr-2" />
                                For Recruitment
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <FeatureCard
                            icon={<Calendar className="h-12 w-12 text-green-400" />}
                            title="Regular Events"
                            description="Participate in workshops, hackathons, and tech talks to enhance your skills"
                        />
                        <FeatureCard
                            icon={<Users className="h-12 w-12 text-green-400" />}
                            title="Strong Network"
                            description="Connect with like-minded individuals and industry professionals for growth"
                        />
                        <FeatureCard
                            icon={<Award className="h-12 w-12 text-green-400" />}
                            title="Skill Development"
                            description="Learn new technologies and enhance your coding skills through hands-on practice"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 py-2 px-4 sm:hidden">
                <div className="flex justify-around items-center">
                    <Link to="/" className="flex flex-col items-center text-green-400">
                        <Code2 className="h-6 w-6" />
                        <span className="text-xs mt-1">Home</span>
                    </Link>
                    <Link to="/events" className="flex flex-col items-center text-gray-400">
                        <Calendar className="h-6 w-6" />
                        <span className="text-xs mt-1">Events</span>
                    </Link>
                    <Link to="/contact" className="flex flex-col items-center text-gray-400">
                        <Calendar className="h-6 w-6" />
                        <span className="text-xs mt-1">Contact</span>
                    </Link>
                </div>
            </div>

            {/* Recruitment Modal */}
            {showRecruitmentModal && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 50 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Recruitment Opportunity</h2>
                        {recruitmentDetails ? (
                            <>
                                <p className="text-gray-600 mb-6 text-center">
                                    {recruitmentDetails.description}
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <button
                                        onClick={openRecruitmentLink}
                                        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                                    >
                                        Apply Now
                                    </button>
                                    <button
                                        onClick={() => setShowRecruitmentModal(false)}
                                        className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="text-center">
                                <p className="text-gray-600 mb-4">Loading recruitment details...</p>
                                <button
                                    onClick={() => setShowRecruitmentModal(false)}
                                    className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="flex flex-col items-center">
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center text-green-400">
                    {title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}


