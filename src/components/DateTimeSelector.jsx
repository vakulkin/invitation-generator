// src/components/DateTimeSelector.jsx

import React from 'react';
import { useField } from 'formik';
import { Grid, TextField } from '@mui/material';

const DateTimeSelector = () => {
  // Use Formik's useField hook to connect fields to Formik's context
  const [dateField, dateMeta] = useField('date');
  const [checkInField, checkInMeta] = useField('checkInTime');
  const [endField, endMeta] = useField('endTime');

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          id="date"
          label="Event Date"
          type="date"
          {...dateField} // Spread field attributes to connect with Formik
          InputLabelProps={{
            shrink: true, // Ensure the label shrinks appropriately
          }}
          error={dateMeta.touched && Boolean(dateMeta.error)}
          helperText={dateMeta.touched && dateMeta.error}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <TextField
          fullWidth
          id="checkInTime"
          label="Check-In Time"
          type="time"
          {...checkInField}
          InputLabelProps={{
            shrink: true,
          }}
          error={checkInMeta.touched && Boolean(checkInMeta.error)}
          helperText={checkInMeta.touched && checkInMeta.error}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <TextField
          fullWidth
          id="endTime"
          label="End Time"
          type="time"
          {...endField}
          InputLabelProps={{
            shrink: true,
          }}
          error={endMeta.touched && Boolean(endMeta.error)}
          helperText={endMeta.touched && endMeta.error}
        />
      </Grid>
    </Grid>
  );
};

export default DateTimeSelector;
