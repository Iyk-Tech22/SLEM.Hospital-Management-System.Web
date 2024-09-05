import { Patients } from "../data/constant";
import { useParams } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
// import Button from "@/components/Button";
import { FaRegPenToSquare } from "react-icons/fa6";
import {Modal} from './Modal';
import { useForm,Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addNewContact } from "../components/addDoctor/formSchemas";
import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

// export default function EmergencyContactDetail() {
//   const { id } = useParams();
//   const selectedID = Number(id);
//   const ContactDetails = Patients;
//   const { control, handleSubmit, reset,register, formState: { errors } } = useForm({
//     resolver: yupResolver(addNewContact),
//     mode: "all"
//   });
//   const [currentContact, setCurrentContact] = useState<any[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [inputValues, setInputValues] = useState({ name: '', phone: '', relationship: '' });

//   const openModal = () => {
//     setIsModalOpen(true); // Open the modal
//   };
//   const openEditModal = (index = null)=>{
//     setEditIndex(index);
//     if (index !== null) {
//       setInputValues(currentContact[index]);
//     } else {
//       setInputValues({ name: '', phone: '', relationship: '' });
//     }
//   }
//   // Function to handle form submission

//   const onSubmit = (data) => {
//     console.log(data);
    
//     const newContact = {
//       name: data.name,
//       phone: data.phone,
//       relationship: data.relationship,
//     };
//     setCurrentContact([newContact,...currentContact]); // Add new prescription to the array
//     setIsModalOpen(false); // Close the modal
//     reset(); // Reset the form fields
//     setIsFormSubmitted(true);
 
    
//   };
//   const handleEditContactSubmit = () =>{
//     if (editIndex !== null) {
//       const updatedContacts = [...currentContact];
//       updatedContacts[editIndex] = inputValues;
//       setCurrentContact(updatedContacts);
//     } else {
//       setCurrentContact([inputValues, ...currentContact]);
//     }
//     setIsModalOpen(false);

//   }
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };
  
//   return (
//     <div>
//       {ContactDetails.map((item, index) => {
//         return selectedID === index ? (
//           <div className='w-full relative min-h-screen' key={index}>
//             <h1 className=' leading-tight tracking-wide text-lg md:text-xl font-semibold text-center'>
//               Emergency Contacts
//             </h1>
//             {isFormSubmitted && <AddNewContact currentContact={currentContact} onEditClick={openEditModal}/>}
//             <div className='w-full md:w-[30%] shadow border border-white rounded-md bg-white flex space-x-6 justify-between items-start md:items-center p-4 mx-auto mt-6'>
//               <div className='flex flex-col '>
//                 <h2 className='font-bold leading-tight tracking-wide text-primaryBlue text-base mb-2 '>
//                   {item.primaryContactName}
//                 </h2>
//                 <p className='text-gray-500 mb-2'>{item.primaryContactRelationship}</p>
//                 <p className='text-gray-400'>{item.primaryContactPhone}</p>
//               </div>
//               <FaRegPenToSquare size={25}  className="text-primaryBlue cursor-pointer" onClick={openEditModal}/>
//             </div>
//             <div className='w-full md:w-[30%] shadow border border-white rounded-md bg-white flex space-x-6 justify-between items-start md:items-center p-4 mx-auto mt-6'>
//               <div className='flex flex-col '>
//                 <h2 className='font-bold leading-tight tracking-wide text-primaryBlue text-base mb-2 '>
//                   {item.secondaryContactName}
//                 </h2>
//                 <p className='text-gray-500 mb-2'>{item.secondaryContactRelationship}</p>
//                 <p className='text-gray-400'>{item.secondaryContactPhone}</p>
//               </div>
//               <FaRegPenToSquare size={25}  className="text-primaryBlue cursor-pointer" onClick={openEditModal}/>
//             </div>
            
//             <div className="absolute bottom-0 md:bottom-0 w-full flex flex-col justify-end items-end mb-6 md:pr-12">
           
               
              
       
    
   
//             <FaCirclePlus size={55} className='text-primaryBlue cursor-pointer' onClick={openModal}/>
//               {/* Modal for adding new prescription */}
//               <Modal title="Add New Contact" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//                 <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
//                   <div className="w-full">
//                     <div className="px-4 mt-4">
//                       <Controller
//                         name="name"
//                         control={control}
//                         render={({ field }) => (
//                           <input
//                             id="name"
//                             type="text"
//                             className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
//                             placeholder="Name"
//                             {...field}
//                           />
//                         )}
//                       />
//                       {errors.name && (
//                         <p className="text-red-500 text-xs">{errors.name.message}</p>
//                       )}
//                     </div>

