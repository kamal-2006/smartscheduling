import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [notificationCount, setNotificationCount] = useState(3);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching doctor data
    setTimeout(() => {
      setDoctor({
        name: 'Dr. Emily White',
        specialty: 'General Practitioner',
        profilePicture: 'https://placehold.co/150x150/ADD8E6/FFFFFF?text=EW' // Placeholder image
      });
    }, 500);

    // Simulate fetching appointments data
    setTimeout(() => {
      setAppointments([
        { id: 1, patientName: 'Alice Johnson', time: '10:00 AM', type: 'Consultation' },
        { id: 2, patientName: 'Bob Williams', time: '10:45 AM', type: 'Follow-up' },
        { id: 3, patientName: 'Charlie Brown', time: '11:30 AM', type: 'New Patient' },
        { id: 4, patientName: 'Diana Prince', time: '01:00 PM', type: 'Consultation' },
        { id: 5, patientName: 'Eve Adams', time: '01:45 PM', type: 'Follow-up' },
      ]);
    }, 800);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setIsNavOpen(false); // Close mobile nav after navigation
  };

  const handleViewDetails = (appointmentId) => {
    navigate(`/appointment/${appointmentId}`);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // In a real app, clear auth token and redirect to login
    // localStorage.removeItem('token');
    navigate('/'); // Navigate to the login page (root path)
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-inter">
      {/* Header / Top Navigation Bar */}
      <header className="bg-white p-4 shadow-md flex justify-between items-center flex-wrap sticky top-0 z-50 md:px-8">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-blue-800 md:text-3xl">MediTrack</h1>
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden text-2xl text-blue-800 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            ☰
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none flex-col md:flex-row md:flex items-center gap-6 py-4 md:py-0 transition-all duration-300 ease-in-out ${isNavOpen ? 'flex' : 'hidden'}`}>
          <a
            href="#"
            onClick={() => handleNavigate('/doctor-home')}
            className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition duration-200 active:bg-blue-600 active:text-white"
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => handleNavigate('/appointments')}
            className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition duration-200"
          >
            Appointments
          </a>
          {/* Mobile close button */}
          <button
            className="md:hidden absolute top-2 right-4 text-3xl text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setIsNavOpen(false)}
          >
            &times;
          </button>
        </nav>

        <div className="flex items-center gap-6 mt-4 md:mt-0 w-full md:w-auto justify-around md:justify-end">
          {/* Notifications Icon */}
          <div
            className="relative text-2xl text-gray-600 p-2 rounded-full hover:bg-gray-100 cursor-pointer transition duration-200"
            onClick={() => handleNavigate('/notifications')}
          >
            🔔
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1 leading-none border-2 border-white">
                {notificationCount}
              </span>
            )}
          </div>

          {/* User Profile Icon/Link */}
          <div
            className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition duration-200"
            onClick={() => handleNavigate('/doctor-profile')}
          >
            {doctor ? (
              <img
                src={doctor.profilePicture}
                alt="Doctor Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-600"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white text-xl">
                👤
              </div>
            )}
            <span className="font-semibold text-gray-800 hidden md:block">{doctor ? doctor.name : 'Loading...'}</span>
          </div>

          {/* Logout Option */}
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-6 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-8 text-center">
          Welcome, {doctor ? doctor.name : 'Doctor'}!
        </h2>

        {/* Appointments Widget */}
        <section className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 pb-4 border-b border-gray-200">
            Upcoming Appointments
          </h3>
          {appointments.length > 0 ? (
            <ul className="divide-y divide-gray-100">
              {appointments.map(app => (
                <li key={app.id} className="flex flex-col md:flex-row justify-between items-start md:items-center py-4">
                  <div className="flex flex-col flex-grow mb-2 md:mb-0">
                    <span className="font-semibold text-gray-900 text-lg">{app.patientName}</span>
                    <span className="text-gray-600 text-sm">{app.type}</span>
                  </div>
                  <span className="font-medium text-blue-700 md:ml-4 whitespace-nowrap">{app.time}</span>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out md:ml-6 mt-2 md:mt-0"
                    onClick={() => handleViewDetails(app.id)}
                  >
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-600 italic p-4">No upcoming appointments for today.</p>
          )}
        </section>

        {/* You can add more widgets here later */}
      </main>
    </div>
  );
};

export default DoctorDashboard;