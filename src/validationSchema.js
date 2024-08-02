// src/validationSchema.js
import * as Yup from "yup";

const validationSchema = Yup.object({
  background: Yup.string().required("Background selection is required."),
  date: Yup.date().required("A date is required.").nullable(),
  checkInTime: Yup.string().trim().required("Check-in time is required."), // Added .trim() for safety
  endTime: Yup.string().trim().required("End time is required."), // Added .trim() for safety
  celebration: Yup.string()
    .required("Please specify what you are celebrating.")
    .max(100, "Celebration name can only be 100 characters long."),
  place: Yup.object({
    name: Yup.string()
      .required("Please specify place where you are celebrating.")
      .max(20, "Place name can only be 20 characters long."),
    desc: Yup.string(),
  }),
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Phone is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default validationSchema;
