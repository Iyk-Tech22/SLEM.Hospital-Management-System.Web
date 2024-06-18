import { IDoctorList } from "../data/constant";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";



export default function DoctorsItems({ doctors, layoutType }:{doctors:IDoctorList[], layoutType:string}) {
    return (
        <ul className={`grid w-full ${layoutType === "grid" ? "grid-cols-3 gap-6": "grid-cols-2 gap-3"} `}>
            {
                doctors.map(doctor => (
                    <li key={doctor.doctorName} className="bg-white p-3 rounded-md relative">
                        <div className={`flex ${layoutType === "grid" ? "flex-col justify-between space-y-6": "flex-row items-center space-x-3"} `}>
                            <div className={`flex ${layoutType === "grid" ? "flex-col items-center justify-center space-y-1": "flex-row space-x-4 items-center"} `}>
                                <img src={doctor.profile} alt="doctor image" className={`rounded-full shadow-md`}width={layoutType === "list"? 30: ""} height={layoutType === "list"? 30: ""} />
                                <h2 className="font-semibold text-primaryDarkBlue">{doctor.doctorName}</h2>
                                <small className="font-semibold text-primaryDarkBlue">{doctor.department}</small>
                            </div>
                            <div className={`flex ${layoutType === "grid" ? "flex-col space-y-6 justify-center items-center": "flex-row items-end space-x-3"} `} >
                                <div className="flex space-x-4">
                                    <span className="bg-white p-1 shadow-md rounded-full">
                                        <Link to="#"><FaFacebook size={18}  className="text-primaryDarkBlue"/></Link>
                                    </span>
                                    <span className="bg-white p-1 shadow-md rounded-full">
                                        <Link to="#"><FaInstagram size={18}  className="text-primaryDarkBlue"/></Link>
                                    </span>
                                    <span className="bg-white p-1 shadow-md rounded-full">
                                        <Link to="#"><FaTwitter size={18} className="text-primaryDarkBlue" /></Link>
                                    </span>
                                </div>
                                <button>Message</button>
                            </div>
                        </div>
                        <Dropdown layoutType={layoutType} />
                    </li>
                ))
            }
        </ul>
    )
}