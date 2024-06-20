import { DashboardStats } from "@/data/constant";
import { currencyFormater } from "@/utils/currencyFormater";
import { AppointmentsTable } from "@/components/AppointmentsTable";
import { DoctorListTable } from "@/components/DoctorListTable";
import { FaEllipsisVertical } from 'react-icons/fa6';
import { Appointments } from "@/data/constant";

const headers = ["profile", "name", "appointment With", "timing",  "action"];

export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-5">
        <header>
          <ul className="w-full flex justify-between items-center">
            {
              DashboardStats.map(data => (
                  <li key={data.name} className="flex items-center space-x-3 px-8 py-6 rounded-md bg-white shadow-md" >
                    <div>
                      <data.icon className="text-primaryOrange" size={25}/>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-primaryDarkBlue">{data.name}</p>
                      <small className="text-base text-primaryBlue font-bold">
                        {
                          data.name.toLowerCase() === "hospital earning" ?
                            currencyFormater(data.stats) : data.stats
                        }
                      </small>
                    </div>
                  </li>
              ))
            }
          </ul>
        </header>
        <div className="w-full flex space-x-4 ">
          <div className="w-[62%] h-80 shadow-md bg-white rounded-md px-6">
            <header className="flex justify-between items-center py-3">
              <h2 className="font-bold text-lg text-primaryDarkBlue">Hospital Survey</h2>
              <div className="flex space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 rounded-full bg-primaryBlue"></span>
                  <span>New Patients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 rounded-full bg-primaryOrange"></span>
                  <span>Old Patients</span>
                </div>
              </div>
            </header>
            <hr></hr>
            <main></main>
          </div>
          <div className="w-[38%] h-80 shadow-md bg-white rounded-md">
            <header className="flex justify-between items-center px-6 py-4">
              <h2 className="font-bold text-lg text-primaryDarkBlue">Gender</h2>
              <select className="w-32 font-medium text-xs p-1 bg-gray-200 text-primaryDarkBlue rounded-full">
                <option hidden selected>Current Month</option>
              </select>
            </header>
          </div>
        </div>
        <div className="w-full flex space-x-4">
          <div className="w-[62%] shadow-md bg-white rounded-md px-5">
            <header className="flex justify-between items-center pt-4">
              <h2 className="font-bold text-lg text-primaryDarkBlue">Upcoming  Appointments</h2>
              <p className="text-sm hover:underline font-semibold cursor-pointer text-primaryBlue">View All</p>
            </header>
            <main className="mt-10">
              <AppointmentsTable headers={headers} appointments={Appointments} />
            </main>
          </div>
          <div className="w-[38%] shadow-md bg-white rounded-md px-5">
            <header className="flex justify-between items-center pt-4">
              <h2 className="font-bold text-lg text-primaryDarkBlue">Doctor List</h2>
              <FaEllipsisVertical className="text-primaryDarkBlue cursor-pointer" size={20} />
            </header>
            <main className="mt-10">
              <DoctorListTable />
            </main>
          </div>
        </div>
    </div>
  )
}
