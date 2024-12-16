import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [events, setEvents] = useState([]);
    const [recruitmentForm, setRecruitmentForm] = useState({
        url: '',
        description: ''
    });
    const [currentRecruitment, setCurrentRecruitment] = useState({
        _id: '',
        url: '',
        description: ''
    });
    const [newEvent, setNewEvent] = useState({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240222170057/iz-660.png',
    });

    useEffect(() => {
        fetchEvents();
        fetchRecruitmentUrl();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/events`);
            setEvents(response.data);
        } catch (error) {
            toast.error('Failed to fetch events');
        }
    };

    const fetchRecruitmentUrl = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/recruitment-url`);
            setCurrentRecruitment(response.data);
        } catch (error) {
            toast.error('Failed to fetch recruitment details');
        }
    };

    const handleRecruitmentFormChange = (e) => {
        setRecruitmentForm({
            ...recruitmentForm,
            [e.target.name]: e.target.value
        });
    };

    const handleRecruitmentFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/recruitment-url`,
                recruitmentForm,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            toast.success('Recruitment details updated successfully');
            fetchRecruitmentUrl(); // Refetch to get the latest recruitment URL details
            setRecruitmentForm({ url: '', description: '' });
        } catch (error) {
            toast.error('Failed to update recruitment details');
        }
    };

    const handleDeleteRecruitmentUrl = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/recruitment-url/${currentRecruitment._id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            toast.success('Recruitment URL deleted successfully');
            setCurrentRecruitment({ _id: '', url: '', description: '' });
        } catch (error) {
            toast.error('Failed to delete recruitment URL');
        }
    };

    const handleInputChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/events`, newEvent, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            toast.success('Event created successfully');
            setNewEvent({
                title: '',
                description: '',
                date: '',
                time: '',
                location: '',
                image: '',
            });
            fetchEvents();
        } catch (error) {
            toast.error('Failed to create event');
        }
    };

    const handleDeleteEvent = async (eventId) => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/events/${eventId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            toast.success('Event deleted successfully');
            setEvents(events.filter(event => event._id !== eventId));
        } catch (error) {
            toast.error('Failed to delete event');
        }
    };

    const inputClasses = "w-full px-3 py-2 sm:py-3 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-green-500";

    return (
        <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6 sm:py-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Chairman Dashboard</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Recruitment Form URL Section */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Recruitment Form Management</h2>
                        <div className="mb-4">
                            {currentRecruitment.url && (
                                <div className="mb-4 p-4 bg-gray-50 rounded-lg space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium mb-2">Current Recruitment Form URL:</h3>
                                            <a
                                                href={currentRecruitment.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-600 break-all"
                                            >
                                                {currentRecruitment.url}
                                            </a>
                                        </div>
                                        <button
                                            className="ml-2 px-3 py-1.5 bg-red-500 text-white text-xs sm:text-sm rounded-md hover:bg-red-600 transition-colors"
                                            onClick={handleDeleteRecruitmentUrl}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    {currentRecruitment.description && (
                                        <div>
                                            <h3 className="font-medium mb-2">Description:</h3>
                                            <p className="text-gray-600">{currentRecruitment.description}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                            <form onSubmit={handleRecruitmentFormSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Recruitment Form URL
                                    </label>
                                    <input
                                        type="url"
                                        name="url"
                                        value={recruitmentForm.url}
                                        onChange={handleRecruitmentFormChange}
                                        placeholder="Enter Google Form URL"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={recruitmentForm.description}
                                        onChange={handleRecruitmentFormChange}
                                        placeholder="Enter description about this recruitment form"
                                        className={`${inputClasses} h-24 resize-none`}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm sm:text-base font-medium"
                                >
                                    Add Recruitment URL
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Update Meeting Schedule Here</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Event Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={newEvent.title}
                                    onChange={handleInputChange}
                                    placeholder="Enter event title"
                                    className={inputClasses}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Event Description
                                </label>
                                <textarea
                                    name="description"
                                    value={newEvent.description}
                                    onChange={handleInputChange}
                                    placeholder="Enter event description"
                                    className={`${inputClasses} h-24 resize-none`}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={newEvent.date}
                                        onChange={handleInputChange}
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={newEvent.time}
                                        onChange={handleInputChange}
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={newEvent.location}
                                    onChange={handleInputChange}
                                    placeholder="Enter event location"
                                    className={inputClasses}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    value={newEvent.image}
                                    onChange={handleInputChange}
                                    placeholder="Enter image URL"
                                    className={inputClasses}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-6 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm sm:text-base font-medium"
                            >
                                Create Event
                            </button>
                        </form>
                    </div>
                    {/* Events List */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md lg:col-span-2">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Manage Events</h2>
                        <div className="space-y-4 overflow-y-auto max-h-[600px]">
                            {events.map((event) => (
                                <div key={event._id} className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="text-lg sm:text-xl font-semibold">{event.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 mt-1">{event.description}</p>
                                    <div className="mt-2 flex flex-wrap gap-2 text-xs sm:text-sm text-gray-500">
                                        <span>{new Date(event.date).toLocaleDateString()}</span>
                                        <span>at {event.time}</span>
                                        <span>• {event.location}</span>
                                    </div>
                                    <button
                                        className="mt-3 px-4 py-1.5 bg-red-500 text-white text-xs sm:text-sm rounded-md hover:bg-red-600 transition-colors"
                                        onClick={() => handleDeleteEvent(event._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;