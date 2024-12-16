// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Navbar = ({ isLoggedIn, userRole, logout }) => {
//     const navigate = useNavigate();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const handleLogout = () => {
//         logout();
//         navigate('/login');
//     };

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="bg-green-600 text-white p-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 <Link to="/" className="text-2xl font-bold">GeeksForGeeks Club</Link>
//                 <div className="hidden md:flex space-x-4">
//                     <Link to="/events" className="hover:text-green-200">Events</Link>
//                     {isLoggedIn ? (
//                         <>
//                             {userRole === 'chairman' && (
//                                 <Link to="/dashboard" className="hover:text-green-200">Dashboard</Link>
//                             )}
//                             <button onClick={handleLogout} className="hover:text-green-200">Logout</button>
//                         </>
//                     ) : (
//                         <>
//                             <Link to="/login" className="hover:text-green-200">Login</Link>
//                             <Link to="/signup" className="hover:text-green-200">Register</Link>
//                         </>
//                     )}
//                     <Link to="/alumni" className="hover:text-green-200">Alumni</Link>
//                 </div>
//                 <div className="md:hidden">
//                     <button onClick={toggleMenu} className="focus:outline-none">
//                         {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>
//             </div>
//             {isMenuOpen && (
//                 <div className="md:hidden mt-4 space-y-2">
//                     <Link to="/events" className="block hover:text-green-200">Events</Link>
//                     {isLoggedIn ? (
//                         <>
//                             {userRole === 'chairman' && (
//                                 <Link to="/dashboard" className="block hover:text-green-200">Dashboard</Link>
//                             )}
//                             <button onClick={handleLogout} className="block w-full text-left hover:text-green-200">Logout</button>
//                         </>
//                     ) : (
//                         <>
//                             <Link to="/login" className="block hover:text-green-200">Login</Link>
//                             <Link to="/signup" className="block hover:text-green-200">Register</Link>
//                         </>
//                     )}
//                     <Link to="/alumni" className="block hover:text-green-200">Alumni</Link>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';


const Navbar = ({ isLoggedIn, userRole, logout }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-green-600 text-white sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <Code2 className="h-8 w-8" />
                        <span className="text-xl font-bold hidden sm:block">GeeksForGeeks Club</span>
                        <span className="text-xl font-bold sm:hidden">GFG Club</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/events" className="nav-link">Events</Link>
                        <Link to="/alumni" className="nav-link">Alumni</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                        {isLoggedIn ? (
                            <>
                                {userRole === 'chairman' && (
                                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition-colors duration-200"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link to="/login" className="nav-link">Login</Link>
                                <Link
                                    to="/signup"
                                    className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition-colors duration-200"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/events"
                            className="block px-3 py-2 rounded-md hover:bg-green-500 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Events
                        </Link>
                        <Link
                            to="/alumni"
                            className="block px-3 py-2 rounded-md hover:bg-green-500 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Alumni
                        </Link>
                        {isLoggedIn ? (
                            <>
                                {userRole === 'chairman' && (
                                    <Link
                                        to="/dashboard"
                                        className="block px-3 py-2 rounded-md hover:bg-green-500 transition-colors duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Dashboard
                                    </Link>
                                )}
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setIsMenuOpen(false);
                                    }}
                                    className="w-full text-left px-3 py-2 rounded-md hover:bg-green-500 transition-colors duration-200"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="block px-3 py-2 rounded-md hover:bg-green-500 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="block px-3 py-2 rounded-md hover:bg-green-500 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Register
                                </Link>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;