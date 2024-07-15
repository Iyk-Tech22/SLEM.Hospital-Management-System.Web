import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
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
import AuthLayout from "./layouts/AuthLayout";
import Profile from "./pages/ProfilePage";
import AccountSettings from "./pages/AccountSetting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="account" />,
  },
  {
    path: "account",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate replace to="dashboard" /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "appointments", element: <AppointmentsPage /> },
      {
        path: "departments",
        children: [
          { index: true, element: <Navigate replace to="all-departments" /> },
          { path: "all-departments", element: <DepartmentsPage /> },
          { path: "add-department", element: <AddDepartment /> },
        ],
      },
      {
        path: "doctors",
        children: [
          { index: true, element: <Navigate replace to="all-doctors" /> },
          { path: "all-doctors", element: <DoctorsPage /> },
          { path: "add-doctor", element: <AddDoctor /> },
        ],
      },
      {
        path: "patients",
        children: [
          { index: true, element: <Navigate replace to="all-patients" /> },
          { path: "all-patients", element: <PatientsPage /> },
          { path: "add-patient", element: <RegisterPatientPage /> },
        ],
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "account-setting",
        element: <AccountSettings />
      }
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate replace to="login" /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);
