import React, { useState } from "react";

function EditProfile(){
  const [formValues, setFormValues] = useState({
    name: "",
    location: "",
    degree: "",
    designation: "",
    email: "",
    mobile: "",
    address: "",
    social: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    location: "",
    degree: "",
    designation: "",
    email: "",
    mobile: "",
    address: "",
    social: "",
  });

  const validate = () => {
    const errors: any = {};

    if (!formValues.name) {
      errors.name = "Name is required";
    }

    if (!formValues.location) {
      errors.location = "Location is required";
    }

    if (!formValues.degree) {
      errors.degree = "Degree is required";
    }

    if (!formValues.designation) {
      errors.designation = "Designation is required";
    }

    if (!formValues.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formValues.email)) {
        errors.email = "Invalid email format";
      } else {
        errors.email = "";
      }
    }

    if (!formValues.mobile) {
      errors.mobile = "Mobile is required";
    } else if (!/^\d+$/.test(formValues.mobile)) {
      errors.mobile = "Mobile must be a number";
    }

    if (!formValues.address) {
      errors.address = "Address is required";
    }

    if (!formValues.social) {
      errors.social = "Social URL is required";
    } else {
      try {
        new URL(formValues.social);
      } catch {
        errors.social = "Invalid URL format";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log(formValues);
      // Handle form submission
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
          />
          {formErrors.name && (
            <p className="text-red-500 text-xs italic">{formErrors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            name="location"
            type="text"
            value={formValues.location}
            onChange={handleChange}
          />
          {formErrors.location && (
            <p className="text-red-500 text-xs italic">{formErrors.location}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="degree"
          >
            Degree
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="degree"
            name="degree"
            type="text"
            value={formValues.degree}
            onChange={handleChange}
          />
          {formErrors.degree && (
            <p className="text-red-500 text-xs italic">{formErrors.degree}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="designation"
          >
            Designation
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="designation"
            name="designation"
            type="text"
            value={formValues.designation}
            onChange={handleChange}
          />
          {formErrors.designation && (
            <p className="text-red-500 text-xs italic">
              {formErrors.designation}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <p className="text-red-500 text-xs italic">{formErrors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mobile"
          >
            Mobile
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mobile"
            name="mobile"
            type="text"
            value={formValues.mobile}
            onChange={handleChange}
          />
          {formErrors.mobile && (
            <p className="text-red-500 text-xs italic">{formErrors.mobile}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            name="address"
            type="text"
            value={formValues.address}
            onChange={handleChange}
          />
          {formErrors.address && (
            <p className="text-red-500 text-xs italic">{formErrors.address}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="social"
          >
            Social
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="social"
            name="social"
            type="url"
            value={formValues.social}
            onChange={handleChange}
          />
          {formErrors.social && (
            <p className="text-red-500 text-xs italic">{formErrors.social}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
