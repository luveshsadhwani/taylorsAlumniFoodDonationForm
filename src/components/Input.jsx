import React from "react";
import { Field } from "formik";
import { Label, ErrorText } from "./FormElement";
import styles from "./styles";

function Input(props) {
  const { label, name, errorStyle, ...rest } = props;
  return (
    <>
      <Label style={styles.formElementLabel} htmlFor={name}>
        {label}
      </Label>
      <Field id={name} name={name} {...rest} style={styles.formInput} />
      <ErrorText name={name} style={errorStyle} />
    </>
  );
}

export default Input;
