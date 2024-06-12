import Logo from "@/components/Logo";
import { Outlet, Link } from "react-router-dom";
import { DashboardNavLinks } from "@/data/constant";
import settingIcon from "@/assets/icons/setting-icon.svg";
import SearchBar from "@/components/SearchBar";
import { FaBell, FaAngleDown } from "react-icons/fa";
import avatar from "@/assets/images/avatar.png";


export default function DashboardLayout() {
    return (
        <div className="w-full h-screen flex overflow-y-hidden">
            <aside className="w-[20%] h-full z-10 flex flex-col space-y-3 px-4 py-3 shadow-[0_3px_3px_1px_rgba(0,0,0,0.1)]">
                <div className="pl-3 mb-8">
                    <Logo />
                </div>
                <ul className="h-full flex flex-col space-y-2 ">
                    {
                        DashboardNavLinks.map(navLink => (
                            <li key={navLink.name}>
                                <Link to={navLink.name} className="flex p-3 items-center space-x-3 text-sm rounded-md hover:bg-[#f6f7fb] text-primaryGray font-medium">
                                    <span>
                                        <navLink.icon color="#afb6c0" width={20} height={20} size={20}/>
                                    </span>
                                    <p>
                                        <span className="capitalize">{navLink.name}</span>
                                    </p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="w-full h-full pl-3 py-4 flex flex-col justify-between">
                    <Link to="register-patients" className=" w-[70%] px-4 py-2 bg-primaryBlue text-white font-medium rounded-md text-sm">
                        + Register Patient
                    </Link>
                    <Link to="setting" className="flex space-x-3">
                        <img src={settingIcon} alt="setting" />
                        <span className="text-primaryGray font-medium text-sm">Settings</span>
                    </Link>
                </div>
            </aside>
            <main className="w-[80%] h-full">
                <header className="flex justify-between z-20 border-b-2 border-gray-200 items-center h-[10%] px-6 py-2 bg-white">
                    <SearchBar />
                    <ul className="flex items-center space-x-4">
                        <li className="relative cursor-pointer">
                            <FaBell className="text-primaryBlue" size={21}/>
                            <div className="absolute -top-0 left-2 z-10 rounded-full h-2 w-2 bg-red-500"></div>
                        </li>
                        <li className="cursor-pointer">
                            <img src={avatar} alt="user profile" width={25} height={25} className="rounded-full shadow-[0_2px_6px_3px_rgba(0,0,0,0.1)]" />
                        </li>
                        <li className="cursor-pointer">
                            <FaAngleDown className="text-primaryBlue" size={21}/>
                        </li>
                    </ul> 
                </header>
                <section className="h-[90%] bg-[#f6f7fb] p-5">
                    <Outlet />
                </section>
            </main>
        </div>
    )
}