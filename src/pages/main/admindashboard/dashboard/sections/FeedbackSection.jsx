import React from "react";
import { MessageSquare, AlertTriangle, Clock, Eye, CheckCircle } from "lucide-react";

const FeedbackSection = ({ feedback, openModal, handleStatusUpdate, getStatusColor }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">Feedback & Complaints</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-100 p-4 rounded-lg">
        <div className="flex items-center">
          <MessageSquare className="w-8 h-8 text-blue-600 mr-3" />
          <div>
            <p className="text-sm text-blue-600">Total Feedback</p>
            <p className="text-2xl font-bold text-blue-800">{feedback.filter((f) => f.type === "Feedback").length}</p>
          </div>
        </div>
      </div>
      <div className="bg-red-100 p-4 rounded-lg">
        <div className="flex items-center">
          <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
          <div>
            <p className="text-sm text-red-600">Complaints</p>
            <p className="text-2xl font-bold text-red-800">{feedback.filter((f) => f.type === "Complaint").length}</p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg">
        <div className="flex items-center">
          <Clock className="w-8 h-8 text-yellow-600 mr-3" />
          <div>
            <p className="text-sm text-yellow-600">Pending</p>
            <p className="text-2xl font-bold text-yellow-800">{feedback.filter((f) => f.status === "Pending").length}</p>
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {feedback.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.patientName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.doctorName}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${item.type === "Complaint" ? "text-red-600 bg-red-100" : "text-green-600 bg-green-100"}`}>{item.type}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < item.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{item.comment}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>{item.status}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button onClick={() => openModal("viewFeedback", item)} className="text-blue-600 hover:text-blue-900"><Eye className="w-4 h-4" /></button>
                    {item.status === "Pending" && (
                      <button onClick={() => handleStatusUpdate("feedback", item.id, "Resolved")} className="text-green-600 hover:text-green-900"><CheckCircle className="w-4 h-4" /></button>
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

export default FeedbackSection; 