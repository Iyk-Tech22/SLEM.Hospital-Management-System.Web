import Logo from "@/components/Logo";
import { Outlet, Link } from "react-router-dom";
import { DashboardNavLinks } from "@/data/constant";
import settingIcon from "@/assets/icons/setting-icon.svg"


export default function DashboardLayout() {
    return (
        <div className="w-full flex">
            <aside className="w-[20%] h-screen flex flex-col space-y-3 px-4 py-3 shadow-[0_0_3px_2px_rgba(0,0,0,0.1)]">
                <div className="pl-3 mb-8">
                    <Logo />
                </div>
                <ul className="flex flex-col space-y-2 ">
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
            <main className="w-[80%]">
                <header className="flex justify-between h-16 px-4 py-2">

                </header>
                <section>
                    {<Outlet />}
                </section>
            </main>
        </div>
    )
}