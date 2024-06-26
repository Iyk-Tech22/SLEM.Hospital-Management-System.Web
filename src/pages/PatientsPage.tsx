import { Patients } from "@/data/constant";
import PaginationLinks from "@/components/PaginationLinks";
import { PatientsTable } from "@/components/PatientsTable";
import SearchBar from "@/components/SearchBar";

const headers = [
  "Profile",
  "Patients ID",
  "Name",
  "Age",
  "Address",
  "Number",
  "Last Visit",
  "Status",
];

export default function PatientsPage() {
  return (
    <div>
      <div className="space-y-5 bg-white rounded-md p-5 shadow-md">
        {/* <header className="flex justify-between items-center">
          <h2 className="font-bold text-xl text-primaryDarkBlue">
            Upcoming Appointments
          </h2>
        </header> */}
        <SearchBar placeholder="Search for a patient" />
        <PatientsTable headers={headers} patients={Patients} />
      </div>
      <nav className="mt-10 w-full">
        <PaginationLinks />
      </nav>
    </div>
  );
}
