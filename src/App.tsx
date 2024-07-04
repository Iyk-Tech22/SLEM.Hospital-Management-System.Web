import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import DoctorsPage from "./pages/DoctorsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import DepartmentsPage from "./pages/DepartmentPage";
import PatientsPage from "./pages/PatientsPage";
import RegisterPatientPage from "./pages/RegisterPatientPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddDoctor from "./pages/AddDoctor";
import AddDepartment from "./pages/AddDepartment";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate replace to="dashboard" />}></Route>
          <Route path="dashboard" element={<DashboardPage />}></Route>
          <Route path="appointments" element={<AppointmentsPage />}></Route>
          <Route path="departments">
            <Route index element={<Navigate replace to="all-departments" />}></Route>
            <Route path="all-departments" element={<DepartmentsPage />}></Route>
            <Route path="add-department" element={<AddDepartment />}></Route>
          </Route>
          <Route path="doctors">
            <Route index element={<Navigate replace to="all-doctors" />}></Route>
            <Route path="all-doctors" element={<DoctorsPage />}></Route>
            <Route path="add-doctor" element={<AddDoctor />}></Route>
          </Route>
          <Route path="patients">
            <Route index element={<Navigate replace to="all-patients" />}></Route>
            <Route path="all-patients" element={<PatientsPage />}></Route>
            {/* <Route path="add-patient" element={<RegisterPatientPage />}></Route> */}
          </Route>
        </Route>
        <Route path="auth">
          <Route index element={<Navigate replace to="login" />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}