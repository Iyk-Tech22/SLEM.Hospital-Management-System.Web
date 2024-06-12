import { JSX } from "react";
import { IconType } from "react-icons";
import DashboardIcon from "@/components/DashboardIcon";
import { FaCalendarCheck, FaUserMd, FaBuilding, FaProcedures, FaFileInvoiceDollar, FaTint } from "react-icons/fa";

interface IDashboardNavLinks {
    name: string,
    icon: (JSX.ElementType | IconType)
}

interface IDashboardStats {
    name: string,
    icon: IconType,
    stats: number
}


const DashboardNavLinks: IDashboardNavLinks[] = [
    { name: "dashboard", icon: DashboardIcon },
    { name: "appointment", icon: FaCalendarCheck },
    { name: "doctors", icon: FaUserMd },
    { name: "departments", icon: FaBuilding },
    { name: "patients", icon: FaProcedures },
]

const DashboardStats: IDashboardStats[] = [
    {name: "Appointments", icon: FaCalendarCheck, stats: 550},
    {name: "Hospital Earning", icon: FaFileInvoiceDollar, stats: 5000},
    {name: "New Patients", icon: FaProcedures, stats: 460},
    {name: "Operations", icon: FaTint, stats: 120},
]

export { DashboardNavLinks, DashboardStats };