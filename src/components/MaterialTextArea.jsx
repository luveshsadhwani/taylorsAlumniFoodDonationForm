import React from "react";
import { Field } from "formik";
import TextFieldComponent from "./MaterialTextField";

export default function MaterialTextArea(props) {
  const { helperText, ...rest } = props;

  return (
    <div>
      <Field name={props.name}>
        {({ field }) => {
          return (
            <TextFieldComponent
              {...field}
              {...rest}
              helperText="Optional"
              multiline
              minRows={4}
            />
          );
        }}
      </Field>
    </div>
  );
}
