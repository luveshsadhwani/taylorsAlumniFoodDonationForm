import React from "react";
import { ErrorMessage } from "formik";

export const Label = ({ children, ...rest }) => <label {...rest}>{children}</label>;

export const ErrorText = ({ ...rest }) => <ErrorMessage component="div" {...rest} />;
