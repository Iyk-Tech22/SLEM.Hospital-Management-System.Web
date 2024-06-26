import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";


export default function RegisterPatientModal() {
    

    return (
      <AlertDialog>
        <AlertDialogTrigger className="w-[70%] px-4 py-2 bg-primaryBlue text-white font-medium rounded-md text-sm">
          + Register Patients
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>New Patient</AlertDialogTitle>
          </AlertDialogHeader>
          
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
}
