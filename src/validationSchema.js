// src/validationSchema.js
import * as Yup from "yup";

const validationSchema = Yup.object({
  background: Yup.string()
    .oneOf(["background1", "background2"], "Invalid background selection")
    .required("Background selection is required."),
  date: Yup.date().required("A date is required.").nullable(),
  checkInTime: Yup.string().required("Check-in time is required."),
  endTime: Yup.string().required("End time is required."),
  celebration: Yup.string()
    .required("Please specify what you are celebrating.")
    .max(100, "Celebration name can only be 100 characters long."),
  contact: Yup.string().required("Contact information is required."),
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default validationSchema;
