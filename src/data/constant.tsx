import { JSX } from "react";
import { IconType } from "react-icons";
import DashboardIcon from "@/components/DashboardIcon";
import { FaCalendarCheck, FaUserNurse, FaBuilding, FaHospitalUser } from "react-icons/fa";

interface IDashboardNavLinks {
    name: string,
    icon: (JSX.ElementType | IconType)
}
const DashboardNavLinks: IDashboardNavLinks[] = [
    { name: "dashboard", icon: DashboardIcon },
    { name: "appointment", icon: FaCalendarCheck },
    { name: "doctors", icon: FaUserNurse },
    { name: "departments", icon: FaBuilding },
    { name: "patients", icon: FaHospitalUser },
]

export { DashboardNavLinks };