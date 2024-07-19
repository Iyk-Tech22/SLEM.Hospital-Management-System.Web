import Button from "@/components/Button";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Label from "../components/Label";

enum GenderEnum {
  female = "female",
  male = "male",
}

interface RegisterPatientFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  gender: GenderEnum;
  age: number;
  doctorName: string;
  staffOnDuty: string;
  wardNo: number;
  date: Date;
}

export default function RegisterPatientPage() {
  const [date, setDate] = useState<Date | null>(null);
  const [chooseDate, setChooseDate] = useState<Date | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, touchedFields },
  } = useForm<RegisterPatientFormInput>({
    mode: "all", // Trigger validation on blur event
    reValidateMode: "onSubmit", // Re-validate on submit event
  });
  const onSumbit: SubmitHandler<RegisterPatientFormInput> = (data) =>
    console.log(data);

  return (
    <div className="w-full md:max-w-2xl md:mx-auto">
      <h2 className="text-lg md:text-xl font-semibold">New Patient</h2>
      <form className="grid mt-8" onSubmit={handleSubmit(onSumbit)}>
        {/* BASIC FORM */}
        <div>
          <p className="w-full text-sm font-medium text-white bg-primaryBlue p-3">
            Basic Information
          </p>
          <div className="bg-white px-4 py-2 md:px-8 md:py-4">
            {/* FIRST & LAST NAME */}
            <div className="grid md:grid-cols-2 md:gap-5">
              <div className="space-y-2">
                <Label name="firstName" label="First Name" required={true} />
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
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="lastName" label="Last Name" required={true} />
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
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* PHONE & EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 md:mt-3">
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="email" label="Email" required={true} />
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
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
                {(isSubmitted || touchedFields) && errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="phone" label="Phone No." required={true} />
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
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* GENDER & AGE */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 md:mt-3">
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="gender" label="Gender" required={true} />
                <select
                  {...register("gender", {
                    required: "This field is required",
                  })}
                  id="gender"
                  className="w-full border border-gray-300 p-2  focus-visible:outline-primaryBlue"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-xs">
                    {errors.gender.message}
                  </p>
                )}
              </div>
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="age" label="Age" required={true} />
                <input
                  {...register("age", {
                    required: "This field is required",
                    pattern: {
                      value: /^\d+$/,
                      message: "Age must be a number",
                    },
                  })}
                  id="age"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
                {errors.age && (
                  <p className="text-red-500 text-xs">{errors.age.message}</p>
                )}
              </div>
            </div>

            {/* Date */}
            <div className="grid space-y-2 mt-3">
              <Label name="date" label="Date" required={true} />

              <DatePicker
                selected={date}
                className="w-full cursor-pointer border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                onChange={(date: Date | null) => setDate(date)}
              />

              {(isSubmitted || touchedFields) && errors.date && (
                <p className="text-red-500 text-xs">{errors.phone.message}</p>
              )}
            </div>
            {/* DESCRIPTION */}
            <div className="grid space-y-2 mt-3">
              <Label name="description" label="Description" required={false} />
              <textarea
                className="w-full border border-gray-300 py-2 px-3 focus-visible:outline-primaryBlue"
                id="description"
                rows={5}
                cols={5}
              ></textarea>
            </div>
          </div>
        </div>

        {/* REGISTRATION FORM */}
        <div className="mt-6">
          <p className="w-full text-sm font-medium text-white bg-primaryBlue p-3">
            Registration Information
          </p>

          <div className="bg-white px-4 py-2 md:px-8 md:py-4">
            {/* DOCTOR NAME & STAFF ON DUTY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="doctorName" label="Doctor" required={true} />
                <input
                  {...register("doctorName", {
                    required: "Doctor name is required",
                    minLength: {
                      value: 3,
                      message: "Doctor name must be at least 3 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Doctor name must contain letters only",
                    },
                  })}
                  id="doctorName"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
                {errors.doctorName && (
                  <p className="text-red-500 text-xs">
                    {errors.doctorName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2 mt-3 md:mt-0">
                <Label
                  name="staffOnDuty"
                  label="Staff On Duty"
                  required={true}
                />
                <input
                  {...register("staffOnDuty", {
                    required: "Staff on duty name is required",
                    minLength: {
                      value: 3,
                      message:
                        "Staff on duty name must be at least 3 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Staff on duty name must contain letters only",
                    },
                  })}
                  id="staffOnDuty"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
                {errors.staffOnDuty && (
                  <p className="text-red-500 text-xs">
                    {errors.staffOnDuty.message}
                  </p>
                )}
              </div>
            </div>

            {/* WARD NO. & DATE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4 mb-6">
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="wardNo" label=" Ward No." required={true} />
                <input
                  {...register("wardNo", {
                    required: "Ward number is required",
                    pattern: {
                      value: /^\d{1,11}$/,
                      message: "Ward number must be digits only",
                    },
                    minLength: {
                      value: 5,
                      message: "Ward number cannot be less than 11 digits",
                    },
                  })}
                  id="wardNo"
                  type="number"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />
                {(isSubmitted || touchedFields) && errors.wardNo && (
                  <p className="text-red-500 text-xs">
                    {errors.wardNo.message}
                  </p>
                )}
              </div>
              <div className="grid space-y-2 mt-3 md:mt-0">
                <Label name="chooseDate" label="Choose Date" required={true} />
                <DatePicker
                  selected={chooseDate}
                  className="w-full cursor-pointer border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(newDate: Date | null) => setChooseDate(newDate)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Button
            type="submit"
            styles="w-full md:w-auto bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
