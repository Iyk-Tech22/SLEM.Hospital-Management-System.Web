import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {FaMessage} from "react-icons/fa6";


interface INotification{
    title: string,
    message: string
}

export default function NotificationDropdown({
  children,
  notifications,
}: {
  children: JSX.Element,
  notifications: INotification[]
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="mr-16">
        <DropdownMenuLabel>
          <h2 className="text-primaryDarkBlue">You have {notifications.length} new notifications</h2>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((notification) => (
          <DropdownMenuItem key={notification.title}>
            <div className="flex  space-x-3">
              <div className="pt-1">
                <FaMessage className="text-primaryDarkBlue" size={13} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-semibold text-primaryDarkBlue">
                  {notification.title}
                </h3>
                <p className="text-xs">{notification.message}</p>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
