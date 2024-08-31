
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Patients } from "../data/constant";
import { FaCirclePlus } from "react-icons/fa6";


export default function PrecriptionsDetail() {
    const [step, setStep] = useState(1);
    const { id } = useParams();
    const selectedID = Number(id);
    const presciptionDetails = Patients;
    const [activeItem, setActiveItem] = useState<'current' | 'historical' | null>('current');
  
    const handleCurrentClick = () => {
      if (step > 1) {
        setStep(s => s - 1);
      }
      setActiveItem('current');
    };
  
    const handleHistoricalClick = () => {
      if (step < 2) {
        setStep(s => s + 1);
      }
      setActiveItem('historical');
    };
  
    return (
      <div>
        {presciptionDetails.map((item, index) => {
          if (selectedID !== index) return null;
  
          return (
            <div className="w-full relative min-h-screen flex flex-col" key={index}>
              <h1 className='font-bold text-center leading-tight tracking-wide text-xl mb-6'>Prescriptions</h1>
              <div className="w-full md:w-[50%] flex flex-col md:flex-row  items-start md:items-center md:mx-auto">
                <div className="flex flex-col items-center w-full md:w-[50%]">
                  <p
                    className={`cursor-pointer px-4 font-bold text-xl  ${activeItem === 'current' ? 'text-primaryBlue' : 'text-gray-500 '}`}
                    onClick={handleCurrentClick}
                  >
                    Current
                  </p>
                  <div className={`${activeItem === 'current' ? 'h-3 border-b-2 w-full border-primaryBlue' : 'border-b w-full h-3 border-gray-500'}`}></div>
                 
                </div>
                <div className="flex flex-col items-center w-full md:w-[50%]">
                  <p
                    className={`cursor-pointer px-4 font-bold text-xl ${activeItem === 'historical' ? 'text-primaryBlue' : 'text-gray-500 '}`}
                    onClick={handleHistoricalClick}
                  >
                    Historical
                  </p>
                  <div className={`${activeItem === 'historical' ? 'h-3 border-b-2 w-full border-primaryBlue' : ' border-b w-full border-gray-500 h-3'}`}></div>
                </div>
            
              </div>
       
              <div className="w-full md:w-[50%] mx-auto p-4 border bg-white rounded-md mt-4">
                {activeItem === 'current' && <CurrentDetail item={item} />}
                {activeItem === 'historical' && <HistoricalDetail item={item} />}
              </div>
              
              <div className="absolute bottom-0 md:bottom-52 w-full flex flex-col justify-end items-end mb-6 md:pr-12">
           
               
              
       
    
   
            {activeItem === 'current' && <FaCirclePlus size={55} className='text-primaryBlue'/>}
        
                
     
      </div>
            </div>
            
          );
        })}
      </div>
    );
  }
  
  function CurrentDetail({ item }: { item: typeof Patients[0] }) {
    return (
      <div className='flex flex-col'>
        <h2 className='font-bold text-primaryBlue leading-tight tracking-wide text-xl mb-2'>
          {item.currentPrecription}
        </h2>
        <p className='text-gray-500 font-bold mb-2 leading-tight tracking-wide'>Dosage: {item.currentDosage}</p>
        <p className='text-gray-500  font-bold mb-2 leading-tight tracking-wide'>Frequency: {item.currentFrequency}</p>
        <p className='text-gray-400 leading-tight tracking-wide'>Date: {item.currentPrescriptionDate}</p>
        <div className='mt-12 px-2 border border-gray-300 bg-gray-300 py-2 w-full md:w-[45%] cursor-pointer'>Move to Past Prescriptions</div>
      </div>
    );
  }
  
  function HistoricalDetail({ item }: { item: typeof Patients[0] }) {
    return (
      <div className='flex flex-col'>
        <h2 className='font-bold leading-tight text-primaryBlue tracking-wide text-xl mb-2'>
          {item.precriptionHistory}
        </h2>
        <p className='text-gray-500 font-bold mb-2 leading-tight tracking-wide'>Dosage: {item.prescriptionHistoryDosage}</p>
        <p className='text-gray-500  font-bold mb-2 leading-tight tracking-wide'>Frequency: {item.precriptionHistoryFrequency}</p>
        <p className='text-gray-400 leading-tight tracking-wide'>Date: {item.prescriptionHistoryDate}</p>
      </div>
    );
  }

//   function addNewPrescription(){
//     <div>
//         <form action="">

//         </form>
//     </div>
//   }