import { JSX } from "react";
import { IconType } from "react-icons";
import DashboardIcon from "@/components/DashboardIcon";
import {
  FaCalendarCheck,
  FaUserMd,
  FaBuilding,
  FaProcedures,
  FaFileInvoiceDollar,
  FaTint,
} from "react-icons/fa";

enum Status {
  AVAILABLE,
  ABSEND
}

interface IDashboardNavLinks {
  name: string;
  icon: JSX.ElementType | IconType;
}

interface IDashboardStats {
  name: string;
  icon: IconType;
  stats: number;
}

interface IAppointments {
  profile: string;
  name: string;
  appointmentWith: string;
  timing: string;
  action: boolean;
}

interface IDoctorList {
  profile: string,
  doctorName: string,
  status: Status
}

const DashboardNavLinks: IDashboardNavLinks[] = [
  { name: "dashboard", icon: DashboardIcon },
  { name: "appointment", icon: FaCalendarCheck },
  { name: "doctors", icon: FaUserMd },
  { name: "departments", icon: FaBuilding },
  { name: "patients", icon: FaProcedures },
];

const DashboardStats: IDashboardStats[] = [
  { name: "Appointments", icon: FaCalendarCheck, stats: 550 },
  { name: "Hospital Earning", icon: FaFileInvoiceDollar, stats: 5000 },
  { name: "New Patients", icon: FaProcedures, stats: 460 },
  { name: "Operations", icon: FaTint, stats: 120 },
];

const Appointments: IAppointments[] = [
  {
    profile: "https://i.pravatar.cc/28?u=499471",
    name: "Cody Mckinney",
    appointmentWith: "Wade Jones",
    timing: "1:12 AM",
    action: true,
  },
  {
    profile: "https://i.pravatar.cc/28?u=499472",
    name: "Jacob Warren",
    appointmentWith: "Ted Wilson",
    timing: "7:12 AM",
    action: true,
    },
  {
    profile: "https://i.pravatar.cc/28?u=499473",
    name: "Juanita Alexander",
    appointmentWith: "Bassies Miles",
    timing: "9:20 AM",
    action: true,
    },
  {
    profile: "https://i.pravatar.cc/28?u=499474",
    name: "Rosemary Hawkins",
    appointmentWith: "Brandon Henry",
    timing: "3:20 AM",
    action: true,
  }
];

const DoctorList: IDoctorList[] = [
  {
    profile: "https://i.pravatar.cc/28?u=4994710",
    doctorName: "Jenney Russell",
    status: Status.AVAILABLE,
  },
  {
    profile: "https://i.pravatar.cc/28?u=4994712",
    doctorName: "Eduardo Hawkins",
    status: Status.ABSEND,
  },
  {
    profile: "https://i.pravatar.cc/28?u=4994713",
    doctorName: "Arlane Lane",
    status: Status.AVAILABLE,
  },
  {
    profile: "https://i.pravatar.cc/28?u=4994714",
    doctorName: "Ted Tones",
    status: Status.ABSEND,
  },
];


export { DashboardNavLinks, DashboardStats, Appointments, DoctorList };
