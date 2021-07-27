import React from "react";
import { Field } from "formik";
import { Label, ErrorText } from "./FormElement";
import styles from "./styles";

export default function TextArea(props) {
  const { label, name, errorStyle, ...rest } = props;
  return (
    <>
      <Label style={styles.formElementLabel} htmlFor={name}>
        {label}
      </Label>
      <Field
        as="textarea"
        id={name}
        name={name}
        cols="40"
        rows="8"
        {...rest}
        style={styles.formTextArea}
      />
      <ErrorText name={name} style={errorStyle} />
    </>
  );
}
