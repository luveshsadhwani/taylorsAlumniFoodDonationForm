import React from "react";
import { Field } from "formik";
import { Label, ErrorText } from "./FormElement";
import styles from "./styles";

function Select(props) {
  const { label, name, options, errorStyle, ...rest } = props;
  return (
    <>
      <Label style={styles.formElementLabel} htmlFor={name}>
        {label}
      </Label>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        style={styles.formSelect}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorText name={name} style={errorStyle} />
    </>
  );
}

export default Select;
