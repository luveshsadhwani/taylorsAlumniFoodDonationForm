import React from "react";
import { Field } from "formik";
import TextComponent from "./BodyText";
import { FormControlLabel, Checkbox } from "@material-ui/core";

export default function CheckBox({ children, ...props }) {
  const { name, ...rest } = props;

  return (
    <>
      <Field name={name}>
        {({ field }) => (
          <FormControlLabel
            {...rest}
            {...field}
            control={<Checkbox />}
            label={
              <TextComponent color="primary" variant="subtitle1">
                {children}
              </TextComponent>
            }
          />
        )}
      </Field>
    </>
  );
}