//                     <div className="px-4 mt-4">
//                       <Controller
//                         name="relationship"
//                         control={control}
//                         render={({ field }) => (
//                           <input
//                             id="relationship"
//                             type="text"
//                             className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
//                             placeholder="Relationship"
//                             {...field}
//                           />
//                         )}
//                       />
//                       {errors.relationship && (
//                         <p className="text-red-500 text-xs">{errors.relationship.message}</p>
//                       )}
//                     </div>

//                     <div className="px-4 mt-4">
//                       <Controller
//                         name="phone"
//                         control={control}
//                         render={({ field }) => (
//                           <input
//                             id="phone"
//                             type="text"
//                             className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
//                             placeholder="Contact Number"
//                             {...field}
//                           />
//                         )}
//                       />
//                       {errors.phone && (
//                         <p className="text-red-500 text-xs">{errors.phone.message}</p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="mt-6 w-full text-center">
//                     <button
//                       type="submit"
//                       className="btn w-full md:w-auto bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2 mb-4 md:mr-6"
//                     >
//                       Save Contact
//                     </button>
//                     <button
//                       type="button"
//                       className="btn w-full md:w-auto mt-4 text-center border text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200"
//                       onClick={() => setIsModalOpen(false)}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               </Modal>
//               <Modal title="Edit Contact" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//                 <form onSubmit={handleSubmit(handleEditContactSubmit)} className="flex flex-col justify-center items-center">
//                   <div className="w-full">
//                     <div className="px-4 mt-4">
                     
                    
//                           <input
//                             id="name"
                            
//                             className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                            
//                             name="name"
//                             type="text"
//                             value={inputValues.name}
//                             onChange={handleInputChange}
//                           {...register('name')}
                       
//                       />
//                       {errors.name && (
//                         <p className="text-red-500 text-xs">{errors.name.message}</p>
//                       )}
//                     </div>

//                     <div className="px-4 mt-4">
//                     <input
//                             id="relationship"
                            
//                             className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                            
//                             name="name"
//                             type="text"
//                             value={inputValues.relationship}
//                             onChange={handleInputChange}
//                           {...register('relationship')}
                       
//                       />
//                       {errors.relationship && (
//                         <p className="text-red-500 text-xs">{errors.relationship.message}</p>
//                       )}
//                     </div>

//                     <div className="px-4 mt-4">
//                     <input
//                             id="phone"
                            
//                             className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                            
//                             name="phone"
//                             type="text"
//                             value={inputValues.name}
//                             onChange={handleInputChange}
//                           {...register('phone')}
                       
//                       />
//                       {errors.phone && (
//                         <p className="text-red-500 text-xs">{errors.phone.message}</p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="mt-6 w-full text-center">
//                     <button
//                       type="submit"
//                       className="btn w-full md:w-auto bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2 mb-4 md:mr-6"
//                     >
//                       Save Contact
//                     </button>
//                     <button
//                       type="button"
//                       className="btn w-full md:w-auto mt-4 text-center border text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200"
//                       onClick={() => setIsModalOpen(false)}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               </Modal>
              
                
     
//       </div>
            
