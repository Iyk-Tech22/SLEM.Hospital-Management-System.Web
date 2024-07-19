import Button from "@/components/Button";
// import { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import ReactDOM from 'react-dom';
import {useForm,SubmitHandler} from 'react-hook-form'
import Label from '../components/Label';

enum GenderEnum {
  female='female',
  male='male'
}

interface RegisterPatientFormInput{
  firstName:string
  lastName:string
  email:string
  phone:number
  gender:GenderEnum
  age:number
  description:string
  doctorName:string
  staffOnDuty:string
  wardNo:number
  
}

export default function RegisterPatientPage() {
    // const [date, setDate] = useState<Date | null>(null);
    // const [chooseDate, setChooseDate] = useState<Date | null>(null);

    const {register,handleSubmit, formState : {errors, isSubmitted}} = useForm<RegisterPatientFormInput>();const onSumbit:SubmitHandler<RegisterPatientFormInput> = (data) => console.log(data);
     

    return (
      <div className="w-full mx-4 md:max-w-2xl md:mx-auto">
        <h2 className="text-lg font-semibold">New Patient</h2>
        <form className="grid mt-8" onSubmit={handleSubmit(onSumbit)}>
          {/* BASIC FORM */}
          <div>
            <p className="w-[95%] md:w-full text-sm font-medium text-white bg-primaryBlue p-3">
              Basic Information
            </p>
            <div className="bg-white md:px-8 md:py-4">
              {/* FIRST & LAST NAME */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                <div className="space-y-2">
                  <Label name="firstName" label="First Name" required={true} />
                  <input
                  {...register("firstName", {required: 'This field is  required'})}
                    id="firstName"
                    type="text"
                    className="w-[95%] md:w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                  {isSubmitted && errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label name="lastName" label="Last Name" required={true} />
                  <input
                  {...register("lastName",{required: 'This field is  required'})}
                    id="lastName"
                    type="text"
                    className="w-[95%] md:w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                  {isSubmitted && errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                </div>
              </div>
              {/* PHONE & EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                <div className="space-y-2">
                  <Label name="email" label="Email" required={true} />
                  <input
                  {...register("email",{required: 'This field is  required'})}
                    id="email"
                    type="email"
                    className="w-[95%] md:w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                  {isSubmitted && errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label name="phone" label="Phone No." required={true} />
                  <input
                  {...register("phone",{required: 'This field is  required'})}
                    id="phone"
                    type="text"
                    className="w-[95%] md:w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                  {isSubmitted && errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>
              </div>
              {/* GENDER & AGE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                <div className="space-y-2">
                  <Label name="gender" label="Gender" required={true} />
                  <select
                  {...register("gender",{required: 'This field is  required'})}
                    id="gender"
                    className="w-[95%] md:w-full border border-gray-300 p-2  focus-visible:outline-primaryBlue"
                  >
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                  {isSubmitted && errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label name="age" label="Age" required={true} />
                  <input
                  {...register("age",{required: 'This field is  required'})}
                    id="age"
                    type="text"
                    className="w-[95%] md:w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                  {isSubmitted && errors.age && <p className="text-red-500">{errors.age.message}</p>}
                </div>
              </div>
              {/* Date */}
              {/* <div className="grid space-y-2 mt-4">
                <Label name="date" label="Date" required={true} />
                <DatePicker
                  selected={date}
                  className="w-full cursor-pointer border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(date) => setDate(date)}
                />
              </div> */}
              {/* DESCRIPTION */}
              <div className="grid space-y-2 mt-4">
                <Label
                  name="description"
                  label="Description"
                  required={false}
                />
                <textarea
                {...register("description",{required: 'This field is  required'})}
                  className="w-[95%] md:w-full border border-gray-300 py-2 px-3 focus-visible:outline-primaryBlue"
                  id="description"
                  rows={5}
                  cols={5}
                ></textarea>
                {isSubmitted && errors.description && <p className="text-red-500">{errors.description.message}</p>}
              </div>
            </div>
          </div>
          {/* REGISTRATION FORM */}
          <div className="mt-6">
            <p className="w-[95%] md:w-full text-sm font-medium text-white bg-primaryBlue p-3">
              Registration Information
            </p>
            <div className="md:px-8 md:py-4 bg-white">
              {/* DOCTOR NAME & STAFF ON DUTY */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                <div className="space-y-2">
                  <Label name="doctorName" label="Doctor" required={true} />
                  <input
                  {...register("doctorName",{required: 'This field is  required'})}
                    id="doctorName"
                    type="text"
                    className="w-[95%] md:w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                  {isSubmitted && errors.doctorName && <p className="text-red-500">{errors.doctorName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label
                    name="staffOnDuty"
                    label="Staff On Duty"
                    required={true}
                  />
                  <input
                  {...register("staffOnDuty",{required: 'This field is  required'})}
                    id="staffOnDuty"
                    type="text"
                    className="w-[95%] md:w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                  {isSubmitted && errors.staffOnDuty && <p className="text-red-500">{errors.staffOnDuty.message}</p>}
                </div>
              </div>
              {/* WARD NO. & DATE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4 mb-6">
                <div className="space-y-2">
                  <Label name="wardNo" label=" Ward No." required={true} />
                  <input
                  {...register("wardNo",{required: 'This field is  required'})}
                    id="wardNo"
                    type="text"
                    className="w-[95%] md:w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                  {isSubmitted && errors.wardNo && <p className="text-red-500">{errors.wardNo.message}</p>}
                </div>
                <div className="grid space-y-2">
                  <Label
                    name="chooseDate"
                    label="Choose Date"
                    required={true}
                  />
                  {/* <DatePicker
                    selected={chooseDate}
                    className="w-[95%] md:w-full cursor-pointer border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                    onChange={(date) => setChooseDate(date)}
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    );
}
