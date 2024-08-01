import { useRef } from "react";
import { Container } from "@mui/material";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import BackgroundSelector from "./components/BackgroundSelector";
import DateTimeSelector from "./components/DateTimeSelector";
import FormField from "./components/FormField";
import InvitationPreview from "./components/InvitationPreview";
import GeneratePDFButton from "./components/GeneratePDFButton";

const initialValues = {
  background: "background1",
  date: "",
  checkInTime: "",
  endTime: "",
  celebration: "",
  contact: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

const App = () => {
  const previewRef = useRef(null);

  return (
    <Container component="main" maxWidth="lg">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log("Form Data:", values);
          actions.setSubmitting(false);
        }}
      >
        {({ values, isValid, isSubmitting, dirty }) => (
          <Form>
            <BackgroundSelector name="background" />
            <DateTimeSelector />
            <FormField name="celebration" label="What are you celebrating?" />
            <FormField name="contact" label="Contact Person" />
            <FormField name="firstName" label="First Name" />
            <FormField name="lastName" label="Last Name" />
            <FormField name="phone" label="Phone Number" type="tel" />
            <FormField name="email" label="Email Address" type="email" />
            <InvitationPreview ref={previewRef} formData={values} />
            <GeneratePDFButton
              elementRef={previewRef}
              disabled={!isValid || isSubmitting || !dirty}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default App;
