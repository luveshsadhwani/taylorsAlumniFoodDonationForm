import React from "react";
import { Field, ErrorMessage } from "formik";
import FormikWrapper from "../containers/FormikWrapper";

export default function FormPage() {
  const styles = {
    title: {
      position: "relative",
      color: "#038C7F",
      marginTop: "2rem",
      fontSize: "3rem",
      WebkitTextStrokeWidth: "1px",
      WebkitTextStrokeColor: "white",
    },

    label: {
      color: "#F2811D",
      margin: "20px 0px 8px 0px",
    },

    privacyLabel: {
      marginLeft: 8,
      color: "white",
    },

    select: {
      width: 200,
      fontSize: "1.2rem",
    },

    error1: {
      width: "300px",
      color: "#FF5151",
      position: "absolute",
      fontWeight: "bold",
      margin: "0 auto",
      textAlign: "left",
    },

    error2: {
      width: "100%",
      color: "#FF5151",
      fontWeight: "bold",
      position: "relative",
      margin: "0 auto",
    },

    button: {
      width: "13rem",
      height: "3rem",
      backgroundColor: "#4146A6",
      color: "white",
      fontSize: "1.5rem",
      marginTop: "1rem",
      border: "none",
    },
  };

  const DivContainer = ({ children }) => (
    <div style={{ marginTop: 16 }}>{children}</div>
  );

  const FormLabel = ({ name, children }) => {
    return (
      <h4 style={styles.label}>
        <label htmlFor={name}>{children}</label>
      </h4>
    );
  };

  const FormField = ({ name, children, ...props }) => {
    // const [meta] = useField(props);
    // console.log(meta);
    return (
      <>
        <Field {...props} name={name}>
          {children}
        </Field>
      </>
    );
  };

  const ErrorText = ({ name, ...props }) => {
    return (
      <div {...props}>
        <ErrorMessage name={name} />
      </div>
    );
  };

  return (
    <>
      <div>
        <h1 style={styles.title}>Please fill in the form</h1>
        <FormikWrapper>
          <DivContainer>
            <h4 style={styles.label}>Privacy Consent</h4>
            <FormField type="checkbox" name="privacy" />
            <label htmlFor="privacy" style={styles.privacyLabel}>
              I authorize my information to be used by Taylors Alumni for
              recording, receiving emails and on social media
            </label>
            <br />
            <ErrorText name="privacy" style={styles.error2} />
          </DivContainer>

          <DivContainer>
            <div style={{ display: "inline-block", paddingRight: "1rem" }}>
              <FormLabel name="fullName">Full Name</FormLabel>
              <FormField
                type="text"
                name="fullName"
                style={{ width: 200, height: 25, fontSize: "1rem" }}
              />
              <ErrorText name="fullName" style={styles.error1} />
            </div>
            <div style={{ display: "inline-block", paddingLeft: "1rem" }}>
              <FormLabel name="email">Email</FormLabel>
              <FormField
                type="text"
                name="email"
                style={{ width: 200, height: 25, fontSize: "1rem" }}
              />
              <ErrorText name="email" style={styles.error1} />
            </div>
          </DivContainer>

          <DivContainer>
            <div style={{ display: "inline-block", paddingRight: "1rem" }}>
              <FormLabel name="contribution">Contribution</FormLabel>
              <FormField as="select" name="contribution" style={styles.select}>
                <option value="" disabled></option>
                <option value="rm10-49">RM 10 - 49</option>
                <option value="rm50-99">RM 50 - 99</option>
                <option value="rm100-149">RM 100 - 149</option>
                <option value="rm150+">RM 150 and above</option>
              </FormField>
              <ErrorText name="contribution" style={styles.error1} />
            </div>

            <div style={{ display: "inline-block", paddingLeft: "1.2rem" }}>
              <FormLabel name="education">Education at Taylors</FormLabel>
              <FormField as="select" name="education" style={styles.select}>
                <option value="" disabled></option>
                <option value="university">Taylor's University</option>
                <option value="college">Taylor's College</option>
                <option value="rm100-149">Other</option>
              </FormField>
              <ErrorText name="education" style={styles.error1} />
            </div>
          </DivContainer>

          <DivContainer>
            <FormLabel name="supportMessage">Message of Support</FormLabel>
            <FormField
              as="textarea"
              cols="40"
              rows="8"
              name="supportMessage"
              style={{ fontSize: "1.1rem" }}
            />
            <ErrorText name="supportMessage" style={styles.error2} />
          </DivContainer>

          <DivContainer>
            <FormLabel name="donorChoice">Choice of Donor</FormLabel>
            <FormField as="select" name="donorChoice" style={styles.select}>
              <option value="" disabled></option>
              <option value="donor1">Donor 1 - Google.com</option>
              <option value="donor2">Donor 2 - Youtube.com</option>
              <option value="donor3">Donor 3 - Facebook.com</option>
            </FormField>
            <ErrorText name="donorChoice" style={styles.error2} />
          </DivContainer>

          <DivContainer>
            <button type="submit" style={styles.button}>
              SUBMIT!
            </button>
          </DivContainer>
        </FormikWrapper>
      </div>
    </>
  );
}
