import { IDepartments } from '@/data/constant';
import {
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { TableData } from './TableData';
import ActionButtons from './ActionButtons';

export default function DepartmentsTable({headers, departments}:{headers:string[], departments: IDepartments[]}) {
    return (
        <TableData headers={headers}>
            <TableBody className="space-y-2">
                {
                    departments.map(department => (
                        <TableRow key={department.doctor}>
                            <TableCell>{department.departmentName}</TableCell>
                            <TableCell>{department.doctor}</TableCell>
                            <TableCell>{department.headDepartment}</TableCell>
                            <TableCell className={`${department.status === "Active" ? "text-green-400" : "text-red-400"}`}>{department.status === "Active" ? "Active" : "Inactive"}</TableCell>
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