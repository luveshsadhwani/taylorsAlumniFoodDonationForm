import React from "react";
import { Field } from "formik";
import { Label } from "./FormElement";
import { MUITextField } from "./MaterialTextField";

export default function MaterialInput(props) {
  const { label, name, isMobileScreen, helperText = "", ...rest } = props;
  return (
    <div>
      <Field name={name}>
        {({ field, form }) => {
          const isError = Boolean(form.errors[name] && form.touched[name]);
          return (
            <>
              <MUITextField
                label={<Label>{label}</Label>}
                name={name}
                {...field}
                {...rest}
                error={isError}
                helperText={isError ? form.errors[name] : helperText}
                variant="filled"
                fullWidth
                margin="dense"
                mobile={isMobileScreen ? 1 : 0}
              />
            </>
          );
        }}
      </Field>
    </div>
  );
}
