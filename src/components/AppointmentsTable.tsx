import { Appointments } from '@/data/constant';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


export function AppointmentsTable() {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] font-medium text-primaryDarkBlue">Photo</TableHead>
                        <TableHead className="font-medium text-primaryDarkBlue">Name</TableHead>
                        <TableHead className="font-medium text-primaryDarkBlue">Appointment With</TableHead>
                        <TableHead className="font-medium text-primaryDarkBlue">Timing</TableHead>
                        <TableHead className="font-medium text-primaryDarkBlue">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="space-y-2">
                    {
                    Appointments.map(appointment => (
                        <TableRow key={appointment.name}>
                            <TableCell className="font-medium">
                                <img className="rounded-full" src={appointment.profile} alt="profile image" />
                            </TableCell>
                            <TableCell>{appointment.name}</TableCell>
                            <TableCell>{appointment.appointmentWith}</TableCell>
                            <TableCell >{appointment.timing}</TableCell>
                            <TableCell>
                                <button className='px-2 py-1 rounded-sm border border-primaryDarkBlue'>
                                    {appointment.action? "Take Up": "Decline"}
                                </button>
                            </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}