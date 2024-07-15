import { IAppointments } from '@/data/constant';
import {
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { TableData } from './TableData';
import ActionButtons from './ActionButtons';

export function AppointmentsTable({headers, appointments}:{headers: string[], appointments: IAppointments[]}) {
    return (
        <TableData headers={headers}>
            <TableBody className="text-xs md:text-base space-y-2">
                {
                    appointments.map(appointment => (
                        <TableRow key={appointment.name}>
                            <TableCell className="font-medium">
                                <img className="rounded-full" src={appointment.profile} alt="profile image" />
                            </TableCell>
                            <TableCell className='text-sm md:text-base'>{appointment.name}</TableCell>
                            <TableCell>{appointment.appointmentWith}</TableCell>
                            {appointment.date && <TableCell >{appointment.date}</TableCell>}
                            <TableCell >{appointment.timing}</TableCell>
                            {appointment.disease && <TableCell >{appointment.disease}</TableCell>}
                            <TableCell>
                                <ActionButtons />
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </TableData>
    )
}