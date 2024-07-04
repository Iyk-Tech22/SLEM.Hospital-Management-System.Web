import Button from "@/components/Button";
import Label from "@/components/Label";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function AddDoctor() {
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [selectedForm , setSelectedForm] = useState<string>("basicForm");

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold">Add New Doctor</h2>
      {/* DOCTOR BASIC INFORMATION FORM */}
      <form className="grid mt-8">
        {/* BASIC FORM */}
        <div>
          <p
            className="flex justify-between items-center w-full text-sm font-medium text-white bg-primaryBlue p-3 cursor-pointer"
            onClick={() => setSelectedForm("basicForm")}
          >
            <span>Doctor's Basic Information</span>
            {selectedForm === "basicForm" ? (
              <FaAngleDown className="text-white text-lg font-semibold" />
            ) : (
              <FaAngleRight className="text-white text-lg font-semibold" />
            )}
          </p>
          {selectedForm === "basicForm" && (
            <div className="bg-white px-8 py-4">
              {/* FIRST & LAST NAME */}
              <div className="grid grid-cols-2 gap-5 mt-4">
                <div className="space-y-2">
                  <Label name="firstName" label="First Name" required={true} />
                  <input
                    id="firstName"
                    type="text"
                    className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                </div>
                <div className="space-y-2">
                  <Label name="lastName" label="Last Name" required={true} />
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
                  <Label name="email" label="Email" required={true} />
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                </div>
                <div className="space-y-2">
                  <Label name="phone" label="Phone No." required={true} />
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
                  <Label name="gender" label="Gender" required={true} />
                  <select
                    id="gender"
                    className="w-full border border-gray-300 p-2  focus-visible:outline-primaryBlue"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label name="age" label="Age" required={true} />
                  <input
                    id="age"
                    type="text"
                    className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                </div>
              </div>
              {/* DATE OF BIRTH && SEPECIALTY */}
              <div className="grid grid-cols-2 gap-5 mt-4">
                {/* <div className="grid space-y-2">
                  <Label name="dob" label="Date of Birth" required={true} />
                  <DatePicker
                    selected={dateOfBirth}
                    className="w-full cursor-pointer border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                    onChange={(date) => setDateOfBirth(date)}
                  />
                </div> */}
                <div className="space-y-2">
                  <Label name="speciality" label="Speciality" required={true} />
                  <input
                    id="speciality"
                    type="text"
                    className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                </div>
              </div>
              {/* DESCRIPTION */}
              <div className="grid space-y-2 my-4">
                <Label
                  name="description"
                  label="Description"
                  required={false}
                />
                <textarea
                  className="border border-gray-300 py-2 px-3 focus-visible:outline-primaryBlue"
                  id="description"
                  rows={5}
                  cols={5}
                ></textarea>
              </div>
              <Button>Submit</Button>
            </div>
          )}
        </div>
      </form>
      {/* DOCTOR ACCOUNT INFORMATION FORM */}
      <form>
        <div className="mt-6">
          <p
            onClick={() => setSelectedForm("accountForm")}
            className="flex justify-between items-center w-full text-sm font-medium text-white bg-primaryBlue p-3 cursor-pointer"
          >
            <span>Doctor's Account Information</span>
            {selectedForm === "accountForm" ? (
              <FaAngleDown className="text-white text-lg font-semibold" />
            ) : (
              <FaAngleRight className="text-white text-lg font-semibold" />
            )}
          </p>
          {selectedForm === "accountForm" && (
            <div className="bg-white px-8 py-4">
              {/* USERNAME NAME & STAFF ON DUTY */}
              <div className="grid mt-4">
                <div className="space-y-2">
                  <Label name="username" label="Username" required={true} />
                  <input
                    id="username"
                    type="text"
                    className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                </div>
              </div>
              {/* PASSWORD & CONFIRM PASSWORD */}
              <div className="grid grid-cols-2 gap-5 mt-4 mb-6">
                <div className="space-y-2">
                  <Label name="password" label="Password" required={true} />
                  <input
                    id="password"
                    type="password"
                    className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                </div>
                <div className="grid space-y-2">
                  <Label
                    name="confirmPassword"
                    label="Confirm Password"
                    required={true}
                  />
                  <input
                    id="confirmPassword"
                    type="password"
                    className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                </div>
              </div>
              <Button>Submit</Button>
            </div>
          )}
        </div>
      </form>
      {/* DOCTOR SOCIAL MEDIAL INFO */}
      <form>
        <div className="mt-6">
          <p
            onClick={() => setSelectedForm("socialForm")}
            className="flex justify-between items-center w-full text-sm font-medium text-white bg-primaryBlue p-3 cursor-pointer"
          >
            <span>Doctor Social Media Info</span>
            {selectedForm === "socialForm" ? (
              <FaAngleDown className="text-white text-lg font-semibold" />
            ) : (
              <FaAngleRight className="text-white text-lg font-semibold" />
            )}
          </p>
          {selectedForm === "socialForm" && (
            <div className="bg-white px-8 py-4">
              {/* FACEBOOK & TWITTER */}
              <div className="grid grid-cols-2 gap-5 mt-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <FaFacebook className="text-primaryBlue text-base" />
                    <Label name="facebook" label="Facebook" required={false} />
                  </div>
                  <input
                    id="facebook"
                    type="text"
                    className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                </div>
                <div className="grid space-y-2">
                  <div className="flex items-center space-x-3">
                    <FaTwitter className="text-primaryBlue text-base" />
                    <Label name="twitter" label="Twitter" required={false} />
                  </div>
                  <input
                    id="twitter"
                    type="text"
                    className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                </div>
              </div>
              {/* LINKEDLN && INSTAGRAM */}
              <div className="grid grid-cols-2 gap-5 mt-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <FaLinkedinIn className="text-primaryBlue text-base" />
                    <Label name="linkedin" label="Linkedin" required={false} />
                  </div>
                  <input
                    id="linkedin"
                    type="text"
                    className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                </div>
                <div className="grid space-y-2">
                  <div className="flex items-center space-x-3">
                    <FaInstagram className="text-primaryBlue text-base" />
                    <Label name="instagram" label="Instagram" required={false} />
                  </div>
                  <input
                    id="instagram"
                    type="text"
                    className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  />
                </div>
              </div>
              <Button>Submit</Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
