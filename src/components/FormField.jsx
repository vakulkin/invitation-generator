// src/components/FormField.jsx

import React from 'react';
import { useField } from 'formik';
import { TextField } from '@mui/material';

const FormField = ({ label, type = 'text', ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      margin="normal"
      variant="outlined"
    />
  );
};

export default FormField;
