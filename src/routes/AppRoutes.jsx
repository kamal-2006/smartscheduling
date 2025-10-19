import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/index";
import Doctor from "../pages/main/doctor/doctor";
import Patient from "../pages/main/patient/patient";
import Dashboard from "../pages/main/admindashboard/dashboard/view";
export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="*" element={<div> Not found</div>} />
      </Routes>
    </>
  );
};
