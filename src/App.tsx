import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import DoctorsPage from "./pages/DoctorsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import DepartmentsPage from "./pages/DepartmentPage";
import PatientsPage from "./pages/PatientsPage";
import RegisterPatientPage from "./pages/RegisterPatientPage";
import Login from "./pages/Login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate replace to="dashboard" />}></Route>
          <Route path="dashboard" element={<DashboardPage />}></Route>
          <Route path="doctors" element={<DoctorsPage />}></Route>
          <Route path="appointments" element={<AppointmentsPage />}></Route>
          <Route path="departments" element={<DepartmentsPage />}></Route>
          <Route path="patients">
            <Route index element={<Navigate replace to="all-patient" />}></Route>
            <Route path="all-patient" element={<PatientsPage />}></Route>
            <Route path="add-patient" element={<RegisterPatientPage />}></Route>
          </Route>
        </Route>
        <Route path="auth">
          <Route index element={<Navigate replace to="login" />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}