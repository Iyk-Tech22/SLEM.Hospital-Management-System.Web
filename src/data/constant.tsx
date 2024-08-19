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
  ABSEND,
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
  date?: string;
  timing: string;
  action: boolean;
  disease?: string;
}

export interface IDoctorList {
  profile?: string;
  doctorName?: string;
  status?: Status;
  department?: string;
  phone?:string;
  email?:string;
  patient?:string;
  patientAge?:number;

}

export interface IDepartments {
  departmentName: string;
  doctor: string;
  headDepartment: string;
  status: "Active" | "Inactive";
}

export interface ILineChartData {
  name: string,
  "New Patients": number,
  "Old Patients": number
}

export interface IPatients {
  profile: string,
  patientID: string,
  name: string,
  age: number,
  address: string,
  number: string,
  lastVist: string,
  status: "APPROVED" | "PENDING" | "REJECTED"
}

const DashboardNavLinks: IDashboardNavLinks[] = [
  { name: "dashboard", icon: DashboardIcon },
  { name: "appointments", icon: FaCalendarCheck },
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
  },
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
    department: "Urologist",
    status: Status.AVAILABLE,
    phone:'091234576893',
    email:'bessie.howard@example.com',
    patient:'Samuel Jones',
    patientAge:25,
  },
  {
    profile: "https://i.pravatar.cc/60?u=4994712",
    doctorName: "Dr. Eduardo Hawkins",
    department: "Cardiologist",
    status: Status.ABSEND,
    phone:'091294576893',
    email:'edu.hawkins@example.com',
    patient:'Samuel Jones',
    patientAge:21,
  },
  {
    profile: "https://i.pravatar.cc/60?u=4994713",
    doctorName: "Dr. Arlane Lane",
    department: "Dentist",
    status: Status.AVAILABLE,
    phone:'09128457683',
    email:'arlane.lane@example.com',
    patient:'Peter John',
    patientAge:28,
  },
  {
    profile: "https://i.pravatar.cc/60?u=4994715",
    doctorName: "Dr. Ted Tones",
    department: "Psychiatrist",
    status: Status.ABSEND,
    phone:'09128457643',
    email:'ted.tones@example.com',
    patient:'Collins Friday',
    patientAge:31,
  
  },
  {
    profile: "https://i.pravatar.cc/60?u=4994716",
    doctorName: "Dr. Angel Lane",
    department: "Pediatrics",
    status: Status.AVAILABLE,
    phone:'09128457893',
    email:'angel.lane@example.com',
    patient:'Mercy Jobs',
    patientAge:36,
  },
  {
    profile: "https://i.pravatar.cc/60?u=4994717",
    doctorName: "Dr. Authur Miles",
    department: "Radiologist",
    status: Status.AVAILABLE,
    phone:'09128467893',
    email:'arther.miles@example.com',
    patient:'Hellens Hoist',
    patientAge:23,
  },
];

const AppointmentsData: IAppointments[] = [
  {
    profile: "https://i.pravatar.cc/28?u=499471",
    name: "Cody Mckinney",
    appointmentWith: "Wade Jones",
    date: "20 May 2020",
    timing: "1:12 AM",
    action: true,
    disease: "Fever",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499472",
    name: "Jacob Warren",
    appointmentWith: "Ted Wilson",
    date: "20 May 2020",
    timing: "7:12 AM",
    action: true,
    disease: "Heart",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499473",
    name: "Juanita Alexander",
    appointmentWith: "Bassies Miles",
    date: "20 May 2020",
    timing: "9:20 AM",
    action: true,
    disease: "Cold",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499474",
    name: "Rosemary Hawkins",
    appointmentWith: "Brandon Henry",
    date: "20 May 2020",
    timing: "3:20 AM",
    action: true,
    disease: "Diabietes",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499475",
    name: "Kristain Watson",
    appointmentWith: "Robert Fox",
    date: "20 May 2020",
    timing: "3:20 AM",
    action: true,
    disease: "asthma",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499476",
    name: "Kristain Watson",
    appointmentWith: "Robert Fox",
    date: "20 May 2020",
    timing: "3:20 AM",
    action: true,
    disease: "Fever",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499477",
    name: "Marvin McKinney",
    appointmentWith: "Jenney Wilson",
    date: "20 May 2020",
    timing: "3:20 AM",
    action: true,
    disease: "Heart",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499478",
    name: "Leslie Alexender",
    appointmentWith: "Guy Hawkins",
    date: "20 May 2020",
    timing: "3:20 AM",
    action: true,
    disease: "Heart",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499479",
    name: "Kristain Watson",
    appointmentWith: "Robert Fox",
    date: "20 May 2020",
    timing: "3:20 AM",
    action: true,
    disease: "Fever",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499480",
    name: "Kathryn Murphy",
    appointmentWith: "Jacob Jones",
    date: "20 May 2020",
    timing: "3:20 AM",
    action: true,
    disease: "Asthma",
  },
];

