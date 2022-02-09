import React from "react";
import { Field } from "formik";
import TextFieldComponent from "./MaterialTextField";

export default function MaterialInput(props) {
  const { helperText, ...rest } = props;
  return (
    <div>
      <Field name={props.name}>
        {({ field, form }) => {
          const isError = Boolean(
            form.errors[props.name] && form.touched[props.name]
          );
          return (
            <>
              <TextFieldComponent
                {...field}
                {...rest}
                error={isError}
                helperText={isError ? form.errors[props.name] : helperText}
                margin="dense"
              />
            </>
          );
        }}
      </Field>
    </div>
  );
}
