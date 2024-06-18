import { FaList } from "react-icons/fa6";
import { LayoutGrid } from "lucide-react";
import Button from "@/components/Button";
import DoctorsItems from "@/components/DoctorsItems";
import { Doctors } from "@/data/constant";

export default function DoctorsPage() {
    return (
        <div className="flex flex-col space-y-3">
            <nav className="flex justify-between items-center">
                <div className="flex space-x-3 items-center">
                    <h2 className="text-lg text-primaryDarkBlue font-bold">View</h2>
                    <span className="p-1 bg-white rounded-sm shadow-sm"><LayoutGrid size={16}/></span>
                    <span><FaList /></span>
                </div>
                <Button>+Add Doctor</Button>
            </nav>
            <main>
                <DoctorsItems doctors={Doctors} />
            </main>
            <nav></nav>
        </div>
    )
}