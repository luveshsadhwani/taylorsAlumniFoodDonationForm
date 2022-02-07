import React from "react";
import { Field } from "formik";
import { Label } from "./FormElement";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { MUITextField } from "./MaterialTextField";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.secondary.dark,
  },
}));

function MaterialSelect(props) {
  const classes = useStyles();
  const { label, name, options, isMobileScreen, ...rest } = props;

  return (
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
            helperText={
              isError ? form.errors[name] : "Select from the following"
            }
            variant="filled"
            SelectProps={{
              classes: { icon: classes.icon },
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
          </MUITextField>
        );
      }}
    </Field>
  );
}

export default MaterialSelect;
