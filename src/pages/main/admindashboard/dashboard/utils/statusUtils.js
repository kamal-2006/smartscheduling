export const getStatusColor = (status) => {
  switch (status) {
    case "Available":
    case "Scheduled":
    case "Reviewed":
    case "Resolved":
      return "text-green-600 bg-green-100";
    case "Unavailable":
    case "Cancelled":
    case "Pending":
      return "text-red-600 bg-red-100";
    case "Rescheduled":
      return "text-yellow-600 bg-yellow-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
}; 