// src/components/DateTimeSelector.jsx

import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useFormikContext, useField } from 'formik';
import { DatePicker, TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const DateTimeSelector = () => {
  const { setFieldValue } = useFormikContext();

  const [dateField, dateMeta] = useField('date');
  const [checkInField, checkInMeta] = useField('checkInTime');
  const [endField, endMeta] = useField('endTime');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <DatePicker
            label="Event Date"
            value={dateField.value ? dayjs(dateField.value) : null}
            onChange={(newValue) => {
              setFieldValue('date', newValue ? newValue.toISOString() : '');
            }}
            slots={{
              textField: TextField,
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                error: dateMeta.touched && Boolean(dateMeta.error),
                helperText: dateMeta.touched && dateMeta.error,
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TimePicker
            label="Check-In Time"
            value={checkInField.value ? dayjs(checkInField.value) : null}
            onChange={(newValue) => {
              setFieldValue('checkInTime', newValue ? newValue.toISOString() : '');
            }}
            slots={{
              textField: TextField,
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                error: checkInMeta.touched && Boolean(checkInMeta.error),
                helperText: checkInMeta.touched && checkInMeta.error,
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TimePicker
            label="End Time"
            value={endField.value ? dayjs(endField.value) : null}
            onChange={(newValue) => {
              setFieldValue('endTime', newValue ? newValue.toISOString() : '');
            }}
            slots={{
              textField: TextField,
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                error: endMeta.touched && Boolean(endMeta.error),
                helperText: endMeta.touched && endMeta.error,
              },
            }}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default DateTimeSelector;
