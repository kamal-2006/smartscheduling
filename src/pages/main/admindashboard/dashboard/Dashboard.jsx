import React, { useState } from "react";
import DoctorSection from "./sections/DoctorSection";
import PatientSection from "./sections/PatientSection";
import AppointmentSection from "./sections/AppointmentSection";
import FeedbackSection from "./sections/FeedbackSection";
import { getStatusColor } from "./utils/statusUtils";
import { User, Users, Calendar, MessageSquare, Settings, LogOut, Search, Bell } from "lucide-react";
import "../../../../App.css";

const Dashboard = () => {
  // State for all entities and UI
  const [activeSection, setActiveSection] = useState("doctors");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample data (to be replaced with real data/fetch)
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Prasanth",
      specialty: "Cardiology",
      email: "sarah.johnson@hospital.com",
      phone: "+1-234-567-8901",
      status: "Available",
      experience: "15 years",
      patients: 245,
    },
    {
      id: 2,
      name: "Dr. Kamalesh",
      specialty: "Neurology",
      email: "michael.chen@hospital.com",
      phone: "+1-234-567-8902",
      status: "Unavailable",
      experience: "12 years",
      patients: 198,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      email: "emily.rodriguez@hospital.com",
      phone: "+1-234-567-8903",
      status: "Available",
      experience: "8 years",
      patients: 312,
    },
  ]);

  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Smith",
      age: 45,
      email: "john.smith@email.com",
      phone: "+1-555-0101",
      lastVisit: "2025-01-15",
      condition: "Hypertension",
      doctor: "Dr. Sarah Johnson",
    },
    {
      id: 2,
      name: "Maria Garcia",
      age: 32,
      email: "maria.garcia@email.com",
      phone: "+1-555-0102",
      lastVisit: "2025-01-20",
      condition: "Migraine",
      doctor: "Dr. Michael Chen",
    },
    {
      id: 3,
      name: "David Wilson",
      age: 28,
      email: "david.wilson@email.com",
      phone: "+1-555-0103",
      lastVisit: "2025-01-18",
      condition: "Annual Checkup",
      doctor: "Dr. Emily Rodriguez",
    },
  ]);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Smith",
      doctorName: "Dr. Sarah Johnson",
      date: "2025-07-25",
      time: "10:00 AM",
      status: "Scheduled",
      type: "Follow-up",
    },
    {
      id: 2,
      patientName: "Maria Garcia",
      doctorName: "Dr. Michael Chen",
      date: "2025-07-26",
      time: "2:30 PM",
      status: "Rescheduled",
      type: "Consultation",
    },
    {
      id: 3,
      patientName: "David Wilson",
      doctorName: "Dr. Emily Rodriguez",
      date: "2025-07-24",
      time: "9:15 AM",
      status: "Cancelled",
      type: "Checkup",
    },
  ]);

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      patientName: "John Smith",
      doctorName: "Dr. Sarah Johnson",
      rating: 5,
      comment: "Excellent care and very professional staff.",
      date: "2025-01-16",
      type: "Feedback",
      status: "Reviewed",
    },
    {
      id: 2,
      patientName: "Maria Garcia",
      doctorName: "Dr. Michael Chen",
      rating: 2,
      comment: "Long waiting time and appointment was delayed significantly.",
      date: "2025-01-21",
      type: "Complaint",
      status: "Pending",
    },
    {
      id: 3,
      patientName: "David Wilson",
      doctorName: "Dr. Emily Rodriguez",
      rating: 4,
      comment: "Good service overall, but could improve appointment scheduling.",
      date: "2025-01-19",
      type: "Feedback",
      status: "Resolved",
    },
  ]);

  // Handlers (to be expanded)
  const openModal = (type, item = null) => {
    setModalType(type);
    setSelectedItem(item);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalType("");
    setSelectedItem(null);
  };
  const handleDelete = (type, id) => {
    // ...
  };
  const handleStatusUpdate = (type, id, newStatus) => {
    // ...
  };

  const sidebarItems = [
    { id: "doctors", label: "Doctor Management", icon: User },
    { id: "patients", label: "Patient Management", icon: Users },
    { id: "appointments", label: "Appointment Management", icon: Calendar },
    { id: "feedback", label: "Feedback & Complaints", icon: MessageSquare },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "doctors":
        return (
          <DoctorSection
            doctors={doctors}
            openModal={openModal}
            handleDelete={handleDelete}
            getStatusColor={getStatusColor}
          />
        );
      case "patients":
        return (
          <PatientSection
            patients={patients}
            doctors={doctors}
            openModal={openModal}
            handleDelete={handleDelete}
          />
        );
      case "appointments":
        return (
          <AppointmentSection
            appointments={appointments}
            openModal={openModal}
            handleDelete={handleDelete}
            getStatusColor={getStatusColor}
          />
        );
      case "feedback":
        return (
          <FeedbackSection
            feedback={feedback}
            openModal={openModal}
            handleStatusUpdate={handleStatusUpdate}
            getStatusColor={getStatusColor}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Admin Panel</h3>
              <p className="text-sm text-gray-500">Hospital Management</p>
            </div>
          </div>
        </div>
        <nav className="px-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-4 py-3 mb-2 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-100 text-blue-600 border-r-2 border-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-800">
              <Settings className="w-4 h-4 mr-2" />
              <span className="text-sm">Settings</span>
            </button>
            <button className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-800">
              <LogOut className="w-4 h-4 mr-2" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-800">
                {sidebarItems.find((item) => item.id === activeSection)?.label}
              </h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-800">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Dr. Admin</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Dashboard; 