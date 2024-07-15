import { DashboardStats } from "@/data/constant";
import { currencyFormater } from "@/utils/currencyFormater";
import { AppointmentsTable } from "@/components/AppointmentsTable";
import { DoctorListTable } from "@/components/DoctorListTable";
import { Appointments } from "@/data/constant";
import { LineChartData } from "@/data/constant";
import PatientsLineChart from "@/components/PatientsLineChart";
import GenderPiechart from "@/components/GenderPiechart";
import { Link } from "react-router-dom";

const headers = ["profile", "name", "appointment With", "timing",  "action"];

export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-5">
      <header>
        <ul className="w-full flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-center">
          {DashboardStats.map((data) => (
            <li
              key={data.name}
              className="flex w-full md:w-auto items-center space-x-3 px-8 py-6 rounded-md bg-white shadow-md"
            >
              <div>
                <data.icon className="text-primaryOrange" size={25} />
              </div>
              <div>
                <p className="text-base md:text-xl font-bold text-primaryDarkBlue">
                  {data.name}
                </p>
                <small className="text-sm md:text-lg text-primaryBlue font-bold">
                  {data.name.toLowerCase() === "hospital earning"
                    ? currencyFormater(data.stats)
                    : data.stats}
                </small>
              </div>
            </li>
          ))}
        </ul>
      </header>
      <div className="w-full hidden md:flex space-x-4 ">
        <div className="w-full md:w-[62%] h-80 shadow-md bg-white rounded-md px-6">
          <header className="flex justify-between items-center py-3">
            <h2 className="font-bold text-base md:text-lg text-primaryDarkBlue">
              Hospital Survey
            </h2>
            <div className="flex space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 rounded-full bg-primaryBlue"></span>
                <span className="text-sm md:text-base">New Patients</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 rounded-full bg-primaryOrange"></span>
                <span className="text-sm md:text-base">Old Patients</span>
              </div>
            </div>
          </header>
          <hr></hr>
          <main className="w-full mt-3">
            <PatientsLineChart data={LineChartData} />
          </main>
        </div>
        <div className="w-full md:w-[38%] h-80 shadow-md bg-white rounded-md px-6">
          <header className="flex justify-between items-center py-4">
            <h2 className="font-bold text-lg text-primaryDarkBlue">Gender</h2>
            <select className="w-32 font-medium text-xs p-1 bg-gray-200 text-primaryDarkBlue rounded-full">
              <option hidden selected>
                Current Month
              </option>
            </select>
          </header>
          <main>
            <GenderPiechart />
          </main>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row md:space-x-4">
        <div className="w-full mb-4 md:mb-0 md md:w-[62%] shadow-md bg-white rounded-md px-5">
          <header className="flex justify-between items-center pt-4">
            <h2 className="font-bold text-base md:text-lg text-primaryDarkBlue">
              Upcoming Appointments
            </h2>
            <Link to="/appointments">
              <p className="text-sm hover:underline font-semibold cursor-pointer text-primaryBlue">
                View All
              </p>
            </Link>
          </header>
          <main className="mt-10">
            <AppointmentsTable headers={headers} appointments={Appointments} />
          </main>
        </div>
        <div className="w-full md:w-[38%] shadow-md bg-white rounded-md px-5">
          <header className="flex justify-between items-center pt-4">
            <h2 className="font-bold text-base md:text-lg text-primaryDarkBlue">
              Doctor List
            </h2>
            <Link to="/doctors">
              <p className="text-sm hover:underline font-semibold cursor-pointer text-primaryBlue">
                View All
              </p>
            </Link>
          </header>
          <main className="text-xs md:text-sm mt-10">
            <DoctorListTable />
          </main>
        </div>
      </div>
    </div>
  );
}
