import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaEllipsisVertical } from "react-icons/fa6";

export default function Dropdown({layoutType}:{layoutType:string}) {
    return (
        <div className={`absolute right-1 ${layoutType === "list"? "top-5":"top-3"}`}>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <FaEllipsisVertical size={20} className="text-primaryDarkBlue"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Assign</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}