const DepartmentsData: IDepartments[] = [
  {
    departmentName: "Neurology",
    doctor: "Jane Cooper",
    headDepartment: "Marvin McKinney",
    status: "Active",
  },
  {
    departmentName: "Cancer Department",
    doctor: "Wade Warren",
    headDepartment: "Ronald Richards",
    status: "Inactive",
  },
  {
    departmentName: "General Surgery",
    doctor: "Esther Howard",
    headDepartment: "Dianne Russell",
    status: "Active",
  },
  {
    departmentName: "Radiotherapy",
    doctor: "Cameron Williamson",
    headDepartment: "Floyd Miles",
    status: "Active",
  },
  {
    departmentName: "Orthopedics",
    doctor: "Brooklyn Simmons",
    headDepartment: "Robert Fox",
    status: "Inactive",
  },
  {
    departmentName: "Opthalmology",
    doctor: "Leslie Alexander",
    headDepartment: "Devon Lane",
    status: "Active",
  },
];

const LineChartData = [
  {
    name: "June 21",
    "Old Patients": 20,
    "New Patients": 10,
  },
  {
    name: "June 22",
    "Old Patients": 30,
    "New Patients": 8,
  },
  {
    name: "June 23",
    "Old Patients": 40,
    "New Patients": 15,
  },
  {
    name: "June 24",
    "Old Patients": 26,
    "New Patients": 10,
  },
  {
    name: "June 25",
    "Old Patients": 50,
    "New Patients": 30,
  },
  {
    name: "June 26",
    "Old Patients": 30,
    "New Patients": 35,
  },
  {
    name: "June 27",
    "Old Patients": 60,
    "New Patients": 30,
  },
];

const Patients: IPatients[] = [
  {
    profile: "https://i.pravatar.cc/28?u=499480",
    patientID: "US 00598",
    name: "Samuel",
    age: 32,
    address: "71 Pilgrim Avenue Chevy Chase, MD 20815",
    number: "404-447-7845",
    lastVist: "11 Jan 2019",
    status: "APPROVED",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499481",
    patientID: "DR 00258",
    name: "Alexander",
    age: 22,
    address: "123 6th St. Melbourne, FL 32904	",
    number: "404-447-7845",
    lastVist: "15 Jan 2019",
    status: "APPROVED",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499482",
    patientID: "YM 00369",
    name: "Richard",
    age: 26,
    address: "123 6th St. Melbourne, FL 32904",
    number: "404-447-8545",
    lastVist: "16 Jan 2019",
    status: "APPROVED",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499483",
    patientID: "SO 00147",
    name: "Samuel",
    age: 45,
    address: "71 Pilgrim Avenue Chevy Chase, MD 20815",
    number: "404-447-5963",
    lastVist: "17 Jan 2019",
    status: "APPROVED",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499484",
    patientID: "JW 00123",
    name: "Stephen",
    age: 55,
    address: "71 Pilgrim Avenue Chevy Chase, MD 20815",
    number: "404-447-6013",
    lastVist: "18 Jan 2019",
    status: "APPROVED",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499486",
    patientID: "JW 00123",
    name: "Cameron",
    age: 38,
    address: "71 Pilgrim Avenue Chevy Chase, MD 20815",
    number: "404-447-4593",
    lastVist: "19 Jan 2019",
    status: "PENDING",
  },
  {
    profile: "https://i.pravatar.cc/28?u=499487",
    patientID: "JW 00123",
    name: "Alex",
    age: 38,
    address: "123 6th St. Melbourne, FL 32904",
    number: "404-447-1593",
    lastVist: "20 Jan 201	",
    status: "PENDING",
  },
];

enum GenderEnum {
  female = "female",
  male = "male",
}
export {
  DashboardNavLinks,
  DashboardStats,
  Appointments,
  DoctorList,
  Doctors,
  AppointmentsData,
  DepartmentsData,
  LineChartData,
  Patients,
  Status,
  GenderEnum,
};
