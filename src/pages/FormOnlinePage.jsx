import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import FormControl from "../components/FormControl";
import MaterialDialog from "../components/MaterialDialog";
import { Grid, makeStyles } from "@material-ui/core";
import TitleComponent from "../components/TitleText";
import TextComponent from "../components/BodyText";
import ButtonComponent from "../components/Button";
import ErrorTextComponent from "../components/ErrorText";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      paddingLeft: "1.5rem",
    },
    marginTop: "2rem",
    paddingLeft: "4rem",
  },
  linkText: {
    color: theme.palette.tertiary.main,
    textDecoration: "underline",
    cursor: "pointer",
    fontWeight: "bold",
  },
  rowContainer: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      marginTop: "0.7rem",
    },

    paddingLeft: "4rem",
    paddingRight: "6rem",
    marginTop: "1rem",
  },
  button: {
    backgroundColor: theme.palette.tertiary.main,
    color: "white",
  },
}));

export default function FormOnlinePage() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const classes = useStyles();
  const history = useHistory();

  const ErrorText = ({ name }) => {
    const meta = useField(name)[1];
    return meta.error ? (
      <ErrorTextComponent>{meta.error}</ErrorTextComponent>
    ) : (
      <></>
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

  const switchFormControl = (formikValues) => {
    const value = formikValues["contribution"];
    const valueIsOther = value === "other";

    return valueIsOther ? (
      <FormControl
        control="material-input"
        label="Contribution"
        name="contributionOther"
        helperText="Enter your contribution in RM"
      />
    ) : (
      <FormControl
        control="material-select"
        label="Contribution"
        name="contribution"
        options={contributionOptions}
      />
    );
  };

  return (
    <>
      <div>
        <div className={classes.titleContainer}>
          <TitleComponent align="left" variant="h4">
            Please fill in the form
          </TitleComponent>
        </div>
        <Formik
          initialValues={initialFormData}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
                <Grid
                  container
                  align="left"
                  className={classes.rowContainer}
                  spacing={3}
                >
                  <Grid item xs={12}>
                    <MaterialDialog onClose={handleClose} open={openDialog}>
                      <TextComponent variant="body2">
                        By submitting this Form, you hereby agree that Taylor’s
                        Alumni Office may collect, obtain, store and process
                        your personal data that you provide in this form for the
                        purpose of receiving updates, news, promotional and
                        marketing mails or materials from Taylor’s Alumni
                        Office.
                      </TextComponent>
                      <br />
                      <TextComponent variant="body2">
                        You hereby give your consent to Taylor’s Alumni Office
                        to:
                      </TextComponent>
                      <br />
                      <TextComponent variant="body2">
                        a) Store and process your Personal Data - This
                        information obtained from the form, will be stored in
                        our alumni database which will be used for future
                        communications to alumni.
                      </TextComponent>
                      <br />
                      <TextComponent variant="body2">
                        b) Disclose your Personal Data to the relevant
                        governmental authorities, companies within the Taylor’s
                        Education Group within or outside Malaysia or third
                        parties where required by law or for legal purposes and
                        outsourcing services.
                      </TextComponent>
                      <br />
                      <TextComponent variant="body2">
                        c) Disclose your Personal Data to third parties
                        appointed by Taylor’s Alumni Office to provide services,
                        such as but not limited to auditors, legal
                        representatives, contractors, printing companies, data
                        processors, technology providers (to support the
                        development, implementation and maintenance of the
                        online /virtual environment) and insurance companies;
                      </TextComponent>
                      <br />
                      <TextComponent variant="body2">
                        In addition, your personal data may be transferred to
                        any company within Taylor’s University/Taylor’s
                        Education Group within or outside Malaysia. For the
                        purpose of updating or correcting such data, you may at
                        any time apply to the Taylor’s Alumni Office to have
                        access to your personal data which are stored by
                        Taylor’s Alumni Office.
                      </TextComponent>
                      <br />
                      <TextComponent variant="body2">
                        For the avoidance of doubt, Personal Data includes all
                        data defined within the Personal Data Protection Act
                        2010 including all data you had disclosed to Taylor’s
                        Alumni Office in this Form.
                      </TextComponent>
                      <br />
                      <FormControl control="checkbox" name="privacy">
                        <strong>
                          I hereby understand and agree/consent to above terms
                          on the collection, retention and processing of my
                          personal data.
                        </strong>
                      </FormControl>
                      <br />
                    </MaterialDialog>
                    <TextComponent variant="body1">
                      Please{" "}
                      <span onClick={handleOpen} className={classes.linkText}>
                        click here
                      </span>{" "}
                      to view and accept our terms and conditions
                    </TextComponent>
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl
                      control="material-input"
                      label="Full Name"
                      name="fullName"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl
                      control="material-input"
                      label="Email"
                      name="email"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    {switchFormControl(formik.values)}
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl
                      control="material-select"
                      label="Education at Taylors"
                      name="education"
                      options={educationOptions}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                      control="material-textarea"
                      label="Message of Support"
                      name="supportMessage"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <ButtonComponent
                      type="submit"
                      text={formik.isSubmitting ? "Sending..." : "Submit"}
                      disabled={formik.isSubmitting}
                      // onClick={() => history.push("/formOnline")}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <ErrorText name="privacy" />
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
