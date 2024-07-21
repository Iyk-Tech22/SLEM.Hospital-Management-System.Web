import { FaList } from "react-icons/fa6";
import { LayoutGrid } from "lucide-react";
import Button from "@/components/Button";
import DoctorsItems from "@/components/DoctorsItems";
import { Doctors } from "@/data/constant";
import { useState } from "react";
import PaginationLinks from "@/components/PaginationLinks";
import { Link } from "react-router-dom";
import AssignPatientModal from "@/components/AssignPatientModal";

const layoutSyles = "p-1 bg-white rounded-sm shadow-sm";

export default function DoctorsPage() {
    const [layout, setLayout] = useState("grid");

    function handleLayout(layout: string) {
        setLayout(layout);
    }

    return (
      <div className="flex flex-col w-full min-h-[calc(100vh-71px)]">
        <div className="flex flex-col space-y-3">
          
          <nav className="flex flex-col md:flex-row justify-between items-center">
            <div className="hidden md:flex space-x-3 items-center">
              <h2 className="text-lg text-primaryDarkBlue font-bold">View</h2>
              <span
                className={`cursor-pointer ${
                  layout === "grid" ? layoutSyles : ""
                }`}
                onClick={() => handleLayout("grid")}
              >
                <LayoutGrid size={16} className="text-primaryDarkBlue" />
              </span>
              <span
                className={`cursor-pointer ${
                  layout === "list" ? layoutSyles : ""
                }`}
                onClick={() => handleLayout("list")}
              >
                <FaList className="text-primaryDarkBlue" />
              </span>
            </div>
            <nav className="mb-4 md:hidden w-full">
              <PaginationLinks />
            </nav>
            <Link to="/account/doctors/add-doctor" className="w-full md:w-auto">
              <Button
                type="button"
                styles="w-full md:w-auto md:mt-4 md:mt-0 bg-primaryBlue text-white hover:bg-primaryBlue/90"
              >
                +Add Doctor
              </Button>
            </Link>
          </nav>
          <main className="w-full">
            <DoctorsItems doctors={Doctors} layoutType={layout} />
          </main>
        </div>

        <nav className="mt-10 hidden md:block w-full">
          <PaginationLinks />
        </nav>

        {/* ASSIGN PATIENT TO DOCTOR */}
        <AssignPatientModal />
      </div>
    );
}