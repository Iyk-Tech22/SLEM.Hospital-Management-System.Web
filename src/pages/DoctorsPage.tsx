import { FaList } from "react-icons/fa6";
import { LayoutGrid } from "lucide-react";
import Button from "@/components/Button";
import DoctorsItems from "@/components/DoctorsItems";
import { Doctors } from "@/data/constant";
import { useState } from "react";
import PaginationLinks from "@/components/PaginationLinks";
import { Link } from "react-router-dom";

const layoutSyles = "p-1 bg-white rounded-sm shadow-sm";

export default function DoctorsPage() {
    const [layout, setLayout] = useState("grid");

    function handleLayout(layout: string) {
        setLayout(layout);
    }

    return (
      <div className="flex flex-col justify-between w-full min-h-[calc(100vh-71px)]">
        <div className="flex flex-col space-y-3">
          <nav className="flex justify-between items-center">
            <div className="flex space-x-3 items-center">
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
            <Button>
              <Link to="/doctors/add-doctor">+Add Doctor</Link>
            </Button>
          </nav>
          <main className="w-full">
            <DoctorsItems doctors={Doctors} layoutType={layout} />
          </main>
        </div>
        <nav className="mt-10 w-full">
          <PaginationLinks />
        </nav>
      </div>
    );
}