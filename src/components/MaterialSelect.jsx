import React from "react";
import { Field } from "formik";
import { Label } from "./FormElement";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles as tempStyle } from "../styles/form/form";

function MaterialSelect(props) {
  const tempClass = tempStyle();
  const { label, name, options, isMobileScreen, ...rest } = props;

  return (
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
            helperText={
              isError ? form.errors[name] : "Select from the following"
            }
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
              },
            }}
            SelectProps={{
              classes: {
                icon: tempClass.selectIcon,
              },
            }}
            select
            fullWidth
            margin="dense"
          >
            {options.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.key}
                </MenuItem>
              );
            })}
          </TextField>
        );
      }}
    </Field>
  );
}

export default MaterialSelect;
