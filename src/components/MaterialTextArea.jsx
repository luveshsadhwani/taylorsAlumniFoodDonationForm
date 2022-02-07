import React from "react";
import { Field } from "formik";
import { Label } from "./FormElement";
import { MUITextField } from "./MaterialTextField";

export default function MaterialTextArea(props) {
  const { label, name, isMobileScreen, ...rest } = props;

  return (
    <div>
      <Field name={name}>
        {({ field, form }) => {
          const isError = Boolean(form.errors[name] && form.touched[name]);
          return (
            <MUITextField
              label={<Label>{label}</Label>}
              name={name}
              {...field}
              {...rest}
              error={isError}
              helperText="Optional"
              variant="filled"
              multiline
              minRows={isMobileScreen ? 3 : 4}
              fullWidth
              margin={isMobileScreen ? "dense" : "none"}
              mobile={isMobileScreen ? 1 : 0}
            />
          );
        }}
      </Field>
    </div>
  );
}
