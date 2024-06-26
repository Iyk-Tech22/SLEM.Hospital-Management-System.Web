import { FaSearch } from "react-icons/fa"

export default function SearchBar({placeholder}:{placeholder:string}) {
    return(
        <div className="px-4 py-1 rounded-md border border-solid border-gray-200 flex space-x-1 items-center">   
            <FaSearch className="text-primaryDark" size={15} />
            <input type="text" className="w-full px-3 py-1 text-sm focus:ring-0 outline-none font-medium placeholder:text-primaryDark" placeholder={placeholder} />
        </div>
    )
}