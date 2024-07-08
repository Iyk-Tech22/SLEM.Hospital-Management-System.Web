import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUser } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaRightFromBracket } from "react-icons/fa6";


export default function AccountDropdown({ children }: { children: JSX.Element }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center space-x-2">
            <FaUser size={15} />
            <p className="text-sm">Profile</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center space-x-2">
            <FaGear size={15} />
            <p className="text-sm">Settings</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center space-x-2">
            <FaRightFromBracket size={15} />
            <p className="text-sm">Logout</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
