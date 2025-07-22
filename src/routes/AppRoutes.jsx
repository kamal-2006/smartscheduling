import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/index";
import DoctorDashboard from "../pages/main/doctor/doctor";
import Patient from "../pages/main/patient/patient";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/patient" element={<Patient />} />

        <Route path="*" element={<div> Not found</div>} />
      </Routes>
    </>
  );
};
