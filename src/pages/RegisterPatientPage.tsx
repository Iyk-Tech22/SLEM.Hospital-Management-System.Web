import Button from "@/components/Button";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Label from '../components/Label';

export default function RegisterPatientPage() {
    const [date, setDate] = useState<Date | null>(null);
    const [chooseDate, setChooseDate] = useState<Date | null>(null);

    return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold">New Patient</h2>
        <form className="grid mt-8">
          {/* BASIC FORM */}
          <div>
            <p className="w-full text-sm font-medium text-white bg-primaryBlue p-3">
              Basic Information
            </p>
            {/* FIRST & LAST NAME */}
            <div className="grid grid-cols-2 gap-5 mt-4">
              <div className="space-y-2">
                <Label name="firstName" label="First Name" />
                <input
                  id="firstName"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
              </div>
              <div className="space-y-2">
                <Label name="lastName" label="Last Name" />
                <input
                  id="lastName"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
              </div>
            </div>
            {/* PHONE & EMAIL */}
            <div className="grid grid-cols-2 gap-5 mt-4">
              <div className="space-y-2">
                <Label name="email" label="Email" />
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
              </div>
              <div className="space-y-2">
                <Label name="phone" label="Phone No." />
                <input
                  id="phone"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
              </div>
            </div>
            {/* GENDER & AGE */}
            <div className="grid grid-cols-2 gap-5 mt-4">
              <div className="space-y-2">
                <Label name="gender" label="Gender" />
                <select
                  id="gender"
                  className="w-full border border-gray-300 p-2  focus-visible:outline-primaryBlue"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label name="age" label="Age" />
                <input
                  id="age"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
              </div>
            </div>
            {/* Date */}
            <div className="grid space-y-2 mt-4">
              <Label name="date" label="Date" />
              <DatePicker
                selected={date}
                className="w-full cursor-pointer border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                onChange={(date) => setDate(date)}
              />
            </div>
            {/* DESCRIPTION */}
            <div className="grid space-y-2 mt-4">
              <Label name="description" label="Description" />
              <textarea
                className="border border-gray-300 py-2 px-3 focus-visible:outline-primaryBlue"
                id="description"
                rows={5}
                cols={5}
              ></textarea>
            </div>
          </div>
          {/* REGISTRATION FORM */}
          <div className="mt-6">
            <p className="w-full text-sm font-medium text-white bg-primaryBlue p-3">
              Registration Information
            </p>
            {/* DOCTOR NAME & STAFF ON DUTY */}
            <div className="grid grid-cols-2 gap-5 mt-4">
              <div className="space-y-2">
                <Label name="doctorName" label="Doctor" />
                <input
                  id="doctorName"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
              </div>
              <div className="space-y-2">
                <Label name="staffOnDuty" label="Staff On Duty" />
                <input
                  id="staffOnDuty"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
              </div>
            </div>
            {/* WARD NO. & DATE */}
            <div className="grid grid-cols-2 gap-5 mt-4 mb-6">
              <div className="space-y-2">
                <Label name="wardNo" label=" Ward No." />
                <input
                  id="wardNo"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
              </div>
              <div className="grid space-y-2">
                <Label name="chooseDate" label="Choose Date" />
                <DatePicker
                  selected={chooseDate}
                  className="w-full cursor-pointer border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(date) => setChooseDate(date)}
                />
              </div>
            </div>
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    );
}
