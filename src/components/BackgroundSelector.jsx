// src/components/BackgroundSelector.jsx

import React from 'react';
import { useField } from 'formik';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

const BackgroundSelector = ({ name }) => {
  // Use Formik's useField hook to connect the component to Formik's context
  const [field, meta] = useField(name);

  const backgrounds = [
    { label: "Pattern 1", value: "background1" },
    { label: "Pattern 2", value: "background2" },
  ];

  return (
    <FormControl fullWidth margin="normal" error={meta.touched && Boolean(meta.error)}>
      <InputLabel id="background-label">Select a Background</InputLabel>
      <Select
        labelId="background-label"
        id="background"
        {...field} // Spread field properties to connect to Formik state
        label="Select a Background"
      >
        {backgrounds.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error ? (
        <FormHelperText>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default BackgroundSelector;
