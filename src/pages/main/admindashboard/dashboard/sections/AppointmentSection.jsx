import React from "react";
import { Plus, CheckCircle, Clock, XCircle, Eye, Edit3, Trash2 } from "lucide-react";

const AppointmentSection = ({ appointments, openModal, handleDelete, getStatusColor }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">Appointment Management</h2>
      <button
        onClick={() => openModal("addAppointment")}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Plus className="w-4 h-4 mr-2" />
        Schedule Appointment
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-green-100 p-4 rounded-lg">
        <div className="flex items-center">
          <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
          <div>
            <p className="text-sm text-green-600">Scheduled</p>
            <p className="text-2xl font-bold text-green-800">{appointments.filter((a) => a.status === "Scheduled").length}</p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg">
        <div className="flex items-center">
          <Clock className="w-8 h-8 text-yellow-600 mr-3" />
          <div>
            <p className="text-sm text-yellow-600">Rescheduled</p>
            <p className="text-2xl font-bold text-yellow-800">{appointments.filter((a) => a.status === "Rescheduled").length}</p>
          </div>
        </div>
      </div>
      <div className="bg-red-100 p-4 rounded-lg">
        <div className="flex items-center">
          <XCircle className="w-8 h-8 text-red-600 mr-3" />
          <div>
            <p className="text-sm text-red-600">Cancelled</p>
            <p className="text-2xl font-bold text-red-800">{appointments.filter((a) => a.status === "Cancelled").length}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{appointment.patientName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{appointment.doctorName}</td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{appointment.date}</div>
                  <div className="text-sm text-gray-500">{appointment.time}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{appointment.type}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(appointment.status)}`}>{appointment.status}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button onClick={() => openModal("rescheduleAppointment", appointment)} className="text-blue-600 hover:text-blue-900"><Clock className="w-4 h-4" /></button>
                    <button onClick={() => openModal("editAppointment", appointment)} className="text-green-600 hover:text-green-900"><Edit3 className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete("appointment", appointment.id)} className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default AppointmentSection; 