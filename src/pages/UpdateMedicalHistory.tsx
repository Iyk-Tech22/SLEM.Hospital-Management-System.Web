import {  useParams } from "react-router-dom";
import { Patients } from "../data/constant";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "../components/Label";
import React, { ChangeEvent, useEffect, useState } from "react";

export default function UpdateMedicalHistory(){
    const { id } = useParams();
    const [medicalHistoryPatient, setMedicalHistoryPatient] = useState(Patients);
    const [editedAllergies, setEditedAllergies] = useState('');
    const [editedChronicConditions, setChronicConditions] = useState('');
    const [editedPreviousSurgeries, setPreviousSurgeries] = useState('');
    const [editedCurrentMedications, setCurrentMedications] = useState('');
    const [editedFamilyMedicalHistory, setFamilyMedicalHistory] = useState('');
  const selectedID = Number(id);
//   console.log(number);
useEffect(() => {
    if (selectedID !== null) {
        const selectedItem = medicalHistoryPatient[selectedID];
        if (selectedItem) {
            setEditedAllergies(selectedItem.allegies.join(', '));
            setChronicConditions(selectedItem.chronicConditions.join(', '))
            setPreviousSurgeries(selectedItem.previousSurgeries)
            setCurrentMedications(selectedItem.currentMedications)
            setFamilyMedicalHistory(selectedItem.familyMedicalHistory)
          }
    }
  }, [selectedID,medicalHistoryPatient]);
  function handleInputChange(event) {
    setEditedAllergies(event.target.value);
    console.log('me is testing');
    
  }
  function handleUpdate(){
    console.log(medicalHistoryPatient);
    
    // setMedicalHistoryPatient(prevPatient =>
    //     prevPatient.map((item,index) =>
    //       index === selectedID ? { ...item, allergies: editedAllergies } : item
    //     )
    //   );
  }

    return <div>
        
        
        {medicalHistoryPatient.map((item,index)=>{

    return selectedID === index ? 
    
    //   const { register, handleSubmit,reset,setValue,trigger, formState: { errors } } = useForm({
    //     resolver: yupResolver(editProfileSchema),
    //         mode: "all",
    //     reValidateMode: "onSubmit"
    //   });
    //   const onSubmit = data => {
    //     console.log("Form is about to be submitted");
    //     console.log(data);
    //     reset()
    //   };
        <div className="w-full ">
          <h2 className="text-lg md:text-xl font-semibold text-center">
            Update Medical History
          </h2>
          <form className="flex flex-col justify-center items-center w-full mt-6 " onSubmit={handleUpdate}>
            <div className="w-full md:w-[55%]  border-2 border-black-100 rounded-md">
                <div className="px-4 mt-6">
                <Label name="allergies" label="Allegies:" required={true} className="text-xs text-red-600 font-bold" />
                <input id="allergies"
                      type="text"
                      className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                      onChange={(e)=>handleInputChange(e)}
                      value={editedAllergies}
                      name='allergies'/>
             

                </div>
                <div className="px-4 mt-6">
                <Label name="chronicConditions" label="Chronic Conditions:" required={true} className="text-xs text-red-600 font-bold" />
                <input id="chronicConditions"
                      type="text"
                      className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                      onChange={(e)=>handleInputChange(e)}
                      value={editedChronicConditions}
                      name='chronicConditions'/>
             

                </div>
                <div className="px-4 mt-6">
                <Label name="previousSurgeries" label="Previous Surgeries:" required={true} className="text-xs text-red-600 font-bold" />
                <input id="previousSurgeries"
                      type="text"
                      className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                      onChange={(e)=>handleInputChange(e)}
                      value={editedPreviousSurgeries}
                      name='previousSurgeries'/>
             

                </div>
                <div className="px-4 mt-6">
                <Label name="currentMedications" label="Current Medications:" required={true} className="text-xs text-red-600 font-bold" />
                <input id="currentMedications"
                      type="text"
                      className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                      onChange={(e)=>handleInputChange(e)}
                      value={editedCurrentMedications}
                      name='currentMedications'/>
             

                </div>
                <div className="px-4 mt-6">
                <Label name="familyMedicalHistory" label="Family Medical History:" required={true} className="text-xs text-red-600 font-bold" />
                <input id="familyMedicalHistory"
                      type="text"
                      className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded mb-6"
                      onChange={(e)=>handleInputChange(e)}
                      value={editedFamilyMedicalHistory}
                      name='familyMedicalHistory'/>
             

                </div>
             
            </div>
    
           
            <div className="mt-6">
              <Button
                type="submit"
                styles="w-full  bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2 mb-4 md:mr-6"
              >
                Save
              </Button>
           
           
            </div>
          </form>
        </div> 
      : null}
    )}
    

    
        
</div>
}