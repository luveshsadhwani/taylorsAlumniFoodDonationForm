import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { Label } from "./FormElement";
import styles from "./styles";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    background: "rgb(0,0,0,0)",
  },

  inputMobile: {
    background: "rgb(0,0,0,0)",
  },

  notchedOutline: {
    borderWidth: "2px",
    borderColor: "#D66A0C !important",
  },

  cssFocused: {},

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#02704A !important",
    },
  },

  inputText: {
    color: "#02704A",
    fontSize: "1rem",
  },

  inputTextMobile: {
    color: "#02704A",
    fontSize: "0.75rem",
  },

  errorText: {
    "&.Mui-error": {
      color: "#CC0011",
    },
  },

  errorTextMobile: {
    "&.Mui-error": {
      color: "#CC0011",
      fontSize: "0.6rem"
    },
  },
});

export default function MaterialInput(props) {
  const classes = useStyles();
  const { label, name, isMobileScreen, ...rest } = props;

  const ResponsiveMuiLabel = ({ children }) => {
    return isMobileScreen ? (
      <Label style={styles.formElementLabelMuiMobile}>{children}</Label>
    ) : (
      <Label style={styles.formElementLabelMui}>{children}</Label>
    );
  };

  return (
    <div>
      <Field name={name}>
        {({ field, form }) => {
          const isError = Boolean(form.errors[name] && form.touched[name]);
          return (
            <TextField
              label={<ResponsiveMuiLabel>{label}</ResponsiveMuiLabel>}
              name={name}
              {...field}
              {...rest}
              error={isError}
              helperText={isError ? form.errors[name] : null}
              variant="outlined"
              InputLabelProps={{ className: classes.input }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  input: isMobileScreen
                    ? classes.inputTextMobile
                    : classes.inputText,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              FormHelperTextProps={{
                classes: {
                  error: isMobileScreen? classes.errorTextMobile: classes.errorText,
                },
              }}
              fullWidth
              margin={isMobileScreen? "dense" : "none"}
            />
          );
        }}
      </Field>
    </div>
  );
}
