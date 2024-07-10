import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function EditProfile({onCloseEditProfile}:{onCloseEditProfile:any}) {
  const [formValues, setFormValues] = useState({
    username: "",
    location: "",
    degree: "",
    designation: "",
    email: "",
    phoneNumber: "",
    address: "",
    social: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    location: "",
    degree: "",
    designation: "",
    email: "",
    phoneNumber: "",
    address: "",
    social: "",
  });

  const validate = () => {
    const errors: any = {};

    if (!formValues.username) {
      errors.username = "Name is required";
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

    if (!formValues.phoneNumber) {
      errors.mobile = "Mobile is required";
    } else if (!/^\d+$/.test(formValues.phoneNumber)) {
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
      <h2 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
        Edit Profile
      </h2>
      <form
        onSubmit={handleSubmit}
        className="text-xs md:text-sm text-primaryDarkBlue font-medium"
      >
        <div className="mb-6">
          <h3 className="text-sm md:text-base text-primaryBlue font-semibold mb-1">
            Personal information
          </h3>
          <hr className="w-full h-[1px] my-3" />

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="username">
                Username<span className="text-red-500 text-xs">*</span>
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none"
                id="username"
                name="username"
                type="text"
                value={formValues.username}
                onChange={handleChange}
              />
              {formErrors.username && (
                <p className="text-red-500 text-xs">{formErrors.username}</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="location">
                Location<span className="text-red-500 text-xs">*</span>
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none"
                id="location"
                name="location"
                type="text"
                value={formValues.location}
                onChange={handleChange}
              />
              {formErrors.location && (
                <p className="text-red-500 text-xs">{formErrors.location}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="degree">
                Degree<span className="text-red-500 text-xs">*</span>
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none"
                id="degree"
                name="degree"
                type="text"
                value={formValues.degree}
                onChange={handleChange}
              />
              {formErrors.degree && (
                <p className="text-red-500 text-xs">{formErrors.degree}</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="designation">
                Designation<span className="text-red-500 text-xs">*</span>
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none"
                id="designation"
                name="designation"
                type="text"
                value={formValues.designation}
                onChange={handleChange}
              />
              {formErrors.designation && (
                <p className="text-red-500 text-xs">{formErrors.designation}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email<span className="text-red-500 text-xs">*</span>
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none"
                id="email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="phoneNumber">
                Phone Number<span className="text-red-500 text-xs">*</span>
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none"
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={formValues.phoneNumber}
                onChange={handleChange}
              />
              {formErrors.phoneNumber && (
                <p className="text-red-500 text-xs">{formErrors.phoneNumber}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="address">
              Address<span className="text-red-500 text-xs">*</span>
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="address"
              name="address"
              type="text"
              value={formValues.address}
              onChange={handleChange}
            />
            {formErrors.address && (
              <p className="text-red-500 text-xs">{formErrors.address}</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-sm md:text-base text-primaryBlue font-semibold mb-1">
            Social accounts
          </h3>
          <hr className="w-full h-[1px] my-3" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="facebook"
                className="flex space-x-2 items-center text-primaryDarkBlue text-sm mb-1"
              >
                <FaFacebook className="text-primaryDarkBlue" size={15} />
                <span>Facebook</span>
              </label>

              <input
                className="shadow border rounded w-full py-2 px-3 leading-tight focus-visible:outline-primaryDarkBlue"
                id="facebook"
                name="facebook"
                type="url"
                value={formValues.social}
                onChange={handleChange}
              />
              {formErrors.social && (
                <p className="text-red-500 text-xs">{formErrors.social}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="instagram"
                className="flex space-x-2 items-center text-primaryDarkBlue text-sm mb-1"
              >
                <FaInstagram className="text-primaryDarkBlue" size={15} />
                <span>Instagram</span>
              </label>

              <input
                className="shadow border rounded w-full py-2 px-3 leading-tight focus-visible:outline-primaryDarkBlue"
                id="instagram"
                name="instagram"
                type="url"
                value={formValues.social}
                onChange={handleChange}
              />
              {formErrors.social && (
                <p className="text-red-500 text-xs">{formErrors.social}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="twitter"
                className="flex space-x-2 items-center text-primaryDarkBlue text-sm mb-1"
              >
                <FaTwitter className="text-primaryDarkBlue" size={15} />
                <span>Twitter</span>
              </label>

              <input
                className="shadow border rounded w-full py-2 px-3 leading-tight focus-visible:outline-primaryDarkBlue"
                id="twitter"
                name="twitter"
                type="url"
                value={formValues.social}
                onChange={handleChange}
              />
              {formErrors.social && (
                <p className="text-red-500 text-xs">{formErrors.social}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="linkedin"
                className="flex space-x-2 items-center text-primaryDarkBlue text-sm mb-1"
              >
                <FaLinkedin className="text-primaryDarkBlue" size={15} />
                <span>LinkedIn</span>
              </label>

              <input
                className="shadow border rounded w-full py-2 px-3 leading-tight focus-visible:outline-primaryDarkBlue"
                id="linkedin"
                name="linkedin"
                type="url"
                value={formValues.social}
                onChange={handleChange}
              />
              {formErrors.social && (
                <p className="text-red-500 text-xs">{formErrors.social}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-6">
          <button
            className="w-full md:w-auto text-sm px-4 py-2 leading-none border rounded text-white bg-primaryBlue hover:bg-primaryBlue/90"
            type="submit"
          >
            Submit
          </button>
          <button
            onClick={onCloseEditProfile}
            className="w-full md:w-auto text-sm px-4 py-2 leading-none border rounded text-gray-700 bg-white hover:bg-gray-100"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
