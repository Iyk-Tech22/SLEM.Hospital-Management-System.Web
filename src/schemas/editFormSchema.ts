import * as yup from "yup";

// EDITPROFILESCHEMA

export const editProfileSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(3,"Username must be at least 3 characters")
      .matches(/^[A-Za-z]+$/,"Username name must contain letters only"),
      location: yup
      .string()
      .required("Location is required")
      .min(3,"Location must be at least 3 characters")
      .matches(/^[A-Za-z]+$/,"Location name must contain letters only"),
      degree: yup
      .string()
      .required("Degree is required")
      .min(3,"Degree must be at least 3 characters")
      .matches(/^[A-Za-z]+$/,"Degree name must contain letters only"),
      designation: yup
      .string()
      .required("Designation is required")
      .min(3,"Designation must be at least 3 characters")
      .matches(/^[A-Za-z]+$/,"Designation name must contain letters only"),
      email: yup
      .string()
      .required("Email is required")
      .matches(/^\S+@\S+$/i,"Entered value does not match email format"),
      phone:yup
      .string()
      .required("Phone number is required")
      .test('is-11-digits','Phone number must be digits only',(value) => /^\d{1,11}$/.test(value))
      .min(11,"Phone number cannot be less than 11 digits")
      .max(11,"Phone number cannot exceeds 11 digits"),
      facebook: yup.string().url("Invalid URL").required('Facebook profile link is required'),
      twitter: yup.string().url("Invalid URL").required('Twitter profile link is required'),
      instagram: yup.string().url("Invalid URL").required('Instagram profile link is required'),
      linkedin: yup.string().url("Invalid URL").required('LinkedIn profile link is required'),
      })