import React from 'react';
import AlumniCard from '../components/AlumniCard';
//import DarkMode from '../components/AlumniCard';

const alumniData = [
    {
        name: "Rishith P ",
        passingYear: "2025",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFbxXepxpTpgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727276636158?e=1739404800&v=beta&t=RWPEsMbObdfmvwESmDWysOgu-X5mSxGb0H5V2ZuvPEc",
        Department: "AI&DS",
        company: "Nokia",
        linkedin: "https://www.linkedin.com/in/rishith-p-b241a621b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
    {
        name: "Vaibhav G",
        passingYear: "2025",
        image: "https://media.licdn.com/dms/image/v2/D5603AQGqVRQledMHOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722094270664?e=1739404800&v=beta&t=0BzPBFNu945jTnCW2DVfOG1Mr6Ve1i26hm0FM-KXkpg",
        role: "Framework Engineer Intern",
        company: "Quantiphi",
        linkedin: "https://www.linkedin.com/in/2112vaibhav?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/michaelc",

    },
    {
        name: "Niranjan D ",
        passingYear: "2025",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFbxYh-tU4nHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721876595065?e=1739404800&v=beta&t=M6tMbW_RdO8begWYlrYCWtzJ-TKQEXx-mQ7q8eaFPXA",
        role: "Trainee Engineer",
        company: "Toshiba",
        linkedin: "https://linkedin.com/in/priya-patel",

    },
    {
        name: "Piyush Srivastava ",
        passingYear: "2025",
        image: "https://media.licdn.com/dms/image/v2/D5603AQGpmoLPC4Phtg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724942575689?e=1739404800&v=beta&t=9jvetHy4w1Coq77lGcT9kJzZTbQ_LPfgRAaYkPu5d7s",
        Department: "AI&DS",
        company: "Oracle",
        linkedin: "https://www.linkedin.com/in/piyush-srivat/",


    },
    {
        name: "Rahat Bali",
        passingYear: "2025",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFbxXepxpTpgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727276636158?e=1739404800&v=beta&t=RWPEsMbObdfmvwESmDWysOgu-X5mSxGb0H5V2ZuvPEc",
        Department: "AI&DS",
        role: "Intern",
        company: "Nokia",
        linkedin: "https://www.linkedin.com/in/rahat-bali-425962241/",


    },
    {
        name: "Shashank Acharya ",
        passingYear: "2024",
        image: "https://media.licdn.com/dms/image/v2/D5635AQEPqHkuZ9RMmg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1720068694106?e=1734364800&v=beta&t=WqcQo200VEXzIqnaF2jPeQn7VV4jPGGIfeYp4yuEb4s",
        Department: "CSE",

        linkedin: "https://www.linkedin.com/in/shashank-acharya-672587203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
    {
        name: "Parikshith Gowda K N ",
        passingYear: "2024",
        image: "https://media.licdn.com/dms/image/v2/D5603AQGU1ztTAzmWVQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692078399485?e=1739404800&v=beta&t=1R3Ya-Vl8B5JChRkiJ0ZdjGC-X2WjBDU2_emcjxsFxU",
        Department: "CSE",
        company: "TCS",
        linkedin: "https://www.linkedin.com/in/parikshith-gowda-kn-2426b91b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
    {
        name: "Maruthi R",
        passingYear: "2024",
        image: "https://media.licdn.com/dms/image/v2/D5603AQElVSuS5cVd7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724304146628?e=1739404800&v=beta&t=m4kgPvgJZ0L9ZMP_F1-gFhMeWU1F0nXlskZ9IFayXfk",
        Department: "AI&DS",
        role: "Business Analyst",
        company: "Impact Analytics ",
        linkedin: "https://www.linkedin.com/in/maruthi-syn-ack",

    },
    {
        name: "Anubhav",
        passingYear: "2024",
        image: "https://media.licdn.com/dms/image/v2/D5603AQHbD9pYfoT3PQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1679420074420?e=1739404800&v=beta&t=8qL2LUUP0X2fRiqQEqrLjI742EkvwxwbAGMVrgz5_PM",
        Department: "ECE",
        role: "Engineer Trainee",
        company: "Anora Instrumentation Pvt Ltd 	",
        linkedin: "https://www.linkedin.com/in/anubhav-09161b205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
    {
        name: "R V Arun",
        passingYear: "2024",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQEX42AaWk0Vxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723782283709?e=1739404800&v=beta&t=jka5z2MbV0YiwU7z_XcS7Ly_C-21ZzeEFfRk7LmMVfg",
        Department: "ECE",
        role: "M.E Microelectronics",
        company: "BITS Pilani '26 ",
        linkedin: "https://www.linkedin.com/in/r-v-arun?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },

    {
        name: "Amiyanshu ",
        passingYear: "2024",
        image: "https://media.licdn.com/dms/image/v2/D5603AQEF7XZuzJeHlA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731565326185?e=1739404800&v=beta&t=_FS-5F99iXnxr0OToZIlE-ciigEkP7gHKnBxim23jVE",
        Department: "ISE",
        role: "Associate software engineer",
        company: "Toshiba",
        linkedin: "https://www.linkedin.com/in/amiyanshu-b02407222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },

    {
        name: "Shreyanshu Shubham",
        passingYear: "2024",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFbxXepxpTpgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727276636158?e=1739404800&v=beta&t=RWPEsMbObdfmvwESmDWysOgu-X5mSxGb0H5V2ZuvPEc",
        Department: "ISE",
        company: "Zscaler",
        linkedin: "https://www.linkedin.com/in/shreyanshu-shubham-091759212/",


    },



];

// const Alumni = () => {
//     return (
//         <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-12">
//                     <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//                         Our Distinguished Alumni
//                     </h1>
//                     <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                         Meet our successful graduates who are making their mark in the tech industry
//                         and inspiring the next generation of developers.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//                     {alumniData.map((alumni, index) => (
//                         <AlumniCard key={index} {...alumni} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Alumni;



const Alumni = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                        Our Distinguished Alumni
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Celebrating the remarkable journeys of our graduates who are making significant impacts in the tech industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {alumniData.map((alumni, index) => (
                        <AlumniCard key={index} {...alumni} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Alumni;