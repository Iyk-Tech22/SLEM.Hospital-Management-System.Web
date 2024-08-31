
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Patients } from "../data/constant";
import { FaRegSquarePlus } from "react-icons/fa6";


export default function NotesObservations() {
    const [step, setStep] = useState(1);
    const { id } = useParams();
    const selectedID = Number(id);
    const notesObservationsDetails = Patients;
    const [activeItem, setActiveItem] = useState<'doctor' | 'nurse' | null>('doctor');
  
    const handleDoctorClick = () => {
      if (step > 1) {
        setStep(s => s - 1);
      }
      setActiveItem('doctor');
    };
  
    const handleNurseClick = () => {
      if (step < 2) {
        setStep(s => s + 1);
      }
      setActiveItem('nurse');
    };
  
    return (
      <div>
        {notesObservationsDetails.map((item, index) => {
          if (selectedID !== index) return null;
          return (
            <div className="w-full relative min-h-screen flex flex-col" key={index}>
              <h1 className='font-bold text-center leading-tight tracking-wide text-lg md:text-xl mb-6'>Notes & Observations</h1>
              <div className="w-full md:w-[50%] flex flex-col md:flex-row  items-start md:items-center md:mx-auto">
                <div className="flex flex-col items-center w-full md:w-[50%]">
                  <p
                    className={`cursor-pointer px-4 font-bold text-xl  ${activeItem === 'doctor' ? 'text-primaryBlue' : 'text-gray-500 '}`}
                    onClick={handleDoctorClick}
                  >
                    Doctor
                  </p>
                  <div className={`${activeItem === 'doctor' ? 'h-3 border-b-2 w-full border-primaryBlue' : 'border-b w-full h-3 border-gray-500'}`}></div>
                 
                </div>
                <div className="flex flex-col items-center w-full md:w-[50%]">
                  <p
                    className={`cursor-pointer px-4 font-bold text-xl ${activeItem === 'nurse' ? 'text-primaryBlue' : 'text-gray-500 '}`}
                    onClick={handleNurseClick}
                  >
                    Nurse
                  </p>
                  <div className={`${activeItem === 'nurse' ? 'h-3 border-b-2 w-full border-primaryBlue' : ' border-b w-full border-gray-500 h-3'}`}></div>
                </div>
            
              </div>
             
              <div className="w-full md:w-[50%] mx-auto p-4 border bg-white rounded-md mt-4">
                {activeItem === 'doctor' && <DoctorNote item={item} />}
                {activeItem === 'nurse' && <NurseNote item={item} />}
              </div>
              
              <div className="absolute bottom-0 md:bottom-52 w-full flex flex-col justify-center items-center mb-6">
              <hr className='h-[2px] my-2 w-full px-0'/>
                <div className='flex w-full items-center justify-center space-x-6 mt-6'>
                <input
          type="text"
          className="w-full md:w-[50%] border border-gray-200 p-3 focus-visible:outline-primaryBlue text-gray-500 bg-white rounded h-14"
          placeholder={`Add a new ${activeItem === 'doctor' ? 'doctor':'nurse'} note...`}
        />
       
    
       <span className="mr-2">
            <FaRegSquarePlus size={55} className='text-primaryBlue'/>
          </span>
                </div>
     
      </div>
            </div>
            
          );
        })}
      </div>
    );
  }
  
  function DoctorNote({ item }: { item: typeof Patients[0] }) {
    return (
      <div className='flex flex-col'>
        <h2 className='font-bold leading-tight tracking-wide text-xl mb-2'>
          {item.doctorNote}
        </h2>
        <p className='text-gray-400'>{item.noteDate}</p>
      </div>
    );
  }
  
  function NurseNote({ item }: { item: typeof Patients[0] }) {
    return (
      <div className='flex flex-col'>
        <h2 className='font-bold leading-tight tracking-wide text-xl mb-2'>
          {item.nurseNote}
        </h2>
        <p className='text-gray-400'>{item.noteDate}</p>
      </div>
    );
  }
