import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Events from './pages/Events';
import Dashboard from './pages/Dashboard';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserRole(null);
  };

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar isLoggedIn={isLoggedIn} userRole={userRole} logout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />}
            />
            <Route path="/events" element={<Events userRole={userRole} />} />
            <Route path="/events" element={<Events userRole={userRole} />} />
            <Route path='/alumni' element={<Alumni />} />
            <Route path='/contact' element={<Contact />} />
            <Route
              path="/dashboard"
              element={isLoggedIn && userRole === 'chairman' ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />}
            />
          </Routes>
        </main>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;

