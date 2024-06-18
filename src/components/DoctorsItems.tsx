import { IDoctorList } from "../data/constant";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function DoctorsItems({ doctors }:{doctors:IDoctorList[]}) {
    return (
        <ul className="grid grid-cols-3 gap-6">
            {
                doctors.map(doctor => (
                    <li key={doctor.doctorName} className="bg-white p-3 rounded-md">
                        <div className="flex flex-col justify-between space-y-6">
                            <div className="flex flex-col items-center justify-center space-y-1">
                                <img src={doctor.profile} alt="doctor image" className="rounded-full shadow-md" />
                                <h2 className="font-semibold text-primaryDarkBlue">{doctor.doctorName}</h2>
                                <small className="font-semibold text-primaryDarkBlue">{doctor.department}</small>
                            </div>
                            <div className="flex flex-col space-y-6 justify-center items-center">
                                <div className="flex space-x-4">
                                    <span className="bg-white p-1 shadow-md rounded-full">
                                        <Link to="#"><FaFacebook size={18} /></Link>
                                    </span>
                                    <span className="bg-white p-1 shadow-md rounded-full">
                                        <Link to="#"><FaInstagram size={18} /></Link>
                                    </span>
                                    <span className="bg-white p-1 shadow-md rounded-full">
                                        <Link to="#"><FaTwitter size={18} /></Link>
                                    </span>
                                </div>
                                <button>Message</button>
                            </div>
                        </div>
                        <span></span>
                    </li>
                ))
            }
        </ul>
    )
}