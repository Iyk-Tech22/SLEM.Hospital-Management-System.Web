import * as yup from "yup";

export const accountSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

// SOCIAL SCHEMA
export const socialSchema = yup.object().shape({
  facebook: yup.string().url("Invalid URL"),
  twitter: yup.string().url("Invalid URL"),
  instagram: yup.string().url("Invalid URL"),
  linkedin: yup.string().url("Invalid URL"),
});