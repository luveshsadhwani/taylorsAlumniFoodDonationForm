import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import FormControl from "../components/FormControl";
import MaterialModal from "../components/MaterialModal";
import styles from "../styles/formPage";
import globalStyles from "../styles/global";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const ErrorText = ({ name, errorStyle }) => {
  const [field, meta, helpers] = useField(name);

  const renderError = () => {
    if (!meta.error) return;

    return <p>{meta.error}</p>;
  };

  return <div style={errorStyle}>{renderError()}</div>;
};

export default function FormOnlinePage() {
  const [dialogVisible, setDialogVisible] = useState(false);

  const history = useHistory();
  const isMobileScreen = useMediaQuery("(max-width: 1024px)");

  const initialFormData = {
    privacy: false,
    fullName: "",
    email: "",
    contribution: "",
    contributionOther: "",
    education: "",
    supportMessage: "",
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
    const timestamp = new Date().toLocaleString();

    const { setFieldError, setSubmitting } = onSubmitProps;

    const {
      fullName,
      email,
      contribution,
      contributionOther,
      education,
      supportMessage,
    } = values;

    const url =
      "https://sheet.best/api/sheets/6839cda2-8c56-4197-b427-b5d5e8e58404";

    if (contribution === "other") {
      const contributionOtherNumeric = parseInt(contributionOther) || 0;
      if (contributionOtherNumeric < 100) {
        setFieldError("contributionOther", "Please donate at least RM 100");
        setSubmitting(false);
      } else {
        await axios
          .post(url, {
            timestamp,
            fullName,
            email,
            contribution,
            contributionOther,
            education,
            supportMessage,
          })
          .then((response) => console.log(response))
          .then(setSubmitting(false))
          .finally(history.push("/submission", { values }));
      }
    }

    if (contribution !== "other") {
      await axios
        .post(url, {
          timestamp,
          fullName,
          email,
          contribution,
          contributionOther,
          education,
          supportMessage,
        })
        .then((response) => console.log(response))
        .then(setSubmitting(false))
        .finally(history.push("/submission", { values }));
    }
  };

  const contributionOptions = [
    { key: "Select your contribution", value: "" },
    { key: "RM 100", value: "100" },
    { key: "RM 150", value: "150" },
    { key: "RM 300", value: "300" },
    { key: "Other", value: "other" },
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

  const switchFormControl = (formikValues) => {
    const value = formikValues["contribution"];
    const valueIsOther = value === "other";

    return valueIsOther ? (
      <FormControl
        control="material-input"
        label="Contribution"
        name="contributionOther"
        isMobileScreen={isMobileScreen}
        helperText="Minimum RM 100"
      />
    ) : (
      <FormControl
        control="material-select"
        label="Contribution"
        name="contribution"
        options={contributionOptions}
        isMobileScreen={isMobileScreen}
      />
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
            console.log(formik);
            return (
              <Form>
                <ResponsiveRowContainer>
                  <Grid item xs={12}>
                    <MaterialModal
                      isVisible={dialogVisible}
                      setIsVisible={setDialogVisible}
                      isMobileScreen={isMobileScreen}
                    />
                    <h4>
                      Please{" "}
                      <span
                        onClick={() => setDialogVisible(true)}
                        style={{
                          textDecoration: "underline",
                          color: globalStyles.tertiaryColor,
                          cursor: "pointer",
                        }}
                      >
                        click here
                      </span>{" "}
                      to view and accept our terms and conditions
                    </h4>
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
                    {switchFormControl(formik.values)}
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
                    <strong>Submit</strong>
                  </ResponsiveButton>
                </ResponsiveRowContainer>

                <ResponsiveRowContainer>
                  <ErrorText
                    name="privacy"
                    errorStyle={
                      isMobileScreen
                        ? styles.centerAlignErrorMobile
                        : styles.centerAlignError
                    }
                  />
                </ResponsiveRowContainer>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
