import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { Label } from "./FormElement";
import { useStyles as tempStyle } from "../styles/form/form";

export default function MaterialInput(props) {
  const tempClass = tempStyle();
  const { label, name, isMobileScreen, helperText = "", ...rest } = props;
  return (
    <div>
      <Field name={name}>
        {({ field, form }) => {
          const isError = Boolean(form.errors[name] && form.touched[name]);
          return (
            <TextField
              label={<Label>{label}</Label>}
              name={name}
              {...field}
              {...rest}
              error={isError}
              helperText={isError ? form.errors[name] : helperText}
              FormHelperTextProps={{
                classes: {
                  root: isMobileScreen
                    ? `${tempClass.helperTextRoot} ${tempClass.helperTextMobile}`
                    : `${tempClass.helperTextRoot}`,
                },
              }}
              variant="filled"
              InputLabelProps={{
                classes: {
                  root: isMobileScreen
                    ? `${tempClass.formElementLabelMuiRoot} ${tempClass.formElementLabelMuiMobile}`
                    : `${tempClass.formElementLabelMui} ${tempClass.formElementLabelMuiRoot}`,
                },
              }}
              InputProps={{
                classes: {
                  root: tempClass.cssOutlinedInput,
                  focused: tempClass.cssFocused,
                  input: isMobileScreen
                    ? `${tempClass.inputTextRoot} ${tempClass.inputTextMobile}`
                    : `${tempClass.inputTextRoot} ${tempClass.inputText}`,
                  notchedOutline: tempClass.notchedOutline,
                },
              }}
              // FormHelperTextProps={}
              fullWidth
              margin="dense"
            />
          );
        }}
      </Field>
    </div>
  );
}
