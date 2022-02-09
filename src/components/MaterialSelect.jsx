import React from "react";
import { Field } from "formik";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import TextFieldComponent from "./MaterialTextField";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.secondary.dark,
  },
}));

function MaterialSelect(props) {
  const classes = useStyles();
  const { options, ...rest } = props;

  return (
    <Field name={props.name}>
      {({ field, form }) => {
        const isError = Boolean(
          form.errors[props.name] && form.touched[props.name]
        );
        return (
          <TextFieldComponent
            {...field}
            {...rest}
            error={isError}
            helperText={
              isError ? form.errors[props.name] : "Select from the following"
            }
            margin="dense"
            select
            SelectProps={{
              classes: { icon: classes.icon },
            }}
          >
            {options.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.key}
                </MenuItem>
              );
            })}
          </TextFieldComponent>
        );
      }}
    </Field>
  );
}

export default MaterialSelect;
