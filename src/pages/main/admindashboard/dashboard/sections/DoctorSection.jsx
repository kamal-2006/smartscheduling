import React from "react";
import { Plus, Eye, Edit3, Trash2, UserPlus } from "lucide-react";

const DoctorSection = ({ doctors, openModal, handleDelete, getStatusColor }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">Doctor Management</h2>
      <button
        onClick={() => openModal("addDoctor")}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Doctor
      </button>
    </div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patients</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                    <div className="text-sm text-gray-500">{doctor.experience} experience</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{doctor.specialty}</td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{doctor.email}</div>
                  <div className="text-sm text-gray-500">{doctor.phone}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(doctor.status)}`}>{doctor.status}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{doctor.patients}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button onClick={() => openModal("viewDoctor", doctor)} className="text-blue-600 hover:text-blue-900"><Eye className="w-4 h-4" /></button>
                    <button onClick={() => openModal("editDoctor", doctor)} className="text-green-600 hover:text-green-900"><Edit3 className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete("doctor", doctor.id)} className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4" /></button>
                    {doctor.status === "Unavailable" && (
                      <button onClick={() => openModal("swapDoctor", doctor)} className="text-yellow-600 hover:text-yellow-900"><UserPlus className="w-4 h-4" /></button>
                    )}
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

export default DoctorSection; 