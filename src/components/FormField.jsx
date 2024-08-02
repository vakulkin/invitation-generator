// src/components/FormField.jsx

import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";

const FormField = ({ label, type = "text", ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
			sx={{m: 0}}
      fullWidth
      label={label}
      type={type}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      margin="normal"
      variant="outlined"
    />
  );
};

export default FormField;
