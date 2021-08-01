import React from "react";
import { Field } from "formik";
import { Label, ErrorText } from "./FormElement";
import styles from "../styles/formPage";

export default function CheckBox(props) {
  const { label, name, errorStyle, isMobileScreen, ...rest } = props;

  const ResponsiveLabel = ({ children }) => {
    return isMobileScreen ? (
      <Label style={styles.privacyLabelMobile}>{children}</Label>
    ) : (
      <Label style={styles.privacyLabel}>{children}</Label>
    );
  };

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
      <ResponsiveLabel>{label}</ResponsiveLabel>
      <Field type="checkbox" id={name} name={name} {...rest} />
      <ResponsiveText htmlFor={name}>
        I authorize my information to be used by Taylors Alumni for recording,
        receiving emails and on social media
      </ResponsiveText>
      <br />
      <ErrorText name={name} style={errorStyle} />
    </>
  );
}
