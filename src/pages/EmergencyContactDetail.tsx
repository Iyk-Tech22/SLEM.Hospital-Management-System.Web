import { Patients } from "../data/constant";
import { useParams } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
// import Button from "@/components/Button";
import { FaRegPenToSquare } from "react-icons/fa6";
export default function EmergencyContactDetail() {
  const { id } = useParams();
  const selectedID = Number(id);
  const ContactDetails = Patients;
  return (
    <div>
      {ContactDetails.map((item, index) => {
        return selectedID === index ? (
          <div className='w-full relative min-h-screen' key={index}>
            <h1 className=' leading-tight tracking-wide text-lg md:text-xl font-semibold text-center'>
              Emergency Contacts
            </h1>
            <div className='w-full md:w-[30%] shadow border border-white rounded-md bg-white flex space-x-6 justify-between items-start md:items-center p-4 mx-auto mt-6'>
              <div className='flex flex-col '>
                <h2 className='font-bold leading-tight tracking-wide text-primaryBlue text-base mb-2 '>
                  {item.primaryContactName}
                </h2>
                <p className='text-gray-500 mb-2'>{item.primaryContactRelationship}</p>
                <p className='text-gray-400'>{item.primaryContactPhone}</p>
              </div>
              <FaRegPenToSquare size={25}  className="text-primaryBlue" />
            </div>
            <div className='w-full md:w-[30%] shadow border border-white rounded-md bg-white flex space-x-6 justify-between items-start md:items-center p-4 mx-auto mt-6'>
              <div className='flex flex-col '>
                <h2 className='font-bold leading-tight tracking-wide text-primaryBlue text-base mb-2 '>
                  {item.secondaryContactName}
                </h2>
                <p className='text-gray-500 mb-2'>{item.secondaryContactRelationship}</p>
                <p className='text-gray-400'>{item.secondaryContactPhone}</p>
              </div>
              <FaRegPenToSquare size={25}  className="text-primaryBlue"/>
            </div>
            <div className="absolute bottom-0 md:bottom-52 w-full flex flex-col justify-end items-end mb-6 md:pr-12">
           
               
              
       
    
   
            <FaCirclePlus size={55} className='text-primaryBlue'/>
        
                
     
      </div>
            
          </div>
        ) : null;
      })}
    </div>
  );
}
