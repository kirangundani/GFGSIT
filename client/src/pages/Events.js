import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import EventCard from '../components/EventCard';
import { RefreshCw } from 'lucide-react';

const Events = ({ userRole }) => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/events`);
            setEvents(response.data);
            setError(null);
        } catch (error) {
            toast.error('Failed to fetch events');
            setError('Unable to load events. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="flex justify-center items-center h-64">
                    <RefreshCw className="animate-spin w-8 h-8 text-blue-500" />
                    <span className="ml-2 text-gray-600">Loading events...</span>
                </div>
            );
        }

        if (error) {
            return (
                <div className="text-center text-red-600 p-8">
                    <p>{error}</p>
                    <button
                        onClick={fetchEvents}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Retry
                    </button>
                </div>
            );
        }

        if (events.length === 0) {
            return (
                <div className="text-center text-gray-500 p-8">
                    <p>No upcoming events</p>
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <EventCard key={event._id} event={event} userRole={userRole} />
                ))}
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h1>
                {renderContent()}
            </div>
        </div>
    );
};

export default Events;