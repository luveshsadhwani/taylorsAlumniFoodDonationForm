import React from "react";
import { Field } from "formik";
import styles from "../styles/formPage";

export default function CheckBox({ children, ...props }) {
  const { name, isMobileScreen, ...rest } = props;

  const ResponsiveText = ({ children, ...rest }) => {
    return isMobileScreen ? (
      <label {...rest} style={styles.privacyDescriptionMobile}>
        {children}
      </label>
    ) : (
      <label {...rest} style={styles.privacyDescription}>
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
