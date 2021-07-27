import React from "react";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import FormControl from "../components/FormControl";
import stylesModule from "../components/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function FormPage() {
  const history = useHistory();
  const isMobileScreen = useMediaQuery("(max-width: 600px)");

  const initialFormData = {
    privacy: false,
    fullName: "",
    email: "",
    contribution: "",
    education: "",
    supportMessage: "",
    donorChoice: "",
  };

  const validationSchema = Yup.object({
    privacy: Yup.boolean().oneOf(
      [true],
      "Please agree with the statement above"
    ),
    fullName: Yup.string().required("Please fill in your full name"),
    email: Yup.string().email().required("Please fill in your email"),
    contribution: Yup.string().required("Please select your contribution"),
    education: Yup.string().required("Please select your education at Taylors"),
    supportMessage: Yup.string().required("Please write a support message"),
    donorChoice: Yup.string().required("Please choose a donor"),
  });

  const handleSubmit = async (values, onSubmitProps) => {
    const {
      fullName,
      email,
      contribution,
      education,
      supportMessage,
      donorChoice,
    } = values;

    const url =
      "https://sheet.best/api/sheets/6839cda2-8c56-4197-b427-b5d5e8e58404";

    await axios
      .post(url, {
        fullName,
        email,
        contribution,
        education,
        supportMessage,
        donorChoice,
      })
      .then((response) => console.log(response))
      .then(onSubmitProps.setSubmitting(false))
      .finally(history.push("/submission", { donorChoice }));

    // history.push("/submission", { donorChoice });
  };

  const contributionOptions = [
    { key: "Select your contribution", value: "" },
    { key: "RM 10 - 49", value: "rm10To49" },
    { key: "RM 50 - 99", value: "rm50To99" },
    { key: "RM 100 - 149", value: "rm99To149" },
    { key: "RM 150 and above", value: "rm150Above" },
  ];

  const educationOptions = [
    { key: "Select your education", value: "" },
    { key: "Taylor's University", value: "university" },
    { key: "Taylor's College", value: "college" },
    { key: "Other", value: "other" },
  ];

  const donorOptions = [
    { key: "Select your donor", value: "" },
    { key: "Google", value: "google" },
    { key: "Youtube", value: "youtube" },
    { key: "Facebook", value: "facebook" },
  ];

  const ResponsiveRowContainer = ({ children, ...rest }) => {
    return isMobileScreen ? (
      <Grid
        container
        align="left"
        style={{ paddingLeft: "1rem", marginBottom: "0.5rem" }}
        justifyContent="flex-start"
        {...rest}
      >
        {children}
      </Grid>
    ) : (
      <Grid
        container
        align="left"
        style={{ marginTop: "2rem", paddingLeft: "3rem" }}
        justifyContent="flex-start"
        {...rest}
      >
        {children}
      </Grid>
    );
  };

  const ResponsiveRowFormContainer = ({ children, ...rest }) => {
    return isMobileScreen ? (
      <Grid
        container
        align="center"
        style={{ width: "100%", padding: "0.2rem 0.5rem" }}
        spacing={1}
      >
        {children}
      </Grid>
    ) : (
      <Grid
        container
        align="left"
        style={{
          marginTop: "3rem",
          paddingLeft: "3rem",
          width: "80%",
        }}
        justifyContent="flex-start"
        spacing={2}
        {...rest}
      >
        {children}
      </Grid>
    );
  };

  const ResponsiveTitle = ({ children }) => {
    return isMobileScreen ? (
      <h1 style={stylesModule.formTitleMobile}>{children}</h1>
    ) : (
      <h1 style={stylesModule.formTitle}>{children}</h1>
    );
  };

  const ResponsiveButton = ({ children, ...rest }) => {
    return isMobileScreen ? (
      <button type="submit" style={stylesModule.formButtonMobile} {...rest}>
        {children}
      </button>
    ) : (
      <button type="submit" style={stylesModule.formButton} {...rest}>
        {children}
      </button>
    );
  };

  return (
    <>
      <div>
        <ResponsiveTitle>Please fill in the form</ResponsiveTitle>
        <Formik
          initialValues={initialFormData}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
                <ResponsiveRowContainer>
                  <Grid item xs={12}>
                    <FormControl
                      control="checkbox"
                      name="privacy"
                      label="Privacy Consent"
                      errorStyle={
                        isMobileScreen
                          ? stylesModule.centerAlignErrorMobile
                          : stylesModule.centerAlignError
                      }
                      isMobileScreen={isMobileScreen}
                    />
                  </Grid>
                </ResponsiveRowContainer>

                <ResponsiveRowFormContainer>
                  <Grid item xs={6} lg={6}>
                    <FormControl
                      control="material-input"
                      label="Full Name"
                      name="fullName"
                      isMobileScreen={isMobileScreen}
                    />
                  </Grid>

                  <Grid item xs={6} lg={6}>
                    <FormControl
                      control="material-input"
                      label="Email"
                      name="email"
                      isMobileScreen={isMobileScreen}
                    />
                  </Grid>
                </ResponsiveRowFormContainer>

                <ResponsiveRowFormContainer
                  style={{
                    marginTop: "1rem",
                    paddingLeft: "3rem",
                    width: "80%",
                  }}
                  spacing={2}
                >
                  <Grid item xs={6} lg={6}>
                    <FormControl
                      control="material-select"
                      label="Contribution"
                      name="contribution"
                      options={contributionOptions}
                      isMobileScreen={isMobileScreen}
                    />
                  </Grid>

                  <Grid item xs={6} lg={6}>
                    <FormControl
                      control="material-select"
                      label="Education at Taylors"
                      name="education"
                      options={educationOptions}
                      isMobileScreen={isMobileScreen}
                    />
                  </Grid>
                </ResponsiveRowFormContainer>

                <ResponsiveRowFormContainer
                  style={{
                    marginTop: "1rem",
                    paddingLeft: "3rem",
                    width: "80%",
                  }}
                >
                  <Grid item xs={12} lg={12}>
                    <FormControl
                      control="material-textarea"
                      label="Message of Support"
                      name="supportMessage"
                      isMobileScreen={isMobileScreen}
                    />
                  </Grid>
                </ResponsiveRowFormContainer>

                <ResponsiveRowFormContainer
                  style={{
                    marginTop: "1rem",
                    paddingLeft: "3rem",
                    width: "80%",
                  }}
                >
                  <Grid item xs={6} lg={6}>
                    <FormControl
                      control="material-select"
                      label="Donor"
                      name="donorChoice"
                      options={donorOptions}
                      isMobileScreen={isMobileScreen}
                    />
                  </Grid>
                </ResponsiveRowFormContainer>

                <ResponsiveRowContainer>
                  <ResponsiveButton disabled={formik.isSubmitting}>
                    SUBMIT!
                  </ResponsiveButton>
                </ResponsiveRowContainer>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
