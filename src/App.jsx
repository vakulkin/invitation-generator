// src/App.jsx

import React, { useRef } from 'react';
import { Container, Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import validationSchema from './validationSchema';
import BackgroundSelector from './components/BackgroundSelector';
import DateTimeSelector from './components/DateTimeSelector';
import FormField from './components/FormField';
import SelectField from './components/SelectField';
import InvitationPreview from './components/InvitationPreview';
import GeneratePDFButton from './components/GeneratePDFButton';

const placeOptions = [
  {
    label: 'Kanawha City',
    value: {
      name: 'Kanawha City',
      desc: '419 58th St SE, Charleston, WV 25304',
    },
  },
  {
    label: 'Hurricane',
    value: {
      name: 'Hurricane',
      desc: '3548 Teays Valley Road, Hurricane, WV 25526',
    },
  },
];

const initialValues = {
  background: 'background1', // Default background
  date: '',
  checkInTime: '',
  endTime: '',
  celebration: '',
  place: {
    name: '',
    address: '',
  },
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
};

const App = () => {
  const previewRef = useRef(null);

  return (
    <Container component="main" maxWidth="lg" sx={{ my: 3 }}>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {({ values, isValid, isSubmitting, dirty }) => (
          <Form>
            <Grid container spacing={4}>
              <Grid item xs={12} md={5}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <BackgroundSelector name="background" />
                  </Grid>
                  <Grid item xs={12}>
                    <DateTimeSelector />
                  </Grid>
                  <Grid item xs={12}>
                    <FormField name="celebration" label="What are you celebrating?" />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectField
                      name="place"
                      label="Place where you are celebrating"
                      options={placeOptions}
                    />
                  </Grid>
                  <Grid container item spacing={2} xs={12}>
                    <Grid item xs={6}>
                      <FormField name="firstName" label="First Name" />
                    </Grid>
                    <Grid item xs={6}>
                      <FormField name="lastName" label="Last Name" />
                    </Grid>
                  </Grid>
                  <Grid container item spacing={2} xs={12}>
                    <Grid item xs={6}>
                      <FormField name="phone" label="Phone Number" type="tel" />
                    </Grid>
                    <Grid item xs={6}>
                      <FormField name="email" label="Email Address" type="email" />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <GeneratePDFButton
                      elementRef={previewRef}
                      disabled={!isValid || isSubmitting || !dirty}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={7}>
                <InvitationPreview ref={previewRef} formData={values} />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default App;