//           </div>
//         ) : null;
//       })}
//     </div>
//   );
// }
export default function EmergencyContactDetail() {
  const { id } = useParams();
  const selectedID = Number(id);
  const ContactDetails = Patients; // Assume Patients is imported and defined

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addNewContact),
    mode: 'all',
  });

  const [currentContact, setCurrentContact] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const openModal = () => {
    setIsEditing(false);
    reset(); // Clear form fields
    setIsModalOpen(true);
  };

  const openEditModal = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    const contactToEdit = currentContact[index];
    reset(contactToEdit); // Populate form with existing data
    setIsModalOpen(true);
  };
  const handleDeleteClcik = (index)=>{
    const updatedContacts = currentContact.filter((_, i) => i !== index);
    setCurrentContact(updatedContacts);
  }
  const onSubmit = (data) => {
    if (isEditing && editIndex !== null) {
      const updatedContacts = [...currentContact];
      updatedContacts[editIndex] = data;
      setCurrentContact(updatedContacts);
    } else {
      setCurrentContact([data, ...currentContact]);
    }
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      {ContactDetails.map((item, index) => {
        return selectedID === index ? (
          <div className='w-full relative min-h-screen' key={index}>
            <h1 className='leading-tight tracking-wide text-lg md:text-xl font-semibold text-center'>
              Emergency Contacts
            </h1>
            <AddNewContact
              currentContact={currentContact}
              onEditClick={openEditModal}
              onDeleteClick={handleDeleteClcik}
            />
                        <div className='w-full md:w-[30%] shadow border border-white rounded-md bg-white flex space-x-6 justify-between items-start md:items-center p-4 mx-auto mt-6'>
              <div className='flex flex-col '>
                <h2 className='font-bold leading-tight tracking-wide text-primaryBlue text-base mb-2 '>
                  {item.primaryContactName}
                </h2>
                <p className='text-gray-500 mb-2'>{item.primaryContactRelationship}</p>
                 <p className='text-gray-400'>{item.primaryContactPhone}</p>
</div>
              <FaRegPenToSquare size={25}  className="text-primaryBlue cursor-pointer" onClick={openEditModal}/>
            </div>
            <div className='absolute bottom-0 md:bottom-0 w-full flex flex-col justify-end items-end mb-6 md:pr-12'>
              <FaCirclePlus
                size={55}
                className='text-primaryBlue cursor-pointer'
                onClick={openModal}
              />
            </div>
            <Modal
              title={isEditing ? 'Edit Contact' : 'Add New Contact'}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col justify-center items-center'
              >
                <div className='w-full'>
                  <div className='px-4 mt-4'>
                    <Controller
                      name='name'
                      control={control}
                      render={({ field }) => (
                        <input
                          id='name'
                          type='text'
                          className='w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded'
                          placeholder='Name'
                          {...field}
                        />
                      )}
                    />
                    {errors.name && (
                      <p className='text-red-500 text-xs'>{errors.name.message}</p>
                    )}
                  </div>

                  <div className='px-4 mt-4'>
                    <Controller
                      name='relationship'
                      control={control}
                      render={({ field }) => (
                        <input
                          id='relationship'
                          type='text'
                          className='w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded'
                          placeholder='Relationship'
                          {...field}
                        />
                      )}
                    />
                    {errors.relationship && (
                      <p className='text-red-500 text-xs'>
                        {errors.relationship.message}
                      </p>
                    )}
                  </div>

                  <div className='px-4 mt-4'>
                    <Controller
                      name='phone'
                      control={control}
                      render={({ field }) => (
                        <input
                          id='phone'
                          type='text'
                          className='w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded'
                          placeholder='Contact Number'
                          {...field}
                        />
                      )}
                    />
                    {errors.phone && (
                      <p className='text-red-500 text-xs'>{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className='mt-6 w-full text-center'>
                  <button
                    type='submit'
                    className='btn w-full md:w-auto bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2 mb-4 md:mr-6'
                  >
                    {isEditing ? 'Save Changes' : 'Add Contact'}
                  </button>
                  <button
                    type='button'
                    className='btn w-full md:w-auto mt-4 text-center border text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200'
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        ) : null;
      })}
    </div>
  );
}

function AddNewContact({ currentContact,onEditClick,onDeleteClick }) {
  // if (!currentContact || currentContact.length === 0) {
  //   return <p className="text-center text-xl">No contacts available.</p>;
  // }

  return (
    <div>
      {currentContact.map((item, index) => (
        <div
          className='w-full md:w-[30%] shadow border border-white rounded-md bg-white flex space-x-6 justify-between items-start md:items-center p-4 mx-auto mt-6'
          key={index}
        >
          <div className='flex flex-col '>
            <h2 className='font-bold leading-tight tracking-wide text-primaryBlue text-base mb-2 '>
              {item.name}
            </h2>
            <p className='text-gray-500 mb-2'>{item.relationship}</p>
            <p className='text-gray-400'>{item.phone}</p>
          </div>
          <div className="flex space-x-4">
          <FaRegPenToSquare size={25} className='text-primaryBlue cursor-pointer' onClick={()=>onEditClick(index)}/>
          <FaTrashCan size={25} className='text-red-500 cursor-pointer' onClick={()=>onDeleteClick(index)}/>
          </div>
       
        </div>
      ))}
    </div>
  );
}
