import Button from "@/components/Button";
import Label from "@/components/Label";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { IBasicForm } from "./models";

import {
  sanitizeToLetters,
  sanitizeToPhoneNumber,
} from "@/utils/helperFunctions";


export default function BasicForm({
  selectedForm,
  onSelectForm,
}: {
  selectedForm: string;
  onSelectForm: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const {
    reset,
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<IBasicForm>({
    mode: "all",
    reValidateMode: "onSubmit",
  });


  function onSubmitHandler(data) {
    console.log({ data });
    reset();
  }

  function onSelectFormHandler() {
    onSelectForm("basicForm");
    reset();
  }


  return (
    <form className="grid mt-8" onSubmit={handleSubmit(onSubmitHandler)}>
      {/* BASIC FORM */}
      <div>
        <p
          className="flex justify-between items-center w-full text-sm font-medium text-white bg-primaryBlue p-3 cursor-pointer"
          onClick={onSelectFormHandler}
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
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              <div className="space-y-2">
                <Label name="firstName" label="First Name" className="text-xs text-red-600" required={true} />
                <input
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 3,
                      message: "First name must be at least 3 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "First name must contain letters only",
                    },
                  })}
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e) => {
                    setValue("firstName", sanitizeToLetters(e.target.value));
                    trigger("firstName");
                  }}
                />

                {/* ERROR MESSAGE */}
                {errors.firstName && (
                  <p className="text-red-500 text-xs">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label name="lastName" label="Last Name" className="text-xs text-red-600" required={true} />
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 3,
                      message: "Last name must be at least 3 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Last name must contain letters only",
                    },
                  })}
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e) => {
                    setValue("lastName", sanitizeToLetters(e.target.value));
                    trigger("lastName");
                  }}
                />

                {/*   ERROR MESSAGE */}
                {errors.lastName && (
                  <p className="text-red-500 text-xs">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* PHONE & EMAIL */}
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              <div className="space-y-2">
                <Label name="email" label="Email" className="text-xs text-red-600"  required={true} />
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Entered value does not match email format",
                    },
                  })}
                  id="email"
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label name="phone" label="Phone No." className="text-xs text-red-600" required={true} />
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{1,11}$/,
                      message: "Phone number must be digits only",
                    },
                    minLength: {
                      value: 11,
                      message: "Phone number cannot be less than 11 digits",
                    },
                    maxLength: {
                      value: 11,
                      message: "Phone number cannot exceed 11 digits",
                    },
                  })}
                  id="phone"
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e) => {
                    setValue("phone", sanitizeToPhoneNumber(e.target.value));
                    trigger("phone");
                  }}
                />

                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* GENDER & AGE */}
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              <div className="space-y-2">
                <Label name="gender" label="Gender" className="text-xs text-red-600" required={true} />
                <select
                  {...register("gender", {
                    required: "Gender is required",
                  })}
                  id="gender"
                  name="gender"
                  className="w-full border border-gray-300 p-2  focus-visible:outline-primaryBlue"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-xs">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label name="age" label="Age" className="text-xs text-red-600" required={true} />
                <input
                  {...register("age", {
                    required: "This field is required",
                    min: {
                      value: 25,
                      message: "Minimum age is 25",
                    },
                    max: {
                      value: 80,
                      message: "Maxinum age is 80",
                    },
                  })}
                  id="age"
                  type="number"
                  name="age"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
                {errors.age && (
                  <p className="text-red-500 text-xs">{errors.age.message}</p>
                )}
              </div>
            </div>

            {/* DATE OF BIRTH && SEPECIALTY */}
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              <div className="grid space-y-2">
                <Label name="dob" label="Date of Birth" className="text-xs text-red-600"  required={true} />
                <DatePicker
                  selected={dateOfBirth}
                  className="w-full cursor-pointer border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(date: Date | null) => setDateOfBirth(date)}
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-xs">
                    {errors.dateOfBirth.message}
                  </p>
                )}
              </div>

              {/* SPECIALITY */}
              <div className="space-y-2">
                <Label name="speciality" label="Speciality" className="text-xs text-red-600" required={true} />
                <input
                  {...register("speciality", {
                    required: "Speciality name is required",
                    minLength: {
                      value: 3,
                      message: "Speciality name must be at least 3 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Speciality name must contain letters only",
                    },
                  })}
                  id="speciality"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e) => {
                    setValue("speciality", sanitizeToLetters(e.target.value));
                    trigger("speciality");
                  }}
                />
                {errors.speciality && (
                  <p className="text-red-500 text-xs">
                    {errors.speciality.message}
                  </p>
                )}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="grid space-y-2 my-4">
              <Label name="description" label="Description" className="text-xs text-red-600" required={false} />
              <textarea
                className="border border-gray-300 py-2 px-3 focus-visible:outline-primaryBlue"
                id="description"
                rows={5}
                cols={5}
              ></textarea>
            </div>
            <Button type="submit">Submit</Button>
          </div>
        )}
      </div>
    </form>
  );
}
