import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const EventCard = ({ event, userRole }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative">
                <img
                    src={event.image || '/api/placeholder/600/400'}
                    alt={event.title}
                    className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="text-xl font-bold text-white drop-shadow-md">{event.title}</h2>
                </div>
            </div>

            <div className="p-4 space-y-3">
                <p className="text-gray-700 text-sm line-clamp-2 min-h-[2.5rem]">{event.description}</p>

                <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-green-500" />
                        <span>{event.time}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-red-500" />
                        <span className="line-clamp-1">{event.location}</span>
                    </div>
                </div>

                {userRole === 'chairman' && (
                    <div className="pt-4">
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg 
                            flex items-center justify-center space-x-2 
                            hover:bg-blue-700 transition-colors
                            focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <Users className="w-4 h-4" />
                            <span>Manage Event</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventCard;