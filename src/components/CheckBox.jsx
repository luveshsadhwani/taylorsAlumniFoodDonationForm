import React from "react";
import { Field } from "formik";
import styles from "../styles/formPage";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  descriptionText: {
    color: theme.palette.success.dark,
  },
}));

export default function CheckBox({ children, ...props }) {
  const { name, isMobileScreen, ...rest } = props;
  const classes = useStyles();

  const ResponsiveText = ({ children, ...rest }) => {
    return isMobileScreen ? (
      <label
        {...rest}
        style={styles.privacyDescriptionMobile}
        className={classes.descriptionText}
      >
        {children}
      </label>
    ) : (
      <label
        {...rest}
        style={styles.privacyDescription}
        className={classes.descriptionText}
      >
        {children}
      </label>
    );
  };

  return (
    <>
      <Field type="checkbox" id={name} name={name} {...rest} />
      <ResponsiveText htmlFor={name}>{children}</ResponsiveText>
      <br />
    </>
  );
}
