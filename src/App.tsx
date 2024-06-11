import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import DashboardLayout from "@/layouts/DashboardLayout";
import DashBoard from "./pages/dashboard/DashBoard";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate replace to="dashboard" />}></Route>
          <Route path="dashboard" element={<DashBoard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}