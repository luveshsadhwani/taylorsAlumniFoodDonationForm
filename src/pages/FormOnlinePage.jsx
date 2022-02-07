import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import FormControl from "../components/FormControl";
import MaterialModal from "../components/MaterialModal";
import styles from "../styles/formPage";
import { Grid, makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  titleText: {
    color: theme.palette.secondary.dark,
  },
  bodyText: {
    color: theme.palette.secondary.main,
  },
  errorText: {
    color: theme.palette.error.main,
  },
  button: {
    backgroundColor: theme.palette.tertiary.main,
    color: "white",
  },
}));

export default function FormOnlinePage() {
  const [dialogVisible, setDialogVisible] = useState(false);

  const classes = useStyles();
  const history = useHistory();
  const isMobileScreen = useMediaQuery("(max-width: 1024px)");

  const ErrorText = ({ name, errorStyle }) => {
    const meta = useField(name)[1];

    const renderError = () => {
      if (!meta.error) return;

      return <p>{meta.error}</p>;
    };

    return (
      <div style={errorStyle} className={classes.errorText}>
        {renderError()}
      </div>
    );
  };

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

    const url = "";

    if (contribution === "other") {
      const contributionOtherNumeric = parseInt(contributionOther) || 0;
      if (contributionOtherNumeric === 0) {
        setFieldError("contributionOther", "Please enter a valid number");
        setSubmitting(false);
        return;
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
          .then((response) => {
            if (response.status === 200) {
              setSubmitting(false);
              history.push("/submission", { values });
            }
          })
          .catch((err) => console.error(err));
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
    { key: "Taylor's University Alumni", value: "univeristy-alumni" },
    { key: "Taylor's University Student", value: "university-student" },
    { key: "Taylor's College Alumni", value: "college-alumni" },
    { key: "Taylor's College Student", value: "college-student" },
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
      <h1 style={styles.titleMobile} className={classes.titleText}>
        {children}
      </h1>
    ) : (
      <h1 style={styles.title} className={classes.titleText}>
        {children}
      </h1>
    );
  };

  const ResponsiveButton = ({ children, ...rest }) => {
    return isMobileScreen ? (
      <button
        type="submit"
        style={styles.buttonMobile}
        {...rest}
        className={classes.button}
      >
        {children}
      </button>
    ) : (
      <button
        type="submit"
        style={styles.button}
        {...rest}
        className={classes.button}
      >
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
        helperText="Enter your contribution in RM"
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
            return (
              <Form>
                <ResponsiveRowContainer>
                  <Grid item xs={12}>
                    <MaterialModal
                      isVisible={dialogVisible}
                      setIsVisible={setDialogVisible}
                      isMobileScreen={isMobileScreen}
                    />
                    <h4 className={classes.bodyText}>
                      Please{" "}
                      <span
                        onClick={() => setDialogVisible(true)}
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        className={classes.errorText}
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
                    {formik.isSubmitting ? (
                      <strong>Sending...</strong>
                    ) : (
                      <strong>Submit</strong>
                    )}
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
