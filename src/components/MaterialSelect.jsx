import React from "react";
import { Field } from "formik";
import { Label } from "./FormElement";
import styles from "./styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
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
  },

  icon: {
    color: "#F2811D",
  },

  helperText: {
    color: "black",
  },

  helperTextMobile: {
    color: "black",
    fontSize: "0.6rem"
  },

  errorText: {
    "&.Mui-error": {
      color: "#CC0011",
    },
  },
});

function MaterialSelect(props) {
  const classes = useStyles();
  const { label, name, options, isMobileScreen, ...rest } = props;

  const ResponsiveMuiLabel = ({ children }) => {
    return isMobileScreen ? (
      <Label style={styles.formElementLabelMuiMobile}>{children}</Label>
    ) : (
      <Label style={styles.formElementLabelMui}>{children}</Label>
    );
  };

  return (
    <Grid>
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
              helperText={
                isError ? form.errors[name] : "Select from the following"
              }
              FormHelperTextProps={{
                classes: {
                  root: isMobileScreen? classes.helperTextMobile: classes.helperText,
                  error: classes.errorText,
                },
              }}
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
              SelectProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
              select
              fullWidth
              margin={isMobileScreen? "dense" : "none"}
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
    </Grid>
  );
}

export default MaterialSelect;
