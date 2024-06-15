import { DoctorList } from '@/data/constant';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


export function DoctorListTable() {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] font-medium text-primaryDarkBlue">Photo</TableHead>
                        <TableHead className="font-medium text-primaryDarkBlue">Doctor Name</TableHead>
                        <TableHead className="font-medium text-primaryDarkBlue">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="space-y-2">
                    {
                    DoctorList.map(doctor => (
                        <TableRow key={doctor.doctorName}>
                            <TableCell className="font-medium">
                                <img className="rounded-full" src={doctor.profile} alt="profile image" />
                            </TableCell>
                            <TableCell>{doctor.doctorName}</TableCell>
                            <TableCell>
                                <button className={`px-2 py-1 rounded-sm border ${doctor.status === 0? "border-green-400 text-green-400":"border-red-400 text-red-400"}`}>
                                   {doctor.status === 0? "Available": "Absend"}
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