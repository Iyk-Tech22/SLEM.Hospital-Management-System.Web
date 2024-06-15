import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import DashboardLayout from "@/layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate replace to="dashboard" />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}