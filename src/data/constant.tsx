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

export interface IDashboardNavLinks {
  name: string;
  icon: JSX.ElementType | IconType;
}

export interface IDashboardStats {
  name: string;
  icon: IconType;
  stats: number;
}

export interface IAppointments {
  profile: string;
  name: string;
  appointmentWith: string;
  timing: string;
  action: boolean;
}

export interface IDoctorList {
  profile: string,
  doctorName: string,
  status?: Status
  department?: string
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

const Doctors: IDoctorList[] = [
  {
    profile: "https://i.pravatar.cc/60?u=4994710",
    doctorName: "Dr. Jenney Russell",
    department:"Urologist",
  },
  {
    profile: "https://i.pravatar.cc/60?u=4994712",
    doctorName: "Dr. Eduardo Hawkins",
    department:"Cardiologist",
  },
  {
    profile: "https://i.pravatar.cc/60?u=4994713",
    doctorName: "Dr. Arlane Lane",
    department:"Dentist",
  },
  {
    profile: "https://i.pravatar.cc/60?u=4994715",
    doctorName: "Dr. Ted Tones",
    department:"Psychiatrist",
  },
  {
    profile: "https://i.pravatar.cc/60?u=4994716",
    doctorName: "Dr. Angel Lane",
    department:"Pediatrics",
  },
  {
    profile: "https://i.pravatar.cc/60?u=4994717",
    doctorName: "Dr. Authur Miles",
    department:"Radiologist",
  },
];


export { DashboardNavLinks, DashboardStats, Appointments, DoctorList, Doctors };
