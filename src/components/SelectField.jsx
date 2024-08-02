// src/components/SelectField.jsx

import React from "react";
import { useField, useFormikContext } from "formik";
import { TextField, MenuItem } from "@mui/material";

const SelectField = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  return (
    <TextField
      select
      fullWidth
      label={label}
      {...field}
      {...props}
      value={field.value.name}
      onChange={(event) => {
        const selectedOption = options.find(
          (option) => option.value.name === event.target.value
        );
        setFieldValue(field.name, selectedOption.value);
      }}
      error={meta.touched && Boolean(meta.error)}
      variant="outlined"
    >
      {options.map((option) => (
        <MenuItem key={option.value.name} value={option.value.name}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectField;
