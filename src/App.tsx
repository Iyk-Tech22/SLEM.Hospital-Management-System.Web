import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import DoctorsPage from "./pages/doctors/DoctorsPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate replace to="dashboard" />}></Route>
          <Route path="dashboard" element={<DashboardPage />}></Route>
          <Route path="doctors" element={<DoctorsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}