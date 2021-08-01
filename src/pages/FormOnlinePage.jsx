import React from "react";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import FormControl from "../components/FormControl";
import styles from "../styles/formPage";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function FormOnlinePage() {
  const history = useHistory();
  const isMobileScreen = useMediaQuery("(max-width: 1024px)");

  const initialFormData = {
    privacy: false,
    fullName: "",
    email: "",
    contribution: "",
    education: "",
    supportMessage: "",
    campaign: "online",
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
    supportMessage: Yup.string(),
  });

  const handleSubmit = async (values, onSubmitProps) => {
    const {
      fullName,
      email,
      contribution,
      education,
      supportMessage,
      campaign,
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
        campaign,
      })
      .then((response) => console.log(response))
      .then(onSubmitProps.setSubmitting(false))
      .finally(history.push("/submission", { campaign }));

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

  const ResponsiveRowContainer = ({ children, ...rest }) => {
    return isMobileScreen ? (
      <Grid
        container
        align="left"
        style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
        justifyContent="flex-start"
        {...rest}
      >
        {children}
      </Grid>
    ) : (
      <Grid
        container
        align="left"
        style={{ paddingLeft: "4rem", paddingRight: "6rem" }}
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
        style={{ width: "100%", padding: "0rem 1.5rem" }}
        spacing={2}
      >
        {children}
      </Grid>
    ) : (
      <Grid
        container
        align="left"
        style={{
          paddingLeft: "4rem",
          paddingRight: "4rem",
          width: "90%",
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
      <h1 style={styles.titleMobile}>{children}</h1>
    ) : (
      <h1 style={styles.title}>{children}</h1>
    );
  };

  const ResponsiveButton = ({ children, ...rest }) => {
    return isMobileScreen ? (
      <button type="submit" style={styles.buttonMobile} {...rest}>
        {children}
      </button>
    ) : (
      <button type="submit" style={styles.button} {...rest}>
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
                          ? styles.centerAlignErrorMobile
                          : styles.centerAlignError
                      }
                      isMobileScreen={isMobileScreen}
                    />
                  </Grid>
                </ResponsiveRowContainer>

                <ResponsiveRowFormContainer>
                  <Grid item xs={6} lg={6} style={{ marginTop: "0.7rem" }}>
                    <FormControl
                      control="material-input"
                      label="Full Name"
                      name="fullName"
                      isMobileScreen={isMobileScreen}
                    />
                  </Grid>

                  <Grid item xs={6} lg={6} style={{ marginTop: "0.7rem" }}>
                    <FormControl
                      control="material-input"
                      label="Email"
                      name="email"
                      isMobileScreen={isMobileScreen}
                    />
                  </Grid>
                </ResponsiveRowFormContainer>

                <ResponsiveRowFormContainer>
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

                <ResponsiveRowFormContainer>
                  <Grid item xs={12} lg={12}>
                    <FormControl
                      control="material-textarea"
                      label="Message of Support"
                      name="supportMessage"
                      isMobileScreen={isMobileScreen}
                    />
                  </Grid>
                </ResponsiveRowFormContainer>

                <ResponsiveRowContainer>
                  <ResponsiveButton disabled={formik.isSubmitting}>
                    SUBMIT
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
