import React from 'react';
import { Briefcase, Calendar, LinkedinIcon, GithubIcon } from 'lucide-react';

const AlumniCard = ({
    name,
    passingYear,
    image,
    role,
    company,
    linkedin,
    github,
    achievements
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white text-xl font-semibold">{name}</h3>
                </div>
            </div>

            <div className="p-4 space-y-3">
                <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Class of {passingYear}</span>
                </div>

                <div className="flex items-center text-gray-600">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>{role} at {company}</span>
                </div>

                {achievements && achievements.length > 0 && (
                    <div className="mt-3">
                        <h4 className="font-semibold text-gray-700 mb-1">Achievements</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                            {achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="flex space-x-3 mt-4">
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700"
                        >
                            <LinkedinIcon className="w-5 h-5" />
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900"
                        >
                            <GithubIcon className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AlumniCard;
