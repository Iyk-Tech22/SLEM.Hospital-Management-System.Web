import { IPatients } from "@/data/constant";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { TableData } from "./TableData";

export function PatientsTable({
  headers,
  patients,
}: {
  headers: string[];
  patients: IPatients[];
}) {
  return (
    <TableData headers={headers}>
      <TableBody className="space-y-2">
        {patients.map((patient) => (
          <TableRow key={patient.name}>
            <TableCell className="font-medium">
              <img
                className="rounded-full"
                src={patient.profile}
                alt="profile image"
              />
            </TableCell>
            <TableCell>{patient.patientID}</TableCell>
            <TableCell>{patient.name}</TableCell>
            <TableCell>{patient.age}</TableCell>
            <TableCell>{patient.address}</TableCell>
            <TableCell>{patient.number}</TableCell>
            <TableCell>{patient.lastVist}</TableCell>
            <TableCell>
              <span className={`border text-xs px-1 py-0 rounded-md ${patient.status === "APPROVED"? "border-green-500 text-green-500":"border-red-500 text-red-500"}`}>{patient.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableData>
  );
}
